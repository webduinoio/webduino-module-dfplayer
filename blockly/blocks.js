var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_campaign=help_url';

Blockly.Blocks['DFPlayer_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER, "MP3 DFPlayer Rx:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "Rx_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_TX, "  Tx")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "Tx_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl); 
  }
};

Blockly.Blocks['DFPlayer_play'] = {
  init: function () {
    this.appendValueInput("value_")
      .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_PLAY, "播放第");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_NUM,"首");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl); 
  }
}

Blockly.Blocks['DFPlayer_volume'] = {
  init: function () {
    this.appendValueInput("value_")
      .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_VOLUME, "音量:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl); 
  }
};

Blockly.Blocks['DFPlayer_loop'] = {
  init: function () {
    this.appendValueInput("value_")
      .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_LOOP, "重複播放第");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_NUM,"首");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl); 
  }
}

Blockly.Blocks['DFPlayer_action'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("dfplayer"), "name_")
        .appendField(Blockly.Msg.WEBDUINO_DFPLAYER_SET, "設定")
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.WEBDUINO_DFPLAYER_PREVIOUS, "prev"],
          [Blockly.Msg.WEBDUINO_DFPLAYER_NEXT, "next"],
          [Blockly.Msg.WEBDUINO_DFPLAYER_START, "start"],
          [Blockly.Msg.WEBDUINO_DFPLAYER_STOP, "stop"],
          [Blockly.Msg.WEBDUINO_DFPLAYER_PAUSE, "pause"]
        ]), "action_");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl); 
  }
};
