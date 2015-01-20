
import cv2
import numpy as np

img = None


img = cv2.imread('media/lena.jpg',0)
cv2.imshow('mywin',cv2.drawKeypoints(img,cv2.xfeatures2d.SIFT_create().detect(img),img))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()