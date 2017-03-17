Blockly.Blocks['DFPlayer_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER, "MP3 DFPlayer Rx:")
      .appendField(new Blockly.FieldDropdown([
        ["10", "10"]
      ]), "Rx_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_TX, "  Tx")
      .appendField(new Blockly.FieldDropdown([
        ["11", "11"]
      ]), "Tx_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['DFPlayer_play'] = {
  init: function () {
    this.appendValueInput("value_")
      .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_PLAY, "MP3 DFPlayer 播放曲目:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
}

Blockly.Blocks['DFPlayer_volume'] = {
  init: function () {
    this.appendValueInput("value_")
      .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_VOLUME, "MP3 DFPlayer 音量:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['DFPlayer_loop'] = {
  init: function () {
    this.appendValueInput("value_")
      .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_LOOP, "MP3 DFPlayer 重複播放曲目:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
}

Blockly.Blocks['DFPlayer_previous'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_PREVIOUS, "MP3 DFPlayer 播放上一首:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['DFPlayer_next'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_NEXT, "MP3 DFPlayer 播放下一首:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['DFPlayer_start'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_START, "MP3 DFPlayer 開始播放");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['DFPlayer_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_STOP, "MP3 DFPlayer 停止播放");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['DFPlayer_pause'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_PAUSE, "MP3 DFPlayer 暫停播放");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};
