
import cv2
import numpy as np

cascade = None
lena = None
rect = None


cascade = cv2.CascadeClassifier('e:/code/opencv/data/haarcascades/haarcascade_frontalface_alt2.xml')
if cascade.empty(): raise Exception("your cascade is empty. are you sure, the path is correct ?")
lena = cv2.imread('media/lena.jpg',1)
for rect in (cascade.detectMultiScale(lena)):
  lena = cv2.rectangle(lena,(rect[0],rect[1]),(rect[0]+rect[2],rect[1]+rect[3]),(0x99,0x00,0x00))
cv2.imshow('mywin',lena)
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()