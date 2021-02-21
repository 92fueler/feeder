import sys
sys.path.append('/home/jw/.local/lib/python3.8/site-packages')
import jsonrpclib

URL = "http://localhost:5050/"

client = jsonrpclib.ServerProxy(URL)

def getPreferenceForUser(userId):
    preference = client.getPreferenceForUser(userId)
    print("Preference list: %s" % str(preference))
    return preference