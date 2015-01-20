
import cv2
import numpy as np

img = None
writer = None


img = cv2.imread('media/lena.jpg',1)
writer = cv2.VideoWriter('my.asf',cv2.VideoWriter_fourcc(*'XVID'),24,(512,512))
if not writer.isOpened(): raise Exception("your writer failed to open!")
for count in range(100):
  writer.write(img)
cv2.destroyAllWindows()