// getElemetnbyID shortcut
  function e(n){
    return document.getElementById(n);
  };
//---------------------------
  function escapeIt(){
    var url = e("url").value;
    var encodedUrl = encodeURIComponent(url);
    var encodedUrl = encodedUrl.replace("https%3A%2F%2F", "https://");
    var encodedUrl = encodedUrl.replace("http%3A%2F%2F", "http://");
    e("result").value = encodedUrl;
  };
//---------------------------
  function unEscapeIt(){
    var url = e("url").value;
    var unencodedUrl = unescape(url);
    e("result").value = unencodedUrl;
  };
//---------------------------
