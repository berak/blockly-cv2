
import cv2
import numpy as np

LineSegmentDetector = None
image = None


LineSegmentDetector = cv2.createLineSegmentDetector()
image = cv2.imread('media/blockly0.png',0)
cv2.imshow('lines',LineSegmentDetector.drawSegments(image,LineSegmentDetector.detect(image)[0]))
if cv2.waitKey(0)&0xff == 27:
  pass
cv2.destroyAllWindows()