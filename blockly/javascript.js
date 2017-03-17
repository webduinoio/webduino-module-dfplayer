Blockly.JavaScript['DFPlayer_new'] = function (block) {
  var dropdown_rx_ = block.getFieldValue('Rx_');
  var dropdown_tx_ = block.getFieldValue('Tx_');
  var code = 'getDFPlayer(board,' + dropdown_rx_ + ',' + dropdown_tx_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['DFPlayer_play'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.play(' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['DFPlayer_loop'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.loop(' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['DFPlayer_volume'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.volume(' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['DFPlayer_previous'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.previous();\n';
  return code;
};

Blockly.JavaScript['DFPlayer_next'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.next();\n';
  return code;
};

Blockly.JavaScript['DFPlayer_start'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.start();\n';
  return code;
};

Blockly.JavaScript['DFPlayer_stop'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.stop();\n';
  return code;
};

Blockly.JavaScript['DFPlayer_pause'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.pause();\n';
  return code;
};
