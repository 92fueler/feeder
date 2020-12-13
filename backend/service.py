import pyjsonrpc
import os
import sys

# import common package in parent directory
sys.path.append(os.path.join(os.path.dirname(__file__), './', 'utils'))



SERVER_HOST = 'localhost'
SERVER_PORT = 4040

class RequestHandler(pyjsonrpc.HttpRequestHandler):
    """ Test method """
    # defining a RPC API is easy as below
    @pyjsonrpc.rpcmethod
    def add(self, a, b):
        print "add is called with %d and %d" % (a, b)
        return a + b

http_server = pyjsonrpc.ThreadingHttpServer(
    server_address = (SERVER_HOST, SERVER_PORT),
    RequestHandlerClass = RequestHandler
)

print "Starting HTTP server on %s:%d" % (SERVER_HOST, SERVER_PORT)

http_server.serve_forever()
