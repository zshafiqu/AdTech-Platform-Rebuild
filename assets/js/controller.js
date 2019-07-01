// <script src="assets/js/controller.js"></script>
// getElementbyID shortcut applies to all pages
  function e(n){
    return document.getElementById(n);
  };
// ------------ BEGIN ESCAPAID.HTML ---------------------------------------
  function escapeIt() {
    var url = e("url").value;
    var encodedUrl = encodeURIComponent(url);
    var encodedUrl = encodedUrl.replace("https%3A%2F%2F", "https://");
    var encodedUrl = encodedUrl.replace("http%3A%2F%2F", "http://");
    e("result").value = encodedUrl;
  };
  function unEscapeIt() {
    var url = e("url").value;
    var unencodedUrl = unescape(url);
    e("result").value = unencodedUrl;
  };
// ------------ END ESCAPAID.HTML ---------------------------------------
// ------------ BEGIN TESTADOR.HTML ---------------------------------------
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
  	var divResult = '<img class="img-thumbnail img-fluid" src='+imgURL+'>'
    e("result-container").style.display = "block"
  	e("result").innerHTML = divResult;
  };
// ------------ END TESTADOR.HTML ---------------------------------------
