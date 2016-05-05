
import cv2
import numpy as np

AKAZE = cv2.AKAZE_create()
BFMatcher = cv2.BFMatcher()
image = cv2.imread('media/lena.jpg',0)
templ = cv2.flip(image[200:400,200:400],-1)
kp_desc1 = (AKAZE.detectAndCompute(templ,None))
kp_desc2 = (AKAZE.detectAndCompute(image,None))
matches = BFMatcher.match(kp_desc1[1],kp_desc2[1])
print((str(len(matches))) + ' matches.')
cv2.imshow('akaze match',cv2.drawMatches(templ,kp_desc1[0],image,kp_desc2[0],matches,image))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()