
import cv2
import numpy as np

cascade = None
image = None
rect = None


cascade = cv2.CascadeClassifier('e:/code/opencv/data/haarcascades/haarcascade_frontalface_alt2.xml')
if cascade.empty(): raise Exception("your cascade is empty. are you sure, the path is correct ?")
image = cv2.imread('media/lena.jpg',1)
for rect in (cascade.detectMultiScale(image)):
  image = cv2.rectangle(image,(rect[0],rect[1]),(rect[0]+rect[2],rect[1]+rect[3]),(0xcc,0xcc,0x00))
cv2.imshow('mywin',image)
if cv2.waitKey(-1)&0xff == 27:
  pass
cv2.destroyAllWindows()