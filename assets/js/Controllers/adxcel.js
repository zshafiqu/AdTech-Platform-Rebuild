// <script src="assets/js/Controllers/"></script>
// getElementbyID shortcut applies to all pages
  function e(n){
    return document.getElementById(n);
  };
// ------------ BEGIN MOBILECODEGEN.HTML ----------------------------
//shortcuts for block/none display
  function block(n) {
      e(n).style.display = "block";
  };
  function none(n) {
      e(n).style.display = "none";
  };
//display functions
  function URL(name) {
      return e(name).value.replace(/\|/g, "%7C");
  };
//creates global variables for row counting, when adding additonal tags
  var rowNum = 0;
  var pixNum = 0;
  var intRowNum = 0;

//removes added rows
  function removeRow(rnum) {
      $('#divRow' + rnum).remove();
      $('#pixRowNum' + rnum).remove();
      $('#divIntRow' + rnum).remove();
  }

//adds rows
  function addRow(frm) {
      //ADD PIXEL ROW
      if (isPixel()) {
          //increases row number
          pixNum++;
          //defines a new row's HTML
          var pixRow = '<div id="pixRowNum' + pixNum + '" class="rowPix row"><div id="pixelName" class="adxcel col-md-2"> <label>Placement Name</label><textarea id="pixelNamepix' + pixNum + '" class="pixelNameText form-control" type="text" type="textarea" style="width:100%;height:100px"></textarea> </div><div id="' + pixNum + '"" class="adxcel col-md-2"> <label>DFP Creative ID</label><textarea id="pix' + pixNum + '" type="textarea" style="width:100%;height:100px" size="4" onchange="generatePixel(this.id);" class="form-control"></textarea> </div><div id="opt-in" class="xfp col-md-2"> <label>DFP Pixel Opt-in</label><textarea id="optinTextpix' + pixNum + '" class="optInText form-control" readonly type="text" type="textarea" style="width:100%;height:100px"></textarea> </div><div id="opt-out" class="ss col-md-2"> <label>DFP Pixel Opt-out</label><textarea readonly id="optoutTextpix' + pixNum + '" class="optOutText form-control" type="text" type="textarea" style="width:100%;height:100px"></textarea> </div><div id="addButton" class="addRemoveButton col-md-1 pulldown"><input type="button" value="Remove" class="btn btn-default" onclick="removeRow(' + pixNum + ');" id="removeButton' + pixNum + '"></div><div id="emptyColumn" class ="col-md-2"></div>';
          //appends the row to the div
          $('#pixelItemRows').append(pixRow);
      }
      //ADD INTERSTITIAL ROW
      else if (isIntersitial()) {
          //increases row number
          intRowNum++;
          //defines a new row's HTML
          var intRow = '<div id="divIntRow' + intRowNum + '" class="rowInt row"> <div id="intName" class="displayNames col-md-2"> <label>Placement Name</label> <textarea id="intName' + intRowNum + '" class="intNameText form-control" type="text" type="textarea" style="width:100%;height:100px"></textarea> </div><div id="adxcelInt" class="adxcel col-md-2"> <label>AdXcel Tag</label> <textarea id="int' + intRowNum + '" type="textarea" style="width:100%;height:100px" size="4" onchange="generateInt(this.id);" class="form-control"></textarea> </div><div id="xfpInt" class="xfp col-md-2"> <label>DFP Code</label> <textarea readonly id="adCodeXFPint' + intRowNum + '" type="text" type="textarea" style="width:100%;height:100px" class="form-control"></textarea> </div><div id="ssInt" class="ss col-md-2"> <label>Slingshot Code</label> <textarea readonly id="adCodeSSint' + intRowNum + '" type="text" type="textarea" style="width:100%;height:100px" class="ssIntText form-control"></textarea> </div><div id="rowOptions" class="col-md-1"><div id="platformToggle" class="form-group"> <label>Platform:</label> <input id="platformint' + intRowNum + '" type="checkbox" data-toggle="toggle" data-on="iPhone" data-off="Android" data-onstyle="primary" data-offstyle="success"data-width="80" class="form-control toggle" onchange="generateInt(\'int'+ intRowNum +'\')"></input> </div><div id="addButton" class="addRemoveButton form-group"><input type="button" value="Remove" class="btn btn-default" onclick="removeRow(' + intRowNum + ');" id="removeButton' + intRowNum + '"></div><div id="emptyColumn" class ="col-md-2"></div>'
          //appends the new row to the div
          $('#intItemRows').append(intRow);
          //call to bootstrap's toggle API
          $('#platformint' + intRowNum).bootstrapToggle();
      }
      //ADD DISPLAY ROW
      else {
          //increases row number
          rowNum++;
           //defines a new row's HTML
          // var row = ' <div id="divRow' + rowNum + '" class="rowDisplay row"> <div id="displayName" class="displayNames col-md-2"> <label>Placement Name</label> <textarea id="displayName' + rowNum + '" class="displayNameText form-control" type="text" type="textarea" style="width:100%;height:100px"></textarea> </div><div id="adxcel" class="adxcel col-md-2"> <label>AdXcel Tag</label> <textarea id="' + rowNum + '" type="textarea" style="width:100%;height:100px" size="4" onchange="generateCode(this.id);" class="form-control" rows="3"></textarea> </div><div id="xfp" class="xfp col-md-2"> <label>DFP Code</label> <textarea readonly id="adcodeXFP' + rowNum + '" type="text" type="textarea" style="width:100%;height:100px" class="form-control"></textarea> </div><div id="ss" class="ss col-md-2"> <label>Slingshot Code</label> <textarea readonly id="adcodeSS' + rowNum + '" type="text" type="textarea" style="width:100%;height:100px" class="ssDisplayText form-control"></textarea> </div><div id="addButton" class="addRemoveButton col-md-3 pulldown"><input type="button" value="Remove" onclick="removeRow(' + rowNum + ');" id="removeButton' + rowNum + '" class="btn btn-default"></div><div id="emptyColumn" class="col-md-2"></div>';
          // updated form to be added ----->
          var row = ' <div id="divRow' + rowNum + '"> <form> <div id="displayName"> <p>Placement Name:</p> <displayName' + rowNum + '" class="form-control" style="margin-top: -20px;"></textarea> </div> <div id="adxcel"> <p style="margin-top: 15px;">AdXcel Tag:</p> <textarea id="' + rowNum + '" onchange="generateCode(this.id);" class="form-control" style="margin-top: -20px;"></textarea> </div> <div id="xfp"> <p style="margin-top: 15px;">DFP Code:</p> <textarea id="adcodeXFP' + rowNum + '" class="form-control" readonly="" style="margin-top: -20px;"></textarea> </div> <div id="ss"> <p style="margin-top: 15px;">Slingshot Code:</p> <textarea id="adcodeSS' + rowNum + '" class="form-control" readonly="" style="margin-top: -20px;"></textarea> </div> <div id="removeButton" class="form-row" style="margin-top: 15px;"> <div class="col"> <button onclick="removeRow(' + rowNum + ');" id="removeButton' + rowNum + '" class="btn btn-primary border rounded-0" type="button" style="width: 110px;">Remove</button> </div> </div> </form> </div> ';




          // ----------------------------- -->
          //appends the new row to the div
          $('#itemRows').append(row);
      }
  };
