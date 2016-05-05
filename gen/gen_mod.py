
moduleroot="e:/code/opencv/modules"
modules=[ 
       "core",
       "stitching", "features2d","imgproc","video","imgcodecs", "calib3d",
       "photo","shape",
] # ,"flann"
extras = [
          "core=e:/code/opencv/modules/core/include/opencv2/core/base.hpp",
          "core=e:/code/opencv/modules/core/include/opencv2/core/types.hpp",
          "core=e:/code/opencv/modules/core/include/opencv2/core/utility.hpp",
          "shape=e:/code/opencv/modules/shape/include/opencv2/shape/hist_cost.hpp",
          "shape=e:/code/opencv/modules/shape/include/opencv2/shape/shape_distance.hpp",
          "shape=e:/code/opencv/modules/shape/include/opencv2/shape/shape_transformer.hpp",
          "video=e:/code/opencv/modules/video/include/opencv2/video/tracking.hpp",
          "video=e:/code/opencv/modules/video/include/opencv2/video/background_segm.hpp",
          "xphoto=e:/code/opencv_contrib/modules/xphoto/include/opencv2/xphoto/dct_image_denoising.hpp",
          "bioinspired=e:/code/opencv_contrib/modules/bioinspired/include/opencv2/bioinspired/retina.hpp",
          "bioinspired=e:/code/opencv_contrib/modules/bioinspired/include/opencv2/bioinspired/retinafasttonemapping.hpp",
          "bioinspired=e:/code/opencv_contrib/modules/bioinspired/include/opencv2/bioinspired/transientareassegmentationmodule.hpp",
          "bgsegm=e:/code/opencv_contrib/modules/bgsegm/include/opencv2/bgsegm.hpp",
          "optflow=e:/code/opencv_contrib/modules/optflow/include/opencv2/optflow.hpp",
          "ximgproc=e:/code/opencv_contrib/modules/ximgproc/include/opencv2/ximgproc/seeds.hpp",
          "ximgproc=e:/code/opencv_contrib/modules/ximgproc/include/opencv2/ximgproc/edge_filter.hpp",
          "ximgproc=e:/code/opencv_contrib/modules/ximgproc/include/opencv2/ximgproc/structured_edge_detection.hpp",
          "xfeatures2d=e:/code/opencv_contrib/modules/xfeatures2d/include/opencv2/xfeatures2d.hpp",
          "xfeatures2d=e:/code/opencv_contrib/modules/xfeatures2d/include/opencv2/xfeatures2d/nonfree.hpp",
          "face=e:/code/opencv_contrib/modules/face/include/opencv2/face.hpp",
          "face=e:/code/opencv_contrib/modules/face/include/opencv2/face/facerec.hpp",
          ]
BLACK=( # 'fixed unsafe' issue  ## ,"Moments" ,"FlannBasedMatcher"
       "Algorithm","SimpleBlobDetector",
       "NB_SCALES","normType","DATA_AS_ROW","DEFAULT_SMALL_SIZE","StsOk","UNIFORM","HAAR","MODIFY_A","INT","DEFAULT","FMT_MATLAB","COUNT",
       "Params","Hamming","HammingMultilevel","Error","Param","Formatter","Subdiv2D",
       "BOWTrainer","BOWKMeansTrainer","BOWImgDescriptorExtractor","CvNormalBayesClassifier","CvDTree" ,"HOGDescriptor") #,"Algorithm",,"CvStatModel"
IGNORE=("minEnclosingCircle", # 'fixed unsafe' issue
        "CamShift","checkRange","minMaxLoc","getTextSize","randShuffle","floodFill","phaseCorrelate","moments","HuMoments","minAreaRect","fitEllipse")
