// <script src="assets/js/controller.js"></script>
// getElementbyID shortcut applies to all pages
  function e(n){
    return document.getElementById(n);
  };
// ------------ BEGIN ESCAPAID.HTML ---------------------------------
  function escapeIt() {
    var url = e("url-escapaid").value;
    var encodedUrl = encodeURIComponent(url);
    var encodedUrl = encodedUrl.replace("https%3A%2F%2F", "https://");
    var encodedUrl = encodedUrl.replace("http%3A%2F%2F", "http://");
    e("result-escapaid").value = encodedUrl;
  };
  function unEscapeIt() {
    var url = e("url-escapaid").value;
    var unencodedUrl = unescape(url);
    e("result-escapaid").value = unencodedUrl;
  };
// ------------ END ESCAPAID.HTML -----------------------------------
// ------------ BEGIN TESTADOR.HTML ---------------------------------
  function qrCode() {
    var adId = e("adId").value;
  	var cId = e("cId").value;
  	if(e("displayAd").checked == true){
  		var url = '@testdisplay%20'+adId+'%20'+cId;
  	}
  	if(e("audioAd").checked == true){
   		var url = '@testaudio%20'+adId+'%20'+cId;
  	}
  	if(e("videoAd").checked == true){
   		var url = '@testvideo%20'+adId+'%20'+cId;
  	}
  	if(e("intAd").checked == true){
   		var url = '@testint%20'+adId+'%20'+cId;
  	}
  	var imgURL = 'http://qrcode.kaywa.com/img.php?&d='+url;
  	console.log(imgURL);
  	var divResult = '<img class="img-thumbnail img-fluid" src='+imgURL+'>';
    e("result-container").style.display = "block";
  	e("result-test").innerHTML = divResult;
  };
