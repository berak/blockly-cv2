
import cv2
import numpy as np

image = None
dec = None


image = cv2.imread('media/lena.jpg',1)
dec = (cv2.decolor(image))
cv2.imshow('gray',dec[0])
cv2.imshow('color',dec[1])
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()