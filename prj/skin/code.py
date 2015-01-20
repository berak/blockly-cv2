
import cv2
import numpy as np

cv2.imshow('mywin',cv2.inRange(cv2.cvtColor(cv2.imread('media/face.png',1),cv2.COLOR_BGR2HSV),(0,90,70),(40,255,255)))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()