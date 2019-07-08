// <script src="assets/js/Controllers/"></script>
// getElementbyID shortcut applies to all pages
  function e(n){
    return document.getElementById(n);
  };
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
