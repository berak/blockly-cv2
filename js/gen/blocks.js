Blockly.Blocks['core_borderInterpolate'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('borderInterpolate')
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'p');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'len');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'borderType');
    this.setOutput(true,'Number');
    this.setInputsInline(true);
    this.setTooltip('core_borderInterpolate');
  }
};
Blockly.Blocks['core_copyMakeBorder'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('copyMakeBorder')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'top');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'bottom');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'left');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'right');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'borderType');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_copyMakeBorder');
  }
};
Blockly.Blocks['core_add'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('add')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_add');
  }
};
Blockly.Blocks['core_subtract'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('subtract')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_subtract');
  }
};
Blockly.Blocks['core_multiply'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('multiply')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_multiply');
  }
};
Blockly.Blocks['core_divide'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('divide')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_divide');
  }
};
Blockly.Blocks['core_scaleAdd'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('scaleAdd')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_scaleAdd');
  }
};
Blockly.Blocks['core_addWeighted'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('addWeighted')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'beta');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'gamma');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_addWeighted');
  }
};
Blockly.Blocks['core_convertScaleAbs'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('convertScaleAbs')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_convertScaleAbs');
  }
};
Blockly.Blocks['core_LUT'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('LUT')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('lut')
        .appendField('lut')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_LUT');
  }
};
Blockly.Blocks['core_sum'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('sum')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'Colour');
    this.setTooltip('core_sum');
  }
};
Blockly.Blocks['core_countNonZero'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('countNonZero')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('core_countNonZero');
  }
};
Blockly.Blocks['core_findNonZero'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('findNonZero')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_findNonZero');
  }
};
Blockly.Blocks['core_mean'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('mean')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'Colour');
    this.setTooltip('core_mean');
  }
};
Blockly.Blocks['core_meanStdDev'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('meanStdDev')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_meanStdDev');
  }
};
Blockly.Blocks['core_norm'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('norm')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('core_norm');
  }
};
Blockly.Blocks['core_PSNR'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('PSNR')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('core_PSNR');
  }
};
Blockly.Blocks['core_batchDistance'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('batchDistance')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dtype');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_batchDistance');
  }
};
Blockly.Blocks['core_normalize'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('normalize')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_normalize');
  }
};
Blockly.Blocks['core_reduce'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('reduce')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dim');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'rtype');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_reduce');
  }
};
Blockly.Blocks['core_merge'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('merge')
    this.appendValueInput('mv')
        .appendField('mv');
    this.setOutput(true,'image');
    this.setTooltip('core_merge');
  }
};
Blockly.Blocks['core_split'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('split')
    this.appendValueInput('m')
        .appendField('m')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('core_split');
  }
};
Blockly.Blocks['core_mixChannels'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('mixChannels')
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('dst')
        .appendField('dst');
    this.appendValueInput('fromTo')
        .appendField('fromTo');
    this.setOutput(true);
    this.setTooltip('core_mixChannels');
  }
};
Blockly.Blocks['core_extractChannel'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('extractChannel')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'coi');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_extractChannel');
  }
};
Blockly.Blocks['core_insertChannel'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('insertChannel')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'coi');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_insertChannel');
  }
};
Blockly.Blocks['core_flip'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('flip')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flipCode');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_flip');
  }
};
Blockly.Blocks['core_repeat'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('repeat')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ny');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'nx');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_repeat');
  }
};
Blockly.Blocks['core_hconcat'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('hconcat')
    this.appendValueInput('src')
        .appendField('src');
    this.setOutput(true,'image');
    this.setTooltip('core_hconcat');
  }
};
Blockly.Blocks['core_vconcat'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('vconcat')
    this.appendValueInput('src')
        .appendField('src');
    this.setOutput(true,'image');
    this.setTooltip('core_vconcat');
  }
};
Blockly.Blocks['core_bitwise_and'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('bitwise_and')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_bitwise_and');
  }
};
Blockly.Blocks['core_bitwise_or'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('bitwise_or')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_bitwise_or');
  }
};
Blockly.Blocks['core_bitwise_xor'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('bitwise_xor')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_bitwise_xor');
  }
};
Blockly.Blocks['core_bitwise_not'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('bitwise_not')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_bitwise_not');
  }
};
Blockly.Blocks['core_absdiff'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('absdiff')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_absdiff');
  }
};
Blockly.Blocks['core_inRange'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('inRange')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('lowerb')
        .appendField('lowerb')
        .setCheck('Colour');
    this.appendValueInput('upperb')
        .appendField('upperb')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('core_inRange');
  }
};
Blockly.Blocks['core_compare'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('compare')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'cmpop');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_compare');
  }
};
Blockly.Blocks['core_min'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('min')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_min');
  }
};
Blockly.Blocks['core_max'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('max')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_max');
  }
};
Blockly.Blocks['core_sqrt'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('sqrt')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_sqrt');
  }
};
Blockly.Blocks['core_pow'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('pow')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'power');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_pow');
  }
};
Blockly.Blocks['core_exp'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('exp')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_exp');
  }
};
Blockly.Blocks['core_log'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('log')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_log');
  }
};
Blockly.Blocks['core_polarToCart'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('polarToCart')
    this.appendValueInput('magnitude')
        .appendField('magnitude')
        .setCheck('image');
    this.appendValueInput('angle')
        .appendField('angle')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_polarToCart');
  }
};
Blockly.Blocks['core_cartToPolar'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('cartToPolar')
    this.appendValueInput('x')
        .appendField('x')
        .setCheck('image');
    this.appendValueInput('y')
        .appendField('y')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_cartToPolar');
  }
};
Blockly.Blocks['core_phase'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('phase')
    this.appendValueInput('x')
        .appendField('x')
        .setCheck('image');
    this.appendValueInput('y')
        .appendField('y')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_phase');
  }
};
Blockly.Blocks['core_magnitude'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('magnitude')
    this.appendValueInput('x')
        .appendField('x')
        .setCheck('image');
    this.appendValueInput('y')
        .appendField('y')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_magnitude');
  }
};
Blockly.Blocks['core_patchNaNs'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('patchNaNs')
    this.appendValueInput('a')
        .appendField('a')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_patchNaNs');
  }
};
Blockly.Blocks['core_gemm'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('gemm')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.appendValueInput('src3')
        .appendField('src3')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'beta');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_gemm');
  }
};
Blockly.Blocks['core_mulTransposed'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('mulTransposed')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('aTa')
        .appendField('aTa');
    this.setOutput(true,'image');
    this.setTooltip('core_mulTransposed');
  }
};
Blockly.Blocks['core_transpose'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('transpose')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_transpose');
  }
};
Blockly.Blocks['core_transform'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('transform')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('m')
        .appendField('m')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_transform');
  }
};
Blockly.Blocks['core_perspectiveTransform'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('perspectiveTransform')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('m')
        .appendField('m')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_perspectiveTransform');
  }
};
Blockly.Blocks['core_completeSymm'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('completeSymm')
    this.appendValueInput('mtx')
        .appendField('mtx')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_completeSymm');
  }
};
Blockly.Blocks['core_setIdentity'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('setIdentity')
    this.appendValueInput('mtx')
        .appendField('mtx')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_setIdentity');
  }
};
Blockly.Blocks['core_determinant'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('determinant')
    this.appendValueInput('mtx')
        .appendField('mtx')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('core_determinant');
  }
};
Blockly.Blocks['core_trace'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('trace')
    this.appendValueInput('mtx')
        .appendField('mtx')
        .setCheck('image');
    this.setOutput(true,'Colour');
    this.setTooltip('core_trace');
  }
};
Blockly.Blocks['core_invert'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('invert')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_invert');
  }
};
Blockly.Blocks['core_solve'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('solve')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_solve');
  }
};
Blockly.Blocks['core_sort'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('sort')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_sort');
  }
};
Blockly.Blocks['core_sortIdx'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('sortIdx')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_sortIdx');
  }
};
Blockly.Blocks['core_solveCubic'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('solveCubic')
    this.appendValueInput('coeffs')
        .appendField('coeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_solveCubic');
  }
};
Blockly.Blocks['core_solvePoly'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('solvePoly')
    this.appendValueInput('coeffs')
        .appendField('coeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_solvePoly');
  }
};
Blockly.Blocks['core_eigen'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('eigen')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_eigen');
  }
};
Blockly.Blocks['core_calcCovarMatrix'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('calcCovarMatrix')
    this.appendValueInput('samples')
        .appendField('samples')
        .setCheck('image');
    this.appendValueInput('mean')
        .appendField('mean')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_calcCovarMatrix');
  }
};
Blockly.Blocks['core_PCACompute'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('PCACompute')
    this.appendValueInput('data')
        .appendField('data')
        .setCheck('image');
    this.appendValueInput('mean')
        .appendField('mean')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_PCACompute');
  }
};
Blockly.Blocks['core_PCAProject'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('PCAProject')
    this.appendValueInput('data')
        .appendField('data')
        .setCheck('image');
    this.appendValueInput('mean')
        .appendField('mean')
        .setCheck('image');
    this.appendValueInput('eigenvectors')
        .appendField('eigenvectors')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_PCAProject');
  }
};
Blockly.Blocks['core_PCABackProject'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('PCABackProject')
    this.appendValueInput('data')
        .appendField('data')
        .setCheck('image');
    this.appendValueInput('mean')
        .appendField('mean')
        .setCheck('image');
    this.appendValueInput('eigenvectors')
        .appendField('eigenvectors')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_PCABackProject');
  }
};
Blockly.Blocks['core_SVDecomp'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('SVDecomp')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_SVDecomp');
  }
};
Blockly.Blocks['core_SVBackSubst'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('SVBackSubst')
    this.appendValueInput('w')
        .appendField('w')
        .setCheck('image');
    this.appendValueInput('u')
        .appendField('u')
        .setCheck('image');
    this.appendValueInput('vt')
        .appendField('vt')
        .setCheck('image');
    this.appendValueInput('rhs')
        .appendField('rhs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_SVBackSubst');
  }
};
Blockly.Blocks['core_Mahalanobis'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('Mahalanobis')
    this.appendValueInput('v1')
        .appendField('v1')
        .setCheck('image');
    this.appendValueInput('v2')
        .appendField('v2')
        .setCheck('image');
    this.appendValueInput('icovar')
        .appendField('icovar')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('core_Mahalanobis');
  }
};
Blockly.Blocks['core_dft'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('dft')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_dft');
  }
};
Blockly.Blocks['core_idft'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('idft')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_idft');
  }
};
Blockly.Blocks['core_dct'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('dct')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_dct');
  }
};
Blockly.Blocks['core_idct'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('idct')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('core_idct');
  }
};
Blockly.Blocks['core_mulSpectrums'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('mulSpectrums')
    this.appendValueInput('a')
        .appendField('a')
        .setCheck('image');
    this.appendValueInput('b')
        .appendField('b')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_mulSpectrums');
  }
};
Blockly.Blocks['core_getOptimalDFTSize'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getOptimalDFTSize')
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'vecsize');
    this.setOutput(true,'Number');
    this.setInputsInline(true);
    this.setTooltip('core_getOptimalDFTSize');
  }
};
Blockly.Blocks['core_randu'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('randu')
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.appendValueInput('low')
        .appendField('low')
    this.appendValueInput('high')
        .appendField('high')
    this.setOutput(true,'image');
    this.setTooltip('core_randu');
  }
};
Blockly.Blocks['core_randn'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('randn')
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.appendValueInput('mean')
        .appendField('mean')
    this.appendValueInput('stddev')
        .appendField('stddev')
    this.setOutput(true,'image');
    this.setTooltip('core_randn');
  }
};
Blockly.Blocks['core_kmeans'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('kmeans')
    this.appendValueInput('data')
        .appendField('data')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'K');
    this.appendValueInput('bestLabels')
        .appendField('bestLabels')
        .setCheck('image');
    this.appendValueInput('criteria')
        .appendField('criteria');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'attempts');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('core_kmeans');
  }
};
Blockly.Blocks['core_cubeRoot'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('cubeRoot')
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'val');
    this.setOutput(true,'Number');
    this.setInputsInline(true);
    this.setTooltip('core_cubeRoot');
  }
};
Blockly.Blocks['core_fastAtan2'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('fastAtan2')
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'y');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'x');
    this.setOutput(true,'Number');
    this.setInputsInline(true);
    this.setTooltip('core_fastAtan2');
  }
};
Blockly.Blocks['core_getBuildInformation'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getBuildInformation')
    this.setOutput(true,'String');
    this.setTooltip('core_getBuildInformation');
  }
};
Blockly.Blocks['core_getTickCount'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getTickCount')
    this.setOutput(true);
    this.setTooltip('core_getTickCount');
  }
};
Blockly.Blocks['core_getTickFrequency'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getTickFrequency')
    this.setOutput(true,'Number');
    this.setTooltip('core_getTickFrequency');
  }
};
Blockly.Blocks['core_getCPUTickCount'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getCPUTickCount')
    this.setOutput(true);
    this.setTooltip('core_getCPUTickCount');
  }
};
Blockly.Blocks['core_checkHardwareSupport'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('checkHardwareSupport')
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'feature');
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip('core_checkHardwareSupport');
  }
};
Blockly.Blocks['core_getNumberOfCPUs'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('getNumberOfCPUs')
    this.setOutput(true,'Number');
    this.setTooltip('core_getNumberOfCPUs');
  }
};
Blockly.Blocks['core_setUseOptimized'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('setUseOptimized')
    this.appendValueInput('onoff')
        .appendField('onoff');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('core_setUseOptimized');
  }
};
Blockly.Blocks['core_useOptimized'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('useOptimized')
    this.setOutput(true);
    this.setTooltip('core_useOptimized');
  }
};
Blockly.Blocks['core_DMatch_DMatch'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('DMatch_DMatch')
    this.setOutput(true);
    this.setTooltip('core_DMatch_DMatch');
  }
};
Blockly.Blocks['core_KeyPoint_KeyPoint'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('KeyPoint_KeyPoint')
    this.setOutput(true);
    this.setTooltip('core_KeyPoint_KeyPoint');
  }
};
Blockly.Blocks['core_KeyPoint_convert'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('KeyPoint_convert')
    this.appendValueInput('keypoints')
        .appendField('keypoints');
    this.setOutput(true);
    this.setTooltip('core_KeyPoint_convert');
  }
};
Blockly.Blocks['core_KeyPoint_overlap'] = {
  init: function() {
    this.setColour(99);
    this.appendDummyInput()
        .appendField('KeyPoint_overlap')
    this.appendValueInput('kp1')
        .appendField('kp1');
    this.appendValueInput('kp2')
        .appendField('kp2');
    this.setOutput(true,'Number');
    this.setTooltip('core_KeyPoint_overlap');
  }
};
Blockly.Blocks['imgproc_createLineSegmentDetector'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('createLineSegmentDetector')
    this.setOutput(true);
    this.setTooltip('imgproc_createLineSegmentDetector');
  }
};
Blockly.Blocks['imgproc_getGaussianKernel'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getGaussianKernel')
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'sigma');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_getGaussianKernel');
  }
};
Blockly.Blocks['imgproc_getDerivKernels'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getDerivKernels')
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dx');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dy');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_getDerivKernels');
  }
};
Blockly.Blocks['imgproc_getGaborKernel'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getGaborKernel')
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'sigma');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'theta');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'lambd');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'gamma');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_getGaborKernel');
  }
};
Blockly.Blocks['imgproc_getStructuringElement'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getStructuringElement')
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'shape');
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_getStructuringElement');
  }
};
Blockly.Blocks['imgproc_medianBlur'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('medianBlur')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_medianBlur');
  }
};
Blockly.Blocks['imgproc_GaussianBlur'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('GaussianBlur')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'sigmaX');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_GaussianBlur');
  }
};
Blockly.Blocks['imgproc_bilateralFilter'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('bilateralFilter')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'd');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'sigmaColor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'sigmaSpace');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_bilateralFilter');
  }
};
Blockly.Blocks['imgproc_boxFilter'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('boxFilter')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_boxFilter');
  }
};
Blockly.Blocks['imgproc_sqrBoxFilter'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('sqrBoxFilter')
    this.appendValueInput('_src')
        .appendField('_src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_sqrBoxFilter');
  }
};
Blockly.Blocks['imgproc_blur'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('blur')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('ksize')
        .appendField('ksize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_blur');
  }
};
Blockly.Blocks['imgproc_filter2D'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('filter2D')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendValueInput('kernel')
        .appendField('kernel')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_filter2D');
  }
};
Blockly.Blocks['imgproc_sepFilter2D'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('sepFilter2D')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendValueInput('kernelX')
        .appendField('kernelX')
        .setCheck('image');
    this.appendValueInput('kernelY')
        .appendField('kernelY')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_sepFilter2D');
  }
};
Blockly.Blocks['imgproc_Sobel'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('Sobel')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dx');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dy');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_Sobel');
  }
};
Blockly.Blocks['imgproc_Scharr'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('Scharr')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dx');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dy');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_Scharr');
  }
};
Blockly.Blocks['imgproc_Laplacian'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('Laplacian')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ddepth');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_Laplacian');
  }
};
Blockly.Blocks['imgproc_Canny'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('Canny')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'threshold1');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'threshold2');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_Canny');
  }
};
Blockly.Blocks['imgproc_cornerMinEigenVal'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('cornerMinEigenVal')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_cornerMinEigenVal');
  }
};
Blockly.Blocks['imgproc_cornerHarris'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('cornerHarris')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'k');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_cornerHarris');
  }
};
Blockly.Blocks['imgproc_cornerEigenValsAndVecs'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('cornerEigenValsAndVecs')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_cornerEigenValsAndVecs');
  }
};
Blockly.Blocks['imgproc_preCornerDetect'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('preCornerDetect')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ksize');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_preCornerDetect');
  }
};
Blockly.Blocks['imgproc_cornerSubPix'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('cornerSubPix')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('corners')
        .appendField('corners')
        .setCheck('image');
    this.appendValueInput('winSize')
        .appendField('winSize')
        .setCheck('size');
    this.appendValueInput('zeroZone')
        .appendField('zeroZone')
        .setCheck('size');
    this.appendValueInput('criteria')
        .appendField('criteria');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_cornerSubPix');
  }
};
Blockly.Blocks['imgproc_goodFeaturesToTrack'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('goodFeaturesToTrack')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'maxCorners');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'qualityLevel');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'minDistance');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_goodFeaturesToTrack');
  }
};
Blockly.Blocks['imgproc_HoughLines'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('HoughLines')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'rho');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'theta');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_HoughLines');
  }
};
Blockly.Blocks['imgproc_HoughLinesP'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('HoughLinesP')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'rho');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'theta');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_HoughLinesP');
  }
};
Blockly.Blocks['imgproc_HoughCircles'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('HoughCircles')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'method');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dp');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'minDist');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_HoughCircles');
  }
};
Blockly.Blocks['imgproc_erode'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('erode')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('kernel')
        .appendField('kernel')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_erode');
  }
};
Blockly.Blocks['imgproc_dilate'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('dilate')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('kernel')
        .appendField('kernel')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_dilate');
  }
};
Blockly.Blocks['imgproc_morphologyEx'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('morphologyEx')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'op');
    this.appendValueInput('kernel')
        .appendField('kernel')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_morphologyEx');
  }
};
Blockly.Blocks['imgproc_resize'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('resize')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dsize')
        .appendField('dsize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_resize');
  }
};
Blockly.Blocks['imgproc_warpAffine'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('warpAffine')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('M')
        .appendField('M')
        .setCheck('image');
    this.appendValueInput('dsize')
        .appendField('dsize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_warpAffine');
  }
};
Blockly.Blocks['imgproc_warpPerspective'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('warpPerspective')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('M')
        .appendField('M')
        .setCheck('image');
    this.appendValueInput('dsize')
        .appendField('dsize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_warpPerspective');
  }
};
Blockly.Blocks['imgproc_remap'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('remap')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('map1')
        .appendField('map1')
        .setCheck('image');
    this.appendValueInput('map2')
        .appendField('map2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'interpolation');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_remap');
  }
};
Blockly.Blocks['imgproc_convertMaps'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('convertMaps')
    this.appendValueInput('map1')
        .appendField('map1')
        .setCheck('image');
    this.appendValueInput('map2')
        .appendField('map2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dstmap1type');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_convertMaps');
  }
};
Blockly.Blocks['imgproc_getRotationMatrix2D'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getRotationMatrix2D')
    this.appendValueInput('center')
        .appendField('center');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'angle');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'scale');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_getRotationMatrix2D');
  }
};
Blockly.Blocks['imgproc_invertAffineTransform'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('invertAffineTransform')
    this.appendValueInput('M')
        .appendField('M')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_invertAffineTransform');
  }
};
Blockly.Blocks['imgproc_getPerspectiveTransform'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getPerspectiveTransform')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getPerspectiveTransform');
  }
};
Blockly.Blocks['imgproc_getAffineTransform'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getAffineTransform')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getAffineTransform');
  }
};
Blockly.Blocks['imgproc_getRectSubPix'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getRectSubPix')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('patchSize')
        .appendField('patchSize')
        .setCheck('size');
    this.appendValueInput('center')
        .appendField('center');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getRectSubPix');
  }
};
Blockly.Blocks['imgproc_logPolar'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('logPolar')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('center')
        .appendField('center');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'M');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_logPolar');
  }
};
Blockly.Blocks['imgproc_linearPolar'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('linearPolar')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('center')
        .appendField('center');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'maxRadius');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_linearPolar');
  }
};
Blockly.Blocks['imgproc_integral'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('integral')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_integral');
  }
};
Blockly.Blocks['imgproc_accumulate'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('accumulate')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_accumulate');
  }
};
Blockly.Blocks['imgproc_accumulateSquare'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('accumulateSquare')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_accumulateSquare');
  }
};
Blockly.Blocks['imgproc_accumulateProduct'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('accumulateProduct')
    this.appendValueInput('src1')
        .appendField('src1')
        .setCheck('image');
    this.appendValueInput('src2')
        .appendField('src2')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_accumulateProduct');
  }
};
Blockly.Blocks['imgproc_accumulateWeighted'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('accumulateWeighted')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_accumulateWeighted');
  }
};
Blockly.Blocks['imgproc_createHanningWindow'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('createHanningWindow')
    this.appendValueInput('winSize')
        .appendField('winSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'type');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_createHanningWindow');
  }
};
Blockly.Blocks['imgproc_threshold'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('threshold')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'thresh');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'maxval');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'type');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_threshold');
  }
};
Blockly.Blocks['imgproc_adaptiveThreshold'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('adaptiveThreshold')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'maxValue');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'adaptiveMethod');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'thresholdType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'C');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_adaptiveThreshold');
  }
};
Blockly.Blocks['imgproc_pyrDown'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('pyrDown')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_pyrDown');
  }
};
Blockly.Blocks['imgproc_pyrUp'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('pyrUp')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_pyrUp');
  }
};
Blockly.Blocks['imgproc_undistort'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('undistort')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_undistort');
  }
};
Blockly.Blocks['imgproc_initUndistortRectifyMap'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('initUndistortRectifyMap')
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.appendValueInput('R')
        .appendField('R')
        .setCheck('image');
    this.appendValueInput('newCameraMatrix')
        .appendField('newCameraMatrix')
        .setCheck('image');
    this.appendValueInput('size')
        .appendField('size')
        .setCheck('size');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'm1type');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_initUndistortRectifyMap');
  }
};
Blockly.Blocks['imgproc_initWideAngleProjMap'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('initWideAngleProjMap')
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'destImageWidth');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'm1type');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_initWideAngleProjMap');
  }
};
Blockly.Blocks['imgproc_getDefaultNewCameraMatrix'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('getDefaultNewCameraMatrix')
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_getDefaultNewCameraMatrix');
  }
};
Blockly.Blocks['imgproc_undistortPoints'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('undistortPoints')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_undistortPoints');
  }
};
Blockly.Blocks['imgproc_calcHist'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('calcHist')
    this.appendValueInput('images')
        .appendField('images');
    this.appendValueInput('channels')
        .appendField('channels');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.appendValueInput('histSize')
        .appendField('histSize');
    this.appendValueInput('ranges')
        .appendField('ranges');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_calcHist');
  }
};
Blockly.Blocks['imgproc_calcBackProject'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('calcBackProject')
    this.appendValueInput('images')
        .appendField('images');
    this.appendValueInput('channels')
        .appendField('channels');
    this.appendValueInput('hist')
        .appendField('hist')
        .setCheck('image');
    this.appendValueInput('ranges')
        .appendField('ranges');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'scale');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_calcBackProject');
  }
};
Blockly.Blocks['imgproc_compareHist'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('compareHist')
    this.appendValueInput('H1')
        .appendField('H1')
        .setCheck('image');
    this.appendValueInput('H2')
        .appendField('H2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'method');
    this.setOutput(true,'Number');
    this.setInputsInline(true);
    this.setTooltip('imgproc_compareHist');
  }
};
Blockly.Blocks['imgproc_equalizeHist'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('equalizeHist')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_equalizeHist');
  }
};
Blockly.Blocks['imgproc_watershed'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('watershed')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('markers')
        .appendField('markers')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_watershed');
  }
};
Blockly.Blocks['imgproc_pyrMeanShiftFiltering'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('pyrMeanShiftFiltering')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'sp');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'sr');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_pyrMeanShiftFiltering');
  }
};
Blockly.Blocks['imgproc_grabCut'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('grabCut')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.appendValueInput('rect')
        .appendField('rect');
    this.appendValueInput('bgdModel')
        .appendField('bgdModel')
        .setCheck('image');
    this.appendValueInput('fgdModel')
        .appendField('fgdModel')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'iterCount');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_grabCut');
  }
};
Blockly.Blocks['imgproc_distanceTransform'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('distanceTransform')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'distanceType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'maskSize');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_distanceTransform');
  }
};
Blockly.Blocks['imgproc_cvtColor'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('cvtColor')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'code');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_cvtColor');
  }
};
Blockly.Blocks['imgproc_demosaicing'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('demosaicing')
    this.appendValueInput('_src')
        .appendField('_src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'code');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_demosaicing');
  }
};
Blockly.Blocks['imgproc_matchTemplate'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('matchTemplate')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('templ')
        .appendField('templ')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'method');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_matchTemplate');
  }
};
Blockly.Blocks['imgproc_connectedComponents'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('connectedComponents')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_connectedComponents');
  }
};
Blockly.Blocks['imgproc_connectedComponentsWithStats'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('connectedComponentsWithStats')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_connectedComponentsWithStats');
  }
};
Blockly.Blocks['imgproc_findContours'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('findContours')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'mode');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'method');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_findContours');
  }
};
Blockly.Blocks['imgproc_approxPolyDP'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('approxPolyDP')
    this.appendValueInput('curve')
        .appendField('curve')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'epsilon');
    this.appendValueInput('closed')
        .appendField('closed');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_approxPolyDP');
  }
};
Blockly.Blocks['imgproc_arcLength'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('arcLength')
    this.appendValueInput('curve')
        .appendField('curve')
        .setCheck('image');
    this.appendValueInput('closed')
        .appendField('closed');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_arcLength');
  }
};
Blockly.Blocks['imgproc_boundingRect'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('boundingRect')
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('imgproc_boundingRect');
  }
};
Blockly.Blocks['imgproc_contourArea'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('contourArea')
    this.appendValueInput('contour')
        .appendField('contour')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_contourArea');
  }
};
Blockly.Blocks['imgproc_boxPoints'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('boxPoints')
    this.appendValueInput('box')
        .appendField('box');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_boxPoints');
  }
};
Blockly.Blocks['imgproc_minEnclosingTriangle'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('minEnclosingTriangle')
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_minEnclosingTriangle');
  }
};
Blockly.Blocks['imgproc_matchShapes'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('matchShapes')
    this.appendValueInput('contour1')
        .appendField('contour1')
        .setCheck('image');
    this.appendValueInput('contour2')
        .appendField('contour2')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'method');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'parameter');
    this.setOutput(true,'Number');
    this.setInputsInline(true);
    this.setTooltip('imgproc_matchShapes');
  }
};
Blockly.Blocks['imgproc_convexHull'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('convexHull')
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_convexHull');
  }
};
Blockly.Blocks['imgproc_convexityDefects'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('convexityDefects')
    this.appendValueInput('contour')
        .appendField('contour')
        .setCheck('image');
    this.appendValueInput('convexhull')
        .appendField('convexhull')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_convexityDefects');
  }
};
Blockly.Blocks['imgproc_isContourConvex'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('isContourConvex')
    this.appendValueInput('contour')
        .appendField('contour')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('imgproc_isContourConvex');
  }
};
Blockly.Blocks['imgproc_intersectConvexConvex'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('intersectConvexConvex')
    this.appendValueInput('_p1')
        .appendField('_p1')
        .setCheck('image');
    this.appendValueInput('_p2')
        .appendField('_p2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_intersectConvexConvex');
  }
};
Blockly.Blocks['imgproc_fitLine'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('fitLine')
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'distType');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'param');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'reps');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'aeps');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_fitLine');
  }
};
Blockly.Blocks['imgproc_pointPolygonTest'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('pointPolygonTest')
    this.appendValueInput('contour')
        .appendField('contour')
        .setCheck('image');
    this.appendValueInput('pt')
        .appendField('pt');
    this.appendValueInput('measureDist')
        .appendField('measureDist');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_pointPolygonTest');
  }
};
Blockly.Blocks['imgproc_rotatedRectangleIntersection'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('rotatedRectangleIntersection')
    this.appendValueInput('rect1')
        .appendField('rect1');
    this.appendValueInput('rect2')
        .appendField('rect2');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_rotatedRectangleIntersection');
  }
};
Blockly.Blocks['imgproc_createCLAHE'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('createCLAHE')
    this.setOutput(true);
    this.setTooltip('imgproc_createCLAHE');
  }
};
Blockly.Blocks['imgproc_applyColorMap'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('applyColorMap')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'colormap');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_applyColorMap');
  }
};
Blockly.Blocks['imgproc_line'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('line')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('pt1')
        .appendField('pt1')
        .setCheck('point');
    this.appendValueInput('pt2')
        .appendField('pt2')
        .setCheck('point');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_line');
  }
};
Blockly.Blocks['imgproc_arrowedLine'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('arrowedLine')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('pt1')
        .appendField('pt1')
        .setCheck('point');
    this.appendValueInput('pt2')
        .appendField('pt2')
        .setCheck('point');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_arrowedLine');
  }
};
Blockly.Blocks['imgproc_rectangle'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('rectangle')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('pt1')
        .appendField('pt1')
        .setCheck('point');
    this.appendValueInput('pt2')
        .appendField('pt2')
        .setCheck('point');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_rectangle');
  }
};
Blockly.Blocks['imgproc_circle'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('circle')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('center')
        .appendField('center')
        .setCheck('point');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'radius');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_circle');
  }
};
Blockly.Blocks['imgproc_ellipse'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('ellipse')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('center')
        .appendField('center')
        .setCheck('point');
    this.appendValueInput('axes')
        .appendField('axes')
        .setCheck('size');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'angle');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'startAngle');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'endAngle');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_ellipse');
  }
};
Blockly.Blocks['imgproc_fillConvexPoly'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('fillConvexPoly')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_fillConvexPoly');
  }
};
Blockly.Blocks['imgproc_fillPoly'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('fillPoly')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('pts')
        .appendField('pts');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_fillPoly');
  }
};
Blockly.Blocks['imgproc_polylines'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('polylines')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('pts')
        .appendField('pts');
    this.appendValueInput('isClosed')
        .appendField('isClosed');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_polylines');
  }
};
Blockly.Blocks['imgproc_drawContours'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('drawContours')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('contours')
        .appendField('contours');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'contourIdx');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_drawContours');
  }
};
Blockly.Blocks['imgproc_clipLine'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('clipLine')
    this.appendValueInput('imgRect')
        .appendField('imgRect');
    this.appendValueInput('pt1')
        .appendField('pt1')
        .setCheck('point');
    this.appendValueInput('pt2')
        .appendField('pt2')
        .setCheck('point');
    this.setOutput(true,'point');
    this.setTooltip('imgproc_clipLine');
  }
};
Blockly.Blocks['imgproc_ellipse2Poly'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('ellipse2Poly')
    this.appendValueInput('center')
        .appendField('center')
        .setCheck('point');
    this.appendValueInput('axes')
        .appendField('axes')
        .setCheck('size');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'angle');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'arcStart');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'arcEnd');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'delta');
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip('imgproc_ellipse2Poly');
  }
};
Blockly.Blocks['imgproc_putText'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('putText')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('text')
        .appendField('text')
        .setCheck('String');
    this.appendValueInput('org')
        .appendField('org')
        .setCheck('point');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'fontFace');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'fontScale');
    this.appendValueInput('color')
        .appendField('color')
        .setCheck('Colour');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgproc_putText');
  }
};
Blockly.Blocks['imgproc_LineSegmentDetector_detect'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('LineSegmentDetector_detect')
    this.appendValueInput('that')
        .appendField('LineSegmentDetector');
    this.appendValueInput('_image')
        .appendField('_image')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_LineSegmentDetector_detect');
  }
};
Blockly.Blocks['imgproc_LineSegmentDetector_drawSegments'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('LineSegmentDetector_drawSegments')
    this.appendValueInput('that')
        .appendField('LineSegmentDetector');
    this.appendValueInput('_image')
        .appendField('_image')
        .setCheck('image');
    this.appendValueInput('lines')
        .appendField('lines')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_LineSegmentDetector_drawSegments');
  }
};
Blockly.Blocks['imgproc_LineSegmentDetector_compareSegments'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('LineSegmentDetector_compareSegments')
    this.appendValueInput('that')
        .appendField('LineSegmentDetector');
    this.appendValueInput('size')
        .appendField('size')
        .setCheck('size');
    this.appendValueInput('lines1')
        .appendField('lines1')
        .setCheck('image');
    this.appendValueInput('lines2')
        .appendField('lines2')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_LineSegmentDetector_compareSegments');
  }
};
Blockly.Blocks['imgproc_CLAHE_apply'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('CLAHE_apply')
    this.appendValueInput('that')
        .appendField('CLAHE');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('imgproc_CLAHE_apply');
  }
};
Blockly.Blocks['imgproc_CLAHE_setClipLimit'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('CLAHE_setClipLimit')
    this.appendValueInput('that')
        .appendField('CLAHE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'clipLimit');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('imgproc_CLAHE_setClipLimit');
  }
};
Blockly.Blocks['imgproc_CLAHE_getClipLimit'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('CLAHE_getClipLimit')
    this.appendValueInput('that')
        .appendField('CLAHE');
    this.setOutput(true,'Number');
    this.setTooltip('imgproc_CLAHE_getClipLimit');
  }
};
Blockly.Blocks['imgproc_CLAHE_setTilesGridSize'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('CLAHE_setTilesGridSize')
    this.appendValueInput('that')
        .appendField('CLAHE');
    this.appendValueInput('tileGridSize')
        .appendField('tileGridSize')
        .setCheck('size');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_CLAHE_setTilesGridSize');
  }
};
Blockly.Blocks['imgproc_CLAHE_getTilesGridSize'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('CLAHE_getTilesGridSize')
    this.appendValueInput('that')
        .appendField('CLAHE');
    this.setOutput(true,'size');
    this.setTooltip('imgproc_CLAHE_getTilesGridSize');
  }
};
Blockly.Blocks['imgproc_CLAHE_collectGarbage'] = {
  init: function() {
    this.setColour(12);
    this.appendDummyInput()
        .appendField('CLAHE_collectGarbage')
    this.appendValueInput('that')
        .appendField('CLAHE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('imgproc_CLAHE_collectGarbage');
  }
};
Blockly.Blocks['videoio_VideoCapture_VideoCapture'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('VideoCapture_VideoCapture')
    this.setOutput(true);
    this.setTooltip('videoio_VideoCapture_VideoCapture');
  }
};
Blockly.Blocks['videoio_VideoCapture_open'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('VideoCapture_open')
    this.appendValueInput('that')
        .appendField('VideoCapture');
    this.appendValueInput('filename')
        .appendField('filename')
        .setCheck('String');
    this.setOutput(true);
    this.setTooltip('videoio_VideoCapture_open');
  }
};
Blockly.Blocks['videoio_VideoCapture_isOpened'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('VideoCapture_isOpened')
    this.appendValueInput('that')
        .appendField('VideoCapture');
    this.setOutput(true);
    this.setTooltip('videoio_VideoCapture_isOpened');
  }
};
Blockly.Blocks['videoio_VideoCapture_release'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('VideoCapture_release')
    this.appendValueInput('that')
        .appendField('VideoCapture');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('videoio_VideoCapture_release');
  }
};
Blockly.Blocks['videoio_VideoCapture_grab'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('VideoCapture_grab')
    this.appendValueInput('that')
        .appendField('VideoCapture');
    this.setOutput(true);
    this.setTooltip('videoio_VideoCapture_grab');
  }
};
Blockly.Blocks['videoio_VideoCapture_retrieve'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('VideoCapture_retrieve')
    this.appendValueInput('that')
        .appendField('VideoCapture');
    this.setOutput(true,'image');
    this.setTooltip('videoio_VideoCapture_retrieve');
  }
};
Blockly.Blocks['videoio_VideoCapture_read'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('VideoCapture_read')
    this.appendValueInput('that')
        .appendField('VideoCapture');
    this.setOutput(true,'image');
    this.setTooltip('videoio_VideoCapture_read');
  }
};
Blockly.Blocks['videoio_VideoCapture_set'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('VideoCapture_set')
    this.appendValueInput('that')
        .appendField('VideoCapture');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'propId');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'value');
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip('videoio_VideoCapture_set');
  }
};
Blockly.Blocks['videoio_VideoCapture_get'] = {
  init: function() {
    this.setColour(22);
    this.appendDummyInput()
        .appendField('VideoCapture_get')
    this.appendValueInput('that')
        .appendField('VideoCapture');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'propId');
    this.setOutput(true,'Number');
    this.setInputsInline(true);
    this.setTooltip('videoio_VideoCapture_get');
  }
};
Blockly.Blocks['photo_inpaint'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('inpaint')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('inpaintMask')
        .appendField('inpaintMask')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'inpaintRadius');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('photo_inpaint');
  }
};
Blockly.Blocks['photo_fastNlMeansDenoising'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('fastNlMeansDenoising')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_fastNlMeansDenoising');
  }
};
Blockly.Blocks['photo_fastNlMeansDenoisingColored'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('fastNlMeansDenoisingColored')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_fastNlMeansDenoisingColored');
  }
};
Blockly.Blocks['photo_fastNlMeansDenoisingMulti'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('fastNlMeansDenoisingMulti')
    this.appendValueInput('srcImgs')
        .appendField('srcImgs');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'imgToDenoiseIndex');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'temporalWindowSize');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('photo_fastNlMeansDenoisingMulti');
  }
};
Blockly.Blocks['photo_fastNlMeansDenoisingColoredMulti'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('fastNlMeansDenoisingColoredMulti')
    this.appendValueInput('srcImgs')
        .appendField('srcImgs');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'imgToDenoiseIndex');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'temporalWindowSize');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('photo_fastNlMeansDenoisingColoredMulti');
  }
};
Blockly.Blocks['photo_denoise_TVL1'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('denoise_TVL1')
    this.appendValueInput('observations')
        .appendField('observations');
    this.appendValueInput('result')
        .appendField('result')
        .setCheck('image');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_denoise_TVL1');
  }
};
Blockly.Blocks['photo_createTonemap'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('createTonemap')
    this.setOutput(true);
    this.setTooltip('photo_createTonemap');
  }
};
Blockly.Blocks['photo_createTonemapDrago'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('createTonemapDrago')
    this.setOutput(true);
    this.setTooltip('photo_createTonemapDrago');
  }
};
Blockly.Blocks['photo_createTonemapDurand'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('createTonemapDurand')
    this.setOutput(true);
    this.setTooltip('photo_createTonemapDurand');
  }
};
Blockly.Blocks['photo_createTonemapReinhard'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('createTonemapReinhard')
    this.setOutput(true);
    this.setTooltip('photo_createTonemapReinhard');
  }
};
Blockly.Blocks['photo_createTonemapMantiuk'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('createTonemapMantiuk')
    this.setOutput(true);
    this.setTooltip('photo_createTonemapMantiuk');
  }
};
Blockly.Blocks['photo_createAlignMTB'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('createAlignMTB')
    this.setOutput(true);
    this.setTooltip('photo_createAlignMTB');
  }
};
Blockly.Blocks['photo_createCalibrateDebevec'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('createCalibrateDebevec')
    this.setOutput(true);
    this.setTooltip('photo_createCalibrateDebevec');
  }
};
Blockly.Blocks['photo_createCalibrateRobertson'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('createCalibrateRobertson')
    this.setOutput(true);
    this.setTooltip('photo_createCalibrateRobertson');
  }
};
Blockly.Blocks['photo_createMergeDebevec'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('createMergeDebevec')
    this.setOutput(true);
    this.setTooltip('photo_createMergeDebevec');
  }
};
Blockly.Blocks['photo_createMergeMertens'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('createMergeMertens')
    this.setOutput(true);
    this.setTooltip('photo_createMergeMertens');
  }
};
Blockly.Blocks['photo_createMergeRobertson'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('createMergeRobertson')
    this.setOutput(true);
    this.setTooltip('photo_createMergeRobertson');
  }
};
Blockly.Blocks['photo_decolor'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('decolor')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_decolor');
  }
};
Blockly.Blocks['photo_seamlessClone'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('seamlessClone')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.appendValueInput('p')
        .appendField('p')
        .setCheck('point');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('photo_seamlessClone');
  }
};
Blockly.Blocks['photo_colorChange'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('colorChange')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_colorChange');
  }
};
Blockly.Blocks['photo_illuminationChange'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('illuminationChange')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_illuminationChange');
  }
};
Blockly.Blocks['photo_textureFlattening'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('textureFlattening')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_textureFlattening');
  }
};
Blockly.Blocks['photo_edgePreservingFilter'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('edgePreservingFilter')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_edgePreservingFilter');
  }
};
Blockly.Blocks['photo_detailEnhance'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('detailEnhance')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_detailEnhance');
  }
};
Blockly.Blocks['photo_pencilSketch'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('pencilSketch')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_pencilSketch');
  }
};
Blockly.Blocks['photo_stylization'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('stylization')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_stylization');
  }
};
Blockly.Blocks['photo_CalibrateRobertson_getMaxIter'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateRobertson_getMaxIter')
    this.appendValueInput('that')
        .appendField('CalibrateRobertson');
    this.setOutput(true,'Number');
    this.setTooltip('photo_CalibrateRobertson_getMaxIter');
  }
};
Blockly.Blocks['photo_CalibrateRobertson_setMaxIter'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateRobertson_setMaxIter')
    this.appendValueInput('that')
        .appendField('CalibrateRobertson');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'max_iter');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_CalibrateRobertson_setMaxIter');
  }
};
Blockly.Blocks['photo_CalibrateRobertson_getThreshold'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateRobertson_getThreshold')
    this.appendValueInput('that')
        .appendField('CalibrateRobertson');
    this.setOutput(true,'Number');
    this.setTooltip('photo_CalibrateRobertson_getThreshold');
  }
};
Blockly.Blocks['photo_CalibrateRobertson_setThreshold'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateRobertson_setThreshold')
    this.appendValueInput('that')
        .appendField('CalibrateRobertson');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_CalibrateRobertson_setThreshold');
  }
};
Blockly.Blocks['photo_CalibrateRobertson_getRadiance'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateRobertson_getRadiance')
    this.appendValueInput('that')
        .appendField('CalibrateRobertson');
    this.setOutput(true,'image');
    this.setTooltip('photo_CalibrateRobertson_getRadiance');
  }
};
Blockly.Blocks['photo_TonemapMantiuk_getScale'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapMantiuk_getScale')
    this.appendValueInput('that')
        .appendField('TonemapMantiuk');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapMantiuk_getScale');
  }
};
Blockly.Blocks['photo_TonemapMantiuk_setScale'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapMantiuk_setScale')
    this.appendValueInput('that')
        .appendField('TonemapMantiuk');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'scale');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_TonemapMantiuk_setScale');
  }
};
Blockly.Blocks['photo_TonemapMantiuk_getSaturation'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapMantiuk_getSaturation')
    this.appendValueInput('that')
        .appendField('TonemapMantiuk');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapMantiuk_getSaturation');
  }
};
Blockly.Blocks['photo_TonemapMantiuk_setSaturation'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapMantiuk_setSaturation')
    this.appendValueInput('that')
        .appendField('TonemapMantiuk');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'saturation');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_TonemapMantiuk_setSaturation');
  }
};
Blockly.Blocks['photo_TonemapDurand_getSaturation'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDurand_getSaturation')
    this.appendValueInput('that')
        .appendField('TonemapDurand');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapDurand_getSaturation');
  }
};
Blockly.Blocks['photo_TonemapDurand_setSaturation'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDurand_setSaturation')
    this.appendValueInput('that')
        .appendField('TonemapDurand');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'saturation');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_TonemapDurand_setSaturation');
  }
};
Blockly.Blocks['photo_TonemapDurand_getContrast'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDurand_getContrast')
    this.appendValueInput('that')
        .appendField('TonemapDurand');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapDurand_getContrast');
  }
};
Blockly.Blocks['photo_TonemapDurand_setContrast'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDurand_setContrast')
    this.appendValueInput('that')
        .appendField('TonemapDurand');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'contrast');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_TonemapDurand_setContrast');
  }
};
Blockly.Blocks['photo_TonemapDurand_getSigmaSpace'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDurand_getSigmaSpace')
    this.appendValueInput('that')
        .appendField('TonemapDurand');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapDurand_getSigmaSpace');
  }
};
Blockly.Blocks['photo_TonemapDurand_setSigmaSpace'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDurand_setSigmaSpace')
    this.appendValueInput('that')
        .appendField('TonemapDurand');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'sigma_space');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_TonemapDurand_setSigmaSpace');
  }
};
Blockly.Blocks['photo_TonemapDurand_getSigmaColor'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDurand_getSigmaColor')
    this.appendValueInput('that')
        .appendField('TonemapDurand');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapDurand_getSigmaColor');
  }
};
Blockly.Blocks['photo_TonemapDurand_setSigmaColor'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDurand_setSigmaColor')
    this.appendValueInput('that')
        .appendField('TonemapDurand');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'sigma_color');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_TonemapDurand_setSigmaColor');
  }
};
Blockly.Blocks['photo_AlignExposures_process'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('AlignExposures_process')
    this.appendValueInput('that')
        .appendField('AlignExposures');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('dst')
        .appendField('dst');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_AlignExposures_process');
  }
};
Blockly.Blocks['photo_CalibrateDebevec_getLambda'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateDebevec_getLambda')
    this.appendValueInput('that')
        .appendField('CalibrateDebevec');
    this.setOutput(true,'Number');
    this.setTooltip('photo_CalibrateDebevec_getLambda');
  }
};
Blockly.Blocks['photo_CalibrateDebevec_setLambda'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateDebevec_setLambda')
    this.appendValueInput('that')
        .appendField('CalibrateDebevec');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'lambda');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_CalibrateDebevec_setLambda');
  }
};
Blockly.Blocks['photo_CalibrateDebevec_getSamples'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateDebevec_getSamples')
    this.appendValueInput('that')
        .appendField('CalibrateDebevec');
    this.setOutput(true,'Number');
    this.setTooltip('photo_CalibrateDebevec_getSamples');
  }
};
Blockly.Blocks['photo_CalibrateDebevec_setSamples'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateDebevec_setSamples')
    this.appendValueInput('that')
        .appendField('CalibrateDebevec');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'samples');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_CalibrateDebevec_setSamples');
  }
};
Blockly.Blocks['photo_CalibrateDebevec_getRandom'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateDebevec_getRandom')
    this.appendValueInput('that')
        .appendField('CalibrateDebevec');
    this.setOutput(true);
    this.setTooltip('photo_CalibrateDebevec_getRandom');
  }
};
Blockly.Blocks['photo_CalibrateDebevec_setRandom'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateDebevec_setRandom')
    this.appendValueInput('that')
        .appendField('CalibrateDebevec');
    this.appendValueInput('random')
        .appendField('random');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_CalibrateDebevec_setRandom');
  }
};
Blockly.Blocks['photo_TonemapReinhard_getIntensity'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapReinhard_getIntensity')
    this.appendValueInput('that')
        .appendField('TonemapReinhard');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapReinhard_getIntensity');
  }
};
Blockly.Blocks['photo_TonemapReinhard_setIntensity'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapReinhard_setIntensity')
    this.appendValueInput('that')
        .appendField('TonemapReinhard');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'intensity');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_TonemapReinhard_setIntensity');
  }
};
Blockly.Blocks['photo_TonemapReinhard_getLightAdaptation'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapReinhard_getLightAdaptation')
    this.appendValueInput('that')
        .appendField('TonemapReinhard');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapReinhard_getLightAdaptation');
  }
};
Blockly.Blocks['photo_TonemapReinhard_setLightAdaptation'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapReinhard_setLightAdaptation')
    this.appendValueInput('that')
        .appendField('TonemapReinhard');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'light_adapt');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_TonemapReinhard_setLightAdaptation');
  }
};
Blockly.Blocks['photo_TonemapReinhard_getColorAdaptation'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapReinhard_getColorAdaptation')
    this.appendValueInput('that')
        .appendField('TonemapReinhard');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapReinhard_getColorAdaptation');
  }
};
Blockly.Blocks['photo_TonemapReinhard_setColorAdaptation'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapReinhard_setColorAdaptation')
    this.appendValueInput('that')
        .appendField('TonemapReinhard');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'color_adapt');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_TonemapReinhard_setColorAdaptation');
  }
};
Blockly.Blocks['photo_MergeRobertson_process'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('MergeRobertson_process')
    this.appendValueInput('that')
        .appendField('MergeRobertson');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_MergeRobertson_process');
  }
};
Blockly.Blocks['photo_CalibrateCRF_process'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('CalibrateCRF_process')
    this.appendValueInput('that')
        .appendField('CalibrateCRF');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_CalibrateCRF_process');
  }
};
Blockly.Blocks['photo_TonemapDrago_getSaturation'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDrago_getSaturation')
    this.appendValueInput('that')
        .appendField('TonemapDrago');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapDrago_getSaturation');
  }
};
Blockly.Blocks['photo_TonemapDrago_setSaturation'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDrago_setSaturation')
    this.appendValueInput('that')
        .appendField('TonemapDrago');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'saturation');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_TonemapDrago_setSaturation');
  }
};
Blockly.Blocks['photo_TonemapDrago_getBias'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDrago_getBias')
    this.appendValueInput('that')
        .appendField('TonemapDrago');
    this.setOutput(true,'Number');
    this.setTooltip('photo_TonemapDrago_getBias');
  }
};
Blockly.Blocks['photo_TonemapDrago_setBias'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('TonemapDrago_setBias')
    this.appendValueInput('that')
        .appendField('TonemapDrago');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'bias');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_TonemapDrago_setBias');
  }
};
Blockly.Blocks['photo_AlignMTB_process'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('AlignMTB_process')
    this.appendValueInput('that')
        .appendField('AlignMTB');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('dst')
        .appendField('dst');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_AlignMTB_process');
  }
};
Blockly.Blocks['photo_AlignMTB_calculateShift'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('AlignMTB_calculateShift')
    this.appendValueInput('that')
        .appendField('AlignMTB');
    this.appendValueInput('img0')
        .appendField('img0')
        .setCheck('image');
    this.appendValueInput('img1')
        .appendField('img1')
        .setCheck('image');
    this.setOutput(true,'point');
    this.setTooltip('photo_AlignMTB_calculateShift');
  }
};
Blockly.Blocks['photo_AlignMTB_shiftMat'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('AlignMTB_shiftMat')
    this.appendValueInput('that')
        .appendField('AlignMTB');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('shift')
        .appendField('shift')
        .setCheck('point');
    this.setOutput(true,'image');
    this.setTooltip('photo_AlignMTB_shiftMat');
  }
};
Blockly.Blocks['photo_AlignMTB_computeBitmaps'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('AlignMTB_computeBitmaps')
    this.appendValueInput('that')
        .appendField('AlignMTB');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_AlignMTB_computeBitmaps');
  }
};
Blockly.Blocks['photo_AlignMTB_getMaxBits'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('AlignMTB_getMaxBits')
    this.appendValueInput('that')
        .appendField('AlignMTB');
    this.setOutput(true,'Number');
    this.setTooltip('photo_AlignMTB_getMaxBits');
  }
};
Blockly.Blocks['photo_AlignMTB_setMaxBits'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('AlignMTB_setMaxBits')
    this.appendValueInput('that')
        .appendField('AlignMTB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'max_bits');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_AlignMTB_setMaxBits');
  }
};
Blockly.Blocks['photo_AlignMTB_getExcludeRange'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('AlignMTB_getExcludeRange')
    this.appendValueInput('that')
        .appendField('AlignMTB');
    this.setOutput(true,'Number');
    this.setTooltip('photo_AlignMTB_getExcludeRange');
  }
};
Blockly.Blocks['photo_AlignMTB_setExcludeRange'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('AlignMTB_setExcludeRange')
    this.appendValueInput('that')
        .appendField('AlignMTB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'exclude_range');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_AlignMTB_setExcludeRange');
  }
};
Blockly.Blocks['photo_AlignMTB_getCut'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('AlignMTB_getCut')
    this.appendValueInput('that')
        .appendField('AlignMTB');
    this.setOutput(true);
    this.setTooltip('photo_AlignMTB_getCut');
  }
};
Blockly.Blocks['photo_AlignMTB_setCut'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('AlignMTB_setCut')
    this.appendValueInput('that')
        .appendField('AlignMTB');
    this.appendValueInput('value')
        .appendField('value');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('photo_AlignMTB_setCut');
  }
};
Blockly.Blocks['photo_MergeDebevec_process'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('MergeDebevec_process')
    this.appendValueInput('that')
        .appendField('MergeDebevec');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_MergeDebevec_process');
  }
};
Blockly.Blocks['photo_MergeMertens_process'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('MergeMertens_process')
    this.appendValueInput('that')
        .appendField('MergeMertens');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_MergeMertens_process');
  }
};
Blockly.Blocks['photo_MergeMertens_getContrastWeight'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('MergeMertens_getContrastWeight')
    this.appendValueInput('that')
        .appendField('MergeMertens');
    this.setOutput(true,'Number');
    this.setTooltip('photo_MergeMertens_getContrastWeight');
  }
};
Blockly.Blocks['photo_MergeMertens_setContrastWeight'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('MergeMertens_setContrastWeight')
    this.appendValueInput('that')
        .appendField('MergeMertens');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'contrast_weiht');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_MergeMertens_setContrastWeight');
  }
};
Blockly.Blocks['photo_MergeMertens_getSaturationWeight'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('MergeMertens_getSaturationWeight')
    this.appendValueInput('that')
        .appendField('MergeMertens');
    this.setOutput(true,'Number');
    this.setTooltip('photo_MergeMertens_getSaturationWeight');
  }
};
Blockly.Blocks['photo_MergeMertens_setSaturationWeight'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('MergeMertens_setSaturationWeight')
    this.appendValueInput('that')
        .appendField('MergeMertens');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'saturation_weight');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_MergeMertens_setSaturationWeight');
  }
};
Blockly.Blocks['photo_MergeMertens_getExposureWeight'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('MergeMertens_getExposureWeight')
    this.appendValueInput('that')
        .appendField('MergeMertens');
    this.setOutput(true,'Number');
    this.setTooltip('photo_MergeMertens_getExposureWeight');
  }
};
Blockly.Blocks['photo_MergeMertens_setExposureWeight'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('MergeMertens_setExposureWeight')
    this.appendValueInput('that')
        .appendField('MergeMertens');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'exposure_weight');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_MergeMertens_setExposureWeight');
  }
};
Blockly.Blocks['photo_MergeExposures_process'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('MergeExposures_process')
    this.appendValueInput('that')
        .appendField('MergeExposures');
    this.appendValueInput('src')
        .appendField('src');
    this.appendValueInput('times')
        .appendField('times')
        .setCheck('image');
    this.appendValueInput('response')
        .appendField('response')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_MergeExposures_process');
  }
};
Blockly.Blocks['photo_Tonemap_process'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('Tonemap_process')
    this.appendValueInput('that')
        .appendField('Tonemap');
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('photo_Tonemap_process');
  }
};
Blockly.Blocks['photo_Tonemap_getGamma'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('Tonemap_getGamma')
    this.appendValueInput('that')
        .appendField('Tonemap');
    this.setOutput(true,'Number');
    this.setTooltip('photo_Tonemap_getGamma');
  }
};
Blockly.Blocks['photo_Tonemap_setGamma'] = {
  init: function() {
    this.setColour(44);
    this.appendDummyInput()
        .appendField('Tonemap_setGamma')
    this.appendValueInput('that')
        .appendField('Tonemap');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'gamma');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('photo_Tonemap_setGamma');
  }
};
Blockly.Blocks['imgcodecs_imread'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('imread')
    this.appendValueInput('filename')
        .appendField('filename')
        .setCheck('String');
    this.setOutput(true,'image');
    this.setTooltip('imgcodecs_imread');
  }
};
Blockly.Blocks['imgcodecs_imreadmulti'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('imreadmulti')
    this.appendValueInput('filename')
        .appendField('filename')
        .setCheck('String');
    this.appendValueInput('mats')
        .appendField('mats');
    this.setOutput(true);
    this.setTooltip('imgcodecs_imreadmulti');
  }
};
Blockly.Blocks['imgcodecs_imwrite'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('imwrite')
    this.appendValueInput('filename')
        .appendField('filename')
        .setCheck('String');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('imgcodecs_imwrite');
  }
};
Blockly.Blocks['imgcodecs_imdecode'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('imdecode')
    this.appendValueInput('buf')
        .appendField('buf')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('imgcodecs_imdecode');
  }
};
Blockly.Blocks['imgcodecs_imencode'] = {
  init: function() {
    this.setColour(55);
    this.appendDummyInput()
        .appendField('imencode')
    this.appendValueInput('ext')
        .appendField('ext')
        .setCheck('String');
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('imgcodecs_imencode');
  }
};
Blockly.Blocks['calib3d_Rodrigues'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('Rodrigues')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_Rodrigues');
  }
};
Blockly.Blocks['calib3d_findHomography'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('findHomography')
    this.appendValueInput('srcPoints')
        .appendField('srcPoints')
        .setCheck('image');
    this.appendValueInput('dstPoints')
        .appendField('dstPoints')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_findHomography');
  }
};
Blockly.Blocks['calib3d_RQDecomp3x3'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('RQDecomp3x3')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_RQDecomp3x3');
  }
};
Blockly.Blocks['calib3d_decomposeProjectionMatrix'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('decomposeProjectionMatrix')
    this.appendValueInput('projMatrix')
        .appendField('projMatrix')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_decomposeProjectionMatrix');
  }
};
Blockly.Blocks['calib3d_matMulDeriv'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('matMulDeriv')
    this.appendValueInput('A')
        .appendField('A')
        .setCheck('image');
    this.appendValueInput('B')
        .appendField('B')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_matMulDeriv');
  }
};
Blockly.Blocks['calib3d_composeRT'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('composeRT')
    this.appendValueInput('rvec1')
        .appendField('rvec1')
        .setCheck('image');
    this.appendValueInput('tvec1')
        .appendField('tvec1')
        .setCheck('image');
    this.appendValueInput('rvec2')
        .appendField('rvec2')
        .setCheck('image');
    this.appendValueInput('tvec2')
        .appendField('tvec2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_composeRT');
  }
};
Blockly.Blocks['calib3d_projectPoints'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('projectPoints')
    this.appendValueInput('objectPoints')
        .appendField('objectPoints')
        .setCheck('image');
    this.appendValueInput('rvec')
        .appendField('rvec')
        .setCheck('image');
    this.appendValueInput('tvec')
        .appendField('tvec')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_projectPoints');
  }
};
Blockly.Blocks['calib3d_solvePnP'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('solvePnP')
    this.appendValueInput('objectPoints')
        .appendField('objectPoints')
        .setCheck('image');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_solvePnP');
  }
};
Blockly.Blocks['calib3d_solvePnPRansac'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('solvePnPRansac')
    this.appendValueInput('objectPoints')
        .appendField('objectPoints')
        .setCheck('image');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints')
        .setCheck('image');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_solvePnPRansac');
  }
};
Blockly.Blocks['calib3d_initCameraMatrix2D'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('initCameraMatrix2D')
    this.appendValueInput('objectPoints')
        .appendField('objectPoints');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_initCameraMatrix2D');
  }
};
Blockly.Blocks['calib3d_findChessboardCorners'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('findChessboardCorners')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('patternSize')
        .appendField('patternSize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_findChessboardCorners');
  }
};
Blockly.Blocks['calib3d_drawChessboardCorners'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('drawChessboardCorners')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('patternSize')
        .appendField('patternSize')
        .setCheck('size');
    this.appendValueInput('corners')
        .appendField('corners')
        .setCheck('image');
    this.appendValueInput('patternWasFound')
        .appendField('patternWasFound');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_drawChessboardCorners');
  }
};
Blockly.Blocks['calib3d_findCirclesGrid'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('findCirclesGrid')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('patternSize')
        .appendField('patternSize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_findCirclesGrid');
  }
};
Blockly.Blocks['calib3d_calibrateCamera'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('calibrateCamera')
    this.appendValueInput('objectPoints')
        .appendField('objectPoints');
    this.appendValueInput('imagePoints')
        .appendField('imagePoints');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('calib3d_calibrateCamera');
  }
};
Blockly.Blocks['calib3d_calibrationMatrixValues'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('calibrationMatrixValues')
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'apertureWidth');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'apertureHeight');
    this.setOutput(true,'Number');
    this.setInputsInline(true);
    this.setTooltip('calib3d_calibrationMatrixValues');
  }
};
Blockly.Blocks['calib3d_stereoCalibrate'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('stereoCalibrate')
    this.appendValueInput('objectPoints')
        .appendField('objectPoints');
    this.appendValueInput('imagePoints1')
        .appendField('imagePoints1');
    this.appendValueInput('imagePoints2')
        .appendField('imagePoints2');
    this.appendValueInput('cameraMatrix1')
        .appendField('cameraMatrix1')
        .setCheck('image');
    this.appendValueInput('distCoeffs1')
        .appendField('distCoeffs1')
        .setCheck('image');
    this.appendValueInput('cameraMatrix2')
        .appendField('cameraMatrix2')
        .setCheck('image');
    this.appendValueInput('distCoeffs2')
        .appendField('distCoeffs2')
        .setCheck('image');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_stereoCalibrate');
  }
};
Blockly.Blocks['calib3d_stereoRectify'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('stereoRectify')
    this.appendValueInput('cameraMatrix1')
        .appendField('cameraMatrix1')
        .setCheck('image');
    this.appendValueInput('distCoeffs1')
        .appendField('distCoeffs1')
        .setCheck('image');
    this.appendValueInput('cameraMatrix2')
        .appendField('cameraMatrix2')
        .setCheck('image');
    this.appendValueInput('distCoeffs2')
        .appendField('distCoeffs2')
        .setCheck('image');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendValueInput('R')
        .appendField('R')
        .setCheck('image');
    this.appendValueInput('T')
        .appendField('T')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_stereoRectify');
  }
};
Blockly.Blocks['calib3d_stereoRectifyUncalibrated'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('stereoRectifyUncalibrated')
    this.appendValueInput('points1')
        .appendField('points1')
        .setCheck('image');
    this.appendValueInput('points2')
        .appendField('points2')
        .setCheck('image');
    this.appendValueInput('F')
        .appendField('F')
        .setCheck('image');
    this.appendValueInput('imgSize')
        .appendField('imgSize')
        .setCheck('size');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_stereoRectifyUncalibrated');
  }
};
Blockly.Blocks['calib3d_rectify3Collinear'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('rectify3Collinear')
    this.appendValueInput('cameraMatrix1')
        .appendField('cameraMatrix1')
        .setCheck('image');
    this.appendValueInput('distCoeffs1')
        .appendField('distCoeffs1')
        .setCheck('image');
    this.appendValueInput('cameraMatrix2')
        .appendField('cameraMatrix2')
        .setCheck('image');
    this.appendValueInput('distCoeffs2')
        .appendField('distCoeffs2')
        .setCheck('image');
    this.appendValueInput('cameraMatrix3')
        .appendField('cameraMatrix3')
        .setCheck('image');
    this.appendValueInput('distCoeffs3')
        .appendField('distCoeffs3')
        .setCheck('image');
    this.appendValueInput('imgpt1')
        .appendField('imgpt1');
    this.appendValueInput('imgpt3')
        .appendField('imgpt3');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendValueInput('R12')
        .appendField('R12')
        .setCheck('image');
    this.appendValueInput('T12')
        .appendField('T12')
        .setCheck('image');
    this.appendValueInput('R13')
        .appendField('R13')
        .setCheck('image');
    this.appendValueInput('T13')
        .appendField('T13')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.appendValueInput('newImgSize')
        .appendField('newImgSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_rectify3Collinear');
  }
};
Blockly.Blocks['calib3d_getOptimalNewCameraMatrix'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getOptimalNewCameraMatrix')
    this.appendValueInput('cameraMatrix')
        .appendField('cameraMatrix')
        .setCheck('image');
    this.appendValueInput('distCoeffs')
        .appendField('distCoeffs')
        .setCheck('image');
    this.appendValueInput('imageSize')
        .appendField('imageSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'alpha');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('calib3d_getOptimalNewCameraMatrix');
  }
};
Blockly.Blocks['calib3d_convertPointsToHomogeneous'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('convertPointsToHomogeneous')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_convertPointsToHomogeneous');
  }
};
Blockly.Blocks['calib3d_convertPointsFromHomogeneous'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('convertPointsFromHomogeneous')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_convertPointsFromHomogeneous');
  }
};
Blockly.Blocks['calib3d_findFundamentalMat'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('findFundamentalMat')
    this.appendValueInput('points1')
        .appendField('points1')
        .setCheck('image');
    this.appendValueInput('points2')
        .appendField('points2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_findFundamentalMat');
  }
};
Blockly.Blocks['calib3d_findEssentialMat'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('findEssentialMat')
    this.appendValueInput('points1')
        .appendField('points1')
        .setCheck('image');
    this.appendValueInput('points2')
        .appendField('points2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_findEssentialMat');
  }
};
Blockly.Blocks['calib3d_decomposeEssentialMat'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('decomposeEssentialMat')
    this.appendValueInput('E')
        .appendField('E')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_decomposeEssentialMat');
  }
};
Blockly.Blocks['calib3d_recoverPose'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('recoverPose')
    this.appendValueInput('E')
        .appendField('E')
        .setCheck('image');
    this.appendValueInput('points1')
        .appendField('points1')
        .setCheck('image');
    this.appendValueInput('points2')
        .appendField('points2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_recoverPose');
  }
};
Blockly.Blocks['calib3d_computeCorrespondEpilines'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('computeCorrespondEpilines')
    this.appendValueInput('points')
        .appendField('points')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'whichImage');
    this.appendValueInput('F')
        .appendField('F')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('calib3d_computeCorrespondEpilines');
  }
};
Blockly.Blocks['calib3d_triangulatePoints'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('triangulatePoints')
    this.appendValueInput('projMatr1')
        .appendField('projMatr1')
        .setCheck('image');
    this.appendValueInput('projMatr2')
        .appendField('projMatr2')
        .setCheck('image');
    this.appendValueInput('projPoints1')
        .appendField('projPoints1')
        .setCheck('image');
    this.appendValueInput('projPoints2')
        .appendField('projPoints2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_triangulatePoints');
  }
};
Blockly.Blocks['calib3d_correctMatches'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('correctMatches')
    this.appendValueInput('F')
        .appendField('F')
        .setCheck('image');
    this.appendValueInput('points1')
        .appendField('points1')
        .setCheck('image');
    this.appendValueInput('points2')
        .appendField('points2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_correctMatches');
  }
};
Blockly.Blocks['calib3d_filterSpeckles'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('filterSpeckles')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'newVal');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'maxSpeckleSize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'maxDiff');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('calib3d_filterSpeckles');
  }
};
Blockly.Blocks['calib3d_getValidDisparityROI'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('getValidDisparityROI')
    this.appendValueInput('roi1')
        .appendField('roi1');
    this.appendValueInput('roi2')
        .appendField('roi2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'minDisparity');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'numberOfDisparities');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'SADWindowSize');
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_getValidDisparityROI');
  }
};
Blockly.Blocks['calib3d_validateDisparity'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('validateDisparity')
    this.appendValueInput('disparity')
        .appendField('disparity')
        .setCheck('image');
    this.appendValueInput('cost')
        .appendField('cost')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'minDisparity');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'numberOfDisparities');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('calib3d_validateDisparity');
  }
};
Blockly.Blocks['calib3d_reprojectImageTo3D'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('reprojectImageTo3D')
    this.appendValueInput('disparity')
        .appendField('disparity')
        .setCheck('image');
    this.appendValueInput('Q')
        .appendField('Q')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_reprojectImageTo3D');
  }
};
Blockly.Blocks['calib3d_estimateAffine3D'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('estimateAffine3D')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_estimateAffine3D');
  }
};
Blockly.Blocks['calib3d_decomposeHomographyMat'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('decomposeHomographyMat')
    this.appendValueInput('H')
        .appendField('H')
        .setCheck('image');
    this.appendValueInput('K')
        .appendField('K')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('calib3d_decomposeHomographyMat');
  }
};
Blockly.Blocks['calib3d_StereoBM_getPreFilterType'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_getPreFilterType')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getPreFilterType');
  }
};
Blockly.Blocks['calib3d_StereoBM_setPreFilterType'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_setPreFilterType')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'preFilterType');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoBM_setPreFilterType');
  }
};
Blockly.Blocks['calib3d_StereoBM_getPreFilterSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_getPreFilterSize')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getPreFilterSize');
  }
};
Blockly.Blocks['calib3d_StereoBM_setPreFilterSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_setPreFilterSize')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'preFilterSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoBM_setPreFilterSize');
  }
};
Blockly.Blocks['calib3d_StereoBM_getPreFilterCap'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_getPreFilterCap')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getPreFilterCap');
  }
};
Blockly.Blocks['calib3d_StereoBM_setPreFilterCap'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_setPreFilterCap')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'preFilterCap');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoBM_setPreFilterCap');
  }
};
Blockly.Blocks['calib3d_StereoBM_getTextureThreshold'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_getTextureThreshold')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getTextureThreshold');
  }
};
Blockly.Blocks['calib3d_StereoBM_setTextureThreshold'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_setTextureThreshold')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'textureThreshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoBM_setTextureThreshold');
  }
};
Blockly.Blocks['calib3d_StereoBM_getUniquenessRatio'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_getUniquenessRatio')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getUniquenessRatio');
  }
};
Blockly.Blocks['calib3d_StereoBM_setUniquenessRatio'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_setUniquenessRatio')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'uniquenessRatio');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoBM_setUniquenessRatio');
  }
};
Blockly.Blocks['calib3d_StereoBM_getSmallerBlockSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_getSmallerBlockSize')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoBM_getSmallerBlockSize');
  }
};
Blockly.Blocks['calib3d_StereoBM_setSmallerBlockSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_setSmallerBlockSize')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoBM_setSmallerBlockSize');
  }
};
Blockly.Blocks['calib3d_StereoBM_getROI1'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_getROI1')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.setOutput(true);
    this.setTooltip('calib3d_StereoBM_getROI1');
  }
};
Blockly.Blocks['calib3d_StereoBM_setROI1'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_setROI1')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.appendValueInput('roi1')
        .appendField('roi1');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoBM_setROI1');
  }
};
Blockly.Blocks['calib3d_StereoBM_getROI2'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_getROI2')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.setOutput(true);
    this.setTooltip('calib3d_StereoBM_getROI2');
  }
};
Blockly.Blocks['calib3d_StereoBM_setROI2'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_setROI2')
    this.appendValueInput('that')
        .appendField('StereoBM');
    this.appendValueInput('roi2')
        .appendField('roi2');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('calib3d_StereoBM_setROI2');
  }
};
Blockly.Blocks['calib3d_StereoBM_create'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoBM_create')
    this.setOutput(true);
    this.setTooltip('calib3d_StereoBM_create');
  }
};
Blockly.Blocks['calib3d_StereoSGBM_getPreFilterCap'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_getPreFilterCap')
    this.appendValueInput('that')
        .appendField('StereoSGBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoSGBM_getPreFilterCap');
  }
};
Blockly.Blocks['calib3d_StereoSGBM_setPreFilterCap'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_setPreFilterCap')
    this.appendValueInput('that')
        .appendField('StereoSGBM');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'preFilterCap');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoSGBM_setPreFilterCap');
  }
};
Blockly.Blocks['calib3d_StereoSGBM_getUniquenessRatio'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_getUniquenessRatio')
    this.appendValueInput('that')
        .appendField('StereoSGBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoSGBM_getUniquenessRatio');
  }
};
Blockly.Blocks['calib3d_StereoSGBM_setUniquenessRatio'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_setUniquenessRatio')
    this.appendValueInput('that')
        .appendField('StereoSGBM');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'uniquenessRatio');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoSGBM_setUniquenessRatio');
  }
};
Blockly.Blocks['calib3d_StereoSGBM_getP1'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_getP1')
    this.appendValueInput('that')
        .appendField('StereoSGBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoSGBM_getP1');
  }
};
Blockly.Blocks['calib3d_StereoSGBM_setP1'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_setP1')
    this.appendValueInput('that')
        .appendField('StereoSGBM');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'P1');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoSGBM_setP1');
  }
};
Blockly.Blocks['calib3d_StereoSGBM_getP2'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_getP2')
    this.appendValueInput('that')
        .appendField('StereoSGBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoSGBM_getP2');
  }
};
Blockly.Blocks['calib3d_StereoSGBM_setP2'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_setP2')
    this.appendValueInput('that')
        .appendField('StereoSGBM');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'P2');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoSGBM_setP2');
  }
};
Blockly.Blocks['calib3d_StereoSGBM_getMode'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_getMode')
    this.appendValueInput('that')
        .appendField('StereoSGBM');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoSGBM_getMode');
  }
};
Blockly.Blocks['calib3d_StereoSGBM_setMode'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_setMode')
    this.appendValueInput('that')
        .appendField('StereoSGBM');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'mode');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoSGBM_setMode');
  }
};
Blockly.Blocks['calib3d_StereoSGBM_create'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoSGBM_create')
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'minDisparity');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'numDisparities');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoSGBM_create');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_compute'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_compute')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.appendValueInput('left')
        .appendField('left')
        .setCheck('image');
    this.appendValueInput('right')
        .appendField('right')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('calib3d_StereoMatcher_compute');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_getMinDisparity'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_getMinDisparity')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getMinDisparity');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_setMinDisparity'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_setMinDisparity')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'minDisparity');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoMatcher_setMinDisparity');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_getNumDisparities'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_getNumDisparities')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getNumDisparities');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_setNumDisparities'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_setNumDisparities')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'numDisparities');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoMatcher_setNumDisparities');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_getBlockSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_getBlockSize')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getBlockSize');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_setBlockSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_setBlockSize')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoMatcher_setBlockSize');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_getSpeckleWindowSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_getSpeckleWindowSize')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getSpeckleWindowSize');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_setSpeckleWindowSize'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_setSpeckleWindowSize')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'speckleWindowSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoMatcher_setSpeckleWindowSize');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_getSpeckleRange'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_getSpeckleRange')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getSpeckleRange');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_setSpeckleRange'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_setSpeckleRange')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'speckleRange');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoMatcher_setSpeckleRange');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_getDisp12MaxDiff'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_getDisp12MaxDiff')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.setOutput(true,'Number');
    this.setTooltip('calib3d_StereoMatcher_getDisp12MaxDiff');
  }
};
Blockly.Blocks['calib3d_StereoMatcher_setDisp12MaxDiff'] = {
  init: function() {
    this.setColour(177);
    this.appendDummyInput()
        .appendField('StereoMatcher_setDisp12MaxDiff')
    this.appendValueInput('that')
        .appendField('StereoMatcher');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'disp12MaxDiff');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('calib3d_StereoMatcher_setDisp12MaxDiff');
  }
};
Blockly.Blocks['features2d_drawKeypoints'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('drawKeypoints')
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('keypoints')
        .appendField('keypoints');
    this.appendValueInput('outImage')
        .appendField('outImage')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('features2d_drawKeypoints');
  }
};
Blockly.Blocks['features2d_drawMatches'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('drawMatches')
    this.appendValueInput('img1')
        .appendField('img1')
        .setCheck('image');
    this.appendValueInput('keypoints1')
        .appendField('keypoints1');
    this.appendValueInput('img2')
        .appendField('img2')
        .setCheck('image');
    this.appendValueInput('keypoints2')
        .appendField('keypoints2');
    this.appendValueInput('matches1to2')
        .appendField('matches1to2');
    this.appendValueInput('outImg')
        .appendField('outImg')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('features2d_drawMatches');
  }
};
Blockly.Blocks['features2d_BFMatcher_BFMatcher'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('BFMatcher_BFMatcher')
    this.setOutput(true);
    this.setTooltip('features2d_BFMatcher_BFMatcher');
  }
};
Blockly.Blocks['features2d_Feature2D_detect'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('Feature2D_detect')
    this.appendValueInput('that')
        .appendField('Feature2D');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('features2d_Feature2D_detect');
  }
};
Blockly.Blocks['features2d_Feature2D_compute'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('Feature2D_compute')
    this.appendValueInput('that')
        .appendField('Feature2D');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('keypoints')
        .appendField('keypoints');
    this.setOutput(true,'image');
    this.setTooltip('features2d_Feature2D_compute');
  }
};
Blockly.Blocks['features2d_Feature2D_detectAndCompute'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('Feature2D_detectAndCompute')
    this.appendValueInput('that')
        .appendField('Feature2D');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('mask')
        .appendField('mask')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('features2d_Feature2D_detectAndCompute');
  }
};
Blockly.Blocks['features2d_Feature2D_descriptorSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('Feature2D_descriptorSize')
    this.appendValueInput('that')
        .appendField('Feature2D');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_Feature2D_descriptorSize');
  }
};
Blockly.Blocks['features2d_Feature2D_descriptorType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('Feature2D_descriptorType')
    this.appendValueInput('that')
        .appendField('Feature2D');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_Feature2D_descriptorType');
  }
};
Blockly.Blocks['features2d_Feature2D_defaultNorm'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('Feature2D_defaultNorm')
    this.appendValueInput('that')
        .appendField('Feature2D');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_Feature2D_defaultNorm');
  }
};
Blockly.Blocks['features2d_Feature2D_empty'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('Feature2D_empty')
    this.appendValueInput('that')
        .appendField('Feature2D');
    this.setOutput(true);
    this.setTooltip('features2d_Feature2D_empty');
  }
};
Blockly.Blocks['features2d_BRISK_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('BRISK_create')
    this.setOutput(true);
    this.setTooltip('features2d_BRISK_create');
  }
};
Blockly.Blocks['features2d_GFTTDetector_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_create')
    this.setOutput(true);
    this.setTooltip('features2d_GFTTDetector_create');
  }
};
Blockly.Blocks['features2d_GFTTDetector_setMaxFeatures'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_setMaxFeatures')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'maxFeatures');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_GFTTDetector_setMaxFeatures');
  }
};
Blockly.Blocks['features2d_GFTTDetector_getMaxFeatures'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_getMaxFeatures')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_GFTTDetector_getMaxFeatures');
  }
};
Blockly.Blocks['features2d_GFTTDetector_setQualityLevel'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_setQualityLevel')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'qlevel');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_GFTTDetector_setQualityLevel');
  }
};
Blockly.Blocks['features2d_GFTTDetector_getQualityLevel'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_getQualityLevel')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_GFTTDetector_getQualityLevel');
  }
};
Blockly.Blocks['features2d_GFTTDetector_setMinDistance'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_setMinDistance')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'minDistance');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_GFTTDetector_setMinDistance');
  }
};
Blockly.Blocks['features2d_GFTTDetector_getMinDistance'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_getMinDistance')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_GFTTDetector_getMinDistance');
  }
};
Blockly.Blocks['features2d_GFTTDetector_setBlockSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_setBlockSize')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'blockSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_GFTTDetector_setBlockSize');
  }
};
Blockly.Blocks['features2d_GFTTDetector_getBlockSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_getBlockSize')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_GFTTDetector_getBlockSize');
  }
};
Blockly.Blocks['features2d_GFTTDetector_setHarrisDetector'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_setHarrisDetector')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.appendValueInput('val')
        .appendField('val');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_GFTTDetector_setHarrisDetector');
  }
};
Blockly.Blocks['features2d_GFTTDetector_getHarrisDetector'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_getHarrisDetector')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.setOutput(true);
    this.setTooltip('features2d_GFTTDetector_getHarrisDetector');
  }
};
Blockly.Blocks['features2d_GFTTDetector_setK'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_setK')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'k');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_GFTTDetector_setK');
  }
};
Blockly.Blocks['features2d_GFTTDetector_getK'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('GFTTDetector_getK')
    this.appendValueInput('that')
        .appendField('GFTTDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_GFTTDetector_getK');
  }
};
Blockly.Blocks['features2d_DescriptorMatcher_add'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('DescriptorMatcher_add')
    this.appendValueInput('that')
        .appendField('DescriptorMatcher');
    this.appendValueInput('descriptors')
        .appendField('descriptors');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_DescriptorMatcher_add');
  }
};
Blockly.Blocks['features2d_DescriptorMatcher_getTrainDescriptors'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('DescriptorMatcher_getTrainDescriptors')
    this.appendValueInput('that')
        .appendField('DescriptorMatcher');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_getTrainDescriptors');
  }
};
Blockly.Blocks['features2d_DescriptorMatcher_clear'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('DescriptorMatcher_clear')
    this.appendValueInput('that')
        .appendField('DescriptorMatcher');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_DescriptorMatcher_clear');
  }
};
Blockly.Blocks['features2d_DescriptorMatcher_empty'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('DescriptorMatcher_empty')
    this.appendValueInput('that')
        .appendField('DescriptorMatcher');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_empty');
  }
};
Blockly.Blocks['features2d_DescriptorMatcher_isMaskSupported'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('DescriptorMatcher_isMaskSupported')
    this.appendValueInput('that')
        .appendField('DescriptorMatcher');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_isMaskSupported');
  }
};
Blockly.Blocks['features2d_DescriptorMatcher_train'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('DescriptorMatcher_train')
    this.appendValueInput('that')
        .appendField('DescriptorMatcher');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_DescriptorMatcher_train');
  }
};
Blockly.Blocks['features2d_DescriptorMatcher_match'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('DescriptorMatcher_match')
    this.appendValueInput('that')
        .appendField('DescriptorMatcher');
    this.appendValueInput('queryDescriptors')
        .appendField('queryDescriptors')
        .setCheck('image');
    this.appendValueInput('trainDescriptors')
        .appendField('trainDescriptors')
        .setCheck('image');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_match');
  }
};
Blockly.Blocks['features2d_DescriptorMatcher_knnMatch'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('DescriptorMatcher_knnMatch')
    this.appendValueInput('that')
        .appendField('DescriptorMatcher');
    this.appendValueInput('queryDescriptors')
        .appendField('queryDescriptors')
        .setCheck('image');
    this.appendValueInput('trainDescriptors')
        .appendField('trainDescriptors')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'k');
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_DescriptorMatcher_knnMatch');
  }
};
Blockly.Blocks['features2d_DescriptorMatcher_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('DescriptorMatcher_create')
    this.appendValueInput('descriptorMatcherType')
        .appendField('descriptorMatcherType')
        .setCheck('String');
    this.setOutput(true);
    this.setTooltip('features2d_DescriptorMatcher_create');
  }
};
Blockly.Blocks['features2d_KAZE_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_create')
    this.setOutput(true);
    this.setTooltip('features2d_KAZE_create');
  }
};
Blockly.Blocks['features2d_KAZE_setExtended'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_setExtended')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.appendValueInput('extended')
        .appendField('extended');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_KAZE_setExtended');
  }
};
Blockly.Blocks['features2d_KAZE_getExtended'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_getExtended')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.setOutput(true);
    this.setTooltip('features2d_KAZE_getExtended');
  }
};
Blockly.Blocks['features2d_KAZE_setUpright'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_setUpright')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.appendValueInput('upright')
        .appendField('upright');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_KAZE_setUpright');
  }
};
Blockly.Blocks['features2d_KAZE_getUpright'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_getUpright')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.setOutput(true);
    this.setTooltip('features2d_KAZE_getUpright');
  }
};
Blockly.Blocks['features2d_KAZE_setThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_setThreshold')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_KAZE_setThreshold');
  }
};
Blockly.Blocks['features2d_KAZE_getThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_getThreshold')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_KAZE_getThreshold');
  }
};
Blockly.Blocks['features2d_KAZE_setNOctaves'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_setNOctaves')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'octaves');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_KAZE_setNOctaves');
  }
};
Blockly.Blocks['features2d_KAZE_getNOctaves'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_getNOctaves')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_KAZE_getNOctaves');
  }
};
Blockly.Blocks['features2d_KAZE_setNOctaveLayers'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_setNOctaveLayers')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'octaveLayers');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_KAZE_setNOctaveLayers');
  }
};
Blockly.Blocks['features2d_KAZE_getNOctaveLayers'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_getNOctaveLayers')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_KAZE_getNOctaveLayers');
  }
};
Blockly.Blocks['features2d_KAZE_setDiffusivity'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_setDiffusivity')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'diff');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_KAZE_setDiffusivity');
  }
};
Blockly.Blocks['features2d_KAZE_getDiffusivity'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('KAZE_getDiffusivity')
    this.appendValueInput('that')
        .appendField('KAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_KAZE_getDiffusivity');
  }
};
Blockly.Blocks['features2d_FastFeatureDetector_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('FastFeatureDetector_create')
    this.setOutput(true);
    this.setTooltip('features2d_FastFeatureDetector_create');
  }
};
Blockly.Blocks['features2d_FastFeatureDetector_setThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('FastFeatureDetector_setThreshold')
    this.appendValueInput('that')
        .appendField('FastFeatureDetector');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_FastFeatureDetector_setThreshold');
  }
};
Blockly.Blocks['features2d_FastFeatureDetector_getThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('FastFeatureDetector_getThreshold')
    this.appendValueInput('that')
        .appendField('FastFeatureDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_FastFeatureDetector_getThreshold');
  }
};
Blockly.Blocks['features2d_FastFeatureDetector_setNonmaxSuppression'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('FastFeatureDetector_setNonmaxSuppression')
    this.appendValueInput('that')
        .appendField('FastFeatureDetector');
    this.appendValueInput('f')
        .appendField('f');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_FastFeatureDetector_setNonmaxSuppression');
  }
};
Blockly.Blocks['features2d_FastFeatureDetector_getNonmaxSuppression'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('FastFeatureDetector_getNonmaxSuppression')
    this.appendValueInput('that')
        .appendField('FastFeatureDetector');
    this.setOutput(true);
    this.setTooltip('features2d_FastFeatureDetector_getNonmaxSuppression');
  }
};
Blockly.Blocks['features2d_FastFeatureDetector_setType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('FastFeatureDetector_setType')
    this.appendValueInput('that')
        .appendField('FastFeatureDetector');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'type');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_FastFeatureDetector_setType');
  }
};
Blockly.Blocks['features2d_FastFeatureDetector_getType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('FastFeatureDetector_getType')
    this.appendValueInput('that')
        .appendField('FastFeatureDetector');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_FastFeatureDetector_getType');
  }
};
Blockly.Blocks['features2d_AKAZE_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_create')
    this.setOutput(true);
    this.setTooltip('features2d_AKAZE_create');
  }
};
Blockly.Blocks['features2d_AKAZE_setDescriptorType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_setDescriptorType')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dtype');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_AKAZE_setDescriptorType');
  }
};
Blockly.Blocks['features2d_AKAZE_getDescriptorType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_getDescriptorType')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getDescriptorType');
  }
};
Blockly.Blocks['features2d_AKAZE_setDescriptorSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_setDescriptorSize')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dsize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_AKAZE_setDescriptorSize');
  }
};
Blockly.Blocks['features2d_AKAZE_getDescriptorSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_getDescriptorSize')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getDescriptorSize');
  }
};
Blockly.Blocks['features2d_AKAZE_setDescriptorChannels'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_setDescriptorChannels')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'dch');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_AKAZE_setDescriptorChannels');
  }
};
Blockly.Blocks['features2d_AKAZE_getDescriptorChannels'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_getDescriptorChannels')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getDescriptorChannels');
  }
};
Blockly.Blocks['features2d_AKAZE_setThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_setThreshold')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_AKAZE_setThreshold');
  }
};
Blockly.Blocks['features2d_AKAZE_getThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_getThreshold')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getThreshold');
  }
};
Blockly.Blocks['features2d_AKAZE_setNOctaves'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_setNOctaves')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'octaves');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_AKAZE_setNOctaves');
  }
};
Blockly.Blocks['features2d_AKAZE_getNOctaves'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_getNOctaves')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getNOctaves');
  }
};
Blockly.Blocks['features2d_AKAZE_setNOctaveLayers'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_setNOctaveLayers')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'octaveLayers');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_AKAZE_setNOctaveLayers');
  }
};
Blockly.Blocks['features2d_AKAZE_getNOctaveLayers'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_getNOctaveLayers')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getNOctaveLayers');
  }
};
Blockly.Blocks['features2d_AKAZE_setDiffusivity'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_setDiffusivity')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'diff');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_AKAZE_setDiffusivity');
  }
};
Blockly.Blocks['features2d_AKAZE_getDiffusivity'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('AKAZE_getDiffusivity')
    this.appendValueInput('that')
        .appendField('AKAZE');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_AKAZE_getDiffusivity');
  }
};
Blockly.Blocks['features2d_ORB_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_create')
    this.setOutput(true);
    this.setTooltip('features2d_ORB_create');
  }
};
Blockly.Blocks['features2d_ORB_setMaxFeatures'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_setMaxFeatures')
    this.appendValueInput('that')
        .appendField('ORB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'maxFeatures');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_ORB_setMaxFeatures');
  }
};
Blockly.Blocks['features2d_ORB_getMaxFeatures'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_getMaxFeatures')
    this.appendValueInput('that')
        .appendField('ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getMaxFeatures');
  }
};
Blockly.Blocks['features2d_ORB_setScaleFactor'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_setScaleFactor')
    this.appendValueInput('that')
        .appendField('ORB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'scaleFactor');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_ORB_setScaleFactor');
  }
};
Blockly.Blocks['features2d_ORB_getScaleFactor'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_getScaleFactor')
    this.appendValueInput('that')
        .appendField('ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getScaleFactor');
  }
};
Blockly.Blocks['features2d_ORB_setNLevels'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_setNLevels')
    this.appendValueInput('that')
        .appendField('ORB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'nlevels');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_ORB_setNLevels');
  }
};
Blockly.Blocks['features2d_ORB_getNLevels'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_getNLevels')
    this.appendValueInput('that')
        .appendField('ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getNLevels');
  }
};
Blockly.Blocks['features2d_ORB_setEdgeThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_setEdgeThreshold')
    this.appendValueInput('that')
        .appendField('ORB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'edgeThreshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_ORB_setEdgeThreshold');
  }
};
Blockly.Blocks['features2d_ORB_getEdgeThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_getEdgeThreshold')
    this.appendValueInput('that')
        .appendField('ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getEdgeThreshold');
  }
};
Blockly.Blocks['features2d_ORB_setFirstLevel'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_setFirstLevel')
    this.appendValueInput('that')
        .appendField('ORB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'firstLevel');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_ORB_setFirstLevel');
  }
};
Blockly.Blocks['features2d_ORB_getFirstLevel'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_getFirstLevel')
    this.appendValueInput('that')
        .appendField('ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getFirstLevel');
  }
};
Blockly.Blocks['features2d_ORB_setWTA_K'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_setWTA_K')
    this.appendValueInput('that')
        .appendField('ORB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'wta_k');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_ORB_setWTA_K');
  }
};
Blockly.Blocks['features2d_ORB_getWTA_K'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_getWTA_K')
    this.appendValueInput('that')
        .appendField('ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getWTA_K');
  }
};
Blockly.Blocks['features2d_ORB_setScoreType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_setScoreType')
    this.appendValueInput('that')
        .appendField('ORB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'scoreType');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_ORB_setScoreType');
  }
};
Blockly.Blocks['features2d_ORB_getScoreType'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_getScoreType')
    this.appendValueInput('that')
        .appendField('ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getScoreType');
  }
};
Blockly.Blocks['features2d_ORB_setPatchSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_setPatchSize')
    this.appendValueInput('that')
        .appendField('ORB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'patchSize');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_ORB_setPatchSize');
  }
};
Blockly.Blocks['features2d_ORB_getPatchSize'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_getPatchSize')
    this.appendValueInput('that')
        .appendField('ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getPatchSize');
  }
};
Blockly.Blocks['features2d_ORB_setFastThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_setFastThreshold')
    this.appendValueInput('that')
        .appendField('ORB');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'fastThreshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_ORB_setFastThreshold');
  }
};
Blockly.Blocks['features2d_ORB_getFastThreshold'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('ORB_getFastThreshold')
    this.appendValueInput('that')
        .appendField('ORB');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_ORB_getFastThreshold');
  }
};
Blockly.Blocks['features2d_MSER_create'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('MSER_create')
    this.setOutput(true);
    this.setTooltip('features2d_MSER_create');
  }
};
Blockly.Blocks['features2d_MSER_detectRegions'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('MSER_detectRegions')
    this.appendValueInput('that')
        .appendField('MSER');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.appendValueInput('bboxes')
        .appendField('bboxes');
    this.setOutput(true);
    this.setTooltip('features2d_MSER_detectRegions');
  }
};
Blockly.Blocks['features2d_MSER_setDelta'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('MSER_setDelta')
    this.appendValueInput('that')
        .appendField('MSER');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'delta');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_MSER_setDelta');
  }
};
Blockly.Blocks['features2d_MSER_getDelta'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('MSER_getDelta')
    this.appendValueInput('that')
        .appendField('MSER');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_MSER_getDelta');
  }
};
Blockly.Blocks['features2d_MSER_setMinArea'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('MSER_setMinArea')
    this.appendValueInput('that')
        .appendField('MSER');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'minArea');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_MSER_setMinArea');
  }
};
Blockly.Blocks['features2d_MSER_getMinArea'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('MSER_getMinArea')
    this.appendValueInput('that')
        .appendField('MSER');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_MSER_getMinArea');
  }
};
Blockly.Blocks['features2d_MSER_setMaxArea'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('MSER_setMaxArea')
    this.appendValueInput('that')
        .appendField('MSER');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'maxArea');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('features2d_MSER_setMaxArea');
  }
};
Blockly.Blocks['features2d_MSER_getMaxArea'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('MSER_getMaxArea')
    this.appendValueInput('that')
        .appendField('MSER');
    this.setOutput(true,'Number');
    this.setTooltip('features2d_MSER_getMaxArea');
  }
};
Blockly.Blocks['features2d_MSER_setPass2Only'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('MSER_setPass2Only')
    this.appendValueInput('that')
        .appendField('MSER');
    this.appendValueInput('f')
        .appendField('f');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('features2d_MSER_setPass2Only');
  }
};
Blockly.Blocks['features2d_MSER_getPass2Only'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('MSER_getPass2Only')
    this.appendValueInput('that')
        .appendField('MSER');
    this.setOutput(true);
    this.setTooltip('features2d_MSER_getPass2Only');
  }
};
Blockly.Blocks['features2d_FlannBasedMatcher_FlannBasedMatcher'] = {
  init: function() {
    this.setColour(222);
    this.appendDummyInput()
        .appendField('FlannBasedMatcher_FlannBasedMatcher')
    this.setOutput(true);
    this.setTooltip('features2d_FlannBasedMatcher_FlannBasedMatcher');
  }
};
Blockly.Blocks['shape_createNormHistogramCostExtractor'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('createNormHistogramCostExtractor')
    this.setOutput(true);
    this.setTooltip('shape_createNormHistogramCostExtractor');
  }
};
Blockly.Blocks['shape_createEMDHistogramCostExtractor'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('createEMDHistogramCostExtractor')
    this.setOutput(true);
    this.setTooltip('shape_createEMDHistogramCostExtractor');
  }
};
Blockly.Blocks['shape_createChiHistogramCostExtractor'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('createChiHistogramCostExtractor')
    this.setOutput(true);
    this.setTooltip('shape_createChiHistogramCostExtractor');
  }
};
Blockly.Blocks['shape_createEMDL1HistogramCostExtractor'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('createEMDL1HistogramCostExtractor')
    this.setOutput(true);
    this.setTooltip('shape_createEMDL1HistogramCostExtractor');
  }
};
Blockly.Blocks['shape_createShapeContextDistanceExtractor'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('createShapeContextDistanceExtractor')
    this.setOutput(true);
    this.setTooltip('shape_createShapeContextDistanceExtractor');
  }
};
Blockly.Blocks['shape_createHausdorffDistanceExtractor'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('createHausdorffDistanceExtractor')
    this.setOutput(true);
    this.setTooltip('shape_createHausdorffDistanceExtractor');
  }
};
Blockly.Blocks['shape_createThinPlateSplineShapeTransformer'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('createThinPlateSplineShapeTransformer')
    this.setOutput(true);
    this.setTooltip('shape_createThinPlateSplineShapeTransformer');
  }
};
Blockly.Blocks['shape_createAffineTransformer'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('createAffineTransformer')
    this.appendValueInput('fullAffine')
        .appendField('fullAffine');
    this.setOutput(true);
    this.setTooltip('shape_createAffineTransformer');
  }
};
Blockly.Blocks['shape_ThinPlateSplineShapeTransformer_setRegularizationParameter'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ThinPlateSplineShapeTransformer_setRegularizationParameter')
    this.appendValueInput('that')
        .appendField('ThinPlateSplineShapeTransformer');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'beta');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_ThinPlateSplineShapeTransformer_setRegularizationParameter');
  }
};
Blockly.Blocks['shape_ThinPlateSplineShapeTransformer_getRegularizationParameter'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ThinPlateSplineShapeTransformer_getRegularizationParameter')
    this.appendValueInput('that')
        .appendField('ThinPlateSplineShapeTransformer');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ThinPlateSplineShapeTransformer_getRegularizationParameter');
  }
};
Blockly.Blocks['shape_NormHistogramCostExtractor_setNormFlag'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('NormHistogramCostExtractor_setNormFlag')
    this.appendValueInput('that')
        .appendField('NormHistogramCostExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flag');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_NormHistogramCostExtractor_setNormFlag');
  }
};
Blockly.Blocks['shape_NormHistogramCostExtractor_getNormFlag'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('NormHistogramCostExtractor_getNormFlag')
    this.appendValueInput('that')
        .appendField('NormHistogramCostExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_NormHistogramCostExtractor_getNormFlag');
  }
};
Blockly.Blocks['shape_ShapeTransformer_estimateTransformation'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeTransformer_estimateTransformation')
    this.appendValueInput('that')
        .appendField('ShapeTransformer');
    this.appendValueInput('transformingShape')
        .appendField('transformingShape')
        .setCheck('image');
    this.appendValueInput('targetShape')
        .appendField('targetShape')
        .setCheck('image');
    this.appendValueInput('matches')
        .appendField('matches');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('shape_ShapeTransformer_estimateTransformation');
  }
};
Blockly.Blocks['shape_ShapeTransformer_applyTransformation'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeTransformer_applyTransformation')
    this.appendValueInput('that')
        .appendField('ShapeTransformer');
    this.appendValueInput('input')
        .appendField('input')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ShapeTransformer_applyTransformation');
  }
};
Blockly.Blocks['shape_ShapeTransformer_warpImage'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeTransformer_warpImage')
    this.appendValueInput('that')
        .appendField('ShapeTransformer');
    this.appendValueInput('transformingImage')
        .appendField('transformingImage')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('shape_ShapeTransformer_warpImage');
  }
};
Blockly.Blocks['shape_EMDHistogramCostExtractor_setNormFlag'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('EMDHistogramCostExtractor_setNormFlag')
    this.appendValueInput('that')
        .appendField('EMDHistogramCostExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flag');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_EMDHistogramCostExtractor_setNormFlag');
  }
};
Blockly.Blocks['shape_EMDHistogramCostExtractor_getNormFlag'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('EMDHistogramCostExtractor_getNormFlag')
    this.appendValueInput('that')
        .appendField('EMDHistogramCostExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_EMDHistogramCostExtractor_getNormFlag');
  }
};
Blockly.Blocks['shape_ShapeDistanceExtractor_computeDistance'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeDistanceExtractor_computeDistance')
    this.appendValueInput('that')
        .appendField('ShapeDistanceExtractor');
    this.appendValueInput('contour1')
        .appendField('contour1')
        .setCheck('image');
    this.appendValueInput('contour2')
        .appendField('contour2')
        .setCheck('image');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ShapeDistanceExtractor_computeDistance');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setAngularBins'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setAngularBins')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'nAngularBins');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setAngularBins');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getAngularBins'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getAngularBins')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ShapeContextDistanceExtractor_getAngularBins');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setRadialBins'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setRadialBins')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'nRadialBins');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setRadialBins');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getRadialBins'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getRadialBins')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ShapeContextDistanceExtractor_getRadialBins');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setInnerRadius'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setInnerRadius')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'innerRadius');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setInnerRadius');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getInnerRadius'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getInnerRadius')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ShapeContextDistanceExtractor_getInnerRadius');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setOuterRadius'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setOuterRadius')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'outerRadius');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setOuterRadius');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getOuterRadius'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getOuterRadius')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ShapeContextDistanceExtractor_getOuterRadius');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setRotationInvariant'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setRotationInvariant')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendValueInput('rotationInvariant')
        .appendField('rotationInvariant');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setRotationInvariant');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getRotationInvariant'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getRotationInvariant')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_getRotationInvariant');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setShapeContextWeight'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setShapeContextWeight')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'shapeContextWeight');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setShapeContextWeight');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getShapeContextWeight'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getShapeContextWeight')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ShapeContextDistanceExtractor_getShapeContextWeight');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setImageAppearanceWeight'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setImageAppearanceWeight')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'imageAppearanceWeight');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setImageAppearanceWeight');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getImageAppearanceWeight'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getImageAppearanceWeight')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ShapeContextDistanceExtractor_getImageAppearanceWeight');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setBendingEnergyWeight'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setBendingEnergyWeight')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'bendingEnergyWeight');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setBendingEnergyWeight');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getBendingEnergyWeight'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getBendingEnergyWeight')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ShapeContextDistanceExtractor_getBendingEnergyWeight');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setImages'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setImages')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendValueInput('image1')
        .appendField('image1')
        .setCheck('image');
    this.appendValueInput('image2')
        .appendField('image2')
        .setCheck('image');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setImages');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getImages'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getImages')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true,'image');
    this.setTooltip('shape_ShapeContextDistanceExtractor_getImages');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setIterations'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setIterations')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'iterations');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setIterations');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getIterations'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getIterations')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ShapeContextDistanceExtractor_getIterations');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setCostExtractor'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setCostExtractor')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendValueInput('comparer')
        .appendField('comparer');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setCostExtractor');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getCostExtractor'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getCostExtractor')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_getCostExtractor');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setStdDev'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setStdDev')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'sigma');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setStdDev');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getStdDev'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getStdDev')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_ShapeContextDistanceExtractor_getStdDev');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_setTransformAlgorithm'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_setTransformAlgorithm')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.appendValueInput('transformer')
        .appendField('transformer');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_setTransformAlgorithm');
  }
};
Blockly.Blocks['shape_ShapeContextDistanceExtractor_getTransformAlgorithm'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('ShapeContextDistanceExtractor_getTransformAlgorithm')
    this.appendValueInput('that')
        .appendField('ShapeContextDistanceExtractor');
    this.setOutput(true);
    this.setTooltip('shape_ShapeContextDistanceExtractor_getTransformAlgorithm');
  }
};
Blockly.Blocks['shape_HausdorffDistanceExtractor_setDistanceFlag'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('HausdorffDistanceExtractor_setDistanceFlag')
    this.appendValueInput('that')
        .appendField('HausdorffDistanceExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'distanceFlag');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_HausdorffDistanceExtractor_setDistanceFlag');
  }
};
Blockly.Blocks['shape_HausdorffDistanceExtractor_getDistanceFlag'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('HausdorffDistanceExtractor_getDistanceFlag')
    this.appendValueInput('that')
        .appendField('HausdorffDistanceExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_HausdorffDistanceExtractor_getDistanceFlag');
  }
};
Blockly.Blocks['shape_HausdorffDistanceExtractor_setRankProportion'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('HausdorffDistanceExtractor_setRankProportion')
    this.appendValueInput('that')
        .appendField('HausdorffDistanceExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'rankProportion');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_HausdorffDistanceExtractor_setRankProportion');
  }
};
Blockly.Blocks['shape_HausdorffDistanceExtractor_getRankProportion'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('HausdorffDistanceExtractor_getRankProportion')
    this.appendValueInput('that')
        .appendField('HausdorffDistanceExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_HausdorffDistanceExtractor_getRankProportion');
  }
};
Blockly.Blocks['shape_AffineTransformer_setFullAffine'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('AffineTransformer_setFullAffine')
    this.appendValueInput('that')
        .appendField('AffineTransformer');
    this.appendValueInput('fullAffine')
        .appendField('fullAffine');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('shape_AffineTransformer_setFullAffine');
  }
};
Blockly.Blocks['shape_AffineTransformer_getFullAffine'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('AffineTransformer_getFullAffine')
    this.appendValueInput('that')
        .appendField('AffineTransformer');
    this.setOutput(true);
    this.setTooltip('shape_AffineTransformer_getFullAffine');
  }
};
Blockly.Blocks['shape_HistogramCostExtractor_buildCostMatrix'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('HistogramCostExtractor_buildCostMatrix')
    this.appendValueInput('that')
        .appendField('HistogramCostExtractor');
    this.appendValueInput('descriptors1')
        .appendField('descriptors1')
        .setCheck('image');
    this.appendValueInput('descriptors2')
        .appendField('descriptors2')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('shape_HistogramCostExtractor_buildCostMatrix');
  }
};
Blockly.Blocks['shape_HistogramCostExtractor_setNDummies'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('HistogramCostExtractor_setNDummies')
    this.appendValueInput('that')
        .appendField('HistogramCostExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'nDummies');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_HistogramCostExtractor_setNDummies');
  }
};
Blockly.Blocks['shape_HistogramCostExtractor_getNDummies'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('HistogramCostExtractor_getNDummies')
    this.appendValueInput('that')
        .appendField('HistogramCostExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_HistogramCostExtractor_getNDummies');
  }
};
Blockly.Blocks['shape_HistogramCostExtractor_setDefaultCost'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('HistogramCostExtractor_setDefaultCost')
    this.appendValueInput('that')
        .appendField('HistogramCostExtractor');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'defaultCost');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('shape_HistogramCostExtractor_setDefaultCost');
  }
};
Blockly.Blocks['shape_HistogramCostExtractor_getDefaultCost'] = {
  init: function() {
    this.setColour(280);
    this.appendDummyInput()
        .appendField('HistogramCostExtractor_getDefaultCost')
    this.appendValueInput('that')
        .appendField('HistogramCostExtractor');
    this.setOutput(true,'Number');
    this.setTooltip('shape_HistogramCostExtractor_getDefaultCost');
  }
};
Blockly.Blocks['video_meanShift'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('meanShift')
    this.appendValueInput('probImage')
        .appendField('probImage')
        .setCheck('image');
    this.appendValueInput('window')
        .appendField('window');
    this.appendValueInput('criteria')
        .appendField('criteria');
    this.setOutput(true);
    this.setTooltip('video_meanShift');
  }
};
Blockly.Blocks['video_buildOpticalFlowPyramid'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('buildOpticalFlowPyramid')
    this.appendValueInput('img')
        .appendField('img')
        .setCheck('image');
    this.appendValueInput('winSize')
        .appendField('winSize')
        .setCheck('size');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'maxLevel');
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip('video_buildOpticalFlowPyramid');
  }
};
Blockly.Blocks['video_calcOpticalFlowPyrLK'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('calcOpticalFlowPyrLK')
    this.appendValueInput('prevImg')
        .appendField('prevImg')
        .setCheck('image');
    this.appendValueInput('nextImg')
        .appendField('nextImg')
        .setCheck('image');
    this.appendValueInput('prevPts')
        .appendField('prevPts')
        .setCheck('image');
    this.appendValueInput('nextPts')
        .appendField('nextPts')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_calcOpticalFlowPyrLK');
  }
};
Blockly.Blocks['video_calcOpticalFlowFarneback'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('calcOpticalFlowFarneback')
    this.appendValueInput('prev')
        .appendField('prev')
        .setCheck('image');
    this.appendValueInput('next')
        .appendField('next')
        .setCheck('image');
    this.appendValueInput('flow')
        .appendField('flow')
        .setCheck('image');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'pyr_scale');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'levels');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'winsize');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'iterations');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'poly_n');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'poly_sigma');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'flags');
    this.setOutput(true,'image');
    this.setInputsInline(true);
    this.setTooltip('video_calcOpticalFlowFarneback');
  }
};
Blockly.Blocks['video_estimateRigidTransform'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('estimateRigidTransform')
    this.appendValueInput('src')
        .appendField('src')
        .setCheck('image');
    this.appendValueInput('dst')
        .appendField('dst')
        .setCheck('image');
    this.appendValueInput('fullAffine')
        .appendField('fullAffine');
    this.setOutput(true,'image');
    this.setTooltip('video_estimateRigidTransform');
  }
};
Blockly.Blocks['video_findTransformECC'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('findTransformECC')
    this.appendValueInput('templateImage')
        .appendField('templateImage')
        .setCheck('image');
    this.appendValueInput('inputImage')
        .appendField('inputImage')
        .setCheck('image');
    this.appendValueInput('warpMatrix')
        .appendField('warpMatrix')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_findTransformECC');
  }
};
Blockly.Blocks['video_createOptFlow_DualTVL1'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('createOptFlow_DualTVL1')
    this.setOutput(true);
    this.setTooltip('video_createOptFlow_DualTVL1');
  }
};
Blockly.Blocks['video_createBackgroundSubtractorMOG2'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('createBackgroundSubtractorMOG2')
    this.setOutput(true);
    this.setTooltip('video_createBackgroundSubtractorMOG2');
  }
};
Blockly.Blocks['video_createBackgroundSubtractorKNN'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('createBackgroundSubtractorKNN')
    this.setOutput(true);
    this.setTooltip('video_createBackgroundSubtractorKNN');
  }
};
Blockly.Blocks['video_KalmanFilter_KalmanFilter'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('KalmanFilter_KalmanFilter')
    this.setOutput(true);
    this.setTooltip('video_KalmanFilter_KalmanFilter');
  }
};
Blockly.Blocks['video_KalmanFilter_predict'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('KalmanFilter_predict')
    this.appendValueInput('that')
        .appendField('KalmanFilter');
    this.setOutput(true,'image');
    this.setTooltip('video_KalmanFilter_predict');
  }
};
Blockly.Blocks['video_KalmanFilter_correct'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('KalmanFilter_correct')
    this.appendValueInput('that')
        .appendField('KalmanFilter');
    this.appendValueInput('measurement')
        .appendField('measurement')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_KalmanFilter_correct');
  }
};
Blockly.Blocks['video_BackgroundSubtractor_apply'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractor_apply')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractor');
    this.appendValueInput('image')
        .appendField('image')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_BackgroundSubtractor_apply');
  }
};
Blockly.Blocks['video_BackgroundSubtractor_getBackgroundImage'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractor_getBackgroundImage')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractor');
    this.setOutput(true,'image');
    this.setTooltip('video_BackgroundSubtractor_getBackgroundImage');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getHistory'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getHistory')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getHistory');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setHistory'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setHistory')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'history');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setHistory');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getNMixtures'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getNMixtures')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getNMixtures');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setNMixtures'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setNMixtures')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'nmixtures');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setNMixtures');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getBackgroundRatio'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getBackgroundRatio')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getBackgroundRatio');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setBackgroundRatio'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setBackgroundRatio')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ratio');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setBackgroundRatio');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getVarThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getVarThreshold')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getVarThreshold');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setVarThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setVarThreshold')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'varThreshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setVarThreshold');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getVarThresholdGen'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getVarThresholdGen')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getVarThresholdGen');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setVarThresholdGen'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setVarThresholdGen')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'varThresholdGen');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setVarThresholdGen');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getVarInit'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getVarInit')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getVarInit');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setVarInit'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setVarInit')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'varInit');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setVarInit');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getVarMin'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getVarMin')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getVarMin');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setVarMin'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setVarMin')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'varMin');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setVarMin');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getVarMax'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getVarMax')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getVarMax');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setVarMax'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setVarMax')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'varMax');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setVarMax');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getComplexityReductionThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getComplexityReductionThreshold')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getComplexityReductionThreshold');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setComplexityReductionThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setComplexityReductionThreshold')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'ct');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setComplexityReductionThreshold');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getDetectShadows'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getDetectShadows')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_getDetectShadows');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setDetectShadows'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setDetectShadows')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendValueInput('detectShadows')
        .appendField('detectShadows');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setDetectShadows');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getShadowValue'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getShadowValue')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getShadowValue');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setShadowValue'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setShadowValue')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'value');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setShadowValue');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_getShadowThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_getShadowThreshold')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorMOG2_getShadowThreshold');
  }
};
Blockly.Blocks['video_BackgroundSubtractorMOG2_setShadowThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorMOG2_setShadowThreshold')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorMOG2');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorMOG2_setShadowThreshold');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getHistory'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_getHistory')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getHistory');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setHistory'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_setHistory')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'history');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setHistory');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getNSamples'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_getNSamples')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getNSamples');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setNSamples'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_setNSamples')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), '_nN');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setNSamples');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getDist2Threshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_getDist2Threshold')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getDist2Threshold');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setDist2Threshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_setDist2Threshold')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), '_dist2Threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setDist2Threshold');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getkNNSamples'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_getkNNSamples')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getkNNSamples');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setkNNSamples'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_setkNNSamples')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), '_nkNN');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setkNNSamples');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getDetectShadows'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_getDetectShadows')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.setOutput(true);
    this.setTooltip('video_BackgroundSubtractorKNN_getDetectShadows');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setDetectShadows'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_setDetectShadows')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.appendValueInput('detectShadows')
        .appendField('detectShadows');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setDetectShadows');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getShadowValue'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_getShadowValue')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getShadowValue');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setShadowValue'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_setShadowValue')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'value');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setShadowValue');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_getShadowThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_getShadowThreshold')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.setOutput(true,'Number');
    this.setTooltip('video_BackgroundSubtractorKNN_getShadowThreshold');
  }
};
Blockly.Blocks['video_BackgroundSubtractorKNN_setShadowThreshold'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('BackgroundSubtractorKNN_setShadowThreshold')
    this.appendValueInput('that')
        .appendField('BackgroundSubtractorKNN');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'threshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('video_BackgroundSubtractorKNN_setShadowThreshold');
  }
};
Blockly.Blocks['video_DenseOpticalFlow_calc'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('DenseOpticalFlow_calc')
    this.appendValueInput('that')
        .appendField('DenseOpticalFlow');
    this.appendValueInput('I0')
        .appendField('I0')
        .setCheck('image');
    this.appendValueInput('I1')
        .appendField('I1')
        .setCheck('image');
    this.appendValueInput('flow')
        .appendField('flow')
        .setCheck('image');
    this.setOutput(true,'image');
    this.setTooltip('video_DenseOpticalFlow_calc');
  }
};
Blockly.Blocks['video_DenseOpticalFlow_collectGarbage'] = {
  init: function() {
    this.setColour(243);
    this.appendDummyInput()
        .appendField('DenseOpticalFlow_collectGarbage')
    this.appendValueInput('that')
        .appendField('DenseOpticalFlow');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('video_DenseOpticalFlow_collectGarbage');
  }
};
Blockly.Blocks['xfeatures2d_SURF_create'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SURF_create')
    this.setOutput(true);
    this.setTooltip('xfeatures2d_SURF_create');
  }
};
Blockly.Blocks['xfeatures2d_SURF_setHessianThreshold'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SURF_setHessianThreshold')
    this.appendValueInput('that')
        .appendField('SURF');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'hessianThreshold');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('xfeatures2d_SURF_setHessianThreshold');
  }
};
Blockly.Blocks['xfeatures2d_SURF_getHessianThreshold'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SURF_getHessianThreshold')
    this.appendValueInput('that')
        .appendField('SURF');
    this.setOutput(true,'Number');
    this.setTooltip('xfeatures2d_SURF_getHessianThreshold');
  }
};
Blockly.Blocks['xfeatures2d_SURF_setNOctaves'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SURF_setNOctaves')
    this.appendValueInput('that')
        .appendField('SURF');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'nOctaves');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('xfeatures2d_SURF_setNOctaves');
  }
};
Blockly.Blocks['xfeatures2d_SURF_getNOctaves'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SURF_getNOctaves')
    this.appendValueInput('that')
        .appendField('SURF');
    this.setOutput(true,'Number');
    this.setTooltip('xfeatures2d_SURF_getNOctaves');
  }
};
Blockly.Blocks['xfeatures2d_SURF_setNOctaveLayers'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SURF_setNOctaveLayers')
    this.appendValueInput('that')
        .appendField('SURF');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), 'nOctaveLayers');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip('xfeatures2d_SURF_setNOctaveLayers');
  }
};
Blockly.Blocks['xfeatures2d_SURF_getNOctaveLayers'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SURF_getNOctaveLayers')
    this.appendValueInput('that')
        .appendField('SURF');
    this.setOutput(true,'Number');
    this.setTooltip('xfeatures2d_SURF_getNOctaveLayers');
  }
};
Blockly.Blocks['xfeatures2d_SURF_setExtended'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SURF_setExtended')
    this.appendValueInput('that')
        .appendField('SURF');
    this.appendValueInput('extended')
        .appendField('extended');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('xfeatures2d_SURF_setExtended');
  }
};
Blockly.Blocks['xfeatures2d_SURF_getExtended'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SURF_getExtended')
    this.appendValueInput('that')
        .appendField('SURF');
    this.setOutput(true);
    this.setTooltip('xfeatures2d_SURF_getExtended');
  }
};
Blockly.Blocks['xfeatures2d_SURF_setUpright'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SURF_setUpright')
    this.appendValueInput('that')
        .appendField('SURF');
    this.appendValueInput('upright')
        .appendField('upright');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('xfeatures2d_SURF_setUpright');
  }
};
Blockly.Blocks['xfeatures2d_SURF_getUpright'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SURF_getUpright')
    this.appendValueInput('that')
        .appendField('SURF');
    this.setOutput(true);
    this.setTooltip('xfeatures2d_SURF_getUpright');
  }
};
Blockly.Blocks['xfeatures2d_SIFT_create'] = {
  init: function() {
    this.setColour(320);
    this.appendDummyInput()
        .appendField('SIFT_create')
    this.setOutput(true);
    this.setTooltip('xfeatures2d_SIFT_create');
  }
};
