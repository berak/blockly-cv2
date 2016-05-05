import cv2
import numpy as np


LineSegmentDetector = cv2.createLineSegmentDetector()
image = cv2.imread('media/blockly0.png',0)
(res) = LineSegmentDetector.detect(image)
cv2.imshow('lines',LineSegmentDetector.drawSegments(image,res[0]))
print res
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()
