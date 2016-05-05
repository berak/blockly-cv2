
import cv2
import numpy as np

import math

def angle(p0, p1, p2):
  dx1 = (p1[0]) - (p0[0])
  dy1 = (p1[1]) - (p0[1])
  dx2 = (p2[0]) - (p0[0])
  dy2 = (p2[1]) - (p0[1])
  return (dx1 * dx2 + dy1 * dy2) / math.sqrt((dx2 * dx2 + dy2 * dy2) * (dx1 * dx1 + dy1 * dy1))


print(angle((2,5), (2,2), (5,2)))
cv2.destroyAllWindows()