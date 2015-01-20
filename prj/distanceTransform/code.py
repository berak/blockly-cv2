
import cv2
import numpy as np

img = None


img = cv2.bitwise_not(cv2.Canny(cv2.imread('media/lena.jpg',0),30,90))
cv2.imshow('binwin',img)
cv2.imshow('mywin',cv2.applyColorMap(np.asarray(cv2.distanceTransform(img,2,3), dtype=np.uint8),2))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()