#!/bin/bash
service redis start
service mongod start

# pip2 install -r requirements.txt

cd news_pipeline
python2 news_monitor.py &
python2 news_fetcher.py &
python2 news_deduper.py &

echo "=================================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES." PRESSKEY

kill $(jobs -p)