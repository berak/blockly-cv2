
import cv2
import numpy as np

image = None
pencil = None


image = cv2.imread('media/lena.jpg',1)
pencil = cv2.pencilSketch(image)
cv2.imshow('bgr',pencil[1])
cv2.imshow('gray',pencil[0])
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()