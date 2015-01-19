
import cv2
import numpy as np

img = None


cap=cv2.VideoCapture(0)
if not cap.isOpened(): raise Exception("your input:0 could not be opened !")
while cap.isOpened():
  _,img=cap.read()
  cv2.imshow('mywin',img)
  if cv2.waitKey(100)&0xff == 27:
    break
cv2.destroyAllWindows()