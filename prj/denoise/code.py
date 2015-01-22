
import cv2
import numpy as np

image = None
noise = None
lena___noise = None


image = cv2.imread('media/lena.jpg',0)
noise = cv2.randu(np.ones((512,512),np.uint8),0,25)
lena___noise = cv2.add(image,noise)
cv2.imshow('denoised',cv2.fastNlMeansDenoising(lena___noise))
cv2.imshow('lena_noised',lena___noise)
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()