// <script src="assets/js/Controllers/"></script>
// getElementbyID shortcut applies to all pages
  function e(n){
    return document.getElementById(n);
  };
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
