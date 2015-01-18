import sys, socket, threading, time, datetime, os
import cv2
import numpy as np

#~ class MyThread( threading.Thread ):
    #~ def __init__(self, code):
        #~ threading.Thread.__init__(self)
        #~ self.code=code
    #~ def run( self ):
        #~ #try:
        #~ exec( compile(self.code, "lala", "exec") )
        #~ #except Exception, e:
        #~ #    print e


def postdata(environ):
    request_body_size = int(environ['CONTENT_LENGTH'])
    return environ['wsgi.input'].read(request_body_size)

def application(environ, start_response):
        
    url = environ['PATH_INFO'];
    data = "hi ;)"
    if url == "/":
        url = "/Blockly.html"
    if url.startswith('/code'):
        try:
            #MyThread(request_body).start()
            exec( compile( postdata(environ), "lala", "exec" ) )
        except Exception,e:
            print e
    if url.startswith('/save'):
        try:
            lr = postdata(environ).split("\n")
            name = lr[0]
            code = "\n".join(lr[1:])
            try: os.mkdir("prj/"+name);
            except: pass
            f = open("prj/"+name +"/code.py", "wb")
            f.write(code)
            f.close()
        except Exception,e:
            print e
    else: # load html/js/resources
        try:
            f = open(url[1:])
            data = f.read()
            f.close()        
        except: pass
    start_response( "200 OK", [ ("Content-Type", "text/html"), ("Content-Length", str(len(data))) ] )
    return iter([data])
    
from wsgiref.simple_server import make_server
httpd = make_server( '0.0.0.0', int(os.environ.get("PORT", 9000)), application )
while True: httpd.handle_request()
