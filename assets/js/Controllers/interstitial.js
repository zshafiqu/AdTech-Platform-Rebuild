// <script src="assets/js/Controllers/"></script>
// getElementbyID shortcut applies to all pages
  function e(n){
    return document.getElementById(n);
  };
//-----------------------------------------------
  function isoneCTA() {
    return e("oneCTA").checked;
  };
//-----------------------------------------------
  function updateTypeInterstitial() {
    if (isoneCTA()) {
      e("twoCTAinput").style.display = "none";
    }
    else {
        e("twoCTAinput").style.display = "block";
    }
  };
//-----------------------------------------------
  function URL(name) {
    return e(name).value.replace(/\|/g, "%7C");
  };
//-----------------------------------------------
  function generateCode() {
    var pix = e("impressionTracker").value;
    var trackingPixel = "<img src=\""+ pix +"\" style=\"position:absolute; top:0px; left:0px; visibility:hidden\" \/>\n"
    var lp = e("lp_input").value;
    var wrapper1 = "<body style='background-color:#000'><script>PandoraApp.openLandingPage('";
      if(isoneCTA() == false) {
        var clickURl2 = e("secondClick").value;
        var wrapper2 ="?version=old;&click=\'+escape(\'%c\')+\'&clickURL=\'+escape(\'%u\')+\'&clickURL2=\'+escape(\'"+clickURl2+"\'),null,\'fade\',\'top\');<\/script>\n";
      }
      else{
        var wrapper2 ="?version=old;&click=\'+escape(\'%c\')+\'&clickURL=\'+escape(\'%u\'),null,\'fade\',\'top\');<\/script>\n";
      }
    var wrapper3 ="<\/body>"
      if (pix != ""){
        var oldCode = wrapper1 + ''+ lp +''+ wrapper2 +''+ trackingPixel;
      }
      else {
        var oldCode = wrapper1 + ''+ lp +''+ wrapper2;
      }
      oldCode = oldCode.replace(/\\/g, "\\\\");
      oldCode = oldCode.replace(/"/g, '\\"');
      oldCode = oldCode.replace(/\n/g, "\\n");
      oldCode = oldCode.replace(/\r/g, "\\r");
      oldCode = oldCode.replace(/\t/g, "\\t");
      oldCode =' "html":"' + oldCode + wrapper3 + ',"';
      var code = "{\n";
      var html = e("htmlCode").value;
      if (pix != ""){
      html += trackingPixel;
      }
      html = html.replace(/\\/g, "\\\\");
      html = html.replace(/"/g, '\\"');
      html = html.replace(/\n/g, "\\n");
      html = html.replace(/\r/g, "\\r");
      html = html.replace(/\t/g, "\\t");
      code += oldCode + ',\n';
      code += '  "intskip":"' + html + '",\n';
      code += '  "impressionUrl":"' + URL("impressionURL") + '",\n';
      code += '  "height":' + e("adHeight").value + '\n';
      code += "}\n"
    e("adCode").value = code
  };
//-----------------------------------------------
