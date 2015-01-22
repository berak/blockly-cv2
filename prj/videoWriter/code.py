
import cv2
import numpy as np

image = None
imsize = None
writer = None
img = None
i = None


image = cv2.imread('media/lena.jpg',1)
imsize = np.shape(image)[:-1]
writer = cv2.VideoWriter('media/my.asf',cv2.VideoWriter_fourcc(*'XVID'),24,imsize)
if not writer.isOpened(): raise Exception("your writer failed to open!")
for i in range(100):
  writer.write(cv2.putText(image.copy(),'frame ' + (str(i)),(100,100),4,1,(0xff,0x33,0x33)))
cap=cv2.VideoCapture('media/my.asf')
if not cap.isOpened(): raise Exception("your input:'media/my.asf' could not be opened !")
while cap.isOpened():
  _,img=cap.read()
  cv2.imshow('mywin',img)
  if cv2.waitKey(100)&0xff == 27:
    break
cv2.destroyAllWindows()