import sys
sys.path.append('/home/jw/.local/lib/python3.8/site-packages')
import jsonrpclib

URL = "http://localhost:6060"

client = jsonrpclib.ServerProxy(URL)

def classify(text):
    topic = client.classify(text)
    print("Topic: %s" % str(topic))
    return topic