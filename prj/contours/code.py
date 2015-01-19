
import cv2
import numpy as np

lena = None
bin2 = None
contours = None
cont = None
rect = None


lena = cv2.imread('media/blockly0.png',1)
bin2 = cv2.threshold(cv2.cvtColor(lena,cv2.COLOR_BGR2GRAY),30,255,cv2.THRESH_OTSU)[1]
cv2.imshow('binwin',bin2)
contours = cv2.findContours(bin2,cv2.RETR_LIST,cv2.CHAIN_APPROX_TC89_KCOS)[1]
for cont in contours:
  if (cv2.contourArea(cont)) > 50:
    rect = cv2.boundingRect(cont)
    cv2.rectangle(lena,(rect[0],rect[1]),(rect[0]+rect[2],rect[1]+rect[3]),(0xcc,0xcc,0x66),1)
cv2.imshow('mywin',lena)
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()