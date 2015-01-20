
import cv2
import numpy as np

img = None
binary = None
contours = None
filtered = None
cont = None
area = None


img = cv2.imread('media/blockly0.png',1)
binary = cv2.threshold(cv2.cvtColor(img,cv2.COLOR_BGR2GRAY),90,255,cv2.THRESH_OTSU)[1]
contours = cv2.findContours(binary,cv2.RETR_CCOMP,cv2.CHAIN_APPROX_TC89_KCOS)[1]
filtered = []
for cont in contours:
  area = cv2.contourArea(cont)
  if area > 4000 and area < 200000:
    filtered.append(cont)
cv2.imshow('mywin',cv2.drawContours(img,filtered,-1,(0x00,0x00,0xff)))
cv2.imshow('binwin',binary)
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()