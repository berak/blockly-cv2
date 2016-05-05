
import cv2
import numpy as np

image = cv2.imread('media/lena.jpg',1)
markers = [(10,10), (100,100), None]
water = cv2.watershed(image,markers)
print(water)
cv2.imshow('mywin',image)
cv2.imshow('watershed',water)
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()