
import cv2
import numpy as np

mser = None
img = None


mser = cv2.MSER_create()
img = cv2.imread('media/lena.jpg',1)
cv2.drawContours(img,mser.detectRegions(cv2.cvtColor(img,cv2.COLOR_BGR2GRAY),None),-1,(0x00,0x00,0xff))
cv2.imshow('mywin',img)
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()