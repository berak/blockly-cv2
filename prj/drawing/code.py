
import cv2
import numpy as np

img = None


img = np.ones((100,100,3),np.uint8)
cv2.imshow('mywin',cv2.rectangle(cv2.circle(img,(60,60),20,(0x00,0x00,0xff)),(10,10),(30,30),(0x66,0xcc,0xff)))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()