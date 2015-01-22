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

def save(ext,environ):
    try:
        lr = postdata(environ).split("\n")
        name = lr[0]
        code = "\n".join(lr[1:])
        try: os.mkdir("prj/"+name);
        except: pass
        f = open("prj/"+name +"/code"+ext, "wb")
        f.write(code)
        f.close()
        return "saved ok."
    except Exception,e:
        print e
        return str(e)

def load(environ):
    code = ""
    try:
        name = postdata(environ)
        f = open("prj/"+name +"/code.xml", "rb")
        code = f.read()
        f.close()
    except IOError as e:
        print e; 
        return str(e)
    return code

def application(environ, start_response):
        
    url = environ['PATH_INFO'];
    data = ""
    if url == "/":
        url = "/Blockly.html"
    if url.startswith('/code'):
        try:
            #MyThread(request_body).start()
            exec( compile( postdata(environ), "blockly", "exec" ) )
        except Exception,e:
            print e
            data = str(e)
    elif url.startswith('/save_code'):
        data = save(".py",environ)
    elif url.startswith('/save_xml'):
        data = save(".xml",environ)
    elif url.startswith('/load'):
        data = load(environ)
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
