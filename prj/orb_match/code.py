
import cv2
import numpy as np

ORB = None
BFMatcher = None
image = None
templ = None
kp_desc1 = None
kp_desc2 = None


ORB = cv2.ORB_create()
BFMatcher = cv2.BFMatcher()
image = cv2.imread('media/lena.jpg',0)
templ = cv2.flip(image[200:400,200:400],-1)
kp_desc1 = (ORB.detectAndCompute(templ,None))
kp_desc2 = (ORB.detectAndCompute(image,None))
cv2.imshow('orb match',cv2.drawMatches(templ,kp_desc1[0],image,kp_desc2[0],BFMatcher.match(kp_desc1[1],kp_desc2[1]),image))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()