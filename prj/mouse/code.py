
import cv2
import numpy as np

image = None
mywin = None
button = None
x = None
y = None
state = None


image = cv2.imread('media/lena.jpg',1)
def onmouse(button, x, y, state, param):
  print(['but', button, 'x', x, 'y', y, 'state', state])

cv2.setMouseCallback('mywin', onmouse)
cv2.imshow('mywin',image)
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()