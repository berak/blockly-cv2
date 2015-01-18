import cv2
import numpy as npcv2.imshow('mywin',cv2.imread('media/lena.jpg',1))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()