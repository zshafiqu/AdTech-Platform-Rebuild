// <script src="assets/js/controller.js"></script>
// getElementbyID shortcut applies to all pages
  function e(n){
    return document.getElementById(n);
  };
// ------------ BEGIN ESCAPAID.HTML ---------------------------------------
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
  	e("result-test").innerHTML = divResult;
  };
// ------------ END TESTADOR.HTML ---------------------------------------
// ------------ BEGIN UTMATIC.HTML ---------------------------------------
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
  }
  // ------------ END UTMATIC.HTML ---------------------------------------
