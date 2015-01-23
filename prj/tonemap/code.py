
import cv2
import numpy as np

Tonemap = None
image = None


Tonemap = cv2.createTonemap()
Tonemap.setGamma(3)
image = cv2.imread('media/lena.jpg',1)
cv2.imshow('mywin',Tonemap.process(np.asarray(image, dtype=np.float32)))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()