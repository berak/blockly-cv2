Blockly.Python['core_borderInterpolate'] = function(block) {
  var p = block.getFieldValue('p');
  var len = block.getFieldValue('len');
  var borderType = block.getFieldValue('borderType');
  var code = "cv2.borderInterpolate("+p+","+len+","+borderType+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_copyMakeBorder'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var top = block.getFieldValue('top');
  var bottom = block.getFieldValue('bottom');
  var left = block.getFieldValue('left');
  var right = block.getFieldValue('right');
  var borderType = block.getFieldValue('borderType');
  var code = "cv2.copyMakeBorder("+src+","+top+","+bottom+","+left+","+right+","+borderType+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_add'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.add("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_subtract'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.subtract("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_multiply'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.multiply("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_divide'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.divide("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_scaleAdd'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var alpha = block.getFieldValue('alpha');
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.scaleAdd("+src1+","+alpha+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_addWeighted'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var alpha = block.getFieldValue('alpha');
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var beta = block.getFieldValue('beta');
  var gamma = block.getFieldValue('gamma');
  var code = "cv2.addWeighted("+src1+","+alpha+","+src2+","+beta+","+gamma+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_convertScaleAbs'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.convertScaleAbs("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_LUT'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var lut = Blockly.Python.valueToCode(block, 'lut', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.LUT("+src+","+lut+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_sum'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.sum("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_countNonZero'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.countNonZero("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_findNonZero'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.findNonZero("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_mean'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.mean("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_meanStdDev'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.meanStdDev("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_norm'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.norm("+src1+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_PSNR'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.PSNR("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_batchDistance'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var dtype = block.getFieldValue('dtype');
  var code = "cv2.batchDistance("+src1+","+src2+","+dtype+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_normalize'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.normalize("+src+","+dst+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_reduce'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dim = block.getFieldValue('dim');
  var rtype = block.getFieldValue('rtype');
  var code = "cv2.reduce("+src+","+dim+","+rtype+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_merge'] = function(block) {
  var mv = Blockly.Python.valueToCode(block, 'mv', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.merge("+mv+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_split'] = function(block) {
  var m = Blockly.Python.valueToCode(block, 'm', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.split("+m+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_mixChannels'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var fromTo = Blockly.Python.valueToCode(block, 'fromTo', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.mixChannels("+src+","+dst+","+fromTo+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_extractChannel'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var coi = block.getFieldValue('coi');
  var code = "cv2.extractChannel("+src+","+coi+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_insertChannel'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var coi = block.getFieldValue('coi');
  var code = "cv2.insertChannel("+src+","+dst+","+coi+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_flip'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var flipCode = block.getFieldValue('flipCode');
  var code = "cv2.flip("+src+","+flipCode+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_repeat'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var ny = block.getFieldValue('ny');
  var nx = block.getFieldValue('nx');
  var code = "cv2.repeat("+src+","+ny+","+nx+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_hconcat'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.hconcat("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_vconcat'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.vconcat("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_bitwise_and'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.bitwise_and("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_bitwise_or'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.bitwise_or("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_bitwise_xor'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.bitwise_xor("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_bitwise_not'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.bitwise_not("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_absdiff'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.absdiff("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_inRange'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var lowerb = Blockly.Python.valueToCode(block, 'lowerb', Blockly.Python.ORDER_ATOMIC);
  var upperb = Blockly.Python.valueToCode(block, 'upperb', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.inRange("+src+","+lowerb+","+upperb+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_compare'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var cmpop = block.getFieldValue('cmpop');
  var code = "cv2.compare("+src1+","+src2+","+cmpop+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_min'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.min("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_max'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.max("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_sqrt'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.sqrt("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_pow'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var power = block.getFieldValue('power');
  var code = "cv2.pow("+src+","+power+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_exp'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.exp("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_log'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.log("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_polarToCart'] = function(block) {
  var magnitude = Blockly.Python.valueToCode(block, 'magnitude', Blockly.Python.ORDER_ATOMIC);
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.polarToCart("+magnitude+","+angle+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_cartToPolar'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.cartToPolar("+x+","+y+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_phase'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.phase("+x+","+y+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_magnitude'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.magnitude("+x+","+y+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_patchNaNs'] = function(block) {
  var a = Blockly.Python.valueToCode(block, 'a', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.patchNaNs("+a+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_gemm'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var alpha = block.getFieldValue('alpha');
  var src3 = Blockly.Python.valueToCode(block, 'src3', Blockly.Python.ORDER_ATOMIC);
  var beta = block.getFieldValue('beta');
  var code = "cv2.gemm("+src1+","+src2+","+alpha+","+src3+","+beta+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_mulTransposed'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var aTa = Blockly.Python.valueToCode(block, 'aTa', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.mulTransposed("+src+","+aTa+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_transpose'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.transpose("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_transform'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var m = Blockly.Python.valueToCode(block, 'm', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.transform("+src+","+m+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_perspectiveTransform'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var m = Blockly.Python.valueToCode(block, 'm', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.perspectiveTransform("+src+","+m+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_completeSymm'] = function(block) {
  var mtx = Blockly.Python.valueToCode(block, 'mtx', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.completeSymm("+mtx+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_setIdentity'] = function(block) {
  var mtx = Blockly.Python.valueToCode(block, 'mtx', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.setIdentity("+mtx+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_determinant'] = function(block) {
  var mtx = Blockly.Python.valueToCode(block, 'mtx', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.determinant("+mtx+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_trace'] = function(block) {
  var mtx = Blockly.Python.valueToCode(block, 'mtx', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.trace("+mtx+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_invert'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.invert("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_solve'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.solve("+src1+","+src2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_sort'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var flags = block.getFieldValue('flags');
  var code = "cv2.sort("+src+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_sortIdx'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var flags = block.getFieldValue('flags');
  var code = "cv2.sortIdx("+src+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_solveCubic'] = function(block) {
  var coeffs = Blockly.Python.valueToCode(block, 'coeffs', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.solveCubic("+coeffs+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_solvePoly'] = function(block) {
  var coeffs = Blockly.Python.valueToCode(block, 'coeffs', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.solvePoly("+coeffs+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_eigen'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.eigen("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_calcCovarMatrix'] = function(block) {
  var samples = Blockly.Python.valueToCode(block, 'samples', Blockly.Python.ORDER_ATOMIC);
  var mean = Blockly.Python.valueToCode(block, 'mean', Blockly.Python.ORDER_ATOMIC);
  var flags = block.getFieldValue('flags');
  var code = "cv2.calcCovarMatrix("+samples+","+mean+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_PCACompute'] = function(block) {
  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var mean = Blockly.Python.valueToCode(block, 'mean', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.PCACompute("+data+","+mean+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_PCAProject'] = function(block) {
  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var mean = Blockly.Python.valueToCode(block, 'mean', Blockly.Python.ORDER_ATOMIC);
  var eigenvectors = Blockly.Python.valueToCode(block, 'eigenvectors', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.PCAProject("+data+","+mean+","+eigenvectors+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_PCABackProject'] = function(block) {
  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var mean = Blockly.Python.valueToCode(block, 'mean', Blockly.Python.ORDER_ATOMIC);
  var eigenvectors = Blockly.Python.valueToCode(block, 'eigenvectors', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.PCABackProject("+data+","+mean+","+eigenvectors+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_SVDecomp'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.SVDecomp("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_SVBackSubst'] = function(block) {
  var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
  var u = Blockly.Python.valueToCode(block, 'u', Blockly.Python.ORDER_ATOMIC);
  var vt = Blockly.Python.valueToCode(block, 'vt', Blockly.Python.ORDER_ATOMIC);
  var rhs = Blockly.Python.valueToCode(block, 'rhs', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.SVBackSubst("+w+","+u+","+vt+","+rhs+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_Mahalanobis'] = function(block) {
  var v1 = Blockly.Python.valueToCode(block, 'v1', Blockly.Python.ORDER_ATOMIC);
  var v2 = Blockly.Python.valueToCode(block, 'v2', Blockly.Python.ORDER_ATOMIC);
  var icovar = Blockly.Python.valueToCode(block, 'icovar', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.Mahalanobis("+v1+","+v2+","+icovar+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_dft'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.dft("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_idft'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.idft("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_dct'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.dct("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_idct'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.idct("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_mulSpectrums'] = function(block) {
  var a = Blockly.Python.valueToCode(block, 'a', Blockly.Python.ORDER_ATOMIC);
  var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
  var flags = block.getFieldValue('flags');
  var code = "cv2.mulSpectrums("+a+","+b+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_getOptimalDFTSize'] = function(block) {
  var vecsize = block.getFieldValue('vecsize');
  var code = "cv2.getOptimalDFTSize("+vecsize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_randu'] = function(block) {
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var low = Blockly.Python.valueToCode(block, 'low', Blockly.Python.ORDER_ATOMIC);
  var high = Blockly.Python.valueToCode(block, 'high', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.randu("+dst+","+low+","+high+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_randn'] = function(block) {
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var mean = Blockly.Python.valueToCode(block, 'mean', Blockly.Python.ORDER_ATOMIC);
  var stddev = Blockly.Python.valueToCode(block, 'stddev', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.randn("+dst+","+mean+","+stddev+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_kmeans'] = function(block) {
  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var K = block.getFieldValue('K');
  var bestLabels = Blockly.Python.valueToCode(block, 'bestLabels', Blockly.Python.ORDER_ATOMIC);
  var criteria = Blockly.Python.valueToCode(block, 'criteria', Blockly.Python.ORDER_ATOMIC);
  var attempts = block.getFieldValue('attempts');
  var flags = block.getFieldValue('flags');
  var code = "cv2.kmeans("+data+","+K+","+bestLabels+","+criteria+","+attempts+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_cubeRoot'] = function(block) {
  var val = block.getFieldValue('val');
  var code = "cv2.cubeRoot("+val+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_fastAtan2'] = function(block) {
  var y = block.getFieldValue('y');
  var x = block.getFieldValue('x');
  var code = "cv2.fastAtan2("+y+","+x+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_getBuildInformation'] = function(block) {
  var code = "cv2.getBuildInformation()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_getTickCount'] = function(block) {
  var code = "cv2.getTickCount()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_getTickFrequency'] = function(block) {
  var code = "cv2.getTickFrequency()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_getCPUTickCount'] = function(block) {
  var code = "cv2.getCPUTickCount()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_checkHardwareSupport'] = function(block) {
  var feature = block.getFieldValue('feature');
  var code = "cv2.checkHardwareSupport("+feature+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_getNumberOfCPUs'] = function(block) {
  var code = "cv2.getNumberOfCPUs()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_setUseOptimized'] = function(block) {
  var onoff = Blockly.Python.valueToCode(block, 'onoff', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.setUseOptimized("+onoff+")\n"
  return code;
};
Blockly.Python['core_useOptimized'] = function(block) {
  var code = "cv2.useOptimized()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_DMatch_DMatch'] = function(block) {
  var DMatch = block.getFieldValue('DMatch');
  var code = DMatch + " = cv2.DMatch()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_KeyPoint_KeyPoint'] = function(block) {
  var KeyPoint = block.getFieldValue('KeyPoint');
  var code = KeyPoint + " = cv2.KeyPoint()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_KeyPoint_convert'] = function(block) {
  var KeyPoint = block.getFieldValue('KeyPoint');
  var keypoints = Blockly.Python.valueToCode(block, 'keypoints', Blockly.Python.ORDER_ATOMIC);
  var code = KeyPoint + ".convert("+keypoints+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['core_KeyPoint_overlap'] = function(block) {
  var KeyPoint = block.getFieldValue('KeyPoint');
  var kp1 = Blockly.Python.valueToCode(block, 'kp1', Blockly.Python.ORDER_ATOMIC);
  var kp2 = Blockly.Python.valueToCode(block, 'kp2', Blockly.Python.ORDER_ATOMIC);
  var code = KeyPoint + ".overlap("+kp1+","+kp2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_createLineSegmentDetector'] = function(block) {
  var LineSegmentDetector = block.getFieldValue('LineSegmentDetector');
  var code = LineSegmentDetector + " = cv2.createLineSegmentDetector()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_getGaussianKernel'] = function(block) {
  var ksize = block.getFieldValue('ksize');
  var sigma = block.getFieldValue('sigma');
  var code = "cv2.getGaussianKernel("+ksize+","+sigma+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_getDerivKernels'] = function(block) {
  var dx = block.getFieldValue('dx');
  var dy = block.getFieldValue('dy');
  var ksize = block.getFieldValue('ksize');
  var code = "cv2.getDerivKernels("+dx+","+dy+","+ksize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_getGaborKernel'] = function(block) {
  var ksize = Blockly.Python.valueToCode(block, 'ksize', Blockly.Python.ORDER_ATOMIC);
  var sigma = block.getFieldValue('sigma');
  var theta = block.getFieldValue('theta');
  var lambd = block.getFieldValue('lambd');
  var gamma = block.getFieldValue('gamma');
  var code = "cv2.getGaborKernel("+ksize+","+sigma+","+theta+","+lambd+","+gamma+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_getStructuringElement'] = function(block) {
  var shape = block.getFieldValue('shape');
  var ksize = Blockly.Python.valueToCode(block, 'ksize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.getStructuringElement("+shape+","+ksize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_medianBlur'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var ksize = block.getFieldValue('ksize');
  var code = "cv2.medianBlur("+src+","+ksize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_GaussianBlur'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var ksize = Blockly.Python.valueToCode(block, 'ksize', Blockly.Python.ORDER_ATOMIC);
  var sigmaX = block.getFieldValue('sigmaX');
  var code = "cv2.GaussianBlur("+src+","+ksize+","+sigmaX+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_bilateralFilter'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var d = block.getFieldValue('d');
  var sigmaColor = block.getFieldValue('sigmaColor');
  var sigmaSpace = block.getFieldValue('sigmaSpace');
  var code = "cv2.bilateralFilter("+src+","+d+","+sigmaColor+","+sigmaSpace+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_boxFilter'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var ddepth = block.getFieldValue('ddepth');
  var ksize = Blockly.Python.valueToCode(block, 'ksize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.boxFilter("+src+","+ddepth+","+ksize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_sqrBoxFilter'] = function(block) {
  var _src = Blockly.Python.valueToCode(block, '_src', Blockly.Python.ORDER_ATOMIC);
  var ddepth = block.getFieldValue('ddepth');
  var ksize = Blockly.Python.valueToCode(block, 'ksize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.sqrBoxFilter("+_src+","+ddepth+","+ksize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_blur'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var ksize = Blockly.Python.valueToCode(block, 'ksize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.blur("+src+","+ksize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_filter2D'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var ddepth = block.getFieldValue('ddepth');
  var kernel = Blockly.Python.valueToCode(block, 'kernel', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.filter2D("+src+","+ddepth+","+kernel+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_sepFilter2D'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var ddepth = block.getFieldValue('ddepth');
  var kernelX = Blockly.Python.valueToCode(block, 'kernelX', Blockly.Python.ORDER_ATOMIC);
  var kernelY = Blockly.Python.valueToCode(block, 'kernelY', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.sepFilter2D("+src+","+ddepth+","+kernelX+","+kernelY+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_Sobel'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var ddepth = block.getFieldValue('ddepth');
  var dx = block.getFieldValue('dx');
  var dy = block.getFieldValue('dy');
  var code = "cv2.Sobel("+src+","+ddepth+","+dx+","+dy+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_Scharr'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var ddepth = block.getFieldValue('ddepth');
  var dx = block.getFieldValue('dx');
  var dy = block.getFieldValue('dy');
  var code = "cv2.Scharr("+src+","+ddepth+","+dx+","+dy+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_Laplacian'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var ddepth = block.getFieldValue('ddepth');
  var code = "cv2.Laplacian("+src+","+ddepth+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_Canny'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var threshold1 = block.getFieldValue('threshold1');
  var threshold2 = block.getFieldValue('threshold2');
  var code = "cv2.Canny("+image+","+threshold1+","+threshold2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_cornerMinEigenVal'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var blockSize = block.getFieldValue('blockSize');
  var code = "cv2.cornerMinEigenVal("+src+","+blockSize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_cornerHarris'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var blockSize = block.getFieldValue('blockSize');
  var ksize = block.getFieldValue('ksize');
  var k = block.getFieldValue('k');
  var code = "cv2.cornerHarris("+src+","+blockSize+","+ksize+","+k+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_cornerEigenValsAndVecs'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var blockSize = block.getFieldValue('blockSize');
  var ksize = block.getFieldValue('ksize');
  var code = "cv2.cornerEigenValsAndVecs("+src+","+blockSize+","+ksize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_preCornerDetect'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var ksize = block.getFieldValue('ksize');
  var code = "cv2.preCornerDetect("+src+","+ksize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_cornerSubPix'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var corners = Blockly.Python.valueToCode(block, 'corners', Blockly.Python.ORDER_ATOMIC);
  var winSize = Blockly.Python.valueToCode(block, 'winSize', Blockly.Python.ORDER_ATOMIC);
  var zeroZone = Blockly.Python.valueToCode(block, 'zeroZone', Blockly.Python.ORDER_ATOMIC);
  var criteria = Blockly.Python.valueToCode(block, 'criteria', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.cornerSubPix("+image+","+corners+","+winSize+","+zeroZone+","+criteria+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_goodFeaturesToTrack'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var maxCorners = block.getFieldValue('maxCorners');
  var qualityLevel = block.getFieldValue('qualityLevel');
  var minDistance = block.getFieldValue('minDistance');
  var code = "cv2.goodFeaturesToTrack("+image+","+maxCorners+","+qualityLevel+","+minDistance+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_HoughLines'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var rho = block.getFieldValue('rho');
  var theta = block.getFieldValue('theta');
  var threshold = block.getFieldValue('threshold');
  var code = "cv2.HoughLines("+image+","+rho+","+theta+","+threshold+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_HoughLinesP'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var rho = block.getFieldValue('rho');
  var theta = block.getFieldValue('theta');
  var threshold = block.getFieldValue('threshold');
  var code = "cv2.HoughLinesP("+image+","+rho+","+theta+","+threshold+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_HoughCircles'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var method = block.getFieldValue('method');
  var dp = block.getFieldValue('dp');
  var minDist = block.getFieldValue('minDist');
  var code = "cv2.HoughCircles("+image+","+method+","+dp+","+minDist+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_erode'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var kernel = Blockly.Python.valueToCode(block, 'kernel', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.erode("+src+","+kernel+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_dilate'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var kernel = Blockly.Python.valueToCode(block, 'kernel', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.dilate("+src+","+kernel+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_morphologyEx'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var op = block.getFieldValue('op');
  var kernel = Blockly.Python.valueToCode(block, 'kernel', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.morphologyEx("+src+","+op+","+kernel+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_resize'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dsize = Blockly.Python.valueToCode(block, 'dsize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.resize("+src+","+dsize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_warpAffine'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var M = Blockly.Python.valueToCode(block, 'M', Blockly.Python.ORDER_ATOMIC);
  var dsize = Blockly.Python.valueToCode(block, 'dsize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.warpAffine("+src+","+M+","+dsize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_warpPerspective'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var M = Blockly.Python.valueToCode(block, 'M', Blockly.Python.ORDER_ATOMIC);
  var dsize = Blockly.Python.valueToCode(block, 'dsize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.warpPerspective("+src+","+M+","+dsize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_remap'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var map1 = Blockly.Python.valueToCode(block, 'map1', Blockly.Python.ORDER_ATOMIC);
  var map2 = Blockly.Python.valueToCode(block, 'map2', Blockly.Python.ORDER_ATOMIC);
  var interpolation = block.getFieldValue('interpolation');
  var code = "cv2.remap("+src+","+map1+","+map2+","+interpolation+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_convertMaps'] = function(block) {
  var map1 = Blockly.Python.valueToCode(block, 'map1', Blockly.Python.ORDER_ATOMIC);
  var map2 = Blockly.Python.valueToCode(block, 'map2', Blockly.Python.ORDER_ATOMIC);
  var dstmap1type = block.getFieldValue('dstmap1type');
  var code = "cv2.convertMaps("+map1+","+map2+","+dstmap1type+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_getRotationMatrix2D'] = function(block) {
  var center = Blockly.Python.valueToCode(block, 'center', Blockly.Python.ORDER_ATOMIC);
  var angle = block.getFieldValue('angle');
  var scale = block.getFieldValue('scale');
  var code = "cv2.getRotationMatrix2D("+center+","+angle+","+scale+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_invertAffineTransform'] = function(block) {
  var M = Blockly.Python.valueToCode(block, 'M', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.invertAffineTransform("+M+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_getPerspectiveTransform'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.getPerspectiveTransform("+src+","+dst+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_getAffineTransform'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.getAffineTransform("+src+","+dst+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_getRectSubPix'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var patchSize = Blockly.Python.valueToCode(block, 'patchSize', Blockly.Python.ORDER_ATOMIC);
  var center = Blockly.Python.valueToCode(block, 'center', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.getRectSubPix("+image+","+patchSize+","+center+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_logPolar'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var center = Blockly.Python.valueToCode(block, 'center', Blockly.Python.ORDER_ATOMIC);
  var M = block.getFieldValue('M');
  var flags = block.getFieldValue('flags');
  var code = "cv2.logPolar("+src+","+center+","+M+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_linearPolar'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var center = Blockly.Python.valueToCode(block, 'center', Blockly.Python.ORDER_ATOMIC);
  var maxRadius = block.getFieldValue('maxRadius');
  var flags = block.getFieldValue('flags');
  var code = "cv2.linearPolar("+src+","+center+","+maxRadius+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_integral'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.integral("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_accumulate'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.accumulate("+src+","+dst+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_accumulateSquare'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.accumulateSquare("+src+","+dst+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_accumulateProduct'] = function(block) {
  var src1 = Blockly.Python.valueToCode(block, 'src1', Blockly.Python.ORDER_ATOMIC);
  var src2 = Blockly.Python.valueToCode(block, 'src2', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.accumulateProduct("+src1+","+src2+","+dst+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_accumulateWeighted'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var alpha = block.getFieldValue('alpha');
  var code = "cv2.accumulateWeighted("+src+","+dst+","+alpha+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_createHanningWindow'] = function(block) {
  var HanningWindow = block.getFieldValue('HanningWindow');
  var winSize = Blockly.Python.valueToCode(block, 'winSize', Blockly.Python.ORDER_ATOMIC);
  var type = block.getFieldValue('type');
  var code = HanningWindow + " = cv2.createHanningWindow("+winSize+","+type+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_threshold'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var thresh = block.getFieldValue('thresh');
  var maxval = block.getFieldValue('maxval');
  var type = block.getFieldValue('type');
  var code = "cv2.threshold("+src+","+thresh+","+maxval+","+type+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_adaptiveThreshold'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var maxValue = block.getFieldValue('maxValue');
  var adaptiveMethod = block.getFieldValue('adaptiveMethod');
  var thresholdType = block.getFieldValue('thresholdType');
  var blockSize = block.getFieldValue('blockSize');
  var C = block.getFieldValue('C');
  var code = "cv2.adaptiveThreshold("+src+","+maxValue+","+adaptiveMethod+","+thresholdType+","+blockSize+","+C+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_pyrDown'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.pyrDown("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_pyrUp'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.pyrUp("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_undistort'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var cameraMatrix = Blockly.Python.valueToCode(block, 'cameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs = Blockly.Python.valueToCode(block, 'distCoeffs', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.undistort("+src+","+cameraMatrix+","+distCoeffs+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_initUndistortRectifyMap'] = function(block) {
  var cameraMatrix = Blockly.Python.valueToCode(block, 'cameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs = Blockly.Python.valueToCode(block, 'distCoeffs', Blockly.Python.ORDER_ATOMIC);
  var R = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var newCameraMatrix = Blockly.Python.valueToCode(block, 'newCameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var size = Blockly.Python.valueToCode(block, 'size', Blockly.Python.ORDER_ATOMIC);
  var m1type = block.getFieldValue('m1type');
  var code = "cv2.initUndistortRectifyMap("+cameraMatrix+","+distCoeffs+","+R+","+newCameraMatrix+","+size+","+m1type+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_initWideAngleProjMap'] = function(block) {
  var cameraMatrix = Blockly.Python.valueToCode(block, 'cameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs = Blockly.Python.valueToCode(block, 'distCoeffs', Blockly.Python.ORDER_ATOMIC);
  var imageSize = Blockly.Python.valueToCode(block, 'imageSize', Blockly.Python.ORDER_ATOMIC);
  var destImageWidth = block.getFieldValue('destImageWidth');
  var m1type = block.getFieldValue('m1type');
  var code = "cv2.initWideAngleProjMap("+cameraMatrix+","+distCoeffs+","+imageSize+","+destImageWidth+","+m1type+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_getDefaultNewCameraMatrix'] = function(block) {
  var cameraMatrix = Blockly.Python.valueToCode(block, 'cameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.getDefaultNewCameraMatrix("+cameraMatrix+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_undistortPoints'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var cameraMatrix = Blockly.Python.valueToCode(block, 'cameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs = Blockly.Python.valueToCode(block, 'distCoeffs', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.undistortPoints("+src+","+cameraMatrix+","+distCoeffs+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_calcHist'] = function(block) {
  var images = Blockly.Python.valueToCode(block, 'images', Blockly.Python.ORDER_ATOMIC);
  var channels = Blockly.Python.valueToCode(block, 'channels', Blockly.Python.ORDER_ATOMIC);
  var mask = Blockly.Python.valueToCode(block, 'mask', Blockly.Python.ORDER_ATOMIC);
  var histSize = Blockly.Python.valueToCode(block, 'histSize', Blockly.Python.ORDER_ATOMIC);
  var ranges = Blockly.Python.valueToCode(block, 'ranges', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.calcHist("+images+","+channels+","+mask+","+histSize+","+ranges+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_calcBackProject'] = function(block) {
  var images = Blockly.Python.valueToCode(block, 'images', Blockly.Python.ORDER_ATOMIC);
  var channels = Blockly.Python.valueToCode(block, 'channels', Blockly.Python.ORDER_ATOMIC);
  var hist = Blockly.Python.valueToCode(block, 'hist', Blockly.Python.ORDER_ATOMIC);
  var ranges = Blockly.Python.valueToCode(block, 'ranges', Blockly.Python.ORDER_ATOMIC);
  var scale = block.getFieldValue('scale');
  var code = "cv2.calcBackProject("+images+","+channels+","+hist+","+ranges+","+scale+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_compareHist'] = function(block) {
  var H1 = Blockly.Python.valueToCode(block, 'H1', Blockly.Python.ORDER_ATOMIC);
  var H2 = Blockly.Python.valueToCode(block, 'H2', Blockly.Python.ORDER_ATOMIC);
  var method = block.getFieldValue('method');
  var code = "cv2.compareHist("+H1+","+H2+","+method+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_equalizeHist'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.equalizeHist("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_watershed'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var markers = Blockly.Python.valueToCode(block, 'markers', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.watershed("+image+","+markers+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_pyrMeanShiftFiltering'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var sp = block.getFieldValue('sp');
  var sr = block.getFieldValue('sr');
  var code = "cv2.pyrMeanShiftFiltering("+src+","+sp+","+sr+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_grabCut'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var mask = Blockly.Python.valueToCode(block, 'mask', Blockly.Python.ORDER_ATOMIC);
  var rect = Blockly.Python.valueToCode(block, 'rect', Blockly.Python.ORDER_ATOMIC);
  var bgdModel = Blockly.Python.valueToCode(block, 'bgdModel', Blockly.Python.ORDER_ATOMIC);
  var fgdModel = Blockly.Python.valueToCode(block, 'fgdModel', Blockly.Python.ORDER_ATOMIC);
  var iterCount = block.getFieldValue('iterCount');
  var code = "cv2.grabCut("+img+","+mask+","+rect+","+bgdModel+","+fgdModel+","+iterCount+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_distanceTransform'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var distanceType = block.getFieldValue('distanceType');
  var maskSize = block.getFieldValue('maskSize');
  var code = "cv2.distanceTransform("+src+","+distanceType+","+maskSize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_cvtColor'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = block.getFieldValue('code');
  var code = "cv2.cvtColor("+src+","+code+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_demosaicing'] = function(block) {
  var _src = Blockly.Python.valueToCode(block, '_src', Blockly.Python.ORDER_ATOMIC);
  var code = block.getFieldValue('code');
  var code = "cv2.demosaicing("+_src+","+code+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_matchTemplate'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var templ = Blockly.Python.valueToCode(block, 'templ', Blockly.Python.ORDER_ATOMIC);
  var method = block.getFieldValue('method');
  var code = "cv2.matchTemplate("+image+","+templ+","+method+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_connectedComponents'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.connectedComponents("+image+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_connectedComponentsWithStats'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.connectedComponentsWithStats("+image+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_findContours'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var mode = block.getFieldValue('mode');
  var method = block.getFieldValue('method');
  var code = "cv2.findContours("+image+","+mode+","+method+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_approxPolyDP'] = function(block) {
  var curve = Blockly.Python.valueToCode(block, 'curve', Blockly.Python.ORDER_ATOMIC);
  var epsilon = block.getFieldValue('epsilon');
  var closed = Blockly.Python.valueToCode(block, 'closed', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.approxPolyDP("+curve+","+epsilon+","+closed+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_arcLength'] = function(block) {
  var curve = Blockly.Python.valueToCode(block, 'curve', Blockly.Python.ORDER_ATOMIC);
  var closed = Blockly.Python.valueToCode(block, 'closed', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.arcLength("+curve+","+closed+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_boundingRect'] = function(block) {
  var points = Blockly.Python.valueToCode(block, 'points', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.boundingRect("+points+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_contourArea'] = function(block) {
  var contour = Blockly.Python.valueToCode(block, 'contour', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.contourArea("+contour+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_boxPoints'] = function(block) {
  var box = Blockly.Python.valueToCode(block, 'box', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.boxPoints("+box+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_minEnclosingTriangle'] = function(block) {
  var points = Blockly.Python.valueToCode(block, 'points', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.minEnclosingTriangle("+points+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_matchShapes'] = function(block) {
  var contour1 = Blockly.Python.valueToCode(block, 'contour1', Blockly.Python.ORDER_ATOMIC);
  var contour2 = Blockly.Python.valueToCode(block, 'contour2', Blockly.Python.ORDER_ATOMIC);
  var method = block.getFieldValue('method');
  var parameter = block.getFieldValue('parameter');
  var code = "cv2.matchShapes("+contour1+","+contour2+","+method+","+parameter+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_convexHull'] = function(block) {
  var points = Blockly.Python.valueToCode(block, 'points', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.convexHull("+points+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_convexityDefects'] = function(block) {
  var contour = Blockly.Python.valueToCode(block, 'contour', Blockly.Python.ORDER_ATOMIC);
  var convexhull = Blockly.Python.valueToCode(block, 'convexhull', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.convexityDefects("+contour+","+convexhull+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_isContourConvex'] = function(block) {
  var contour = Blockly.Python.valueToCode(block, 'contour', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.isContourConvex("+contour+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_intersectConvexConvex'] = function(block) {
  var _p1 = Blockly.Python.valueToCode(block, '_p1', Blockly.Python.ORDER_ATOMIC);
  var _p2 = Blockly.Python.valueToCode(block, '_p2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.intersectConvexConvex("+_p1+","+_p2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_fitLine'] = function(block) {
  var points = Blockly.Python.valueToCode(block, 'points', Blockly.Python.ORDER_ATOMIC);
  var distType = block.getFieldValue('distType');
  var param = block.getFieldValue('param');
  var reps = block.getFieldValue('reps');
  var aeps = block.getFieldValue('aeps');
  var code = "cv2.fitLine("+points+","+distType+","+param+","+reps+","+aeps+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_pointPolygonTest'] = function(block) {
  var contour = Blockly.Python.valueToCode(block, 'contour', Blockly.Python.ORDER_ATOMIC);
  var pt = Blockly.Python.valueToCode(block, 'pt', Blockly.Python.ORDER_ATOMIC);
  var measureDist = Blockly.Python.valueToCode(block, 'measureDist', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.pointPolygonTest("+contour+","+pt+","+measureDist+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_rotatedRectangleIntersection'] = function(block) {
  var rect1 = Blockly.Python.valueToCode(block, 'rect1', Blockly.Python.ORDER_ATOMIC);
  var rect2 = Blockly.Python.valueToCode(block, 'rect2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.rotatedRectangleIntersection("+rect1+","+rect2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_createCLAHE'] = function(block) {
  var CLAHE = block.getFieldValue('CLAHE');
  var code = CLAHE + " = cv2.createCLAHE()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_applyColorMap'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var colormap = block.getFieldValue('colormap');
  var code = "cv2.applyColorMap("+src+","+colormap+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_line'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var pt1 = Blockly.Python.valueToCode(block, 'pt1', Blockly.Python.ORDER_ATOMIC);
  var pt2 = Blockly.Python.valueToCode(block, 'pt2', Blockly.Python.ORDER_ATOMIC);
  var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.line("+img+","+pt1+","+pt2+","+color+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_arrowedLine'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var pt1 = Blockly.Python.valueToCode(block, 'pt1', Blockly.Python.ORDER_ATOMIC);
  var pt2 = Blockly.Python.valueToCode(block, 'pt2', Blockly.Python.ORDER_ATOMIC);
  var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.arrowedLine("+img+","+pt1+","+pt2+","+color+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_rectangle'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var pt1 = Blockly.Python.valueToCode(block, 'pt1', Blockly.Python.ORDER_ATOMIC);
  var pt2 = Blockly.Python.valueToCode(block, 'pt2', Blockly.Python.ORDER_ATOMIC);
  var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.rectangle("+img+","+pt1+","+pt2+","+color+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_circle'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var center = Blockly.Python.valueToCode(block, 'center', Blockly.Python.ORDER_ATOMIC);
  var radius = block.getFieldValue('radius');
  var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.circle("+img+","+center+","+radius+","+color+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_ellipse'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var center = Blockly.Python.valueToCode(block, 'center', Blockly.Python.ORDER_ATOMIC);
  var axes = Blockly.Python.valueToCode(block, 'axes', Blockly.Python.ORDER_ATOMIC);
  var angle = block.getFieldValue('angle');
  var startAngle = block.getFieldValue('startAngle');
  var endAngle = block.getFieldValue('endAngle');
  var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.ellipse("+img+","+center+","+axes+","+angle+","+startAngle+","+endAngle+","+color+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_fillConvexPoly'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var points = Blockly.Python.valueToCode(block, 'points', Blockly.Python.ORDER_ATOMIC);
  var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.fillConvexPoly("+img+","+points+","+color+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_fillPoly'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var pts = Blockly.Python.valueToCode(block, 'pts', Blockly.Python.ORDER_ATOMIC);
  var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.fillPoly("+img+","+pts+","+color+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_polylines'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var pts = Blockly.Python.valueToCode(block, 'pts', Blockly.Python.ORDER_ATOMIC);
  var isClosed = Blockly.Python.valueToCode(block, 'isClosed', Blockly.Python.ORDER_ATOMIC);
  var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.polylines("+img+","+pts+","+isClosed+","+color+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_drawContours'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var contours = Blockly.Python.valueToCode(block, 'contours', Blockly.Python.ORDER_ATOMIC);
  var contourIdx = block.getFieldValue('contourIdx');
  var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.drawContours("+image+","+contours+","+contourIdx+","+color+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_clipLine'] = function(block) {
  var imgRect = Blockly.Python.valueToCode(block, 'imgRect', Blockly.Python.ORDER_ATOMIC);
  var pt1 = Blockly.Python.valueToCode(block, 'pt1', Blockly.Python.ORDER_ATOMIC);
  var pt2 = Blockly.Python.valueToCode(block, 'pt2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.clipLine("+imgRect+","+pt1+","+pt2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_ellipse2Poly'] = function(block) {
  var center = Blockly.Python.valueToCode(block, 'center', Blockly.Python.ORDER_ATOMIC);
  var axes = Blockly.Python.valueToCode(block, 'axes', Blockly.Python.ORDER_ATOMIC);
  var angle = block.getFieldValue('angle');
  var arcStart = block.getFieldValue('arcStart');
  var arcEnd = block.getFieldValue('arcEnd');
  var delta = block.getFieldValue('delta');
  var code = "cv2.ellipse2Poly("+center+","+axes+","+angle+","+arcStart+","+arcEnd+","+delta+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_putText'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var org = Blockly.Python.valueToCode(block, 'org', Blockly.Python.ORDER_ATOMIC);
  var fontFace = block.getFieldValue('fontFace');
  var fontScale = block.getFieldValue('fontScale');
  var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.putText("+img+","+text+","+org+","+fontFace+","+fontScale+","+color+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_LineSegmentDetector_detect'] = function(block) {
  var LineSegmentDetector = block.getFieldValue('LineSegmentDetector');
  var _image = Blockly.Python.valueToCode(block, '_image', Blockly.Python.ORDER_ATOMIC);
  var code = LineSegmentDetector + ".detect("+_image+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_LineSegmentDetector_drawSegments'] = function(block) {
  var LineSegmentDetector = block.getFieldValue('LineSegmentDetector');
  var _image = Blockly.Python.valueToCode(block, '_image', Blockly.Python.ORDER_ATOMIC);
  var lines = Blockly.Python.valueToCode(block, 'lines', Blockly.Python.ORDER_ATOMIC);
  var code = LineSegmentDetector + ".drawSegments("+_image+","+lines+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_LineSegmentDetector_compareSegments'] = function(block) {
  var LineSegmentDetector = block.getFieldValue('LineSegmentDetector');
  var size = Blockly.Python.valueToCode(block, 'size', Blockly.Python.ORDER_ATOMIC);
  var lines1 = Blockly.Python.valueToCode(block, 'lines1', Blockly.Python.ORDER_ATOMIC);
  var lines2 = Blockly.Python.valueToCode(block, 'lines2', Blockly.Python.ORDER_ATOMIC);
  var code = LineSegmentDetector + ".compareSegments("+size+","+lines1+","+lines2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_CLAHE_apply'] = function(block) {
  var CLAHE = block.getFieldValue('CLAHE');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = CLAHE + ".apply("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_CLAHE_setClipLimit'] = function(block) {
  var CLAHE = block.getFieldValue('CLAHE');
  var clipLimit = block.getFieldValue('clipLimit');
  var code = CLAHE + ".setClipLimit("+clipLimit+")\n"
  return code;
};
Blockly.Python['imgproc_CLAHE_getClipLimit'] = function(block) {
  var CLAHE = block.getFieldValue('CLAHE');
  var code = CLAHE + ".getClipLimit()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_CLAHE_setTilesGridSize'] = function(block) {
  var CLAHE = block.getFieldValue('CLAHE');
  var tileGridSize = Blockly.Python.valueToCode(block, 'tileGridSize', Blockly.Python.ORDER_ATOMIC);
  var code = CLAHE + ".setTilesGridSize("+tileGridSize+")\n"
  return code;
};
Blockly.Python['imgproc_CLAHE_getTilesGridSize'] = function(block) {
  var CLAHE = block.getFieldValue('CLAHE');
  var code = CLAHE + ".getTilesGridSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgproc_CLAHE_collectGarbage'] = function(block) {
  var CLAHE = block.getFieldValue('CLAHE');
  var code = CLAHE + ".collectGarbage()\n"
  return code;
};
Blockly.Python['bioinspired_RETINA_COLOR_RANDOM_createRetina'] = function(block) {
  var RETINA_COLOR_RANDOM = block.getFieldValue('RETINA_COLOR_RANDOM');
  var inputSize = Blockly.Python.valueToCode(block, 'inputSize', Blockly.Python.ORDER_ATOMIC);
  var code = RETINA_COLOR_RANDOM + " = cv2.bioinspired.createRetina("+inputSize+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_RETINA_COLOR_RANDOM_createRetinaFastToneMapping'] = function(block) {
  var RETINA_COLOR_RANDOM = block.getFieldValue('RETINA_COLOR_RANDOM');
  var inputSize = Blockly.Python.valueToCode(block, 'inputSize', Blockly.Python.ORDER_ATOMIC);
  var code = RETINA_COLOR_RANDOM + " = cv2.bioinspired.createRetinaFastToneMapping("+inputSize+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_RETINA_COLOR_RANDOM_createTransientAreasSegmentationModule'] = function(block) {
  var RETINA_COLOR_RANDOM = block.getFieldValue('RETINA_COLOR_RANDOM');
  var inputSize = Blockly.Python.valueToCode(block, 'inputSize', Blockly.Python.ORDER_ATOMIC);
  var code = RETINA_COLOR_RANDOM + " = cv2.bioinspired.createTransientAreasSegmentationModule("+inputSize+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_RetinaFastToneMapping_applyFastToneMapping'] = function(block) {
  var RetinaFastToneMapping = block.getFieldValue('RetinaFastToneMapping');
  var inputImage = Blockly.Python.valueToCode(block, 'inputImage', Blockly.Python.ORDER_ATOMIC);
  var code = RetinaFastToneMapping + ".applyFastToneMapping("+inputImage+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_RetinaFastToneMapping_setup'] = function(block) {
  var RetinaFastToneMapping = block.getFieldValue('RetinaFastToneMapping');
  var code = RetinaFastToneMapping + ".setup()\n"
  return code;
};
Blockly.Python['bioinspired_Retina_getInputSize'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".getInputSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_Retina_getOutputSize'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".getOutputSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_Retina_setup'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".setup()\n"
  return code;
};
Blockly.Python['bioinspired_Retina_getParameters'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".getParameters()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_Retina_printSetup'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".printSetup()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_Retina_write'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var fs = Blockly.Python.valueToCode(block, 'fs', Blockly.Python.ORDER_ATOMIC);
  var code = Retina + ".write("+fs+")\n"
  return code;
};
Blockly.Python['bioinspired_Retina_setupOPLandIPLParvoChannel'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".setupOPLandIPLParvoChannel()\n"
  return code;
};
Blockly.Python['bioinspired_Retina_setupIPLMagnoChannel'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".setupIPLMagnoChannel()\n"
  return code;
};
Blockly.Python['bioinspired_Retina_run'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var inputImage = Blockly.Python.valueToCode(block, 'inputImage', Blockly.Python.ORDER_ATOMIC);
  var code = Retina + ".run("+inputImage+")\n"
  return code;
};
Blockly.Python['bioinspired_Retina_applyFastToneMapping'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var inputImage = Blockly.Python.valueToCode(block, 'inputImage', Blockly.Python.ORDER_ATOMIC);
  var code = Retina + ".applyFastToneMapping("+inputImage+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_Retina_getParvo'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".getParvo)"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_Retina_getParvoRAW'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".getParvoRAW)"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_Retina_getMagno'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".getMagno)"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_Retina_getMagnoRAW'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".getMagnoRAW)"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_Retina_setColorSaturation'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".setColorSaturation()\n"
  return code;
};
Blockly.Python['bioinspired_Retina_clearBuffers'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var code = Retina + ".clearBuffers()\n"
  return code;
};
Blockly.Python['bioinspired_Retina_activateMovingContoursProcessing'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var activate = Blockly.Python.valueToCode(block, 'activate', Blockly.Python.ORDER_ATOMIC);
  var code = Retina + ".activateMovingContoursProcessing("+activate+")\n"
  return code;
};
Blockly.Python['bioinspired_Retina_activateContoursProcessing'] = function(block) {
  var Retina = block.getFieldValue('Retina');
  var activate = Blockly.Python.valueToCode(block, 'activate', Blockly.Python.ORDER_ATOMIC);
  var code = Retina + ".activateContoursProcessing("+activate+")\n"
  return code;
};
Blockly.Python['bioinspired_TransientAreasSegmentationModule_getSize'] = function(block) {
  var TransientAreasSegmentationModule = block.getFieldValue('TransientAreasSegmentationModule');
  var code = TransientAreasSegmentationModule + ".getSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_TransientAreasSegmentationModule_setup'] = function(block) {
  var TransientAreasSegmentationModule = block.getFieldValue('TransientAreasSegmentationModule');
  var code = TransientAreasSegmentationModule + ".setup()\n"
  return code;
};
Blockly.Python['bioinspired_TransientAreasSegmentationModule_getParameters'] = function(block) {
  var TransientAreasSegmentationModule = block.getFieldValue('TransientAreasSegmentationModule');
  var code = TransientAreasSegmentationModule + ".getParameters()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_TransientAreasSegmentationModule_printSetup'] = function(block) {
  var TransientAreasSegmentationModule = block.getFieldValue('TransientAreasSegmentationModule');
  var code = TransientAreasSegmentationModule + ".printSetup()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_TransientAreasSegmentationModule_write'] = function(block) {
  var TransientAreasSegmentationModule = block.getFieldValue('TransientAreasSegmentationModule');
  var fs = Blockly.Python.valueToCode(block, 'fs', Blockly.Python.ORDER_ATOMIC);
  var code = TransientAreasSegmentationModule + ".write("+fs+")\n"
  return code;
};
Blockly.Python['bioinspired_TransientAreasSegmentationModule_run'] = function(block) {
  var TransientAreasSegmentationModule = block.getFieldValue('TransientAreasSegmentationModule');
  var inputToSegment = Blockly.Python.valueToCode(block, 'inputToSegment', Blockly.Python.ORDER_ATOMIC);
  var code = TransientAreasSegmentationModule + ".run("+inputToSegment+")\n"
  return code;
};
Blockly.Python['bioinspired_TransientAreasSegmentationModule_getSegmentationPicture'] = function(block) {
  var TransientAreasSegmentationModule = block.getFieldValue('TransientAreasSegmentationModule');
  var code = TransientAreasSegmentationModule + ".getSegmentationPicture)"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bioinspired_TransientAreasSegmentationModule_clearAllBuffers'] = function(block) {
  var TransientAreasSegmentationModule = block.getFieldValue('TransientAreasSegmentationModule');
  var code = TransientAreasSegmentationModule + ".clearAllBuffers()\n"
  return code;
};
Blockly.Python['stitching_createStitcher'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var code = Stitcher + " = cv2.createStitcher()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['stitching_Stitcher_registrationResol'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var code = Stitcher + ".registrationResol()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['stitching_Stitcher_setRegistrationResol'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var resol_mpx = block.getFieldValue('resol_mpx');
  var code = Stitcher + ".setRegistrationResol("+resol_mpx+")\n"
  return code;
};
Blockly.Python['stitching_Stitcher_seamEstimationResol'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var code = Stitcher + ".seamEstimationResol()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['stitching_Stitcher_setSeamEstimationResol'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var resol_mpx = block.getFieldValue('resol_mpx');
  var code = Stitcher + ".setSeamEstimationResol("+resol_mpx+")\n"
  return code;
};
Blockly.Python['stitching_Stitcher_compositingResol'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var code = Stitcher + ".compositingResol()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['stitching_Stitcher_setCompositingResol'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var resol_mpx = block.getFieldValue('resol_mpx');
  var code = Stitcher + ".setCompositingResol("+resol_mpx+")\n"
  return code;
};
Blockly.Python['stitching_Stitcher_panoConfidenceThresh'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var code = Stitcher + ".panoConfidenceThresh()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['stitching_Stitcher_setPanoConfidenceThresh'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var conf_thresh = block.getFieldValue('conf_thresh');
  var code = Stitcher + ".setPanoConfidenceThresh("+conf_thresh+")\n"
  return code;
};
Blockly.Python['stitching_Stitcher_waveCorrection'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var code = Stitcher + ".waveCorrection()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['stitching_Stitcher_setWaveCorrection'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var flag = Blockly.Python.valueToCode(block, 'flag', Blockly.Python.ORDER_ATOMIC);
  var code = Stitcher + ".setWaveCorrection("+flag+")\n"
  return code;
};
Blockly.Python['stitching_Stitcher_estimateTransform'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var images = Blockly.Python.valueToCode(block, 'images', Blockly.Python.ORDER_ATOMIC);
  var code = Stitcher + ".estimateTransform("+images+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['stitching_Stitcher_composePanorama'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var code = Stitcher + ".composePanorama)"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['stitching_Stitcher_stitch'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var images = Blockly.Python.valueToCode(block, 'images', Blockly.Python.ORDER_ATOMIC);
  var code = Stitcher + ".stitch("+images+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['stitching_Stitcher_workScale'] = function(block) {
  var Stitcher = block.getFieldValue('Stitcher');
  var code = Stitcher + ".workScale()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_inpaint'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var inpaintMask = Blockly.Python.valueToCode(block, 'inpaintMask', Blockly.Python.ORDER_ATOMIC);
  var inpaintRadius = block.getFieldValue('inpaintRadius');
  var flags = block.getFieldValue('flags');
  var code = "cv2.inpaint("+src+","+inpaintMask+","+inpaintRadius+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_fastNlMeansDenoising'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.fastNlMeansDenoising("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_fastNlMeansDenoisingColored'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.fastNlMeansDenoisingColored("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_fastNlMeansDenoisingMulti'] = function(block) {
  var srcImgs = Blockly.Python.valueToCode(block, 'srcImgs', Blockly.Python.ORDER_ATOMIC);
  var imgToDenoiseIndex = block.getFieldValue('imgToDenoiseIndex');
  var temporalWindowSize = block.getFieldValue('temporalWindowSize');
  var code = "cv2.fastNlMeansDenoisingMulti("+srcImgs+","+imgToDenoiseIndex+","+temporalWindowSize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_fastNlMeansDenoisingColoredMulti'] = function(block) {
  var srcImgs = Blockly.Python.valueToCode(block, 'srcImgs', Blockly.Python.ORDER_ATOMIC);
  var imgToDenoiseIndex = block.getFieldValue('imgToDenoiseIndex');
  var temporalWindowSize = block.getFieldValue('temporalWindowSize');
  var code = "cv2.fastNlMeansDenoisingColoredMulti("+srcImgs+","+imgToDenoiseIndex+","+temporalWindowSize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_denoise_TVL1'] = function(block) {
  var observations = Blockly.Python.valueToCode(block, 'observations', Blockly.Python.ORDER_ATOMIC);
  var result = Blockly.Python.valueToCode(block, 'result', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.denoise_TVL1("+observations+","+result+")\n"
  return code;
};
Blockly.Python['photo_createTonemap'] = function(block) {
  var Tonemap = block.getFieldValue('Tonemap');
  var code = Tonemap + " = cv2.createTonemap()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_createTonemapDrago'] = function(block) {
  var TonemapDrago = block.getFieldValue('TonemapDrago');
  var code = TonemapDrago + " = cv2.createTonemapDrago()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_createTonemapDurand'] = function(block) {
  var TonemapDurand = block.getFieldValue('TonemapDurand');
  var code = TonemapDurand + " = cv2.createTonemapDurand()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_createTonemapReinhard'] = function(block) {
  var TonemapReinhard = block.getFieldValue('TonemapReinhard');
  var code = TonemapReinhard + " = cv2.createTonemapReinhard()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_createTonemapMantiuk'] = function(block) {
  var TonemapMantiuk = block.getFieldValue('TonemapMantiuk');
  var code = TonemapMantiuk + " = cv2.createTonemapMantiuk()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_createAlignMTB'] = function(block) {
  var AlignMTB = block.getFieldValue('AlignMTB');
  var code = AlignMTB + " = cv2.createAlignMTB()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_createCalibrateDebevec'] = function(block) {
  var CalibrateDebevec = block.getFieldValue('CalibrateDebevec');
  var code = CalibrateDebevec + " = cv2.createCalibrateDebevec()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_createCalibrateRobertson'] = function(block) {
  var CalibrateRobertson = block.getFieldValue('CalibrateRobertson');
  var code = CalibrateRobertson + " = cv2.createCalibrateRobertson()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_createMergeDebevec'] = function(block) {
  var MergeDebevec = block.getFieldValue('MergeDebevec');
  var code = MergeDebevec + " = cv2.createMergeDebevec()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_createMergeMertens'] = function(block) {
  var MergeMertens = block.getFieldValue('MergeMertens');
  var code = MergeMertens + " = cv2.createMergeMertens()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_createMergeRobertson'] = function(block) {
  var MergeRobertson = block.getFieldValue('MergeRobertson');
  var code = MergeRobertson + " = cv2.createMergeRobertson()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_decolor'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.decolor("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_seamlessClone'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var mask = Blockly.Python.valueToCode(block, 'mask', Blockly.Python.ORDER_ATOMIC);
  var p = Blockly.Python.valueToCode(block, 'p', Blockly.Python.ORDER_ATOMIC);
  var flags = block.getFieldValue('flags');
  var code = "cv2.seamlessClone("+src+","+dst+","+mask+","+p+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_colorChange'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var mask = Blockly.Python.valueToCode(block, 'mask', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.colorChange("+src+","+mask+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_illuminationChange'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var mask = Blockly.Python.valueToCode(block, 'mask', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.illuminationChange("+src+","+mask+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_textureFlattening'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var mask = Blockly.Python.valueToCode(block, 'mask', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.textureFlattening("+src+","+mask+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_edgePreservingFilter'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.edgePreservingFilter("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_detailEnhance'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.detailEnhance("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_pencilSketch'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.pencilSketch("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_stylization'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.stylization("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_CalibrateRobertson_getMaxIter'] = function(block) {
  var CalibrateRobertson = block.getFieldValue('CalibrateRobertson');
  var code = CalibrateRobertson + ".getMaxIter()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_CalibrateRobertson_setMaxIter'] = function(block) {
  var CalibrateRobertson = block.getFieldValue('CalibrateRobertson');
  var max_iter = block.getFieldValue('max_iter');
  var code = CalibrateRobertson + ".setMaxIter("+max_iter+")\n"
  return code;
};
Blockly.Python['photo_CalibrateRobertson_getThreshold'] = function(block) {
  var CalibrateRobertson = block.getFieldValue('CalibrateRobertson');
  var code = CalibrateRobertson + ".getThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_CalibrateRobertson_setThreshold'] = function(block) {
  var CalibrateRobertson = block.getFieldValue('CalibrateRobertson');
  var threshold = block.getFieldValue('threshold');
  var code = CalibrateRobertson + ".setThreshold("+threshold+")\n"
  return code;
};
Blockly.Python['photo_CalibrateRobertson_getRadiance'] = function(block) {
  var CalibrateRobertson = block.getFieldValue('CalibrateRobertson');
  var code = CalibrateRobertson + ".getRadiance()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapMantiuk_getScale'] = function(block) {
  var TonemapMantiuk = block.getFieldValue('TonemapMantiuk');
  var code = TonemapMantiuk + ".getScale()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapMantiuk_setScale'] = function(block) {
  var TonemapMantiuk = block.getFieldValue('TonemapMantiuk');
  var scale = block.getFieldValue('scale');
  var code = TonemapMantiuk + ".setScale("+scale+")\n"
  return code;
};
Blockly.Python['photo_TonemapMantiuk_getSaturation'] = function(block) {
  var TonemapMantiuk = block.getFieldValue('TonemapMantiuk');
  var code = TonemapMantiuk + ".getSaturation()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapMantiuk_setSaturation'] = function(block) {
  var TonemapMantiuk = block.getFieldValue('TonemapMantiuk');
  var saturation = block.getFieldValue('saturation');
  var code = TonemapMantiuk + ".setSaturation("+saturation+")\n"
  return code;
};
Blockly.Python['photo_TonemapDurand_getSaturation'] = function(block) {
  var TonemapDurand = block.getFieldValue('TonemapDurand');
  var code = TonemapDurand + ".getSaturation()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapDurand_setSaturation'] = function(block) {
  var TonemapDurand = block.getFieldValue('TonemapDurand');
  var saturation = block.getFieldValue('saturation');
  var code = TonemapDurand + ".setSaturation("+saturation+")\n"
  return code;
};
Blockly.Python['photo_TonemapDurand_getContrast'] = function(block) {
  var TonemapDurand = block.getFieldValue('TonemapDurand');
  var code = TonemapDurand + ".getContrast()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapDurand_setContrast'] = function(block) {
  var TonemapDurand = block.getFieldValue('TonemapDurand');
  var contrast = block.getFieldValue('contrast');
  var code = TonemapDurand + ".setContrast("+contrast+")\n"
  return code;
};
Blockly.Python['photo_TonemapDurand_getSigmaSpace'] = function(block) {
  var TonemapDurand = block.getFieldValue('TonemapDurand');
  var code = TonemapDurand + ".getSigmaSpace()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapDurand_setSigmaSpace'] = function(block) {
  var TonemapDurand = block.getFieldValue('TonemapDurand');
  var sigma_space = block.getFieldValue('sigma_space');
  var code = TonemapDurand + ".setSigmaSpace("+sigma_space+")\n"
  return code;
};
Blockly.Python['photo_TonemapDurand_getSigmaColor'] = function(block) {
  var TonemapDurand = block.getFieldValue('TonemapDurand');
  var code = TonemapDurand + ".getSigmaColor()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapDurand_setSigmaColor'] = function(block) {
  var TonemapDurand = block.getFieldValue('TonemapDurand');
  var sigma_color = block.getFieldValue('sigma_color');
  var code = TonemapDurand + ".setSigmaColor("+sigma_color+")\n"
  return code;
};
Blockly.Python['photo_AlignExposures_process'] = function(block) {
  var AlignExposures = block.getFieldValue('AlignExposures');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
  var response = Blockly.Python.valueToCode(block, 'response', Blockly.Python.ORDER_ATOMIC);
  var code = AlignExposures + ".process("+src+","+dst+","+times+","+response+")\n"
  return code;
};
Blockly.Python['photo_CalibrateDebevec_getLambda'] = function(block) {
  var CalibrateDebevec = block.getFieldValue('CalibrateDebevec');
  var code = CalibrateDebevec + ".getLambda()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_CalibrateDebevec_setLambda'] = function(block) {
  var CalibrateDebevec = block.getFieldValue('CalibrateDebevec');
  var lambda = block.getFieldValue('lambda');
  var code = CalibrateDebevec + ".setLambda("+lambda+")\n"
  return code;
};
Blockly.Python['photo_CalibrateDebevec_getSamples'] = function(block) {
  var CalibrateDebevec = block.getFieldValue('CalibrateDebevec');
  var code = CalibrateDebevec + ".getSamples()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_CalibrateDebevec_setSamples'] = function(block) {
  var CalibrateDebevec = block.getFieldValue('CalibrateDebevec');
  var samples = block.getFieldValue('samples');
  var code = CalibrateDebevec + ".setSamples("+samples+")\n"
  return code;
};
Blockly.Python['photo_CalibrateDebevec_getRandom'] = function(block) {
  var CalibrateDebevec = block.getFieldValue('CalibrateDebevec');
  var code = CalibrateDebevec + ".getRandom()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_CalibrateDebevec_setRandom'] = function(block) {
  var CalibrateDebevec = block.getFieldValue('CalibrateDebevec');
  var random = Blockly.Python.valueToCode(block, 'random', Blockly.Python.ORDER_ATOMIC);
  var code = CalibrateDebevec + ".setRandom("+random+")\n"
  return code;
};
Blockly.Python['photo_TonemapReinhard_getIntensity'] = function(block) {
  var TonemapReinhard = block.getFieldValue('TonemapReinhard');
  var code = TonemapReinhard + ".getIntensity()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapReinhard_setIntensity'] = function(block) {
  var TonemapReinhard = block.getFieldValue('TonemapReinhard');
  var intensity = block.getFieldValue('intensity');
  var code = TonemapReinhard + ".setIntensity("+intensity+")\n"
  return code;
};
Blockly.Python['photo_TonemapReinhard_getLightAdaptation'] = function(block) {
  var TonemapReinhard = block.getFieldValue('TonemapReinhard');
  var code = TonemapReinhard + ".getLightAdaptation()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapReinhard_setLightAdaptation'] = function(block) {
  var TonemapReinhard = block.getFieldValue('TonemapReinhard');
  var light_adapt = block.getFieldValue('light_adapt');
  var code = TonemapReinhard + ".setLightAdaptation("+light_adapt+")\n"
  return code;
};
Blockly.Python['photo_TonemapReinhard_getColorAdaptation'] = function(block) {
  var TonemapReinhard = block.getFieldValue('TonemapReinhard');
  var code = TonemapReinhard + ".getColorAdaptation()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapReinhard_setColorAdaptation'] = function(block) {
  var TonemapReinhard = block.getFieldValue('TonemapReinhard');
  var color_adapt = block.getFieldValue('color_adapt');
  var code = TonemapReinhard + ".setColorAdaptation("+color_adapt+")\n"
  return code;
};
Blockly.Python['photo_MergeRobertson_process'] = function(block) {
  var MergeRobertson = block.getFieldValue('MergeRobertson');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
  var response = Blockly.Python.valueToCode(block, 'response', Blockly.Python.ORDER_ATOMIC);
  var code = MergeRobertson + ".process("+src+","+times+","+response+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_CalibrateCRF_process'] = function(block) {
  var CalibrateCRF = block.getFieldValue('CalibrateCRF');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
  var code = CalibrateCRF + ".process("+src+","+times+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapDrago_getSaturation'] = function(block) {
  var TonemapDrago = block.getFieldValue('TonemapDrago');
  var code = TonemapDrago + ".getSaturation()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapDrago_setSaturation'] = function(block) {
  var TonemapDrago = block.getFieldValue('TonemapDrago');
  var saturation = block.getFieldValue('saturation');
  var code = TonemapDrago + ".setSaturation("+saturation+")\n"
  return code;
};
Blockly.Python['photo_TonemapDrago_getBias'] = function(block) {
  var TonemapDrago = block.getFieldValue('TonemapDrago');
  var code = TonemapDrago + ".getBias()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_TonemapDrago_setBias'] = function(block) {
  var TonemapDrago = block.getFieldValue('TonemapDrago');
  var bias = block.getFieldValue('bias');
  var code = TonemapDrago + ".setBias("+bias+")\n"
  return code;
};
Blockly.Python['photo_AlignMTB_process'] = function(block) {
  var AlignMTB = block.getFieldValue('AlignMTB');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
  var response = Blockly.Python.valueToCode(block, 'response', Blockly.Python.ORDER_ATOMIC);
  var code = AlignMTB + ".process("+src+","+dst+","+times+","+response+")\n"
  return code;
};
Blockly.Python['photo_AlignMTB_calculateShift'] = function(block) {
  var AlignMTB = block.getFieldValue('AlignMTB');
  var img0 = Blockly.Python.valueToCode(block, 'img0', Blockly.Python.ORDER_ATOMIC);
  var img1 = Blockly.Python.valueToCode(block, 'img1', Blockly.Python.ORDER_ATOMIC);
  var code = AlignMTB + ".calculateShift("+img0+","+img1+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_AlignMTB_shiftMat'] = function(block) {
  var AlignMTB = block.getFieldValue('AlignMTB');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var shift = Blockly.Python.valueToCode(block, 'shift', Blockly.Python.ORDER_ATOMIC);
  var code = AlignMTB + ".shiftMat("+src+","+shift+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_AlignMTB_computeBitmaps'] = function(block) {
  var AlignMTB = block.getFieldValue('AlignMTB');
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var code = AlignMTB + ".computeBitmaps("+img+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_AlignMTB_getMaxBits'] = function(block) {
  var AlignMTB = block.getFieldValue('AlignMTB');
  var code = AlignMTB + ".getMaxBits()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_AlignMTB_setMaxBits'] = function(block) {
  var AlignMTB = block.getFieldValue('AlignMTB');
  var max_bits = block.getFieldValue('max_bits');
  var code = AlignMTB + ".setMaxBits("+max_bits+")\n"
  return code;
};
Blockly.Python['photo_AlignMTB_getExcludeRange'] = function(block) {
  var AlignMTB = block.getFieldValue('AlignMTB');
  var code = AlignMTB + ".getExcludeRange()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_AlignMTB_setExcludeRange'] = function(block) {
  var AlignMTB = block.getFieldValue('AlignMTB');
  var exclude_range = block.getFieldValue('exclude_range');
  var code = AlignMTB + ".setExcludeRange("+exclude_range+")\n"
  return code;
};
Blockly.Python['photo_AlignMTB_getCut'] = function(block) {
  var AlignMTB = block.getFieldValue('AlignMTB');
  var code = AlignMTB + ".getCut()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_AlignMTB_setCut'] = function(block) {
  var AlignMTB = block.getFieldValue('AlignMTB');
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = AlignMTB + ".setCut("+value+")\n"
  return code;
};
Blockly.Python['photo_MergeDebevec_process'] = function(block) {
  var MergeDebevec = block.getFieldValue('MergeDebevec');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
  var response = Blockly.Python.valueToCode(block, 'response', Blockly.Python.ORDER_ATOMIC);
  var code = MergeDebevec + ".process("+src+","+times+","+response+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_MergeMertens_process'] = function(block) {
  var MergeMertens = block.getFieldValue('MergeMertens');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
  var response = Blockly.Python.valueToCode(block, 'response', Blockly.Python.ORDER_ATOMIC);
  var code = MergeMertens + ".process("+src+","+times+","+response+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_MergeMertens_getContrastWeight'] = function(block) {
  var MergeMertens = block.getFieldValue('MergeMertens');
  var code = MergeMertens + ".getContrastWeight()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_MergeMertens_setContrastWeight'] = function(block) {
  var MergeMertens = block.getFieldValue('MergeMertens');
  var contrast_weiht = block.getFieldValue('contrast_weiht');
  var code = MergeMertens + ".setContrastWeight("+contrast_weiht+")\n"
  return code;
};
Blockly.Python['photo_MergeMertens_getSaturationWeight'] = function(block) {
  var MergeMertens = block.getFieldValue('MergeMertens');
  var code = MergeMertens + ".getSaturationWeight()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_MergeMertens_setSaturationWeight'] = function(block) {
  var MergeMertens = block.getFieldValue('MergeMertens');
  var saturation_weight = block.getFieldValue('saturation_weight');
  var code = MergeMertens + ".setSaturationWeight("+saturation_weight+")\n"
  return code;
};
Blockly.Python['photo_MergeMertens_getExposureWeight'] = function(block) {
  var MergeMertens = block.getFieldValue('MergeMertens');
  var code = MergeMertens + ".getExposureWeight()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_MergeMertens_setExposureWeight'] = function(block) {
  var MergeMertens = block.getFieldValue('MergeMertens');
  var exposure_weight = block.getFieldValue('exposure_weight');
  var code = MergeMertens + ".setExposureWeight("+exposure_weight+")\n"
  return code;
};
Blockly.Python['photo_MergeExposures_process'] = function(block) {
  var MergeExposures = block.getFieldValue('MergeExposures');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
  var response = Blockly.Python.valueToCode(block, 'response', Blockly.Python.ORDER_ATOMIC);
  var code = MergeExposures + ".process("+src+","+times+","+response+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_Tonemap_process'] = function(block) {
  var Tonemap = block.getFieldValue('Tonemap');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = Tonemap + ".process("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_Tonemap_getGamma'] = function(block) {
  var Tonemap = block.getFieldValue('Tonemap');
  var code = Tonemap + ".getGamma()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['photo_Tonemap_setGamma'] = function(block) {
  var Tonemap = block.getFieldValue('Tonemap');
  var gamma = block.getFieldValue('gamma');
  var code = Tonemap + ".setGamma("+gamma+")\n"
  return code;
};
Blockly.Python['imgcodecs_imread'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.imread("+filename+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgcodecs_imreadmulti'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  var mats = Blockly.Python.valueToCode(block, 'mats', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.imreadmulti("+filename+","+mats+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgcodecs_imwrite'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.imwrite("+filename+","+img+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgcodecs_imdecode'] = function(block) {
  var buf = Blockly.Python.valueToCode(block, 'buf', Blockly.Python.ORDER_ATOMIC);
  var flags = block.getFieldValue('flags');
  var code = "cv2.imdecode("+buf+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['imgcodecs_imencode'] = function(block) {
  var ext = Blockly.Python.valueToCode(block, 'ext', Blockly.Python.ORDER_ATOMIC);
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.imencode("+ext+","+img+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_Rodrigues'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.Rodrigues("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_findHomography'] = function(block) {
  var srcPoints = Blockly.Python.valueToCode(block, 'srcPoints', Blockly.Python.ORDER_ATOMIC);
  var dstPoints = Blockly.Python.valueToCode(block, 'dstPoints', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.findHomography("+srcPoints+","+dstPoints+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_RQDecomp3x3'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.RQDecomp3x3("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_decomposeProjectionMatrix'] = function(block) {
  var projMatrix = Blockly.Python.valueToCode(block, 'projMatrix', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.decomposeProjectionMatrix("+projMatrix+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_matMulDeriv'] = function(block) {
  var A = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var B = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.matMulDeriv("+A+","+B+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_composeRT'] = function(block) {
  var rvec1 = Blockly.Python.valueToCode(block, 'rvec1', Blockly.Python.ORDER_ATOMIC);
  var tvec1 = Blockly.Python.valueToCode(block, 'tvec1', Blockly.Python.ORDER_ATOMIC);
  var rvec2 = Blockly.Python.valueToCode(block, 'rvec2', Blockly.Python.ORDER_ATOMIC);
  var tvec2 = Blockly.Python.valueToCode(block, 'tvec2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.composeRT("+rvec1+","+tvec1+","+rvec2+","+tvec2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_projectPoints'] = function(block) {
  var objectPoints = Blockly.Python.valueToCode(block, 'objectPoints', Blockly.Python.ORDER_ATOMIC);
  var rvec = Blockly.Python.valueToCode(block, 'rvec', Blockly.Python.ORDER_ATOMIC);
  var tvec = Blockly.Python.valueToCode(block, 'tvec', Blockly.Python.ORDER_ATOMIC);
  var cameraMatrix = Blockly.Python.valueToCode(block, 'cameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs = Blockly.Python.valueToCode(block, 'distCoeffs', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.projectPoints("+objectPoints+","+rvec+","+tvec+","+cameraMatrix+","+distCoeffs+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_solvePnP'] = function(block) {
  var objectPoints = Blockly.Python.valueToCode(block, 'objectPoints', Blockly.Python.ORDER_ATOMIC);
  var imagePoints = Blockly.Python.valueToCode(block, 'imagePoints', Blockly.Python.ORDER_ATOMIC);
  var cameraMatrix = Blockly.Python.valueToCode(block, 'cameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs = Blockly.Python.valueToCode(block, 'distCoeffs', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.solvePnP("+objectPoints+","+imagePoints+","+cameraMatrix+","+distCoeffs+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_solvePnPRansac'] = function(block) {
  var objectPoints = Blockly.Python.valueToCode(block, 'objectPoints', Blockly.Python.ORDER_ATOMIC);
  var imagePoints = Blockly.Python.valueToCode(block, 'imagePoints', Blockly.Python.ORDER_ATOMIC);
  var cameraMatrix = Blockly.Python.valueToCode(block, 'cameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs = Blockly.Python.valueToCode(block, 'distCoeffs', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.solvePnPRansac("+objectPoints+","+imagePoints+","+cameraMatrix+","+distCoeffs+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_initCameraMatrix2D'] = function(block) {
  var objectPoints = Blockly.Python.valueToCode(block, 'objectPoints', Blockly.Python.ORDER_ATOMIC);
  var imagePoints = Blockly.Python.valueToCode(block, 'imagePoints', Blockly.Python.ORDER_ATOMIC);
  var imageSize = Blockly.Python.valueToCode(block, 'imageSize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.initCameraMatrix2D("+objectPoints+","+imagePoints+","+imageSize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_findChessboardCorners'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var patternSize = Blockly.Python.valueToCode(block, 'patternSize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.findChessboardCorners("+image+","+patternSize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_drawChessboardCorners'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var patternSize = Blockly.Python.valueToCode(block, 'patternSize', Blockly.Python.ORDER_ATOMIC);
  var corners = Blockly.Python.valueToCode(block, 'corners', Blockly.Python.ORDER_ATOMIC);
  var patternWasFound = Blockly.Python.valueToCode(block, 'patternWasFound', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.drawChessboardCorners("+image+","+patternSize+","+corners+","+patternWasFound+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_findCirclesGrid'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var patternSize = Blockly.Python.valueToCode(block, 'patternSize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.findCirclesGrid("+image+","+patternSize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_calibrateCamera'] = function(block) {
  var objectPoints = Blockly.Python.valueToCode(block, 'objectPoints', Blockly.Python.ORDER_ATOMIC);
  var imagePoints = Blockly.Python.valueToCode(block, 'imagePoints', Blockly.Python.ORDER_ATOMIC);
  var imageSize = Blockly.Python.valueToCode(block, 'imageSize', Blockly.Python.ORDER_ATOMIC);
  var cameraMatrix = Blockly.Python.valueToCode(block, 'cameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs = Blockly.Python.valueToCode(block, 'distCoeffs', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.calibrateCamera("+objectPoints+","+imagePoints+","+imageSize+","+cameraMatrix+","+distCoeffs+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_calibrationMatrixValues'] = function(block) {
  var cameraMatrix = Blockly.Python.valueToCode(block, 'cameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var imageSize = Blockly.Python.valueToCode(block, 'imageSize', Blockly.Python.ORDER_ATOMIC);
  var apertureWidth = block.getFieldValue('apertureWidth');
  var apertureHeight = block.getFieldValue('apertureHeight');
  var code = "cv2.calibrationMatrixValues("+cameraMatrix+","+imageSize+","+apertureWidth+","+apertureHeight+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_stereoCalibrate'] = function(block) {
  var objectPoints = Blockly.Python.valueToCode(block, 'objectPoints', Blockly.Python.ORDER_ATOMIC);
  var imagePoints1 = Blockly.Python.valueToCode(block, 'imagePoints1', Blockly.Python.ORDER_ATOMIC);
  var imagePoints2 = Blockly.Python.valueToCode(block, 'imagePoints2', Blockly.Python.ORDER_ATOMIC);
  var cameraMatrix1 = Blockly.Python.valueToCode(block, 'cameraMatrix1', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs1 = Blockly.Python.valueToCode(block, 'distCoeffs1', Blockly.Python.ORDER_ATOMIC);
  var cameraMatrix2 = Blockly.Python.valueToCode(block, 'cameraMatrix2', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs2 = Blockly.Python.valueToCode(block, 'distCoeffs2', Blockly.Python.ORDER_ATOMIC);
  var imageSize = Blockly.Python.valueToCode(block, 'imageSize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.stereoCalibrate("+objectPoints+","+imagePoints1+","+imagePoints2+","+cameraMatrix1+","+distCoeffs1+","+cameraMatrix2+","+distCoeffs2+","+imageSize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_stereoRectify'] = function(block) {
  var cameraMatrix1 = Blockly.Python.valueToCode(block, 'cameraMatrix1', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs1 = Blockly.Python.valueToCode(block, 'distCoeffs1', Blockly.Python.ORDER_ATOMIC);
  var cameraMatrix2 = Blockly.Python.valueToCode(block, 'cameraMatrix2', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs2 = Blockly.Python.valueToCode(block, 'distCoeffs2', Blockly.Python.ORDER_ATOMIC);
  var imageSize = Blockly.Python.valueToCode(block, 'imageSize', Blockly.Python.ORDER_ATOMIC);
  var R = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var T = Blockly.Python.valueToCode(block, 'T', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.stereoRectify("+cameraMatrix1+","+distCoeffs1+","+cameraMatrix2+","+distCoeffs2+","+imageSize+","+R+","+T+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_stereoRectifyUncalibrated'] = function(block) {
  var points1 = Blockly.Python.valueToCode(block, 'points1', Blockly.Python.ORDER_ATOMIC);
  var points2 = Blockly.Python.valueToCode(block, 'points2', Blockly.Python.ORDER_ATOMIC);
  var F = Blockly.Python.valueToCode(block, 'F', Blockly.Python.ORDER_ATOMIC);
  var imgSize = Blockly.Python.valueToCode(block, 'imgSize', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.stereoRectifyUncalibrated("+points1+","+points2+","+F+","+imgSize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_rectify3Collinear'] = function(block) {
  var cameraMatrix1 = Blockly.Python.valueToCode(block, 'cameraMatrix1', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs1 = Blockly.Python.valueToCode(block, 'distCoeffs1', Blockly.Python.ORDER_ATOMIC);
  var cameraMatrix2 = Blockly.Python.valueToCode(block, 'cameraMatrix2', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs2 = Blockly.Python.valueToCode(block, 'distCoeffs2', Blockly.Python.ORDER_ATOMIC);
  var cameraMatrix3 = Blockly.Python.valueToCode(block, 'cameraMatrix3', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs3 = Blockly.Python.valueToCode(block, 'distCoeffs3', Blockly.Python.ORDER_ATOMIC);
  var imgpt1 = Blockly.Python.valueToCode(block, 'imgpt1', Blockly.Python.ORDER_ATOMIC);
  var imgpt3 = Blockly.Python.valueToCode(block, 'imgpt3', Blockly.Python.ORDER_ATOMIC);
  var imageSize = Blockly.Python.valueToCode(block, 'imageSize', Blockly.Python.ORDER_ATOMIC);
  var R12 = Blockly.Python.valueToCode(block, 'R12', Blockly.Python.ORDER_ATOMIC);
  var T12 = Blockly.Python.valueToCode(block, 'T12', Blockly.Python.ORDER_ATOMIC);
  var R13 = Blockly.Python.valueToCode(block, 'R13', Blockly.Python.ORDER_ATOMIC);
  var T13 = Blockly.Python.valueToCode(block, 'T13', Blockly.Python.ORDER_ATOMIC);
  var alpha = block.getFieldValue('alpha');
  var newImgSize = Blockly.Python.valueToCode(block, 'newImgSize', Blockly.Python.ORDER_ATOMIC);
  var flags = block.getFieldValue('flags');
  var code = "cv2.rectify3Collinear("+cameraMatrix1+","+distCoeffs1+","+cameraMatrix2+","+distCoeffs2+","+cameraMatrix3+","+distCoeffs3+","+imgpt1+","+imgpt3+","+imageSize+","+R12+","+T12+","+R13+","+T13+","+alpha+","+newImgSize+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_getOptimalNewCameraMatrix'] = function(block) {
  var cameraMatrix = Blockly.Python.valueToCode(block, 'cameraMatrix', Blockly.Python.ORDER_ATOMIC);
  var distCoeffs = Blockly.Python.valueToCode(block, 'distCoeffs', Blockly.Python.ORDER_ATOMIC);
  var imageSize = Blockly.Python.valueToCode(block, 'imageSize', Blockly.Python.ORDER_ATOMIC);
  var alpha = block.getFieldValue('alpha');
  var code = "cv2.getOptimalNewCameraMatrix("+cameraMatrix+","+distCoeffs+","+imageSize+","+alpha+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_convertPointsToHomogeneous'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.convertPointsToHomogeneous("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_convertPointsFromHomogeneous'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.convertPointsFromHomogeneous("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_findFundamentalMat'] = function(block) {
  var points1 = Blockly.Python.valueToCode(block, 'points1', Blockly.Python.ORDER_ATOMIC);
  var points2 = Blockly.Python.valueToCode(block, 'points2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.findFundamentalMat("+points1+","+points2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_findEssentialMat'] = function(block) {
  var points1 = Blockly.Python.valueToCode(block, 'points1', Blockly.Python.ORDER_ATOMIC);
  var points2 = Blockly.Python.valueToCode(block, 'points2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.findEssentialMat("+points1+","+points2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_decomposeEssentialMat'] = function(block) {
  var E = Blockly.Python.valueToCode(block, 'E', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.decomposeEssentialMat("+E+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_recoverPose'] = function(block) {
  var E = Blockly.Python.valueToCode(block, 'E', Blockly.Python.ORDER_ATOMIC);
  var points1 = Blockly.Python.valueToCode(block, 'points1', Blockly.Python.ORDER_ATOMIC);
  var points2 = Blockly.Python.valueToCode(block, 'points2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.recoverPose("+E+","+points1+","+points2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_computeCorrespondEpilines'] = function(block) {
  var points = Blockly.Python.valueToCode(block, 'points', Blockly.Python.ORDER_ATOMIC);
  var whichImage = block.getFieldValue('whichImage');
  var F = Blockly.Python.valueToCode(block, 'F', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.computeCorrespondEpilines("+points+","+whichImage+","+F+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_triangulatePoints'] = function(block) {
  var projMatr1 = Blockly.Python.valueToCode(block, 'projMatr1', Blockly.Python.ORDER_ATOMIC);
  var projMatr2 = Blockly.Python.valueToCode(block, 'projMatr2', Blockly.Python.ORDER_ATOMIC);
  var projPoints1 = Blockly.Python.valueToCode(block, 'projPoints1', Blockly.Python.ORDER_ATOMIC);
  var projPoints2 = Blockly.Python.valueToCode(block, 'projPoints2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.triangulatePoints("+projMatr1+","+projMatr2+","+projPoints1+","+projPoints2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_correctMatches'] = function(block) {
  var F = Blockly.Python.valueToCode(block, 'F', Blockly.Python.ORDER_ATOMIC);
  var points1 = Blockly.Python.valueToCode(block, 'points1', Blockly.Python.ORDER_ATOMIC);
  var points2 = Blockly.Python.valueToCode(block, 'points2', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.correctMatches("+F+","+points1+","+points2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_filterSpeckles'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var newVal = block.getFieldValue('newVal');
  var maxSpeckleSize = block.getFieldValue('maxSpeckleSize');
  var maxDiff = block.getFieldValue('maxDiff');
  var code = "cv2.filterSpeckles("+img+","+newVal+","+maxSpeckleSize+","+maxDiff+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_getValidDisparityROI'] = function(block) {
  var roi1 = Blockly.Python.valueToCode(block, 'roi1', Blockly.Python.ORDER_ATOMIC);
  var roi2 = Blockly.Python.valueToCode(block, 'roi2', Blockly.Python.ORDER_ATOMIC);
  var minDisparity = block.getFieldValue('minDisparity');
  var numberOfDisparities = block.getFieldValue('numberOfDisparities');
  var SADWindowSize = block.getFieldValue('SADWindowSize');
  var code = "cv2.getValidDisparityROI("+roi1+","+roi2+","+minDisparity+","+numberOfDisparities+","+SADWindowSize+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_validateDisparity'] = function(block) {
  var disparity = Blockly.Python.valueToCode(block, 'disparity', Blockly.Python.ORDER_ATOMIC);
  var cost = Blockly.Python.valueToCode(block, 'cost', Blockly.Python.ORDER_ATOMIC);
  var minDisparity = block.getFieldValue('minDisparity');
  var numberOfDisparities = block.getFieldValue('numberOfDisparities');
  var code = "cv2.validateDisparity("+disparity+","+cost+","+minDisparity+","+numberOfDisparities+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_reprojectImageTo3D'] = function(block) {
  var disparity = Blockly.Python.valueToCode(block, 'disparity', Blockly.Python.ORDER_ATOMIC);
  var Q = Blockly.Python.valueToCode(block, 'Q', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.reprojectImageTo3D("+disparity+","+Q+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_estimateAffine3D'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.estimateAffine3D("+src+","+dst+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_decomposeHomographyMat'] = function(block) {
  var H = Blockly.Python.valueToCode(block, 'H', Blockly.Python.ORDER_ATOMIC);
  var K = Blockly.Python.valueToCode(block, 'K', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.decomposeHomographyMat("+H+","+K+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoBM_getPreFilterType'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var code = StereoBM + ".getPreFilterType()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoBM_setPreFilterType'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var preFilterType = block.getFieldValue('preFilterType');
  var code = StereoBM + ".setPreFilterType("+preFilterType+")\n"
  return code;
};
Blockly.Python['calib3d_StereoBM_getPreFilterSize'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var code = StereoBM + ".getPreFilterSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoBM_setPreFilterSize'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var preFilterSize = block.getFieldValue('preFilterSize');
  var code = StereoBM + ".setPreFilterSize("+preFilterSize+")\n"
  return code;
};
Blockly.Python['calib3d_StereoBM_getPreFilterCap'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var code = StereoBM + ".getPreFilterCap()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoBM_setPreFilterCap'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var preFilterCap = block.getFieldValue('preFilterCap');
  var code = StereoBM + ".setPreFilterCap("+preFilterCap+")\n"
  return code;
};
Blockly.Python['calib3d_StereoBM_getTextureThreshold'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var code = StereoBM + ".getTextureThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoBM_setTextureThreshold'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var textureThreshold = block.getFieldValue('textureThreshold');
  var code = StereoBM + ".setTextureThreshold("+textureThreshold+")\n"
  return code;
};
Blockly.Python['calib3d_StereoBM_getUniquenessRatio'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var code = StereoBM + ".getUniquenessRatio()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoBM_setUniquenessRatio'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var uniquenessRatio = block.getFieldValue('uniquenessRatio');
  var code = StereoBM + ".setUniquenessRatio("+uniquenessRatio+")\n"
  return code;
};
Blockly.Python['calib3d_StereoBM_getSmallerBlockSize'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var code = StereoBM + ".getSmallerBlockSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoBM_setSmallerBlockSize'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var blockSize = block.getFieldValue('blockSize');
  var code = StereoBM + ".setSmallerBlockSize("+blockSize+")\n"
  return code;
};
Blockly.Python['calib3d_StereoBM_getROI1'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var code = StereoBM + ".getROI1()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoBM_setROI1'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var roi1 = Blockly.Python.valueToCode(block, 'roi1', Blockly.Python.ORDER_ATOMIC);
  var code = StereoBM + ".setROI1("+roi1+")\n"
  return code;
};
Blockly.Python['calib3d_StereoBM_getROI2'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var code = StereoBM + ".getROI2()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoBM_setROI2'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var roi2 = Blockly.Python.valueToCode(block, 'roi2', Blockly.Python.ORDER_ATOMIC);
  var code = StereoBM + ".setROI2("+roi2+")\n"
  return code;
};
Blockly.Python['calib3d_StereoBM_create'] = function(block) {
  var StereoBM = block.getFieldValue('StereoBM');
  var code = StereoBM + " = cv2.StereoBM_create()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoSGBM_getPreFilterCap'] = function(block) {
  var StereoSGBM = block.getFieldValue('StereoSGBM');
  var code = StereoSGBM + ".getPreFilterCap()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoSGBM_setPreFilterCap'] = function(block) {
  var StereoSGBM = block.getFieldValue('StereoSGBM');
  var preFilterCap = block.getFieldValue('preFilterCap');
  var code = StereoSGBM + ".setPreFilterCap("+preFilterCap+")\n"
  return code;
};
Blockly.Python['calib3d_StereoSGBM_getUniquenessRatio'] = function(block) {
  var StereoSGBM = block.getFieldValue('StereoSGBM');
  var code = StereoSGBM + ".getUniquenessRatio()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoSGBM_setUniquenessRatio'] = function(block) {
  var StereoSGBM = block.getFieldValue('StereoSGBM');
  var uniquenessRatio = block.getFieldValue('uniquenessRatio');
  var code = StereoSGBM + ".setUniquenessRatio("+uniquenessRatio+")\n"
  return code;
};
Blockly.Python['calib3d_StereoSGBM_getP1'] = function(block) {
  var StereoSGBM = block.getFieldValue('StereoSGBM');
  var code = StereoSGBM + ".getP1()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoSGBM_setP1'] = function(block) {
  var StereoSGBM = block.getFieldValue('StereoSGBM');
  var P1 = block.getFieldValue('P1');
  var code = StereoSGBM + ".setP1("+P1+")\n"
  return code;
};
Blockly.Python['calib3d_StereoSGBM_getP2'] = function(block) {
  var StereoSGBM = block.getFieldValue('StereoSGBM');
  var code = StereoSGBM + ".getP2()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoSGBM_setP2'] = function(block) {
  var StereoSGBM = block.getFieldValue('StereoSGBM');
  var P2 = block.getFieldValue('P2');
  var code = StereoSGBM + ".setP2("+P2+")\n"
  return code;
};
Blockly.Python['calib3d_StereoSGBM_getMode'] = function(block) {
  var StereoSGBM = block.getFieldValue('StereoSGBM');
  var code = StereoSGBM + ".getMode()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoSGBM_setMode'] = function(block) {
  var StereoSGBM = block.getFieldValue('StereoSGBM');
  var mode = block.getFieldValue('mode');
  var code = StereoSGBM + ".setMode("+mode+")\n"
  return code;
};
Blockly.Python['calib3d_StereoSGBM_create'] = function(block) {
  var StereoSGBM = block.getFieldValue('StereoSGBM');
  var minDisparity = block.getFieldValue('minDisparity');
  var numDisparities = block.getFieldValue('numDisparities');
  var blockSize = block.getFieldValue('blockSize');
  var code = StereoSGBM + " = cv2.StereoSGBM_create("+minDisparity+","+numDisparities+","+blockSize+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoMatcher_compute'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var left = Blockly.Python.valueToCode(block, 'left', Blockly.Python.ORDER_ATOMIC);
  var right = Blockly.Python.valueToCode(block, 'right', Blockly.Python.ORDER_ATOMIC);
  var code = StereoMatcher + ".compute("+left+","+right+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoMatcher_getMinDisparity'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var code = StereoMatcher + ".getMinDisparity()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoMatcher_setMinDisparity'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var minDisparity = block.getFieldValue('minDisparity');
  var code = StereoMatcher + ".setMinDisparity("+minDisparity+")\n"
  return code;
};
Blockly.Python['calib3d_StereoMatcher_getNumDisparities'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var code = StereoMatcher + ".getNumDisparities()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoMatcher_setNumDisparities'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var numDisparities = block.getFieldValue('numDisparities');
  var code = StereoMatcher + ".setNumDisparities("+numDisparities+")\n"
  return code;
};
Blockly.Python['calib3d_StereoMatcher_getBlockSize'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var code = StereoMatcher + ".getBlockSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoMatcher_setBlockSize'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var blockSize = block.getFieldValue('blockSize');
  var code = StereoMatcher + ".setBlockSize("+blockSize+")\n"
  return code;
};
Blockly.Python['calib3d_StereoMatcher_getSpeckleWindowSize'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var code = StereoMatcher + ".getSpeckleWindowSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoMatcher_setSpeckleWindowSize'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var speckleWindowSize = block.getFieldValue('speckleWindowSize');
  var code = StereoMatcher + ".setSpeckleWindowSize("+speckleWindowSize+")\n"
  return code;
};
Blockly.Python['calib3d_StereoMatcher_getSpeckleRange'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var code = StereoMatcher + ".getSpeckleRange()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoMatcher_setSpeckleRange'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var speckleRange = block.getFieldValue('speckleRange');
  var code = StereoMatcher + ".setSpeckleRange("+speckleRange+")\n"
  return code;
};
Blockly.Python['calib3d_StereoMatcher_getDisp12MaxDiff'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var code = StereoMatcher + ".getDisp12MaxDiff()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['calib3d_StereoMatcher_setDisp12MaxDiff'] = function(block) {
  var StereoMatcher = block.getFieldValue('StereoMatcher');
  var disp12MaxDiff = block.getFieldValue('disp12MaxDiff');
  var code = StereoMatcher + ".setDisp12MaxDiff("+disp12MaxDiff+")\n"
  return code;
};
Blockly.Python['features2d_drawKeypoints'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var keypoints = Blockly.Python.valueToCode(block, 'keypoints', Blockly.Python.ORDER_ATOMIC);
  var outImage = Blockly.Python.valueToCode(block, 'outImage', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.drawKeypoints("+image+","+keypoints+","+outImage+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_drawMatches'] = function(block) {
  var img1 = Blockly.Python.valueToCode(block, 'img1', Blockly.Python.ORDER_ATOMIC);
  var keypoints1 = Blockly.Python.valueToCode(block, 'keypoints1', Blockly.Python.ORDER_ATOMIC);
  var img2 = Blockly.Python.valueToCode(block, 'img2', Blockly.Python.ORDER_ATOMIC);
  var keypoints2 = Blockly.Python.valueToCode(block, 'keypoints2', Blockly.Python.ORDER_ATOMIC);
  var matches1to2 = Blockly.Python.valueToCode(block, 'matches1to2', Blockly.Python.ORDER_ATOMIC);
  var outImg = Blockly.Python.valueToCode(block, 'outImg', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.drawMatches("+img1+","+keypoints1+","+img2+","+keypoints2+","+matches1to2+","+outImg+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_BFMatcher_BFMatcher'] = function(block) {
  var BFMatcher = block.getFieldValue('BFMatcher');
  var code = BFMatcher + " = cv2.BFMatcher()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_Feature2D_detect'] = function(block) {
  var Feature2D = block.getFieldValue('Feature2D');
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = Feature2D + ".detect("+image+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_Feature2D_compute'] = function(block) {
  var Feature2D = block.getFieldValue('Feature2D');
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var keypoints = Blockly.Python.valueToCode(block, 'keypoints', Blockly.Python.ORDER_ATOMIC);
  var code = Feature2D + ".compute("+image+","+keypoints+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_Feature2D_detectAndCompute'] = function(block) {
  var Feature2D = block.getFieldValue('Feature2D');
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var mask = Blockly.Python.valueToCode(block, 'mask', Blockly.Python.ORDER_ATOMIC);
  var code = Feature2D + ".detectAndCompute("+image+","+mask+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_Feature2D_descriptorSize'] = function(block) {
  var Feature2D = block.getFieldValue('Feature2D');
  var code = Feature2D + ".descriptorSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_Feature2D_descriptorType'] = function(block) {
  var Feature2D = block.getFieldValue('Feature2D');
  var code = Feature2D + ".descriptorType()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_Feature2D_defaultNorm'] = function(block) {
  var Feature2D = block.getFieldValue('Feature2D');
  var code = Feature2D + ".defaultNorm()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_Feature2D_empty'] = function(block) {
  var Feature2D = block.getFieldValue('Feature2D');
  var code = Feature2D + ".empty()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_BRISK_create'] = function(block) {
  var BRISK = block.getFieldValue('BRISK');
  var code = BRISK + " = cv2.BRISK_create()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_GFTTDetector_create'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var code = GFTTDetector + " = cv2.GFTTDetector_create()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_GFTTDetector_setMaxFeatures'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var maxFeatures = block.getFieldValue('maxFeatures');
  var code = GFTTDetector + ".setMaxFeatures("+maxFeatures+")\n"
  return code;
};
Blockly.Python['features2d_GFTTDetector_getMaxFeatures'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var code = GFTTDetector + ".getMaxFeatures()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_GFTTDetector_setQualityLevel'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var qlevel = block.getFieldValue('qlevel');
  var code = GFTTDetector + ".setQualityLevel("+qlevel+")\n"
  return code;
};
Blockly.Python['features2d_GFTTDetector_getQualityLevel'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var code = GFTTDetector + ".getQualityLevel()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_GFTTDetector_setMinDistance'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var minDistance = block.getFieldValue('minDistance');
  var code = GFTTDetector + ".setMinDistance("+minDistance+")\n"
  return code;
};
Blockly.Python['features2d_GFTTDetector_getMinDistance'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var code = GFTTDetector + ".getMinDistance()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_GFTTDetector_setBlockSize'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var blockSize = block.getFieldValue('blockSize');
  var code = GFTTDetector + ".setBlockSize("+blockSize+")\n"
  return code;
};
Blockly.Python['features2d_GFTTDetector_getBlockSize'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var code = GFTTDetector + ".getBlockSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_GFTTDetector_setHarrisDetector'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var val = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);
  var code = GFTTDetector + ".setHarrisDetector("+val+")\n"
  return code;
};
Blockly.Python['features2d_GFTTDetector_getHarrisDetector'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var code = GFTTDetector + ".getHarrisDetector()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_GFTTDetector_setK'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var k = block.getFieldValue('k');
  var code = GFTTDetector + ".setK("+k+")\n"
  return code;
};
Blockly.Python['features2d_GFTTDetector_getK'] = function(block) {
  var GFTTDetector = block.getFieldValue('GFTTDetector');
  var code = GFTTDetector + ".getK()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_DescriptorMatcher_add'] = function(block) {
  var DescriptorMatcher = block.getFieldValue('DescriptorMatcher');
  var descriptors = Blockly.Python.valueToCode(block, 'descriptors', Blockly.Python.ORDER_ATOMIC);
  var code = DescriptorMatcher + ".add("+descriptors+")\n"
  return code;
};
Blockly.Python['features2d_DescriptorMatcher_getTrainDescriptors'] = function(block) {
  var DescriptorMatcher = block.getFieldValue('DescriptorMatcher');
  var code = DescriptorMatcher + ".getTrainDescriptors()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_DescriptorMatcher_clear'] = function(block) {
  var DescriptorMatcher = block.getFieldValue('DescriptorMatcher');
  var code = DescriptorMatcher + ".clear()\n"
  return code;
};
Blockly.Python['features2d_DescriptorMatcher_empty'] = function(block) {
  var DescriptorMatcher = block.getFieldValue('DescriptorMatcher');
  var code = DescriptorMatcher + ".empty()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_DescriptorMatcher_isMaskSupported'] = function(block) {
  var DescriptorMatcher = block.getFieldValue('DescriptorMatcher');
  var code = DescriptorMatcher + ".isMaskSupported()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_DescriptorMatcher_train'] = function(block) {
  var DescriptorMatcher = block.getFieldValue('DescriptorMatcher');
  var code = DescriptorMatcher + ".train()\n"
  return code;
};
Blockly.Python['features2d_DescriptorMatcher_match'] = function(block) {
  var DescriptorMatcher = block.getFieldValue('DescriptorMatcher');
  var queryDescriptors = Blockly.Python.valueToCode(block, 'queryDescriptors', Blockly.Python.ORDER_ATOMIC);
  var trainDescriptors = Blockly.Python.valueToCode(block, 'trainDescriptors', Blockly.Python.ORDER_ATOMIC);
  var code = DescriptorMatcher + ".match("+queryDescriptors+","+trainDescriptors+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_DescriptorMatcher_knnMatch'] = function(block) {
  var DescriptorMatcher = block.getFieldValue('DescriptorMatcher');
  var queryDescriptors = Blockly.Python.valueToCode(block, 'queryDescriptors', Blockly.Python.ORDER_ATOMIC);
  var trainDescriptors = Blockly.Python.valueToCode(block, 'trainDescriptors', Blockly.Python.ORDER_ATOMIC);
  var k = block.getFieldValue('k');
  var code = DescriptorMatcher + ".knnMatch("+queryDescriptors+","+trainDescriptors+","+k+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_DescriptorMatcher_create'] = function(block) {
  var DescriptorMatcher = block.getFieldValue('DescriptorMatcher');
  var descriptorMatcherType = Blockly.Python.valueToCode(block, 'descriptorMatcherType', Blockly.Python.ORDER_ATOMIC);
  var code = DescriptorMatcher + " = cv2.DescriptorMatcher_create("+descriptorMatcherType+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_KAZE_create'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var code = KAZE + " = cv2.KAZE_create()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_KAZE_setExtended'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var extended = Blockly.Python.valueToCode(block, 'extended', Blockly.Python.ORDER_ATOMIC);
  var code = KAZE + ".setExtended("+extended+")\n"
  return code;
};
Blockly.Python['features2d_KAZE_getExtended'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var code = KAZE + ".getExtended()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_KAZE_setUpright'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var upright = Blockly.Python.valueToCode(block, 'upright', Blockly.Python.ORDER_ATOMIC);
  var code = KAZE + ".setUpright("+upright+")\n"
  return code;
};
Blockly.Python['features2d_KAZE_getUpright'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var code = KAZE + ".getUpright()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_KAZE_setThreshold'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var threshold = block.getFieldValue('threshold');
  var code = KAZE + ".setThreshold("+threshold+")\n"
  return code;
};
Blockly.Python['features2d_KAZE_getThreshold'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var code = KAZE + ".getThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_KAZE_setNOctaves'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var octaves = block.getFieldValue('octaves');
  var code = KAZE + ".setNOctaves("+octaves+")\n"
  return code;
};
Blockly.Python['features2d_KAZE_getNOctaves'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var code = KAZE + ".getNOctaves()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_KAZE_setNOctaveLayers'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var octaveLayers = block.getFieldValue('octaveLayers');
  var code = KAZE + ".setNOctaveLayers("+octaveLayers+")\n"
  return code;
};
Blockly.Python['features2d_KAZE_getNOctaveLayers'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var code = KAZE + ".getNOctaveLayers()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_KAZE_setDiffusivity'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var diff = block.getFieldValue('diff');
  var code = KAZE + ".setDiffusivity("+diff+")\n"
  return code;
};
Blockly.Python['features2d_KAZE_getDiffusivity'] = function(block) {
  var KAZE = block.getFieldValue('KAZE');
  var code = KAZE + ".getDiffusivity()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_FastFeatureDetector_create'] = function(block) {
  var FastFeatureDetector = block.getFieldValue('FastFeatureDetector');
  var code = FastFeatureDetector + " = cv2.FastFeatureDetector_create()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_FastFeatureDetector_setThreshold'] = function(block) {
  var FastFeatureDetector = block.getFieldValue('FastFeatureDetector');
  var threshold = block.getFieldValue('threshold');
  var code = FastFeatureDetector + ".setThreshold("+threshold+")\n"
  return code;
};
Blockly.Python['features2d_FastFeatureDetector_getThreshold'] = function(block) {
  var FastFeatureDetector = block.getFieldValue('FastFeatureDetector');
  var code = FastFeatureDetector + ".getThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_FastFeatureDetector_setNonmaxSuppression'] = function(block) {
  var FastFeatureDetector = block.getFieldValue('FastFeatureDetector');
  var f = Blockly.Python.valueToCode(block, 'f', Blockly.Python.ORDER_ATOMIC);
  var code = FastFeatureDetector + ".setNonmaxSuppression("+f+")\n"
  return code;
};
Blockly.Python['features2d_FastFeatureDetector_getNonmaxSuppression'] = function(block) {
  var FastFeatureDetector = block.getFieldValue('FastFeatureDetector');
  var code = FastFeatureDetector + ".getNonmaxSuppression()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_FastFeatureDetector_setType'] = function(block) {
  var FastFeatureDetector = block.getFieldValue('FastFeatureDetector');
  var type = block.getFieldValue('type');
  var code = FastFeatureDetector + ".setType("+type+")\n"
  return code;
};
Blockly.Python['features2d_FastFeatureDetector_getType'] = function(block) {
  var FastFeatureDetector = block.getFieldValue('FastFeatureDetector');
  var code = FastFeatureDetector + ".getType()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_AKAZE_create'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var code = AKAZE + " = cv2.AKAZE_create()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_AKAZE_setDescriptorType'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var dtype = block.getFieldValue('dtype');
  var code = AKAZE + ".setDescriptorType("+dtype+")\n"
  return code;
};
Blockly.Python['features2d_AKAZE_getDescriptorType'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var code = AKAZE + ".getDescriptorType()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_AKAZE_setDescriptorSize'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var dsize = block.getFieldValue('dsize');
  var code = AKAZE + ".setDescriptorSize("+dsize+")\n"
  return code;
};
Blockly.Python['features2d_AKAZE_getDescriptorSize'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var code = AKAZE + ".getDescriptorSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_AKAZE_setDescriptorChannels'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var dch = block.getFieldValue('dch');
  var code = AKAZE + ".setDescriptorChannels("+dch+")\n"
  return code;
};
Blockly.Python['features2d_AKAZE_getDescriptorChannels'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var code = AKAZE + ".getDescriptorChannels()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_AKAZE_setThreshold'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var threshold = block.getFieldValue('threshold');
  var code = AKAZE + ".setThreshold("+threshold+")\n"
  return code;
};
Blockly.Python['features2d_AKAZE_getThreshold'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var code = AKAZE + ".getThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_AKAZE_setNOctaves'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var octaves = block.getFieldValue('octaves');
  var code = AKAZE + ".setNOctaves("+octaves+")\n"
  return code;
};
Blockly.Python['features2d_AKAZE_getNOctaves'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var code = AKAZE + ".getNOctaves()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_AKAZE_setNOctaveLayers'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var octaveLayers = block.getFieldValue('octaveLayers');
  var code = AKAZE + ".setNOctaveLayers("+octaveLayers+")\n"
  return code;
};
Blockly.Python['features2d_AKAZE_getNOctaveLayers'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var code = AKAZE + ".getNOctaveLayers()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_AKAZE_setDiffusivity'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var diff = block.getFieldValue('diff');
  var code = AKAZE + ".setDiffusivity("+diff+")\n"
  return code;
};
Blockly.Python['features2d_AKAZE_getDiffusivity'] = function(block) {
  var AKAZE = block.getFieldValue('AKAZE');
  var code = AKAZE + ".getDiffusivity()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_ORB_create'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var code = ORB + " = cv2.ORB_create()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_ORB_setMaxFeatures'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var maxFeatures = block.getFieldValue('maxFeatures');
  var code = ORB + ".setMaxFeatures("+maxFeatures+")\n"
  return code;
};
Blockly.Python['features2d_ORB_getMaxFeatures'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var code = ORB + ".getMaxFeatures()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_ORB_setScaleFactor'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var scaleFactor = block.getFieldValue('scaleFactor');
  var code = ORB + ".setScaleFactor("+scaleFactor+")\n"
  return code;
};
Blockly.Python['features2d_ORB_getScaleFactor'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var code = ORB + ".getScaleFactor()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_ORB_setNLevels'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var nlevels = block.getFieldValue('nlevels');
  var code = ORB + ".setNLevels("+nlevels+")\n"
  return code;
};
Blockly.Python['features2d_ORB_getNLevels'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var code = ORB + ".getNLevels()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_ORB_setEdgeThreshold'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var edgeThreshold = block.getFieldValue('edgeThreshold');
  var code = ORB + ".setEdgeThreshold("+edgeThreshold+")\n"
  return code;
};
Blockly.Python['features2d_ORB_getEdgeThreshold'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var code = ORB + ".getEdgeThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_ORB_setFirstLevel'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var firstLevel = block.getFieldValue('firstLevel');
  var code = ORB + ".setFirstLevel("+firstLevel+")\n"
  return code;
};
Blockly.Python['features2d_ORB_getFirstLevel'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var code = ORB + ".getFirstLevel()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_ORB_setWTA_K'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var wta_k = block.getFieldValue('wta_k');
  var code = ORB + ".setWTA_K("+wta_k+")\n"
  return code;
};
Blockly.Python['features2d_ORB_getWTA_K'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var code = ORB + ".getWTA_K()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_ORB_setScoreType'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var scoreType = block.getFieldValue('scoreType');
  var code = ORB + ".setScoreType("+scoreType+")\n"
  return code;
};
Blockly.Python['features2d_ORB_getScoreType'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var code = ORB + ".getScoreType()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_ORB_setPatchSize'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var patchSize = block.getFieldValue('patchSize');
  var code = ORB + ".setPatchSize("+patchSize+")\n"
  return code;
};
Blockly.Python['features2d_ORB_getPatchSize'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var code = ORB + ".getPatchSize()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_ORB_setFastThreshold'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var fastThreshold = block.getFieldValue('fastThreshold');
  var code = ORB + ".setFastThreshold("+fastThreshold+")\n"
  return code;
};
Blockly.Python['features2d_ORB_getFastThreshold'] = function(block) {
  var ORB = block.getFieldValue('ORB');
  var code = ORB + ".getFastThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_MSER_create'] = function(block) {
  var MSER = block.getFieldValue('MSER');
  var code = MSER + " = cv2.MSER_create()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_MSER_detectRegions'] = function(block) {
  var MSER = block.getFieldValue('MSER');
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var bboxes = Blockly.Python.valueToCode(block, 'bboxes', Blockly.Python.ORDER_ATOMIC);
  var code = MSER + ".detectRegions("+image+","+bboxes+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_MSER_setDelta'] = function(block) {
  var MSER = block.getFieldValue('MSER');
  var delta = block.getFieldValue('delta');
  var code = MSER + ".setDelta("+delta+")\n"
  return code;
};
Blockly.Python['features2d_MSER_getDelta'] = function(block) {
  var MSER = block.getFieldValue('MSER');
  var code = MSER + ".getDelta()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_MSER_setMinArea'] = function(block) {
  var MSER = block.getFieldValue('MSER');
  var minArea = block.getFieldValue('minArea');
  var code = MSER + ".setMinArea("+minArea+")\n"
  return code;
};
Blockly.Python['features2d_MSER_getMinArea'] = function(block) {
  var MSER = block.getFieldValue('MSER');
  var code = MSER + ".getMinArea()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_MSER_setMaxArea'] = function(block) {
  var MSER = block.getFieldValue('MSER');
  var maxArea = block.getFieldValue('maxArea');
  var code = MSER + ".setMaxArea("+maxArea+")\n"
  return code;
};
Blockly.Python['features2d_MSER_getMaxArea'] = function(block) {
  var MSER = block.getFieldValue('MSER');
  var code = MSER + ".getMaxArea()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_MSER_setPass2Only'] = function(block) {
  var MSER = block.getFieldValue('MSER');
  var f = Blockly.Python.valueToCode(block, 'f', Blockly.Python.ORDER_ATOMIC);
  var code = MSER + ".setPass2Only("+f+")\n"
  return code;
};
Blockly.Python['features2d_MSER_getPass2Only'] = function(block) {
  var MSER = block.getFieldValue('MSER');
  var code = MSER + ".getPass2Only()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['features2d_FlannBasedMatcher_FlannBasedMatcher'] = function(block) {
  var FlannBasedMatcher = block.getFieldValue('FlannBasedMatcher');
  var code = FlannBasedMatcher + " = cv2.FlannBasedMatcher()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_createNormHistogramCostExtractor'] = function(block) {
  var NormHistogramCostExtractor = block.getFieldValue('NormHistogramCostExtractor');
  var code = NormHistogramCostExtractor + " = cv2.createNormHistogramCostExtractor()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_createEMDHistogramCostExtractor'] = function(block) {
  var EMDHistogramCostExtractor = block.getFieldValue('EMDHistogramCostExtractor');
  var code = EMDHistogramCostExtractor + " = cv2.createEMDHistogramCostExtractor()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_createChiHistogramCostExtractor'] = function(block) {
  var ChiHistogramCostExtractor = block.getFieldValue('ChiHistogramCostExtractor');
  var code = ChiHistogramCostExtractor + " = cv2.createChiHistogramCostExtractor()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_createEMDL1HistogramCostExtractor'] = function(block) {
  var EMDL1HistogramCostExtractor = block.getFieldValue('EMDL1HistogramCostExtractor');
  var code = EMDL1HistogramCostExtractor + " = cv2.createEMDL1HistogramCostExtractor()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_createShapeContextDistanceExtractor'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + " = cv2.createShapeContextDistanceExtractor()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_createHausdorffDistanceExtractor'] = function(block) {
  var HausdorffDistanceExtractor = block.getFieldValue('HausdorffDistanceExtractor');
  var code = HausdorffDistanceExtractor + " = cv2.createHausdorffDistanceExtractor()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_createThinPlateSplineShapeTransformer'] = function(block) {
  var ThinPlateSplineShapeTransformer = block.getFieldValue('ThinPlateSplineShapeTransformer');
  var code = ThinPlateSplineShapeTransformer + " = cv2.createThinPlateSplineShapeTransformer()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_createAffineTransformer'] = function(block) {
  var AffineTransformer = block.getFieldValue('AffineTransformer');
  var fullAffine = Blockly.Python.valueToCode(block, 'fullAffine', Blockly.Python.ORDER_ATOMIC);
  var code = AffineTransformer + " = cv2.createAffineTransformer("+fullAffine+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ThinPlateSplineShapeTransformer_setRegularizationParameter'] = function(block) {
  var ThinPlateSplineShapeTransformer = block.getFieldValue('ThinPlateSplineShapeTransformer');
  var beta = block.getFieldValue('beta');
  var code = ThinPlateSplineShapeTransformer + ".setRegularizationParameter("+beta+")\n"
  return code;
};
Blockly.Python['shape_ThinPlateSplineShapeTransformer_getRegularizationParameter'] = function(block) {
  var ThinPlateSplineShapeTransformer = block.getFieldValue('ThinPlateSplineShapeTransformer');
  var code = ThinPlateSplineShapeTransformer + ".getRegularizationParameter()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_NormHistogramCostExtractor_setNormFlag'] = function(block) {
  var NormHistogramCostExtractor = block.getFieldValue('NormHistogramCostExtractor');
  var flag = block.getFieldValue('flag');
  var code = NormHistogramCostExtractor + ".setNormFlag("+flag+")\n"
  return code;
};
Blockly.Python['shape_NormHistogramCostExtractor_getNormFlag'] = function(block) {
  var NormHistogramCostExtractor = block.getFieldValue('NormHistogramCostExtractor');
  var code = NormHistogramCostExtractor + ".getNormFlag()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeTransformer_estimateTransformation'] = function(block) {
  var ShapeTransformer = block.getFieldValue('ShapeTransformer');
  var transformingShape = Blockly.Python.valueToCode(block, 'transformingShape', Blockly.Python.ORDER_ATOMIC);
  var targetShape = Blockly.Python.valueToCode(block, 'targetShape', Blockly.Python.ORDER_ATOMIC);
  var matches = Blockly.Python.valueToCode(block, 'matches', Blockly.Python.ORDER_ATOMIC);
  var code = ShapeTransformer + ".estimateTransformation("+transformingShape+","+targetShape+","+matches+")\n"
  return code;
};
Blockly.Python['shape_ShapeTransformer_applyTransformation'] = function(block) {
  var ShapeTransformer = block.getFieldValue('ShapeTransformer');
  var input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  var code = ShapeTransformer + ".applyTransformation("+input+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeTransformer_warpImage'] = function(block) {
  var ShapeTransformer = block.getFieldValue('ShapeTransformer');
  var transformingImage = Blockly.Python.valueToCode(block, 'transformingImage', Blockly.Python.ORDER_ATOMIC);
  var code = ShapeTransformer + ".warpImage("+transformingImage+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_EMDHistogramCostExtractor_setNormFlag'] = function(block) {
  var EMDHistogramCostExtractor = block.getFieldValue('EMDHistogramCostExtractor');
  var flag = block.getFieldValue('flag');
  var code = EMDHistogramCostExtractor + ".setNormFlag("+flag+")\n"
  return code;
};
Blockly.Python['shape_EMDHistogramCostExtractor_getNormFlag'] = function(block) {
  var EMDHistogramCostExtractor = block.getFieldValue('EMDHistogramCostExtractor');
  var code = EMDHistogramCostExtractor + ".getNormFlag()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeDistanceExtractor_computeDistance'] = function(block) {
  var ShapeDistanceExtractor = block.getFieldValue('ShapeDistanceExtractor');
  var contour1 = Blockly.Python.valueToCode(block, 'contour1', Blockly.Python.ORDER_ATOMIC);
  var contour2 = Blockly.Python.valueToCode(block, 'contour2', Blockly.Python.ORDER_ATOMIC);
  var code = ShapeDistanceExtractor + ".computeDistance("+contour1+","+contour2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setAngularBins'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var nAngularBins = block.getFieldValue('nAngularBins');
  var code = ShapeContextDistanceExtractor + ".setAngularBins("+nAngularBins+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getAngularBins'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getAngularBins()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setRadialBins'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var nRadialBins = block.getFieldValue('nRadialBins');
  var code = ShapeContextDistanceExtractor + ".setRadialBins("+nRadialBins+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getRadialBins'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getRadialBins()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setInnerRadius'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var innerRadius = block.getFieldValue('innerRadius');
  var code = ShapeContextDistanceExtractor + ".setInnerRadius("+innerRadius+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getInnerRadius'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getInnerRadius()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setOuterRadius'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var outerRadius = block.getFieldValue('outerRadius');
  var code = ShapeContextDistanceExtractor + ".setOuterRadius("+outerRadius+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getOuterRadius'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getOuterRadius()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setRotationInvariant'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var rotationInvariant = Blockly.Python.valueToCode(block, 'rotationInvariant', Blockly.Python.ORDER_ATOMIC);
  var code = ShapeContextDistanceExtractor + ".setRotationInvariant("+rotationInvariant+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getRotationInvariant'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getRotationInvariant()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setShapeContextWeight'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var shapeContextWeight = block.getFieldValue('shapeContextWeight');
  var code = ShapeContextDistanceExtractor + ".setShapeContextWeight("+shapeContextWeight+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getShapeContextWeight'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getShapeContextWeight()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setImageAppearanceWeight'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var imageAppearanceWeight = block.getFieldValue('imageAppearanceWeight');
  var code = ShapeContextDistanceExtractor + ".setImageAppearanceWeight("+imageAppearanceWeight+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getImageAppearanceWeight'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getImageAppearanceWeight()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setBendingEnergyWeight'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var bendingEnergyWeight = block.getFieldValue('bendingEnergyWeight');
  var code = ShapeContextDistanceExtractor + ".setBendingEnergyWeight("+bendingEnergyWeight+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getBendingEnergyWeight'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getBendingEnergyWeight()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setImages'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var image1 = Blockly.Python.valueToCode(block, 'image1', Blockly.Python.ORDER_ATOMIC);
  var image2 = Blockly.Python.valueToCode(block, 'image2', Blockly.Python.ORDER_ATOMIC);
  var code = ShapeContextDistanceExtractor + ".setImages("+image1+","+image2+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getImages'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getImages)"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setIterations'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var iterations = block.getFieldValue('iterations');
  var code = ShapeContextDistanceExtractor + ".setIterations("+iterations+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getIterations'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getIterations()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setCostExtractor'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var comparer = Blockly.Python.valueToCode(block, 'comparer', Blockly.Python.ORDER_ATOMIC);
  var code = ShapeContextDistanceExtractor + ".setCostExtractor("+comparer+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getCostExtractor'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getCostExtractor()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setStdDev'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var sigma = block.getFieldValue('sigma');
  var code = ShapeContextDistanceExtractor + ".setStdDev("+sigma+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getStdDev'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getStdDev()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_ShapeContextDistanceExtractor_setTransformAlgorithm'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var transformer = Blockly.Python.valueToCode(block, 'transformer', Blockly.Python.ORDER_ATOMIC);
  var code = ShapeContextDistanceExtractor + ".setTransformAlgorithm("+transformer+")\n"
  return code;
};
Blockly.Python['shape_ShapeContextDistanceExtractor_getTransformAlgorithm'] = function(block) {
  var ShapeContextDistanceExtractor = block.getFieldValue('ShapeContextDistanceExtractor');
  var code = ShapeContextDistanceExtractor + ".getTransformAlgorithm()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_HausdorffDistanceExtractor_setDistanceFlag'] = function(block) {
  var HausdorffDistanceExtractor = block.getFieldValue('HausdorffDistanceExtractor');
  var distanceFlag = block.getFieldValue('distanceFlag');
  var code = HausdorffDistanceExtractor + ".setDistanceFlag("+distanceFlag+")\n"
  return code;
};
Blockly.Python['shape_HausdorffDistanceExtractor_getDistanceFlag'] = function(block) {
  var HausdorffDistanceExtractor = block.getFieldValue('HausdorffDistanceExtractor');
  var code = HausdorffDistanceExtractor + ".getDistanceFlag()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_HausdorffDistanceExtractor_setRankProportion'] = function(block) {
  var HausdorffDistanceExtractor = block.getFieldValue('HausdorffDistanceExtractor');
  var rankProportion = block.getFieldValue('rankProportion');
  var code = HausdorffDistanceExtractor + ".setRankProportion("+rankProportion+")\n"
  return code;
};
Blockly.Python['shape_HausdorffDistanceExtractor_getRankProportion'] = function(block) {
  var HausdorffDistanceExtractor = block.getFieldValue('HausdorffDistanceExtractor');
  var code = HausdorffDistanceExtractor + ".getRankProportion()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_AffineTransformer_setFullAffine'] = function(block) {
  var AffineTransformer = block.getFieldValue('AffineTransformer');
  var fullAffine = Blockly.Python.valueToCode(block, 'fullAffine', Blockly.Python.ORDER_ATOMIC);
  var code = AffineTransformer + ".setFullAffine("+fullAffine+")\n"
  return code;
};
Blockly.Python['shape_AffineTransformer_getFullAffine'] = function(block) {
  var AffineTransformer = block.getFieldValue('AffineTransformer');
  var code = AffineTransformer + ".getFullAffine()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_HistogramCostExtractor_buildCostMatrix'] = function(block) {
  var HistogramCostExtractor = block.getFieldValue('HistogramCostExtractor');
  var descriptors1 = Blockly.Python.valueToCode(block, 'descriptors1', Blockly.Python.ORDER_ATOMIC);
  var descriptors2 = Blockly.Python.valueToCode(block, 'descriptors2', Blockly.Python.ORDER_ATOMIC);
  var code = HistogramCostExtractor + ".buildCostMatrix("+descriptors1+","+descriptors2+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_HistogramCostExtractor_setNDummies'] = function(block) {
  var HistogramCostExtractor = block.getFieldValue('HistogramCostExtractor');
  var nDummies = block.getFieldValue('nDummies');
  var code = HistogramCostExtractor + ".setNDummies("+nDummies+")\n"
  return code;
};
Blockly.Python['shape_HistogramCostExtractor_getNDummies'] = function(block) {
  var HistogramCostExtractor = block.getFieldValue('HistogramCostExtractor');
  var code = HistogramCostExtractor + ".getNDummies()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['shape_HistogramCostExtractor_setDefaultCost'] = function(block) {
  var HistogramCostExtractor = block.getFieldValue('HistogramCostExtractor');
  var defaultCost = block.getFieldValue('defaultCost');
  var code = HistogramCostExtractor + ".setDefaultCost("+defaultCost+")\n"
  return code;
};
Blockly.Python['shape_HistogramCostExtractor_getDefaultCost'] = function(block) {
  var HistogramCostExtractor = block.getFieldValue('HistogramCostExtractor');
  var code = HistogramCostExtractor + ".getDefaultCost()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_getMaxFeatures'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var code = BackgroundSubtractorGMG + ".getMaxFeatures()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_setMaxFeatures'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var maxFeatures = block.getFieldValue('maxFeatures');
  var code = BackgroundSubtractorGMG + ".setMaxFeatures("+maxFeatures+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_getDefaultLearningRate'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var code = BackgroundSubtractorGMG + ".getDefaultLearningRate()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_setDefaultLearningRate'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var lr = block.getFieldValue('lr');
  var code = BackgroundSubtractorGMG + ".setDefaultLearningRate("+lr+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_getNumFrames'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var code = BackgroundSubtractorGMG + ".getNumFrames()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_setNumFrames'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var nframes = block.getFieldValue('nframes');
  var code = BackgroundSubtractorGMG + ".setNumFrames("+nframes+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_getQuantizationLevels'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var code = BackgroundSubtractorGMG + ".getQuantizationLevels()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_setQuantizationLevels'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var nlevels = block.getFieldValue('nlevels');
  var code = BackgroundSubtractorGMG + ".setQuantizationLevels("+nlevels+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_getBackgroundPrior'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var code = BackgroundSubtractorGMG + ".getBackgroundPrior()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_setBackgroundPrior'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var bgprior = block.getFieldValue('bgprior');
  var code = BackgroundSubtractorGMG + ".setBackgroundPrior("+bgprior+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_getSmoothingRadius'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var code = BackgroundSubtractorGMG + ".getSmoothingRadius()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_setSmoothingRadius'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var radius = block.getFieldValue('radius');
  var code = BackgroundSubtractorGMG + ".setSmoothingRadius("+radius+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_getDecisionThreshold'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var code = BackgroundSubtractorGMG + ".getDecisionThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_setDecisionThreshold'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var thresh = block.getFieldValue('thresh');
  var code = BackgroundSubtractorGMG + ".setDecisionThreshold("+thresh+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_getUpdateBackgroundModel'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var code = BackgroundSubtractorGMG + ".getUpdateBackgroundModel()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_setUpdateBackgroundModel'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var update = Blockly.Python.valueToCode(block, 'update', Blockly.Python.ORDER_ATOMIC);
  var code = BackgroundSubtractorGMG + ".setUpdateBackgroundModel("+update+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_getMinVal'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var code = BackgroundSubtractorGMG + ".getMinVal()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_setMinVal'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var val = block.getFieldValue('val');
  var code = BackgroundSubtractorGMG + ".setMinVal("+val+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_getMaxVal'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var code = BackgroundSubtractorGMG + ".getMaxVal()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorGMG_setMaxVal'] = function(block) {
  var BackgroundSubtractorGMG = block.getFieldValue('BackgroundSubtractorGMG');
  var val = block.getFieldValue('val');
  var code = BackgroundSubtractorGMG + ".setMaxVal("+val+")\n"
  return code;
};
Blockly.Python['bgsegm_createBackgroundSubtractorMOG_createBackgroundSubtractorMOG'] = function(block) {
  var createBackgroundSubtractorMOG = block.getFieldValue('createBackgroundSubtractorMOG');
  var code = createBackgroundSubtractorMOG + " = cv2.bgsegm.createBackgroundSubtractorMOG()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_createBackgroundSubtractorMOG_createBackgroundSubtractorGMG'] = function(block) {
  var createBackgroundSubtractorMOG = block.getFieldValue('createBackgroundSubtractorMOG');
  var code = createBackgroundSubtractorMOG + " = cv2.bgsegm.createBackgroundSubtractorGMG()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorMOG_getHistory'] = function(block) {
  var BackgroundSubtractorMOG = block.getFieldValue('BackgroundSubtractorMOG');
  var code = BackgroundSubtractorMOG + ".getHistory()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorMOG_setHistory'] = function(block) {
  var BackgroundSubtractorMOG = block.getFieldValue('BackgroundSubtractorMOG');
  var nframes = block.getFieldValue('nframes');
  var code = BackgroundSubtractorMOG + ".setHistory("+nframes+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorMOG_getNMixtures'] = function(block) {
  var BackgroundSubtractorMOG = block.getFieldValue('BackgroundSubtractorMOG');
  var code = BackgroundSubtractorMOG + ".getNMixtures()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorMOG_setNMixtures'] = function(block) {
  var BackgroundSubtractorMOG = block.getFieldValue('BackgroundSubtractorMOG');
  var nmix = block.getFieldValue('nmix');
  var code = BackgroundSubtractorMOG + ".setNMixtures("+nmix+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorMOG_getBackgroundRatio'] = function(block) {
  var BackgroundSubtractorMOG = block.getFieldValue('BackgroundSubtractorMOG');
  var code = BackgroundSubtractorMOG + ".getBackgroundRatio()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorMOG_setBackgroundRatio'] = function(block) {
  var BackgroundSubtractorMOG = block.getFieldValue('BackgroundSubtractorMOG');
  var backgroundRatio = block.getFieldValue('backgroundRatio');
  var code = BackgroundSubtractorMOG + ".setBackgroundRatio("+backgroundRatio+")\n"
  return code;
};
Blockly.Python['bgsegm_BackgroundSubtractorMOG_getNoiseSigma'] = function(block) {
  var BackgroundSubtractorMOG = block.getFieldValue('BackgroundSubtractorMOG');
  var code = BackgroundSubtractorMOG + ".getNoiseSigma()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['bgsegm_BackgroundSubtractorMOG_setNoiseSigma'] = function(block) {
  var BackgroundSubtractorMOG = block.getFieldValue('BackgroundSubtractorMOG');
  var noiseSigma = block.getFieldValue('noiseSigma');
  var code = BackgroundSubtractorMOG + ".setNoiseSigma("+noiseSigma+")\n"
  return code;
};
Blockly.Python['video_meanShift'] = function(block) {
  var probImage = Blockly.Python.valueToCode(block, 'probImage', Blockly.Python.ORDER_ATOMIC);
  var window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  var criteria = Blockly.Python.valueToCode(block, 'criteria', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.meanShift("+probImage+","+window+","+criteria+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_buildOpticalFlowPyramid'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var winSize = Blockly.Python.valueToCode(block, 'winSize', Blockly.Python.ORDER_ATOMIC);
  var maxLevel = block.getFieldValue('maxLevel');
  var code = "cv2.buildOpticalFlowPyramid("+img+","+winSize+","+maxLevel+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_calcOpticalFlowPyrLK'] = function(block) {
  var prevImg = Blockly.Python.valueToCode(block, 'prevImg', Blockly.Python.ORDER_ATOMIC);
  var nextImg = Blockly.Python.valueToCode(block, 'nextImg', Blockly.Python.ORDER_ATOMIC);
  var prevPts = Blockly.Python.valueToCode(block, 'prevPts', Blockly.Python.ORDER_ATOMIC);
  var nextPts = Blockly.Python.valueToCode(block, 'nextPts', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.calcOpticalFlowPyrLK("+prevImg+","+nextImg+","+prevPts+","+nextPts+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_calcOpticalFlowFarneback'] = function(block) {
  var prev = Blockly.Python.valueToCode(block, 'prev', Blockly.Python.ORDER_ATOMIC);
  var next = Blockly.Python.valueToCode(block, 'next', Blockly.Python.ORDER_ATOMIC);
  var flow = Blockly.Python.valueToCode(block, 'flow', Blockly.Python.ORDER_ATOMIC);
  var pyr_scale = block.getFieldValue('pyr_scale');
  var levels = block.getFieldValue('levels');
  var winsize = block.getFieldValue('winsize');
  var iterations = block.getFieldValue('iterations');
  var poly_n = block.getFieldValue('poly_n');
  var poly_sigma = block.getFieldValue('poly_sigma');
  var flags = block.getFieldValue('flags');
  var code = "cv2.calcOpticalFlowFarneback("+prev+","+next+","+flow+","+pyr_scale+","+levels+","+winsize+","+iterations+","+poly_n+","+poly_sigma+","+flags+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_estimateRigidTransform'] = function(block) {
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var fullAffine = Blockly.Python.valueToCode(block, 'fullAffine', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.estimateRigidTransform("+src+","+dst+","+fullAffine+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_findTransformECC'] = function(block) {
  var templateImage = Blockly.Python.valueToCode(block, 'templateImage', Blockly.Python.ORDER_ATOMIC);
  var inputImage = Blockly.Python.valueToCode(block, 'inputImage', Blockly.Python.ORDER_ATOMIC);
  var warpMatrix = Blockly.Python.valueToCode(block, 'warpMatrix', Blockly.Python.ORDER_ATOMIC);
  var code = "cv2.findTransformECC("+templateImage+","+inputImage+","+warpMatrix+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_createOptFlow_DualTVL1'] = function(block) {
  var OptFlow_DualTVL1 = block.getFieldValue('OptFlow_DualTVL1');
  var code = OptFlow_DualTVL1 + " = cv2.createOptFlow_DualTVL1()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_createBackgroundSubtractorMOG2'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + " = cv2.createBackgroundSubtractorMOG2()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_createBackgroundSubtractorKNN'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var code = BackgroundSubtractorKNN + " = cv2.createBackgroundSubtractorKNN()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_KalmanFilter_KalmanFilter'] = function(block) {
  var KalmanFilter = block.getFieldValue('KalmanFilter');
  var code = KalmanFilter + " = cv2.KalmanFilter()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_KalmanFilter_predict'] = function(block) {
  var KalmanFilter = block.getFieldValue('KalmanFilter');
  var code = KalmanFilter + ".predict()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_KalmanFilter_correct'] = function(block) {
  var KalmanFilter = block.getFieldValue('KalmanFilter');
  var measurement = Blockly.Python.valueToCode(block, 'measurement', Blockly.Python.ORDER_ATOMIC);
  var code = KalmanFilter + ".correct("+measurement+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractor_apply'] = function(block) {
  var BackgroundSubtractor = block.getFieldValue('BackgroundSubtractor');
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var code = BackgroundSubtractor + ".apply("+image+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractor_getBackgroundImage'] = function(block) {
  var BackgroundSubtractor = block.getFieldValue('BackgroundSubtractor');
  var code = BackgroundSubtractor + ".getBackgroundImage)"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_getHistory'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getHistory()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setHistory'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var history = block.getFieldValue('history');
  var code = BackgroundSubtractorMOG2 + ".setHistory("+history+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorMOG2_getNMixtures'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getNMixtures()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setNMixtures'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var nmixtures = block.getFieldValue('nmixtures');
  var code = BackgroundSubtractorMOG2 + ".setNMixtures("+nmixtures+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorMOG2_getBackgroundRatio'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getBackgroundRatio()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setBackgroundRatio'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var ratio = block.getFieldValue('ratio');
  var code = BackgroundSubtractorMOG2 + ".setBackgroundRatio("+ratio+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorMOG2_getVarThreshold'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getVarThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setVarThreshold'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var varThreshold = block.getFieldValue('varThreshold');
  var code = BackgroundSubtractorMOG2 + ".setVarThreshold("+varThreshold+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorMOG2_getVarThresholdGen'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getVarThresholdGen()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setVarThresholdGen'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var varThresholdGen = block.getFieldValue('varThresholdGen');
  var code = BackgroundSubtractorMOG2 + ".setVarThresholdGen("+varThresholdGen+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorMOG2_getVarInit'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getVarInit()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setVarInit'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var varInit = block.getFieldValue('varInit');
  var code = BackgroundSubtractorMOG2 + ".setVarInit("+varInit+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorMOG2_getVarMin'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getVarMin()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setVarMin'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var varMin = block.getFieldValue('varMin');
  var code = BackgroundSubtractorMOG2 + ".setVarMin("+varMin+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorMOG2_getVarMax'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getVarMax()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setVarMax'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var varMax = block.getFieldValue('varMax');
  var code = BackgroundSubtractorMOG2 + ".setVarMax("+varMax+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorMOG2_getComplexityReductionThreshold'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getComplexityReductionThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setComplexityReductionThreshold'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var ct = block.getFieldValue('ct');
  var code = BackgroundSubtractorMOG2 + ".setComplexityReductionThreshold("+ct+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorMOG2_getDetectShadows'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getDetectShadows()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setDetectShadows'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var detectShadows = Blockly.Python.valueToCode(block, 'detectShadows', Blockly.Python.ORDER_ATOMIC);
  var code = BackgroundSubtractorMOG2 + ".setDetectShadows("+detectShadows+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorMOG2_getShadowValue'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getShadowValue()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setShadowValue'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var value = block.getFieldValue('value');
  var code = BackgroundSubtractorMOG2 + ".setShadowValue("+value+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorMOG2_getShadowThreshold'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var code = BackgroundSubtractorMOG2 + ".getShadowThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorMOG2_setShadowThreshold'] = function(block) {
  var BackgroundSubtractorMOG2 = block.getFieldValue('BackgroundSubtractorMOG2');
  var threshold = block.getFieldValue('threshold');
  var code = BackgroundSubtractorMOG2 + ".setShadowThreshold("+threshold+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorKNN_getHistory'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var code = BackgroundSubtractorKNN + ".getHistory()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorKNN_setHistory'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var history = block.getFieldValue('history');
  var code = BackgroundSubtractorKNN + ".setHistory("+history+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorKNN_getNSamples'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var code = BackgroundSubtractorKNN + ".getNSamples()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorKNN_setNSamples'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var _nN = block.getFieldValue('_nN');
  var code = BackgroundSubtractorKNN + ".setNSamples("+_nN+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorKNN_getDist2Threshold'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var code = BackgroundSubtractorKNN + ".getDist2Threshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorKNN_setDist2Threshold'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var _dist2Threshold = block.getFieldValue('_dist2Threshold');
  var code = BackgroundSubtractorKNN + ".setDist2Threshold("+_dist2Threshold+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorKNN_getkNNSamples'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var code = BackgroundSubtractorKNN + ".getkNNSamples()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorKNN_setkNNSamples'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var _nkNN = block.getFieldValue('_nkNN');
  var code = BackgroundSubtractorKNN + ".setkNNSamples("+_nkNN+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorKNN_getDetectShadows'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var code = BackgroundSubtractorKNN + ".getDetectShadows()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorKNN_setDetectShadows'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var detectShadows = Blockly.Python.valueToCode(block, 'detectShadows', Blockly.Python.ORDER_ATOMIC);
  var code = BackgroundSubtractorKNN + ".setDetectShadows("+detectShadows+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorKNN_getShadowValue'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var code = BackgroundSubtractorKNN + ".getShadowValue()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorKNN_setShadowValue'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var value = block.getFieldValue('value');
  var code = BackgroundSubtractorKNN + ".setShadowValue("+value+")\n"
  return code;
};
Blockly.Python['video_BackgroundSubtractorKNN_getShadowThreshold'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var code = BackgroundSubtractorKNN + ".getShadowThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_BackgroundSubtractorKNN_setShadowThreshold'] = function(block) {
  var BackgroundSubtractorKNN = block.getFieldValue('BackgroundSubtractorKNN');
  var threshold = block.getFieldValue('threshold');
  var code = BackgroundSubtractorKNN + ".setShadowThreshold("+threshold+")\n"
  return code;
};
Blockly.Python['video_DenseOpticalFlow_calc'] = function(block) {
  var DenseOpticalFlow = block.getFieldValue('DenseOpticalFlow');
  var I0 = Blockly.Python.valueToCode(block, 'I0', Blockly.Python.ORDER_ATOMIC);
  var I1 = Blockly.Python.valueToCode(block, 'I1', Blockly.Python.ORDER_ATOMIC);
  var flow = Blockly.Python.valueToCode(block, 'flow', Blockly.Python.ORDER_ATOMIC);
  var code = DenseOpticalFlow + ".calc("+I0+","+I1+","+flow+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['video_DenseOpticalFlow_collectGarbage'] = function(block) {
  var DenseOpticalFlow = block.getFieldValue('DenseOpticalFlow');
  var code = DenseOpticalFlow + ".collectGarbage()\n"
  return code;
};
Blockly.Python['xphoto_dctDenoising_dctDenoising'] = function(block) {
  var dctDenoising = block.getFieldValue('dctDenoising');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var dst = Blockly.Python.valueToCode(block, 'dst', Blockly.Python.ORDER_ATOMIC);
  var sigma = block.getFieldValue('sigma');
  var code = dctDenoising + " = cv2.xphoto.dctDenoising("+src+","+dst+","+sigma+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['xfeatures2d_SURF_create'] = function(block) {
  var SURF = block.getFieldValue('SURF');
  var code = SURF + " = cv2.xfeatures2d.SURF_create()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['xfeatures2d_SURF_setHessianThreshold'] = function(block) {
  var SURF = block.getFieldValue('SURF');
  var hessianThreshold = block.getFieldValue('hessianThreshold');
  var code = SURF + ".setHessianThreshold("+hessianThreshold+")\n"
  return code;
};
Blockly.Python['xfeatures2d_SURF_getHessianThreshold'] = function(block) {
  var SURF = block.getFieldValue('SURF');
  var code = SURF + ".getHessianThreshold()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['xfeatures2d_SURF_setNOctaves'] = function(block) {
  var SURF = block.getFieldValue('SURF');
  var nOctaves = block.getFieldValue('nOctaves');
  var code = SURF + ".setNOctaves("+nOctaves+")\n"
  return code;
};
Blockly.Python['xfeatures2d_SURF_getNOctaves'] = function(block) {
  var SURF = block.getFieldValue('SURF');
  var code = SURF + ".getNOctaves()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['xfeatures2d_SURF_setNOctaveLayers'] = function(block) {
  var SURF = block.getFieldValue('SURF');
  var nOctaveLayers = block.getFieldValue('nOctaveLayers');
  var code = SURF + ".setNOctaveLayers("+nOctaveLayers+")\n"
  return code;
};
Blockly.Python['xfeatures2d_SURF_getNOctaveLayers'] = function(block) {
  var SURF = block.getFieldValue('SURF');
  var code = SURF + ".getNOctaveLayers()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['xfeatures2d_SURF_setExtended'] = function(block) {
  var SURF = block.getFieldValue('SURF');
  var extended = Blockly.Python.valueToCode(block, 'extended', Blockly.Python.ORDER_ATOMIC);
  var code = SURF + ".setExtended("+extended+")\n"
  return code;
};
Blockly.Python['xfeatures2d_SURF_getExtended'] = function(block) {
  var SURF = block.getFieldValue('SURF');
  var code = SURF + ".getExtended()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['xfeatures2d_SURF_setUpright'] = function(block) {
  var SURF = block.getFieldValue('SURF');
  var upright = Blockly.Python.valueToCode(block, 'upright', Blockly.Python.ORDER_ATOMIC);
  var code = SURF + ".setUpright("+upright+")\n"
  return code;
};
Blockly.Python['xfeatures2d_SURF_getUpright'] = function(block) {
  var SURF = block.getFieldValue('SURF');
  var code = SURF + ".getUpright()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['xfeatures2d_SIFT_create'] = function(block) {
  var SIFT = block.getFieldValue('SIFT');
  var code = SIFT + " = cv2.xfeatures2d.SIFT_create()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['optflow_calcOpticalFlowSF_calcOpticalFlowSF'] = function(block) {
  var calcOpticalFlowSF = block.getFieldValue('calcOpticalFlowSF');
  var from = Blockly.Python.valueToCode(block, 'from', Blockly.Python.ORDER_ATOMIC);
  var to = Blockly.Python.valueToCode(block, 'to', Blockly.Python.ORDER_ATOMIC);
  var layers = block.getFieldValue('layers');
  var averaging_block_size = block.getFieldValue('averaging_block_size');
  var max_flow = block.getFieldValue('max_flow');
  var code = calcOpticalFlowSF + " = cv2.optflow.calcOpticalFlowSF("+from+","+to+","+layers+","+averaging_block_size+","+max_flow+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['optflow_calcOpticalFlowSF_readOpticalFlow'] = function(block) {
  var calcOpticalFlowSF = block.getFieldValue('calcOpticalFlowSF');
  var path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);
  var code = calcOpticalFlowSF + ".readOpticalFlow("+path+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['optflow_calcOpticalFlowSF_writeOpticalFlow'] = function(block) {
  var calcOpticalFlowSF = block.getFieldValue('calcOpticalFlowSF');
  var path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);
  var flow = Blockly.Python.valueToCode(block, 'flow', Blockly.Python.ORDER_ATOMIC);
  var code = calcOpticalFlowSF + ".writeOpticalFlow("+path+","+flow+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['optflow_calcOpticalFlowSF_createOptFlow_DeepFlow'] = function(block) {
  var calcOpticalFlowSF = block.getFieldValue('calcOpticalFlowSF');
  var code = calcOpticalFlowSF + " = cv2.optflow.createOptFlow_DeepFlow()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['optflow_calcOpticalFlowSF_createOptFlow_SimpleFlow'] = function(block) {
  var calcOpticalFlowSF = block.getFieldValue('calcOpticalFlowSF');
  var code = calcOpticalFlowSF + " = cv2.optflow.createOptFlow_SimpleFlow()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['optflow_calcOpticalFlowSF_createOptFlow_Farneback'] = function(block) {
  var calcOpticalFlowSF = block.getFieldValue('calcOpticalFlowSF');
  var code = calcOpticalFlowSF + " = cv2.optflow.createOptFlow_Farneback()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_RFFeatureGetter_getFeatures'] = function(block) {
  var RFFeatureGetter = block.getFieldValue('RFFeatureGetter');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var features = Blockly.Python.valueToCode(block, 'features', Blockly.Python.ORDER_ATOMIC);
  var gnrmRad = block.getFieldValue('gnrmRad');
  var gsmthRad = block.getFieldValue('gsmthRad');
  var shrink = block.getFieldValue('shrink');
  var outNum = block.getFieldValue('outNum');
  var gradNum = block.getFieldValue('gradNum');
  var code = RFFeatureGetter + ".getFeatures("+src+","+features+","+gnrmRad+","+gsmthRad+","+shrink+","+outNum+","+gradNum+")\n"
  return code;
};
Blockly.Python['ximgproc_StructuredEdgeDetection_detectEdges'] = function(block) {
  var StructuredEdgeDetection = block.getFieldValue('StructuredEdgeDetection');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = StructuredEdgeDetection + ".detectEdges("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_DTFilter_filter'] = function(block) {
  var DTFilter = block.getFieldValue('DTFilter');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = DTFilter + ".filter("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_AdaptiveManifoldFilter_filter'] = function(block) {
  var AdaptiveManifoldFilter = block.getFieldValue('AdaptiveManifoldFilter');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = AdaptiveManifoldFilter + ".filter("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_AdaptiveManifoldFilter_collectGarbage'] = function(block) {
  var AdaptiveManifoldFilter = block.getFieldValue('AdaptiveManifoldFilter');
  var code = AdaptiveManifoldFilter + ".collectGarbage()\n"
  return code;
};
Blockly.Python['ximgproc_AdaptiveManifoldFilter_create'] = function(block) {
  var AdaptiveManifoldFilter = block.getFieldValue('AdaptiveManifoldFilter');
  var code = AdaptiveManifoldFilter + " = cv2.ximgproc.AdaptiveManifoldFilter_create()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_SuperpixelSEEDS_getNumberOfSuperpixels'] = function(block) {
  var SuperpixelSEEDS = block.getFieldValue('SuperpixelSEEDS');
  var code = SuperpixelSEEDS + ".getNumberOfSuperpixels()"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_SuperpixelSEEDS_iterate'] = function(block) {
  var SuperpixelSEEDS = block.getFieldValue('SuperpixelSEEDS');
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var code = SuperpixelSEEDS + ".iterate("+img+")\n"
  return code;
};
Blockly.Python['ximgproc_SuperpixelSEEDS_getLabels'] = function(block) {
  var SuperpixelSEEDS = block.getFieldValue('SuperpixelSEEDS');
  var code = SuperpixelSEEDS + ".getLabels)"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_SuperpixelSEEDS_getLabelContourMask'] = function(block) {
  var SuperpixelSEEDS = block.getFieldValue('SuperpixelSEEDS');
  var code = SuperpixelSEEDS + ".getLabelContourMask)"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_createSuperpixelSEEDS_createSuperpixelSEEDS'] = function(block) {
  var createSuperpixelSEEDS = block.getFieldValue('createSuperpixelSEEDS');
  var image_width = block.getFieldValue('image_width');
  var image_height = block.getFieldValue('image_height');
  var image_channels = block.getFieldValue('image_channels');
  var num_superpixels = block.getFieldValue('num_superpixels');
  var num_levels = block.getFieldValue('num_levels');
  var code = createSuperpixelSEEDS + " = cv2.ximgproc.createSuperpixelSEEDS("+image_width+","+image_height+","+image_channels+","+num_superpixels+","+num_levels+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_createSuperpixelSEEDS_createDTFilter'] = function(block) {
  var createSuperpixelSEEDS = block.getFieldValue('createSuperpixelSEEDS');
  var guide = Blockly.Python.valueToCode(block, 'guide', Blockly.Python.ORDER_ATOMIC);
  var sigmaSpatial = block.getFieldValue('sigmaSpatial');
  var sigmaColor = block.getFieldValue('sigmaColor');
  var code = createSuperpixelSEEDS + " = cv2.ximgproc.createDTFilter("+guide+","+sigmaSpatial+","+sigmaColor+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_createSuperpixelSEEDS_dtFilter'] = function(block) {
  var createSuperpixelSEEDS = block.getFieldValue('createSuperpixelSEEDS');
  var guide = Blockly.Python.valueToCode(block, 'guide', Blockly.Python.ORDER_ATOMIC);
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var sigmaSpatial = block.getFieldValue('sigmaSpatial');
  var sigmaColor = block.getFieldValue('sigmaColor');
  var code = createSuperpixelSEEDS + ".dtFilter("+guide+","+src+","+sigmaSpatial+","+sigmaColor+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_createSuperpixelSEEDS_createGuidedFilter'] = function(block) {
  var createSuperpixelSEEDS = block.getFieldValue('createSuperpixelSEEDS');
  var guide = Blockly.Python.valueToCode(block, 'guide', Blockly.Python.ORDER_ATOMIC);
  var radius = block.getFieldValue('radius');
  var eps = block.getFieldValue('eps');
  var code = createSuperpixelSEEDS + " = cv2.ximgproc.createGuidedFilter("+guide+","+radius+","+eps+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_createSuperpixelSEEDS_guidedFilter'] = function(block) {
  var createSuperpixelSEEDS = block.getFieldValue('createSuperpixelSEEDS');
  var guide = Blockly.Python.valueToCode(block, 'guide', Blockly.Python.ORDER_ATOMIC);
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var radius = block.getFieldValue('radius');
  var eps = block.getFieldValue('eps');
  var code = createSuperpixelSEEDS + ".guidedFilter("+guide+","+src+","+radius+","+eps+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_createSuperpixelSEEDS_createAMFilter'] = function(block) {
  var createSuperpixelSEEDS = block.getFieldValue('createSuperpixelSEEDS');
  var sigma_s = block.getFieldValue('sigma_s');
  var sigma_r = block.getFieldValue('sigma_r');
  var code = createSuperpixelSEEDS + " = cv2.ximgproc.createAMFilter("+sigma_s+","+sigma_r+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_createSuperpixelSEEDS_amFilter'] = function(block) {
  var createSuperpixelSEEDS = block.getFieldValue('createSuperpixelSEEDS');
  var joint = Blockly.Python.valueToCode(block, 'joint', Blockly.Python.ORDER_ATOMIC);
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var sigma_s = block.getFieldValue('sigma_s');
  var sigma_r = block.getFieldValue('sigma_r');
  var code = createSuperpixelSEEDS + ".amFilter("+joint+","+src+","+sigma_s+","+sigma_r+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_createSuperpixelSEEDS_jointBilateralFilter'] = function(block) {
  var createSuperpixelSEEDS = block.getFieldValue('createSuperpixelSEEDS');
  var joint = Blockly.Python.valueToCode(block, 'joint', Blockly.Python.ORDER_ATOMIC);
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var d = block.getFieldValue('d');
  var sigmaColor = block.getFieldValue('sigmaColor');
  var sigmaSpace = block.getFieldValue('sigmaSpace');
  var code = createSuperpixelSEEDS + ".jointBilateralFilter("+joint+","+src+","+d+","+sigmaColor+","+sigmaSpace+")"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_createSuperpixelSEEDS_createRFFeatureGetter'] = function(block) {
  var createSuperpixelSEEDS = block.getFieldValue('createSuperpixelSEEDS');
  var code = createSuperpixelSEEDS + " = cv2.ximgproc.createRFFeatureGetter()\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_createSuperpixelSEEDS_createStructuredEdgeDetection'] = function(block) {
  var createSuperpixelSEEDS = block.getFieldValue('createSuperpixelSEEDS');
  var model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
  var code = createSuperpixelSEEDS + " = cv2.ximgproc.createStructuredEdgeDetection("+model+")\n"
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['ximgproc_GuidedFilter_filter'] = function(block) {
  var GuidedFilter = block.getFieldValue('GuidedFilter');
  var src = Blockly.Python.valueToCode(block, 'src', Blockly.Python.ORDER_ATOMIC);
  var code = GuidedFilter + ".filter("+src+")"
  return [code, Blockly.Python.ORDER_NONE];
};
