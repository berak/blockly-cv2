
import cv2
import numpy as np

img = None
binary = None
contours = None


img = cv2.imread('media/lena.jpg',1)
binary = cv2.threshold(cv2.cvtColor(img,cv2.COLOR_BGR2GRAY),90,255,cv2.THRESH_OTSU)[1]
contours = cv2.findContours(binary,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_NONE)[1]
cv2.imshow('mywin',cv2.drawContours(img,contours,-1,(0x99,0x33,0x33)))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()