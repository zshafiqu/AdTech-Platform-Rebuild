// <script src="assets/js/Controllers/escapaid.js"></script>
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
