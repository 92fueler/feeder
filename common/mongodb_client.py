import sys 
# print (sys.path)
sys.path.append('/home/jw/.local/lib/python3.8/site-packages')
from pymongo import MongoClient
import pymongo 

print(pymongo.__file__)
MONGO_DB_HOST = 'localhost'
MONGO_DB_PORT = '27017'

DB_NAME = 'feeder'

client = MongoClient("%s:%s" % (MONGO_DB_HOST, MONGO_DB_PORT))

def get_db(db=DB_NAME):
  db = client[db]
  return db
