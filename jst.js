//This file is generated by bin/hook.js
var _ = require('underscore');
module.exports = {

  'rtmp': _.template('  <param name="movie" value="<%= swfPath %>">  <param name="quality" value="autohigh">  <param name="swliveconnect" value="true">  <param name="allowScriptAccess" value="always">  <param name="bgcolor" value="#001122">  <param name="allowFullScreen" value="false">  <param name="wmode" value="transparent">  <param name="tabindex" value="1">  <param name=FlashVars value="playbackId=<%= playbackId %>" />  <embed    type="application/x-shockwave-flash"    disabled="disabled"    tabindex="-1"    enablecontextmenu="false"    allowScriptAccess="always"    quality="autohight"    pluginspage="http://www.macromedia.com/go/getflashplayer"    wmode="transparent"    swliveconnect="true"    type="application/x-shockwave-flash"    allowfullscreen="false"    bgcolor="#000000"    FlashVars="playbackId=<%= playbackId %>"    src="<%= swfPath %>">  </embed>'),

  CSS: {
    
      'rtmp': '[data-rtmp]{position:absolute;height:100%;width:100%;background-color:#000;display:block;pointer-events:none}',
    
  }
};