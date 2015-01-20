
import cv2
import numpy as np

img = None
gray = None


img = cv2.imread('media/lena.jpg',1)
gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
cv2.imshow('mywin',cv2.drawKeypoints(img,cv2.xfeatures2d.SIFT_create().detect(gray),img))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()