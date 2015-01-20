
moduleroot="e:/code/opencv/modules"
modules=["core","features2d","imgproc","photo","video","imgcodecs", "calib3d"] # ,"flann","optim"
extras = ["core=e:/code/opencv/modules/core/include/opencv2/core/base.hpp",
          "core=e:/code/opencv/modules/core/include/opencv2/core/types.hpp",
          "core=e:/code/opencv/modules/core/include/opencv2/core/utility.hpp",
          "shape=e:/code/opencv/modules/shape/include/opencv2/shape/hist_cost.hpp",
          "shape=e:/code/opencv/modules/shape/include/opencv2/shape/shape_distance.hpp",
          "shape=e:/code/opencv/modules/shape/include/opencv2/shape/shape_transformer.hpp",
          "video=e:/code/opencv/modules/video/include/opencv2/video/tracking.hpp",
          "video=e:/code/opencv/modules/video/include/opencv2/video/background_segm.hpp",
          "xfeatures2d=e:/code/opencv_contrib/modules/xfeatures2d/include/opencv2/xfeatures2d.hpp",
          "xfeatures2d=e:/code/opencv_contrib/modules/xfeatures2d/include/opencv2/xfeatures2d/nonfree.hpp"
          ]
BLACK=("FaceRecognizer", # 'fixed unsafe' issue  ## ,"Moments" ,"FlannBasedMatcher"
       "Algorithm","SimpleBlobDetector","PyramidAdaptedFeatureDetector","GridAdaptedFeatureDetector",
       "NB_SCALES","normType","DATA_AS_ROW","DEFAULT_SMALL_SIZE","StsOk","UNIFORM","HAAR","MODIFY_A","INT","DEFAULT","FMT_MATLAB","COUNT",
       "Params","Hamming","HammingMultilevel","Error","Param","Formatter","Subdiv2D",
       "BOWTrainer","BOWKMeansTrainer","BOWImgDescriptorExtractor","CvNormalBayesClassifier","CvDTree" ,"HOGDescriptor") #,"Algorithm",,"CvStatModel"
IGNORE=("minEnclosingCircle", "createEigenFaceRecognizer","createFisherFaceRecognizer","createLBPHFaceRecognizer", # 'fixed unsafe' issue
        "CamShift","checkRange","minMaxLoc","getTextSize","randShuffle","floodFill","phaseCorrelate","chamerMatching","moments","HuMoments","minAreaRect","fitEllipse")
