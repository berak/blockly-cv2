import cv2
import numpy as npitem = None


item = np.ones((100,100,3),np.uint8)
cv2.rectangle(item,(10,10),(30,30),(0x66,0xcc,0xff),1)
cv2.imshow('mywin',item)
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()