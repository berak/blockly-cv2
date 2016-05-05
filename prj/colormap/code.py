
import cv2
import numpy as np

image = None


image = cv2.imread('media/lena.jpg',0)
cv2.imshow('mywin',cv2.applyColorMap(image,4))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()