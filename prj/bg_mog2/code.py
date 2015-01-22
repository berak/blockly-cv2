
import cv2
import numpy as np

BackgroundSubtractor = None
img = None


BackgroundSubtractor = cv2.createBackgroundSubtractorMOG2()
BackgroundSubtractor.setHistory(1000)
BackgroundSubtractor.setBackgroundRatio(.7)
cap=cv2.VideoCapture(0)
if not cap.isOpened(): raise Exception("your input:0 could not be opened !")
while cap.isOpened():
  _,img=cap.read()
  cv2.imshow('mywin',img)
  cv2.imshow('mask',BackgroundSubtractor.apply(cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)))
  if cv2.waitKey(100)&0xff == 27:
    break
cv2.destroyAllWindows()