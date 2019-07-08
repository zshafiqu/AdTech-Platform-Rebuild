// <script src="assets/js/Controllers/"></script>
// getElementbyID shortcut applies to all pages
  function e(n){
    return document.getElementById(n);
  };
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
