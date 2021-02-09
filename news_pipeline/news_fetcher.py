# -*- coding: utf-8 -*-

import os
import sys
import ast

from newspaper import Article

# import common package in parent directory
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))
sys.path.append(os.path.join(os.path.dirname(__file__), 'scrapers'))

import cnn_news_scraper
from cloudAMQP_client import CloudAMQPClient

# Use your own Cloud AMQP queue
DEDUPE_NEWS_TASK_QUEUE_URL = 'amqps://lkscpwqu:EO8DypleNz-LybiUDjXduVX-zP5YZxbm@chimpanzee.rmq.cloudamqp.com/lkscpwqu'
DEDUPE_NEWS_TASK_QUEUE_NAME = "feeder-dedupe-news-task-queue"
SCRAPE_NEWS_TASK_QUEUE_URL = 'amqps://lkscpwqu:EO8DypleNz-LybiUDjXduVX-zP5YZxbm@chimpanzee.rmq.cloudamqp.com/lkscpwqu'
SCRAPE_NEWS_TASK_QUEUE_NAME = "feeder-scrape-news-task-queue"

SLEEP_TIME_IN_SECONDS = 5

dedupe_news_queue_client = CloudAMQPClient(DEDUPE_NEWS_TASK_QUEUE_URL, DEDUPE_NEWS_TASK_QUEUE_NAME)
scrape_news_queue_client = CloudAMQPClient(SCRAPE_NEWS_TASK_QUEUE_URL, SCRAPE_NEWS_TASK_QUEUE_NAME)

def handle_message(msg):
    if msg is None:
        print 'message is broken'
        return
    msg = ast.literal_eval(msg)

    task = msg

    article = Article(task['url'])
    article.download()
    article.parse()

    print article.text

    task['text'] = article.text
    dedupe_news_queue_client.sendMessage(task)

while True:
    # fetch msg from queue
    if scrape_news_queue_client is not None:
        msg = scrape_news_queue_client.getMessage()
        if msg is not None:
            # Handle message
            try:
                handle_message(msg)
            except Exception as e:
                print e
                pass
        scrape_news_queue_client.sleep(SLEEP_TIME_IN_SECONDS)