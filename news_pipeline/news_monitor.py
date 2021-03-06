# -*- coding: utf-8 -*-
import os
import sys
import redis
import hashlib
import datetime
import base64

sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))

import news_api_client

from cloudAMQP_client import CloudAMQPClient

REDIS_HOST = 'localhost'
REDIS_PORT = 6379

NEWS_TIME_OUT_IN_SECONDS = 3600 * 24 # news expires in one day
SLEEP_TIME_IN_SECOUNDS = 10 # every 10 seconds for every loop

SCRAPE_NEWS_TASK_QUEUE_URL = 'amqps://lkscpwqu:EO8DypleNz-LybiUDjXduVX-zP5YZxbm@chimpanzee.rmq.cloudamqp.com/lkscpwqu'

SCRAPE_NEWS_TASK_QUEUE_NAME = 'feeder-scrape-news-task-queue'

NEWS_SOURCES = [
    'bbc-news',
    'bbc-sport',
    'bloomberg',
    'cnn',
    'entertainment-weekly',
    'espn',
    'ign',
    'techcrunch',
    'the-new-york-times',
    'the-wall-street-journal',
    'the-washington-post'
    "the-verge"
]

redis_client = redis.StrictRedis(REDIS_HOST, REDIS_PORT)
cloudAMQP_client = CloudAMQPClient(SCRAPE_NEWS_TASK_QUEUE_URL, SCRAPE_NEWS_TASK_QUEUE_NAME)

while True:
  news_list = news_api_client.getNewsFromSource(NEWS_SOURCES)
  num_of_new_news = 0
  for news in news_list:
    # news_digest = base64.b64encode(hashlib.md5(news['title'].encode('utf-8')).digest())
    # news_digest = hashlib.md5(news['title'].encode('utf-8')).digest().encode('base64') 
    news_digest = hashlib.md5(news['title'].encode('utf-8')).hexdigest()
    # print type(news_digest)
    if redis_client.get(news_digest) is None:
      num_of_new_news = num_of_new_news + 1
      news['digest'] = news_digest # every news has unique digest

    # use utc time to avoid different time zones 
    if news['publishedAt'] is None:
      # format: YYYY-MM-DDTHH:MM:SS in UTC
      news['publishedAt'] = datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')

    # convert news from dict to string
    news = str(news)
    print type(news_digest)
    redis_client.set(news_digest, news)
    redis_client.expire(news_digest, NEWS_TIME_OUT_IN_SECONDS)

    cloudAMQP_client.sendMessage(news)

  print "Fetched %d new news." % num_of_new_news
  
  cloudAMQP_client.sleep(SLEEP_TIME_IN_SECOUNDS) # keep queue heartbeat 