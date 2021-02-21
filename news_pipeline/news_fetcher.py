import os
import sys
sys.path.append('/home/jw/.local/lib/python3.8/site-packages')
from newspaper import Article
import ast 
# import common package in parent directory
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))

from cloudAMQP_client import CloudAMQPClient

DEDUPE_NEWS_TASK_QUEUE_URL = 'amqps://lkscpwqu:EO8DypleNz-LybiUDjXduVX-zP5YZxbm@chimpanzee.rmq.cloudamqp.com/lkscpwqu'
DEDUPE_NEWS_TASK_QUEUE_NAME = 'feeder-dequpe-news-task-queue'
SCRAPE_NEWS_TASK_QUEUE_URL = 'amqps://lkscpwqu:EO8DypleNz-LybiUDjXduVX-zP5YZxbm@chimpanzee.rmq.cloudamqp.com/lkscpwqu'
SCRAPE_NEWS_TASK_QUEUE_NAME = 'feeder-scrape-news-task-queue'

SLEEP_TIME_IN_SECONDS = 5

dedupe_news_queue_client = CloudAMQPClient(DEDUPE_NEWS_TASK_QUEUE_URL, DEDUPE_NEWS_TASK_QUEUE_NAME)
scrape_news_queue_client = CloudAMQPClient(SCRAPE_NEWS_TASK_QUEUE_URL, SCRAPE_NEWS_TASK_QUEUE_NAME)


def handle_message(msg):
    if msg is None or not isinstance(msg, dict):
    # if msg is None:
        print('message is broken')
        return

    # msg = ast.literal_eval(msg)
    task = msg
    text = None

    article = Article(task['url'])
    article.download()
    article.parse()

    task['text'] = article.text
    dedupe_news_queue_client.sendMessage(task)

while True:
    if scrape_news_queue_client is not None:
        msg = scrape_news_queue_client.getMessage()
        if msg is not None:
            # Parse and process the task
            try:
                handle_message(msg)
            except Exception as e:
                print(e)
                pass
        scrape_news_queue_client.sleep(SLEEP_TIME_IN_SECONDS)