// ------------ END TESTADOR.HTML -----------------------------------
// ------------ BEGIN UTMATIC.HTML ----------------------------------
  function generateUrl() {
    var domain = e("domain").value
    var source = e("source").value
    var medium = e("medium").value
    var name = e("name").value
    var term = e("term").value
    var content = e("content").value
    if (e("anchorTag").checked == true) {
      if(domain.indexOf("utm_") !== -1) {
        alert("Original URL already contains UTM codes, no processing needed.")
      } if(domain.indexOf("UTM_") !== -1) {
        alert("Original URL already contains UTM codes, no processing needed.")
      } else if(domain.indexOf("#") !== -1)  {
          alert('Anchor Tag already exists in URL -- please use query string method or request a new URL')
      }
      else if(domain.indexOf("#") === -1 ) {
        if(domain && source && medium && name && term==false && content==false ) {
          var html = domain+'#utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name;
        } else if(domain && source && medium && name && term && content==false) {
          var html = domain+'#utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name+'&utm_term='+term;
        } else if(domain && source && medium && name && term && content) {
          var html = domain+'#utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name+'&utm_term='+term+'&utm_content='+content;
        } else if(domain && source && medium && name && content && term==false) {
          var html = domain+'#utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name+'&utm_content='+content;
        } else {
          alert('Please fill in all of the required fields')
        }
      }
      else {
        alert('Please fill in all of the required fields')
      }
    }
    else {
      if(domain.indexOf("utm_") !== -1) {
        alert("Original URL already contains UTM codes, no processing needed.")
      } if(domain.indexOf("UTM_") !== -1) {
        alert("Original URL already contains UTM codes, no processing needed.")
      } else if(domain.indexOf("?") !== -1) {
        if (domain && source && medium && name && term==false && content==false ) {
          var html = domain+'&utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name;
        } else if(domain && source && medium && name && term && content==false) {
          var html = domain+'&utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name+'&utm_term='+term;
        } else if(domain && source && medium && name && term && content) {
          var html = domain+'&utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name+'&utm_term='+term+'&utm_content='+content;
        } else if(domain && source && medium && name && content && term==false) {
          var html = domain+'&utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name+'&utm_content='+content;
        } else {
          alert('Please fill in all of the required fields')
        }
      }
      else if(domain.indexOf("?") === -1 ) {
        if(domain && source && medium && name && term==false && content==false ) {
          var html = domain+'?utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name;
        } else if(domain && source && medium && name && term && content==false) {
          var html = domain+'?utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name+'&utm_term='+term;
        } else if(domain && source && medium && name && term && content) {
          var html = domain+'?utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name+'&utm_term='+term+'&utm_content='+content;
        } else if(domain && source && medium && name && content && term==false) {
          var html = domain+'?utm_source='+source+'&utm_medium=Pandora_'+medium+'&utm_campaign=Pandora_'+name+'&utm_content='+content;
        } else {
          alert('Please fill in all of the required fields')
        }
      }
      else{
        alert('Please fill in all of the required fields')
      }
    }
    html = html.replace(/\|/g, "%7C");
    html = html.replace(' ', "%20");
    e("url-utmatic").value = html;
  };
  function warning() {
    e('warned').style.display="block"
  };
  // ------------ END UTMATIC.HTML ----------------------------------
  // ------------ BEGIN XML.HTML ------------------------------------
  function isVideo() {
    return e("videoRadio").checked;
  };
  function isAudio() {
    return e("audioRadio").checked;
  };
  function isInternal() {
    return e("internalTracker").checked;
  };
  function isThirdParty() {
    return e("thirdPartyTracker").checked;
  };
  function updateProduct(){
    if (isVideo()){
      e("audioDiv").style.display = "none";
    }
    if (isAudio()){
      e("audioDiv").style.display = "block";
      e("videoDiv").style.display = "none";
    }
    else{
      e("videoDiv").style.display = "block";
    }
  };
  // XML Generator Function
  function generateMember(){
    if (isVideo()) {
      var memberName = e("videoEvent").value;
    } if (isAudio()) {
      var memberName = e("audioEvent").value;
    }
    if (isThirdParty()) {
      var memberNameComplete = "trackingUrl_"+ memberName;
    }
    if (isInternal()) {
      var memberNameComplete = "internalUrl_"+ memberName;
    }
    var pix = e("tracking_pixel").value;
    var memberGenerated = "<member>\n<name>"+memberNameComplete+"</name>\n<value>\n<string><![CDATA["+pix+"]]></string>\n<value>\n</member>";
    e("member_code").value = memberGenerated
  };
// ------------ END XML.HTML ----------------------------------------
// ------------ BEGIN INTERSTITIAL.HTML -----------------------------
  function isoneCTA() {
    return e("oneCTA").checked;
  };
  function updateTypeInterstitial() {
    if (isoneCTA()) {
      e("twoCTAinput").style.display = "none";
    }
    else {
        e("twoCTAinput").style.display = "block";
    }
  };
  // removing pipes from %i
  function URL(name) {
    return e(name).value.replace(/\|/g, "%7C");
  };
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
// ------------ END INTERSTITIAL.HTML -------------------------------
// ------------ BEGIN MOBILECODEGEN.HTML ----------------------------
  function e(n) {
    return document.getElementById(n);
  };
  function isHTML() {
    return e("htmlAdType").checked;
  };
  function updateTypeMobile() {
    if (isHTML()) {
      e("htmlOptions").style.display = "block";
      e("imageOptions").style.display = "none";
    } else {
      e("htmlOptions").style.display = "none";
      e("imageOptions").style.display = "block";
    }
  };
  function URL(name) {
    return e(name).value.replace(/\|/g, "%7C");
  };
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
  // function diffImage(img) {
  //    if(img.src.match("img/dog.png")) img.src = "img/answer_dog.png";
  //    else img.src = "img/answer_dog.png";
  //  };
// ------------ END MOBILECODEGEN.HTML ------------------------------