//generates display tags for DFP/Slingshot
  function generateCode(thisRow) {
      //grabs tag and escapes it
      var htmlXFP = "<html><body style='margin:0px;border:0px;background:#000000;'>"+e(thisRow).value+'</body></html>'
      htmlXFP = htmlXFP.replace("\u00AB","\"")
      htmlXFP = htmlXFP.replace(/\\/g, "\\\\");
      htmlXFP = htmlXFP.replace(/"/g, '\\"');
      htmlXFP = htmlXFP.replace(/\n/g, "\\n");
      htmlXFP = htmlXFP.replace(/\r/g, "\\r");
      htmlXFP = htmlXFP.replace(/\t/g, "\\t");
      htmlXFP = htmlXFP.replace(/\//g, "\\\/");
      //replaces placeholders with macros
      htmlXFP = htmlXFP.replace("&device_id=%%DEVICE_ID%%&idfa=%%IDFA%%","&device_id=__GAID__&idfa=__IDFA__");
      htmlXFP = htmlXFP.replace("&device_id=%%DEVICE_ID%%","&device_id=__GAID__");
      htmlXFP = htmlXFP.replace("&dfp_creative_id=%%DFP_creative_id%%&dfp_order_id=%%DFP_order_id%%&dfp_ad_id=%%dfp_ad_id%%&", "");
      htmlXFP = htmlXFP.replace("&dfp_creative_id=%%dfp_creative_id%%&dfp_order_id=%%dfp_order_id%%&dfp_ad_id=%%dfp_ad_id%%", "");
      htmlXFP = htmlXFP.replace("ctp=%%CLICK_URL_ESC%%&cb=%%CACHEBUSTER%%&idfa=%%IDFA%%&dfp_creative_id=%%dfp_creative_id%%&dfp_order_id=%%dfp_order_id%%&dfp_ad_id=%%dfp_ad_id%%", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&idfa=__IDFA__&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      htmlXFP = htmlXFP.replace("ctp=%25%25CLICK_URL_ESC%25%25&cb=%25%CACHEBUSTER%25%25&idfa=%25%25IDFA%25%25&dfp_creative_id=%%dfp_creative_id%%&dfp_order_id=%%dfp_order_id%%&dfp_ad_id=%%dfp_ad_id%%", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&idfa=__IDFA__&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      htmlXFP = htmlXFP.replace("ctp=%%CLICK_URL_ESC%%&cb=%%CACHEBUSTER%%&idfa=%%IDFA%%", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&idfa=__IDFA__&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      htmlXFP = htmlXFP.replace("ctp=%25%25CLICK_URL_ESC%25%25&cb=%25%CACHEBUSTER%25%25&idfa=%25%25IDFA%25%25", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&idfa=__IDFA__&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      htmlXFP = htmlXFP.replace("ctp=%%CLICK_URL_ESC%%&cb=%%CACHEBUSTER%%&dfp_creative_id=%%dfp_creative_id%%&dfp_order_id=%%dfp_order_id%%&dfp_ad_id=%%dfp_ad_id%%", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      htmlXFP = htmlXFP.replace("ctp=%25%25CLICK_URL_ESC%25%25&cb=%25%CACHEBUSTER%25%25&idfa=%25%25IDFA%25%25&dfp_creative_id=%%dfp_creative_id%%&dfp_order_id=%%dfp_order_id%%&dfp_ad_id=%%dfp_ad_id%%", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      htmlXFP = htmlXFP.replace("ctp=%%CLICK_URL_ESC%%&cb=%%CACHEBUSTER%%", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      htmlXFP = htmlXFP.replace("ctp=%25%25CLICK_URL_ESC%25%25&cb=%25%CACHEBUSTER%25%25&idfa=%25%25IDFA%25%25", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      //creates KVPs for JSON
      var codeXFP = "{\n";
      codeXFP += '  "tid":"Mobile Display - htmlXFP - v1.0",\n';
      codeXFP += '  "height":' + e("adHeight").value + ',\n';
      codeXFP += '  "impressionUrl":"' + URL("impressionURL") + '",\n';
      codeXFP += '  "html":"' + htmlXFP + '"\n';
      codeXFP += "}\n"
      //grabs Adxcel tag and puts it in an HTML container
      var htmlSS ="<html><body style='margin:0px;border:0px;background:#000000;'>"+e(thisRow).value+'</body></html>'
      //replaces placeholders with macros
      htmlSS = htmlSS.replace("&device_id=%%DEVICE_ID%%&idfa=%%IDFA%%","&device_id=__GAID__&idfa=__IDFA__");
      htmlSS = htmlSS.replace("&device_id=%%DEVICE_ID%%","&device_id=__GAID__");
      htmlSS = htmlSS.replace("&dfp_creative_id=%%DFP_creative_id%%&dfp_order_id=%%DFP_order_id%%&dfp_ad_id=%%dfp_ad_id%%&", "");
      htmlSS = htmlSS.replace("&dfp_creative_id=%%dfp_creative_id%%&dfp_order_id=%%dfp_order_id%%&dfp_ad_id=%%dfp_ad_id%%", "");
      htmlSS = htmlSS.replace("ctp=%%CLICK_URL_ESC%%&cb=%%CACHEBUSTER%%&idfa=%%IDFA%%&dfp_creative_id=%%dfp_creative_id%%&dfp_order_id=%%dfp_order_id%%&dfp_ad_id=%%dfp_ad_id%%", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&idfa=__IDFA__&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      htmlSS = htmlSS.replace("ctp=%%CLICK_URL_ESC%%&cb=%%CACHEBUSTER%%&idfa=%%IDFA%%", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&idfa=__IDFA__&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      htmlSS = htmlSS.replace("ctp=%%CLICK_URL_ESC%%&cb=%%CACHEBUSTER%%&dfp_creative_id=%%dfp_creative_id%%&dfp_order_id=%%dfp_order_id%%&dfp_ad_id=%%dfp_ad_id%%", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      htmlSS = htmlSS.replace("ctp=%%CLICK_URL_ESC%%&cb=%%CACHEBUSTER%%", "cb=%%CACHEBUSTER%%&ctp=%%CLICK_URL_ESC%%&zip=%%PATTERN:zip%%&age=%%PATTERN:ag%%&am_geo=%%PATTERN:dma%%&gender=%%PATTERN:gnd%%&dfp_creative_id=%ecid!&dfp_order_id=%ebuy!&dfp_ad_id=%eaid!&listener_id=%%PATTERN:l%%");
      //prints the final output
      e("adcodeXFP"+thisRow).value = codeXFP;
      e("adcodeSS"+thisRow).value = htmlSS;
      console.log(htmlXFP);
      console.log(codeXFP);
  };
//generates DFP opt-in/opt-out pixels for Adxcel
  function generatePixel(thisRow) {
      //grabs the DFP creative ID
      var creid = e(thisRow).value
      //wraps it in JS tags
      var pixel1 = '<script language="JavaScript" type="text/javascript">\nif (typeof ord==\'undefined\') {ord=Math.random()*10000000000000000;}\ndocument.write(\'<img src="http://stats.pandora.com/tracking/\' + ord + \'/type::ad_tracking_pixel/ctype::mobileweb/etype::test_advertiser/aid::' + creid + '01">\');\n<\/script>';
      var pixel2 = '<script language="JavaScript" type="text/javascript">\nif (typeof ord==\'undefined\') {ord=Math.random()*10000000000000000;}\ndocument.write(\'<img src="http://stats.pandora.com/tracking/\' + ord + \'/type::ad_tracking_pixel/ctype::mobileweb/etype::test_advertiser/aid::' + creid + '02">\');\n<\/script>';
      //prints opt-in/opt-out pixels
      e("optoutText" + thisRow).innerHTML = pixel2;
      e("optinText" + thisRow).innerHTML = pixel1;
      console.log(e("optoutText" + thisRow).value);
  };
//generates interstitial tags for DFP/Slingshot
  function generateInt(thisRow) {
      //checks which platform is selected; returns iPhone for True, Android for False
      var selectedPlatform = $('#platform' + thisRow).prop('checked');
      //iPhone
      if (selectedPlatform == true) {
          var htmlXFP = e(thisRow).value;
          //defnines which part of the Adxcel Tag to grab
          var startposition = htmlXFP.indexOf("http://dfvuzgpsen67.cloudfront.net");
          var endposition = htmlXFP.indexOf("?nature");
          htmlXFP = htmlXFP.substring(startposition,endposition);
          var htmlXFP2 = "<html>\n<head>\n<meta charset=\"utf-8\" />\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n   \n<title>Pandora Interstitial</title>\n   \n<script>\nfunction param(name, macro) {\n  if (location.search && location.search.match(new RegExp(name + \"=([^&]*)\"))) {\n    return unescape(RegExp.$1);\n  } else {\n    return macro;\n  }\n}\n   \nvar dfpClick = param('click', '%%CLICK_URL_ESC%%');\nvar clickURL = dfpClick+param('clickURL', '%u');\nvar appVersion = param('version', '');\nvar pxl = param('pixel', '');\nvar rnd = Math.floor(Math.random()*10000000000);\nvar myZip = param('zip', '%%PATTERN:zip%%');\nvar myGeo = param('am_geo', '%%PATTERN:dma%%');\nvar myAge = param('age', '%%PATTERN:ag%%');\nvar myGender = param('gender', '%%PATTERN:gnd%%');\nvar myIDFA = param('idfa', '__IDFA__');\nvar LID = param('listener_id', '%%PATTERN:l%%');\nvar OID = param('dfp_order_id', '%ebuy!');\nvar AID = param('dfp_ad_id', '%eaid!');\nvar CID = param('dfp_creative_id', '%ecid!');\n \n<\/script>\n   \n<link type=\"text/css\" href=\"http://pandora.com/static/ads/interstitial/interstitial.css\" rel=\"stylesheet\" media=\"screen\"/>\n   \n</head>\n<body>\n   \n<div id=\"adContainer\">\n  <div id=\"adTag\">\n    <script>\n      document.write('<scr'+'ipt src=\""+ htmlXFP +"?nature=dfp&adv_name=adxcel&ctp='+dfpClick+'&cb='+rnd+'&zip='+myZip+'&am_geo='+myGeo+'&age='+myAge+'&gender='+myGender+'&idfa='+myIDFA+'&listener_id='+LID+'&dfp_creative_id='+CID+'&dfp_order_id='+OID+'&dfp_ad_id='+AID+'\"><\/scr'+'ipt>');\n    <\/script>\n  <\/div>\n   \n  <a href=\"#\" id=\"adFooter\" onClick=\"PandoraApp.closeCustomWebViewContainer(); return false;\"><img src=\"http://pandora.com/static/ads/interstitial/close_btn.png\" width=\"320\"></a>\n   \n<\/div>\n   \n<script>\nvar ua = navigator.userAgent.toLowerCase();\nvar isAndroid = ua.indexOf('android') > -1;\n   \nif(isAndroid && appVersion != '') {\n  document.getElementById('adContainer').style.width = '320px';\n  document.getElementById('adContainer').style.height = '453px';\n  document.getElementById('adFooter').style.display = 'block';\n}\n<\/script>\n   \n</body>\n<\/html>";
          //escapes the tag
          htmlXFP2 = htmlXFP2.replace("\u00AB","\"");
          htmlXFP2 = htmlXFP2.replace(/\\/g, "\\\\");
          htmlXFP2 = htmlXFP2.replace(/"/g, '\\"');
          htmlXFP2 = htmlXFP2.replace(/\n/g, "\\n");
          htmlXFP2 = htmlXFP2.replace(/\r/g, "\\r");
          htmlXFP2 = htmlXFP2.replace(/\t/g, "\\t");
          htmlXFP2 = htmlXFP2.replace(/\//g, "\\\/");
          //defines JSON KVP for DFP
          var codeXFP = "{\n";
          codeXFP += '  "intskip":"' + htmlXFP2 + '",\n';
          codeXFP += '  "impressionUrl":"' + URL("impressionURL") + '",\n';
          codeXFP += '  "height":' + e("adHeight").value + '\n';
          codeXFP += "}\n";
          //creates HTML wrapped for tag
          var htmlSS =  "<html>\n"
          htmlSS += "<head>\n";
          htmlSS += '<meta charset="utf-8" />\n';
          htmlSS += '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">\n';
          htmlSS += '<title>Pandora Interstitial</title>\n';
          htmlSS += '<script>\n';
          htmlSS += 'function param(name, macro) {\nif (location.search && location.search.match(new RegExp(name + "=([^&]*)"))) {\nreturn unescape(RegExp.$1);\n} else {\nreturn macro;\n}\n}\n';
          htmlSS += "var dfpClick = param('click', '%%CLICK_URL_ESC%%');\nvar clickURL = dfpClick+param('clickURL', '%u');\nvar appVersion = param('version', '');\nvar pxl = param('pixel', '');\nvar rnd = Math.floor(Math.random()*10000000000);\nvar myZip = param('zip', '%%PATTERN:zip%%');\nvar myGeo = param('am_geo', '%%PATTERN:dma%%');\nvar myAge = param('age', '%%PATTERN:ag%%');\nvar myGender = param('gender', '%%PATTERN:gnd%%');\nvar myIDFA = param('idfa', '__IDFA__');\nvar OID = param('dfp_order_id', '%ebuy!');\nvar AID = param('dfp_ad_id', '%eaid!');\nvar CID = param('dfp_creative_id', '%ecid!');\n";
          htmlSS += '<\/script>\n<link type="text\/css" href="http:\/\/pandora.com\/static\/ads/interstitial\/interstitial.css" rel="stylesheet" media="screen"\/>\n<\/head>\n<body>\n<div id="adContainer">\n<div id="adTag">\n<script>\n';
          htmlSS += "document.write('<scr'+'ipt src=\""+ htmlXFP +"";
          htmlSS += "?nature=dfp&adv_name=adxcel&ctp='+dfpClick+'&cb='+rnd+'&zip='+myZip+'&am_geo='+myGeo+'&age='+myAge+'&gender='+myGender+'&idfa='+myIDFA+'&dfp_creative_id='+CID+'&dfp_order_id='+OID+'&dfp_ad_id='+AID+";
          htmlSS += "'";
          htmlSS += '"';
          htmlSS += "><\/scr'+'ipt>');\n";
          htmlSS += "<\/script>\n";
          htmlSS += "<\/div>";
          htmlSS += '<a href="#" id="adFooter" onClick="PandoraApp.closeCustomWebViewContainer(); return false;"><img src="http:\/\/pandora.com\/static\/ads\/interstitial\/close_btn.png" width="320"><\/a>\n';
          htmlSS += "<\/div>\n<script>\nvar ua = navigator.userAgent.toLowerCase();\nvar isAndroid = ua.indexOf('android') > -1;\n";
          htmlSS += "if(isAndroid && appVersion != '') {\n";
          htmlSS += "document.getElementById('adContainer').style.width = '320px';\n";
          htmlSS += "document.getElementById('adContainer').style.height = '453px';\n";
          htmlSS += "document.getElementById('adFooter').style.display = 'block';\n"
          htmlSS += "}\n";
          htmlSS += "<\/script>\n";
          htmlSS += "<\/body>\n";
          htmlSS += "<\/html>";
          //prints final tags to tool
          e("adCodeXFP" + thisRow).innerHTML = codeXFP;
          e("adCodeSS" + thisRow).innerHTML = htmlSS;
          console.log('iphone');
      }
      //Android
      else {
          var htmlXFP = e(thisRow).value;
          //defnines which part of the Adxcel Tag to grab
          var startposition = htmlXFP.indexOf("http://dfvuzgpsen67.cloudfront.net");
          var endposition = htmlXFP.indexOf("?nature");
              htmlXFP = htmlXFP.substring(startposition,endposition);
          //places adxcel tag in an html document
          var htmlXFP2 = "<html>\n<head>\n<meta charset=\"utf-8\" />\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n   \n<title>Pandora Interstitial</title>\n   \n<script>\nfunction param(name, macro) {\n  if (location.search && location.search.match(new RegExp(name + \"=([^&]*)\"))) {\n    return unescape(RegExp.$1);\n  } else {\n    return macro;\n  }\n}\n   \nvar dfpClick = param('click', '%%CLICK_URL_ESC%%');\nvar clickURL = dfpClick+param('clickURL', '%u');\nvar appVersion = param('version', '');\nvar pxl = param('pixel', '');\nvar rnd = Math.floor(Math.random()*10000000000);\nvar myZip = param('zip', '%%PATTERN:zip%%');\nvar myGeo = param('am_geo', '%%PATTERN:dma%%');\nvar myAge = param('age', '%%PATTERN:ag%%');\nvar myGender = param('gender', '%%PATTERN:gnd%%');\nvar myGAID = param('device_id', '__GAID__');\nvar LID = param('listener_id', '%%PATTERN:l%%');\nvar OID = param('dfp_order_id', '%ebuy!');\nvar AID = param('dfp_ad_id', '%eaid!');\nvar CID = param('dfp_creative_id', '%ecid!');\n \n<\/script>\n   \n<link type=\"text/css\" href=\"http://pandora.com/static/ads/interstitial/interstitial.css\" rel=\"stylesheet\" media=\"screen\"/>\n   \n</head>\n<body>\n   \n<div id=\"adContainer\">\n  <div id=\"adTag\">\n    <script>\n      document.write('<scr'+'ipt src=\""+ htmlXFP +"?nature=dfp&adv_name=adxcel&ctp='+dfpClick+'&cb='+rnd+'&zip='+myZip+'&am_geo='+myGeo+'&age='+myAge+'&gender='+myGender+'&device_id='+myGAID+'&listener_id='+LID+'&dfp_creative_id='+CID+'&dfp_order_id='+OID+'&dfp_ad_id='+AID+'\"><\/scr'+'ipt>');\n    <\/script>\n  <\/div>\n   \n  <a href=\"#\" id=\"adFooter\" onClick=\"PandoraApp.closeCustomWebViewContainer(); return false;\"><img src=\"http://pandora.com/static/ads/interstitial/close_btn.png\" width=\"320\"></a>\n   \n<\/div>\n   \n<script>\nvar ua = navigator.userAgent.toLowerCase();\nvar isAndroid = ua.indexOf('android') > -1;\n   \nif(isAndroid && appVersion != '') {\n  document.getElementById('adContainer').style.width = '320px';\n  document.getElementById('adContainer').style.height = '453px';\n  document.getElementById('adFooter').style.display = 'block';\n}\n<\/script>\n   \n</body>\n<\/html>";
              //escaping
              htmlXFP2 = htmlXFP2.replace("\u00AB","\"");
              htmlXFP2 = htmlXFP2.replace(/\\/g, "\\\\");
              htmlXFP2 = htmlXFP2.replace(/"/g, '\\"');
              htmlXFP2 = htmlXFP2.replace(/\n/g, "\\n");
              htmlXFP2 = htmlXFP2.replace(/\r/g, "\\r");
              htmlXFP2 = htmlXFP2.replace(/\t/g, "\\t");
              htmlXFP2 = htmlXFP2.replace(/\//g, "\\\/");
          //created JSON objects
          var codeXFP = "{\n";
              codeXFP += '  "intskip":"' + htmlXFP2 + '",\n';
              codeXFP += '  "impressionUrl":"' + URL("impressionURL") + '",\n';
              codeXFP += '  "height":' + e("adHeight").value + '\n';
              codeXFP += "}\n";
          var htmlSS =  "<html>\n"
              htmlSS += "<head>\n";
              htmlSS += '<meta charset="utf-8" />\n';
              htmlSS += '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">\n';
              htmlSS += '<title>Pandora Interstitial</title>\n';
              htmlSS += '<script>\n';
              htmlSS += 'function param(name, macro) {\nif (location.search && location.search.match(new RegExp(name + "=([^&]*)"))) {\nreturn unescape(RegExp.$1);\n} else {\nreturn macro;\n}\n}\n';
              htmlSS += "var dfpClick = param('click', '%%CLICK_URL_ESC%%');\nvar clickURL = dfpClick+param('clickURL', '%u');\nvar appVersion = param('version', '');\nvar pxl = param('pixel', '');\nvar rnd = Math.floor(Math.random()*10000000000);\nvar myZip = param('zip', '%%PATTERN:zip%%');\nvar myGeo = param('am_geo', '%%PATTERN:dma%%');\nvar myAge = param('age', '%%PATTERN:ag%%');\nvar myGender = param('gender', '%%PATTERN:gnd%%');\nvar myGAID = param('device_id', '__GAID__');\nvar OID = param('dfp_order_id', '%ebuy!');\nvar AID = param('dfp_ad_id', '%eaid!');\nvar CID = param('dfp_creative_id', '%ecid!');\n";
              htmlSS += '<\/script>\n<link type="text\/css" href="http:\/\/pandora.com\/static\/ads/interstitial\/interstitial.css" rel="stylesheet" media="screen"\/>\n<\/head>\n<body>\n<div id="adContainer">\n<div id="adTag">\n<script>\n';
              htmlSS += "document.write('<scr'+'ipt src=\""+ htmlXFP +"";
              htmlSS += "?nature=dfp&adv_name=adxcel&ctp='+dfpClick+'&cb='+rnd+'&zip='+myZip+'&am_geo='+myGeo+'&age='+myAge+'&gender='+myGender+'&device_id='+myGAID+'&dfp_creative_id='+CID+'&dfp_order_id='+OID+'&dfp_ad_id='+AID+";
              htmlSS += "'";
              htmlSS += '"';
              htmlSS += "><\/scr'+'ipt>');\n";
              htmlSS += "<\/script>\n";
              htmlSS += "<\/div>";
              htmlSS += '<a href="#" id="adFooter" onClick="PandoraApp.closeCustomWebViewContainer(); return false;"><img src="http:\/\/pandora.com\/static\/ads\/interstitial\/close_btn.png" width="320"><\/a>\n';
              htmlSS += "<\/div>\n<script>\nvar ua = navigator.userAgent.toLowerCase();\nvar isAndroid = ua.indexOf('android') > -1;\n";
              htmlSS += "if(isAndroid && appVersion != '') {\n";
              htmlSS += "document.getElementById('adContainer').style.width = '320px';\n";
              htmlSS += "document.getElementById('adContainer').style.height = '453px';\n";
              htmlSS += "document.getElementById('adFooter').style.display = 'block';\n"
              htmlSS += "}\n";
              htmlSS += "<\/script>\n";
              htmlSS += "<\/body>\n";
              htmlSS += "<\/html>";
          //prints final tags to tool
          e("adCodeXFP" + thisRow).innerHTML = codeXFP;
          e("adCodeSS" + thisRow).innerHTML = htmlSS;
          console.log('android');
      }
  };
//checks to see if the user has selected pixel generation
  function isPixel() {
      return e("pixel").checked;
  };
//checks to see if the user has selected interstitial generation
  function isIntersitial() {
      return e("intersitial").checked;
  };
//changes displayed forms based on tag type
  function updateType() {
      if (isPixel()) {
          none("itemRows");
          none("adSpecs");
          none("intItemRows");
          block("pixelItemRows");
      } else if (isIntersitial()) {
          none("itemRows");
          none("adSpecs");
          none("pixelItemRows");
          block("intItemRows");
      } else {
          block("adSpecs");
          block("itemRows");
          none("intItemRows");
          none("pixelItemRows");
      }
  };
//export options
  function escapeIt(t) {
      return t;
  }
//grabs placement names by class and returns them in comment wrappers
  function getText(rowEl) {
      //pixel placement names
      if (isPixel()){
          console.log('getPix');
          var placement = escapeIt(rowEl.find('.pixelNameText').val());
          var optInText = escapeIt(rowEl.find('.optInText').val());
          var optOutText = escapeIt(rowEl.find('.optOutText').val());
          return '<!-- ' + placement + '_Opt-in_Pixel -->\n' + optInText + '\n\n<!-- ' + placement + '_Opt-out_Pixel -->\n' + optOutText;
      }
      //interstitial placement names
      else if (isIntersitial()){
          console.log('getInt');
          var placement = escapeIt(rowEl.find('.intNameText').val());
          var ssCodeText = escapeIt(rowEl.find('.ssIntText').val());
          return '<!-- ' + placement + '_Slingshot_Tag -->\n' + ssCodeText +'\n';
      }
      //display placement names
      else{
          console.log('getDisplay');
          var placement = escapeIt(rowEl.find('.displayNameText').val());
          var ssCodeText = escapeIt(rowEl.find('.ssDisplayText').val());
          return '<!-- ' + placement + '_Slingshot_Tag -->\n' + ssCodeText +'\n';
      }
  };
//export function
  function downloadInnerHtml(campaignName, mimeType) {
      if (isPixel()){
          //grabs pixel rows by class, maps them and joins them into variable
          var finalText = $('.rowPix').map(function() {
              return getText($(this));
          }).get().join('\n\n');
          var fileName = campaignName + '_pixels.txt';
      } else if (isIntersitial()){
          //grabs interstitial rows by class, maps them and joins them into variable
          var finalText = $('.rowInt').map(function() {
              return getText($(this));
          }).get().join('\n\n');
          var fileName = campaignName + '_SS_Tags.txt';
      } else{
          //grabs display rows by class, maps them and joins them into variable
          var finalText = $('.rowDisplay').map(function() {
          return getText($(this));
          }).get().join('\n\n');
          var fileName = campaignName + '_SS_Tags.txt';

      }
      //creates href link to be downloaded by browser
      var link = document.createElement('a');
      mimeType = mimeType || 'text/plain';
      // Unescape HTML entities
      document.body.appendChild(link); //required in FF, optional for Chrome
      link.target="_self" ; //required in FF, optional for Chrome
      link.setAttribute('download', fileName);
      link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(finalText));
      link.click();
      console.log(finalText);
  };
// ------------ END MOBILECODEGEN.HTML ----------------------------
