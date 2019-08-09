// <script src="assets/js/Controllers/"></script>
// getElementbyID shortcut applies to all pages
  function e(n){
    return document.getElementById(n);
  };
//-----------------------------------------------
  function e(n) {
    return document.getElementById(n);
  };
//-----------------------------------------------
  function isHTML() {
    return e("htmlAdType").checked;
  };
//-----------------------------------------------
  function updateTypeMobile() {
    if (isHTML()) {
      e("htmlOptions").style.display = "block";
      e("imageOptions").style.display = "none";
    } else {
      e("htmlOptions").style.display = "none";
      e("imageOptions").style.display = "block";
    }
  };
//-----------------------------------------------
  function URL(name) {
    return e(name).value.replace(/\|/g, "%7C");
  };
//-----------------------------------------------
  function generateMobileCode() {
    var code = "{\n";

    if (isHTML()) {
      var html = e("htmlCode").value;
      html = html.replace(/\\/g, "\\\\");
      html = html.replace(/"/g, '\\"');
      html = html.replace(/\n/g, "\\n");
      html = html.replace(/\r/g, "\\r");
      html = html.replace(/\t/g, "\\t");
      code += '  "html":"' + html + '",\n';
    } else {
      code += '  "imageUrl":"' + URL("imageURL") + '",\n';
      if (URL("clickURL") != "") {
        code += '  "clickUrl":"' + URL("clickURL") + '",\n';
      }
    }

    if (e("logonSponsor").value != "") {
      code += '  "logonSponsor":"' + e("logonSponsor").value + '",\n';
    }

    code += '  "impressionUrl":"' + URL("impressionURL") + '",\n';
    code += '  "height":' + e("adHeight").value + '\n';

    code += "}\n"
    e("adCode").value = code;
  };
//-----------------------------------------------
