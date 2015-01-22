
import cv2
import numpy as np

image = None
binary = None


image = cv2.imread('media/blockly0.png',1)
binary = cv2.cvtColor(cv2.threshold(image,120,255,cv2.THRESH_BINARY_INV)[1],cv2.COLOR_BGR2GRAY)
image = cv2.drawContours(image,cv2.findContours(binary,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_NONE)[1],-1,(0x00,0x00,0xff))
cv2.imshow('mywin',image)
if cv2.waitKey(-1)&0xff == 27:
  pass
cv2.destroyAllWindows()