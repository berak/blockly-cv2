
import cv2
import numpy as np

SIFT = None
image = None


SIFT = cv2.xfeatures2d.SIFT_create()
image = cv2.imread('media/lena.jpg',0)
cv2.imshow('bgr',cv2.drawKeypoints(image,SIFT.detect(image),image))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()