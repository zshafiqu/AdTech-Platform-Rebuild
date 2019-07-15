// <script src="assets/js/Controllers/"></script>
// getElementbyID shortcut applies to all pages
  function e(n) {
      return document.getElementById(n);
  };
// getElementsByClassName shortcut
  function c(n) {
      document.getElementsByClassName(n);
  };
// ------------ BEGIN PIXELTRON.HTML -----------------------------
  function applyToAll() {
      var selectedVendor = $('#tagType0').val();
      if (e('applyToAll').checked) {
          $(".vendorClass").not('#tagType0').val(selectedVendor).change();
      } else {
          $(".vendorClass").not('#tagType0').val('nullVal').change();
          $("#tagType0").val(selectedVendor);
      }
  };
// check dash
  function checkDash() {
      var inputString = e('myText').value
      if (e("tagType").value == "vindicoPix" && inputString.indexOf('|') >= 0) {
          alert("Please note that using pipe-delimited vindico pixels will result in high discrepancies. Please re-generate the tags as dash-delimited.");
      } else {}
  };
// preview tag
  function previewTag(thisTag) {
      var newWindow = window.open("", "Test", "width=320,height=600,scrollbars=1,resizable=1")
      var html = e(thisTag).value;
      newWindow.document.open();
      newWindow.document.write(html);
      newWindow.document.close();
  };
// get text
  function getText(thisRow, thisRowTag, thisRowOutput) {
      var theInput = e(thisRow).value;
      var tagPatt = theInput;
      var myRegEx = new RegExp(/adj\/.*?;|adi\/.*?;/);
      var tagPatt = tagPatt.match(myRegEx);

      // Doubleclick 1x1, click command
      if (e(thisRowTag).value == "dfaPix") {
          theInput = theInput.replace(/\[timestamp\]/g, "%%CACHEBUSTER%%");
          theInput = theInput.replace(/1234567890/g, "%%CACHEBUSTER%%");
          theInput = theInput.replace(/;pc=\[TPAS_ID\]|pc=\[TPAS_ID\]/g, "");
          theInput = theInput.replace(/\|/g, "%7C");
          theInput = theInput.replace(/kw=\[url_encoded_publisher_data\];/g, "");
          var dCappString = "dcapp="
          if (theInput.indexOf(dCappString) >= 0) {
              alert("Please note we do not accept DCM/DFA pixels that include the dcapp= parameter (in-app compatible tags), since it causes high discrepancies. Please reach out to the client to re-generate these tags without it.")
          } else {}
      }
      // DFA Iframe
      if (e(thisRowTag).value == "dfaIframe") {
          if (theInput.indexOf("click=") == -1) {
              theInput = theInput.replace(tagPatt, tagPatt + "click=%%CLICK_URL_UNESC%%;");
          } else {
              theInput = theInput.replace("click=;ord=", "click=%%CLICK_URL_UNESC%%;ord=");
          }
          theInput = theInput.replace("abr=", "click=%%CLICK_URL_UNESC%%;abr=");
          theInput = theInput.replace(/\[timestamp\]/g, "%%CACHEBUSTER%%");
          theInput = theInput.replace(/1234567890/g, "%%CACHEBUSTER%%");

          theInput = theInput.replace(/;pc=\[TPAS_ID\]|pc=\[TPAS_ID\]/g, "");
          theInput = theInput.replace("HREF=\"", "HREF=\"%%CLICK_URL_UNESC%%");
          theInput = theInput.replace(/\|/g, "%7C");
          theInput = theInput.replace(/kw=\[url_encoded_publisher_data\];/g, "")
      }
      if (e(thisRowTag).value == "dfaJs") {
          if (theInput.indexOf("click=") == -1) {
              theInput = theInput.replace(tagPatt, tagPatt + "click=%%CLICK_URL_UNESC%%;");
          } else {
              theInput = theInput.replace("click=;ord=", "click=%%CLICK_URL_UNESC%%;ord=");
          }
          theInput = theInput.replace("abr=", "click=%%CLICK_URL_UNESC%%;abr=");
          theInput = theInput.replace(/\[timestamp\]/g, "%%CACHEBUSTER%%");
          theInput = theInput.replace(/\[InsertCachebusterHere\]/g, "%%CACHEBUSTER%%");
          theInput = theInput.replace(/1234567890/g, "%%CACHEBUSTER%%");
          theInput = theInput.replace(/;pc=\[TPAS_ID\]|pc=\[TPAS_ID\]/g, "");
          theInput = theInput.replace("HREF=\"", "HREF=\"%%CLICK_URL_UNESC%%");
          theInput = theInput.replace(/\|/g, "%7C");
          theInput = theInput.replace(/kw=\[url_encoded_publisher_data\];/g, "")
      }
      //DCM Javascript
      if (e(thisRowTag).value == "dfaDcmJs") {
          var re = new RegExp('(data-dcm-rendering-mode=)');
          theInput = theInput.replace(re, 'data-dcm-click-tracker=\'%%CLICK_URL_ESC%%\'\n    data-dcm-rendering-mode=');
          var theMatch = theInput.match('(data-dcm-rendering-mode=)');
          theInput = theInput.replace(/\n/g, '');

      }
      // MediaMath
      if (e(thisRowTag).value == "mediamathPix") {
          theInput = theInput.replace("\[INSERT_RANDOM_NUMBER_MACRO_HERE\]", "%%CACHEBUSTER%%");
          theInput = theInput.replace("\[RANDOM_NUMBER_MACRO\]", "");
          theInput = theInput.replace("txn=", "txn=%%CACHEBUSTER%%");
      }
      // mediamind
      if (e(thisRowTag).value == "mediamindPix" || "mediamindStandard") {
          theInput = theInput.replace("\[timestamp\]", "%%CACHEBUSTER%%");
          theInput = theInput.replace(/\<random\>/g, "%%CACHEBUSTER%%");
      }
      if (e(thisRowTag).value == "mediamindJs") {
          theInput = theInput.replace("a href=\"", "a href=\"%%CLICK_URL_UNESC%%");
          theInput = theInput.replace("&ord=\[timestamp\]&ucm=true", "&ncu=$$%%CLICK_URL_UNESC%%$$&ord=%%CACHEBUSTER%%&ucm=true");
          theInput = theInput.replace("&ifl=\$\$eyeblaster\/addineyeV2.html\$\$&z=999", "&ncu=$$$%%CLICK_URL_ESC%%$$$$&ifl=$$$eyeblaster/addineyeV2.html$$$$&z=999");
      }
      // MediaPlex
      if (e(thisRowTag).value == "mediaplexPix") {
          theInput = theInput.replace(/\[CACHEBUSTER\]/g, "%%CACHEBUSTER%%");
          theInput = theInput.replace("<a href=\"", "<a href=\"%%CLICK_URL_UNESC%%");
          theInput = theInput.replace("\[INSERT\-RANDOM\-NUMBER\]", "%%CACHEBUSTER%%");
      }
      if (e(thisRowTag).value == "mediaplexJs") {
          theInput = theInput.replace(/\[CACHEBUSTER\]/g, "%%CACHEBUSTER%%");
          theInput = theInput.replace("mpvc=", "mpvc=%%CLICK_URL_ESC_ESC%%");
          theInput = theInput.replace("\[INSERT-RANDOM-NUMBER\]", "%%CACHEBUSTER%%");
      }
      // Millward Brown
      if (e(thisRowTag).value == "millwardBrown") {
          theInput = theInput.replace("\[INSERT_CACHEBUSTER_HERE\]", "%%CACHEBUSTER%%");
      }
      // Adara
      if (e(thisRowTag).value == "adaraPix") {
          theInput = theInput.replace("<img src=\"", "");
          theInput = theInput.replace("\" width=\'1\' height=\'1\'>", "");
          theInput = theInput.replace("\/\/tag.yieldoptimizer", "https://tag.yieldoptimizer");
      }
      // Amazon
      if (e(thisRowTag).value == "amazonPix") {
          theInput = theInput.replace("cb=", "cb=%%CACHEBUSTER%%");
      }
      // Atlas
      if (e(thisRowTag).value == "atlasPix") {
          theInput = theInput.replace(/href=\"/g, "href=\"%%CLICK_URL_UNESC%%");
          theInput = theInput.replace("direct/01?click=", "direct/01?click=%%CLICK_URL_UNESC%%");
          theInput = theInput.replace("/01?click=", "/01/%%CACHEBUSTER%%?click=%%CLICK_URL_ESC%%");
          theInput = theInput.replace(/direct\/01\//g, "direct/01/%%CACHEBUSTER%%");
          theInput = theInput.replace("/01/\"/></a>", "/01/%%CACHEBUSTER%%\"/></a>");
          theInput = theInput.replace("wi.1;hi.1/01/", "wi.1;hi.1/01/%%CACHEBUSTER%%");
          theInput = theInput.replace("cache=", "cache=%%CACHEBUSTER%%");
      }
      if (e(thisRowTag).value == "atlasJs") {
          theInput = theInput.replace(/href=\"/g, "href=\"%%CLICK_URL_ESC%%");
          theInput = theInput.replace("/01?click=", "/01/?click=%%CLICK_URL_ESC%%");
          theInput = theInput.replace(/direct\/01\//g, "direct/01/%%CACHEBUSTER%%");
          theInput = theInput.replace(/cache=%%CACHEBUSTER%%\?click=/g, "cache=%%CACHEBUSTER%%?click=%%CLICK_URL_ESC_ESC%%");
          theInput = theInput.replace(/cache=\?click=/g, "cache=%%CACHEBUSTER%%?click=%%CLICK_URL_ESC_ESC%%");

      }
      // Mookie
      if (e(thisRowTag).value == "mookiePix") {
          theInput = theInput.replace(/\[timestamp\]/g, "%%CACHEBUSTER%%");
      }
      // Mobile Majority
      if (e(thisRowTag).value == "mookiePix") {
          theInput = theInput.replace("href=\"https", "href=\"%%CLICK_URL_UNESC%%https");
      }
      // Barometric
      if (e(thisRowTag).value == "barometric") {
          theInput = theInput.replace("\[timestamp\]", "%%CACHEBUSTER%%");
          theInput = theInput.replace("idfa=\{IDFA\}", "idfa=");
          theInput = theInput.replace("cid=\{CONTEXTID\}", "cid=pandora");
      }
      // AdShuffle
      if (e(thisRowTag).value == "adshufflePix") {
          theInput = theInput.replace("\[Place Your Cache Buster ID here\]", "%%CACHEBUSTER%%");
      }

      // Pointroll
      if (e(thisRowTag).value == "pointrollPix") {
          theInput = theInput.replace(/\[RANDOM\]/g, "%%CACHEBUSTER%%");
      }
      if (e(thisRowTag).value == "pointrollJs") {
          theInput = theInput.replace(/\[RANDOM\]/g, "%%CACHEBUSTER%%");
          theInput = theInput.replace("click=%%CLICK_URL_UNESC%%;", "");
          theInput = theInput.replace(/%7C/g, "|");
          theInput = theInput.replace("$CTURL$", "%%CLICK_URL_ESC%%$CTURL$");
      }
      //Bridgetrack
      if (e(thisRowTag).value == "bridgetrackPix" || 'bridgetrackIframe') {
          theInput = theInput.replace(/\[RANDOM\]/g, "%%CACHEBUSTER%%");
          theInput = theInput.replace(/\[random\]/g, "%%CACHEBUSTER%%");
          theInput = theInput.replace(/\[Random\]/g, "%%CACHEBUSTER%%");
      }
      //Medialets
      if (e(thisRowTag).value == "medialetsJs") {
          theInput = theInput.replace('click: \"', 'click: \"%%CLICK_URL_ESC_ESC%%');
          theInput = theInput.replace('click : \'', 'click: \'%%CLICK_URL_ESC_ESC%%');
          theInput = theInput.replace(/\[RANDOM\]/g, "%%CACHEBUSTER%%");
      }
      //x+1
      if (e(thisRowTag).value == "x1Pix") {
          theInput = theInput.replace('%5Btimestamp%5D%3F', '%%CACHEBUSTER%%');
          theInput = theInput.replace('[timestamp]', '%%CACHEBUSTER%%');
      }
      //Flashtalking
      if (e(thisRowTag).value == "flashtalkingJs") {
          theInput = theInput.replace('<a href="', '<a href="%%CLICK_URL_UNESC%%');
          theInput = theInput.replace('var ftClick = ""', 'var ftClick = "%%CLICK_URL_ESC_ESC%%"');
      }
      if (e(thisRowTag).value == "flashtalkingPix") {
          theInput = theInput.replace(/\[CACHEBUSTER\]/g, "%%CACHEBUSTER%%");
      }
      //Velti
      if (e(thisRowTag).value == "veltiStandard") {
          theInput = theInput.replace(/\[timestamp\]/g, '%%CACHEBUSTER%%');
          theInput = theInput.replace('<a href=\"', '<a href=\"%%CLICK_URL_ESC%%');
      }
      //Vindico
      if (e(thisRowTag).value == "vindicoPix") {
          var newVindicoFormat = "x3.vindicosuite.com";
          var hrefCheck = 'href=';
          var tsParam = new RegExp(/ts=.*?;/);
          if (theInput.indexOf(newVindicoFormat) >= 0) {
              if (theInput.indexOf("ts=") > 0) {
                  theInput = theInput.replace(tsParam, "ts=%%CACHEBUSTER%%;")
                  theInput = theInput.replace("ts=TIMESTAMP", "ts=%%CACHEBUSTER%%")
              } else if (theInput.indexOf(hrefCheck) >= 0) {
                  theInput = theInput.replace("href=", "rnd=%%CACHEBUSTER%%;href=");
              } else {
                  theInput = theInput.trim();
                  theInput = theInput + ';rnd=%%CACHEBUSTER%%';
              }
          } else {
              theInput = theInput.replace(tsParam, "ts=%%CACHEBUSTER%%;");
              theInput = theInput.replace("ts=TIMESTAMP", "ts=%%CACHEBUSTER%%")
              theInput = theInput.replace('%timestamp%', '%%CACHEBUSTER%%');
              theInput = theInput.replace('%5btimestamp%5d', '%25%25CACHEBUSTER%25%25');
          }
      }
      if (e(thisRowTag).value == "vindicoVast") {
          theInput = theInput.replace('<cachebuster>', '%%CACHEBUSTER%%');
      }
      if (e(thisRowTag).value == "vindicoIframe") {
          theInput = theInput.trim();
          theInput = '<iframe src=\"' + theInput + ';rnd=%%CACHEBUSTER%%;pasmc=%%CLICK_URL_ESC%%\" width=\"300\" height=\"250\" margin=\"0\"><\/iframe>';
      }
      //Spongecell
      if (e(thisRowTag).value == "spongecellJs") {
          theInput = theInput.replace(/SPONGECELL_CLICK_TAG/g, '%%CLICK_URL_ESC_ESC%%');
          theInput = theInput.replace(/SPONGECELL_CACHE_BUSTER/g, '%%CACHEBUSTER%%');
      }
      //Cobalt
      if (e(thisRowTag).value == "cobaltPix") {
          theInput = theInput.replace("\[INSERT Pandora CACHEBUSTER HERE\]", "%%CACHEBUSTER%%");
          theInput = theInput.replace("\{CACHEBUSTER\}", "%%CACHEBUSTER%%");
      }
      //Comscore
      if (e(thisRowTag).value == "comscorePix") {
          theInput = theInput.replace("\[Unique_ID\]", "__SHA1IDFA__");
          theInput = theInput.replace("\[Platform_ID\]", "%s");
          theInput = theInput.replace("\[Device_Model\]", "%%PATTERN:model%%");
          theInput = theInput.replace("\[Implementation_Type\]", "a");
          theInput = theInput.replace("\[TIMESTAMP\]", "%%CACHEBUSTER%%");
          theInput = theInput.replace("\[Timestamp\]", "%%CACHEBUSTER%%");
      }
      //Visual IQ
      if (e(thisRowTag).value == "visualIqPix") {
          var rParam = "r=[CACHEBUSTER]";
          if (theInput.indexOf(rParam) > -1) {
              theInput = theInput.replace(/\[CACHEBUSTER\]/g, "%%CACHEBUSTER%%");
          } else {
              theInput = theInput.replace("&pt=i", "&pt=i&r=%%CACHEBUSTER%%");
          }
      }
      //Whiteops
      if (e(thisRowTag).value == "whiteOpsJs") {
          theInput = theInput.replace("\" async=\"true\"", "&cb=%%CACHEBUSTER%%\" async=\"true\"");
      }
      if (e(thisRowTag).value == "whiteOpsPix") {
          var cbParam = "&cb=%%CACHEBUSTER%%"
          theInput += cbParam;
      }
      //innovid
      if (e(thisRowTag).value == "innovidPix") {
          theInput = theInput.replace(/\[timestamp\]/g, '%%CACHEBUSTER%%');
      }
      //true effect
      if (e(thisRowTag).value == "trueEffectPix") {
          theInput = theInput.replace('random=', 'random=%%CACHEBUSTER%%');
          theInput = theInput.replace('CMPID=', 'CMPID=%ebuy!');
          theInput = theInput.replace('PLID=', 'PLID=%eaid!');
          theInput = theInput.replace('CRID=', 'CRID=%ecid!');
      }
      if (e(thisRowTag).value == "trueEffectJs") {
          theInput = theInput.replace(/random=/g, 'random=%%CACHEBUSTER%%');
          theInput = theInput.replace(/\&\@CPSC\@=/g, '&@CPSC@=%%CLICK_URL_ESC%%');
          theInput = theInput.replace('<A HREF=\"', '<A HREF=\"%%CLICK_URL_UNESC%%');
      }
      //facilitate
      if (e(thisRowTag).value == "facilitateJs") {
          theInput = theInput.replace('fd_clk = \'', 'fd_clk = \'%%CLICK_URL_ESC%%');
          theInput = theInput.replace('<a href=\"', '<a href=\"%%CLICK_URL_ESC%%');
          theInput = theInput.replace(/\[timestamp\]/g, '%%CACHEBUSTER%%');
      }
      //Vizu
      if (e(thisRowTag).value == "vizuIframe") {
          theInput = theInput.replace("\[RANDOM\]", "%%CACHEBUSTER%%");
      }
      //Videohub
      if (e(thisRowTag).value == "videoHubPix" || "nielsenPix") {
          theInput = theInput.replace('[timestamp]', '%%CACHEBUSTER%%');
          theInput = theInput.replace('%5BRANDOM%5D', '%25%25CACHEBUSTER%25%25');
      }
      //Zedo
      if (e(thisRowTag).value == "zedoIframe") {
          theInput = theInput.replace('html?n', 'html?l=%%CLICK_URL_ESC%%;n');
      }
      //Smart
      if (e(thisRowTag).value == "smartJS") {
          theInput = theInput.replace(/\[timestamp\]/g, '%%CACHEBUSTER%%');
          theInput = theInput.replace(/\[countgo\]/g, '%%CLICK_URL_ESC%%');
          theInput = theInput.replace(/\[countgoEncoded\]/g, '%%CLICK_URL_ESC%%');
          theInput = theInput.replace('<a href=\"', '<a href=\"%%CLICK_URL_UNESC%%');

      }
      //Just Ad
      if (e(thisRowTag).value == "justAdJs") {
          theInput = theInput.replace('\{clickurl\}', '%%CLICK_URL_ESC%%');
          theInput = theInput.replace(/\n/g, '');
      }
      //Lucid Pix
      if (e(thisRowTag).value == "lucidPix") {
          theInput = theInput.replace('[InsertCachebusterHere]', '%%CACHEBUSTER%%');
      }
      //Insight Express
      if (e(thisRowTag).value == "insightPix") {
          theInput = theInput.replace('\[INSERT_CACHEBUSTER_HERE\]', '%%CACHEBUSTER%%');
      }
      //Extreme Reach
      if (e(thisRowTag).value == "extremePix") {
          theInput = theInput.replace('\[INSERT_CACHEBREAKER_HERE\]', '%%CACHEBUSTER%%');
      }
      //Numberly
      if (e(thisRowTag).value == "numberly") {
          theInput = theInput.replace('\[\[CACHEBUSTER\]\]', '%%CACHEBUSTER%%');
      }
      //AdTech
      if (e(thisRowTag).value == "adTechJs") {
          theInput = theInput.replace(/\[TIMESTAMP\]/g, '%%CACHEBUSTER%%');
          theInput = theInput.replace('rdclick=\"\>', 'rdclick=%%CLICK_URL_ESC%%\"\>');
          theInput = theInput.replace('href=\"', 'href=\"%%CLICK_URL_UNESC%%');
      }
      if (e(thisRowTag).value == "nullVal") {
          theInput = "No Vendor Selected"
      } else {
          theInput == "Not an accepted Format";
      };
      document.getElementById(thisRowOutput).value = theInput;
  };
// escaoeIt
  function escapeIt(t) {
      return t;
  };
// addRow
  var rowNum = 0;
  function addRow() {
      rowNum++;
      var tagRow = '<div id="inputOutput' + rowNum + '" class="inputRow row"> <div id="vendorSelect" class="form-group col-md-2"> <label for="tagType' + rowNum + '">Vendor/Tag Format</label> <select id="tagType' + rowNum + '" onchange="getText(\'inputText' + rowNum + '\',\'tagType' + rowNum + '\',\'outputText' + rowNum + '\')" value="nullVal" class="vendorClass form-control"> <option value="nullVal">Pick a Vendor</option> <option value="adshufflePix">AdShuffle Pixel/Click</option> <option value="adTechJs">AdTech Javascript</option> <option value="atlasJs">Atlas Javascript</option> <option value="atlasPix">Atlas Pixel/Click</option> <option value="barometric">Barometric</option> <option value="bridgetrackIframe">Bridgetrack Iframe</option> <option value="bridgetrackPix">Bridgetrack Pixel/Click</option> <option value="cobaltPix">Cobalt Pixel/Click</option> <option value="comscorePix">Comscore Pixel/vCE Tracker</option> <option value="dfaIframe">Doubleclick Iframe</option> <option value="dfaJs">Doubleclick Javascript</option> <option value="dfaDcmJs">Doubleclick INS Javascript (DCM)</option> <option value="dfaPix">Doubleclick Pixel/Click</option> <option value="extremePix">Extreme Reach Pixel</option> <option value="facilitateJs">Facilitate Javascript/Pixel/Click</option> <option value="flashtalkingJs">Flashtalking Javascript</option> <option value="flashtalkingPix">Flashtalking Pixel/Click</option> <option value="innovidPix">Innovid Pixel/Click</option> <option value="insightPix">Insight Express Pixel</option> <option value="justAdJs">JustAd Javascript</option> <option value="medialetsJs">Medialets Javascript</option> <option value="mediaplexJs">Mediaplex Javascript</option> <option value="mediaplexPix">Mediaplex Pixel/Click</option> <option value="mookiePix">Mookie Pixel</option> <option value="nielsenPix">Nielsen Pixel</option> <option value="pointrollJs">Pointroll Javascript</option> <option value="pointrollPix">Pointroll Pixel/Click</option> <option value="mediamindJs">Sizmek (Mediamind) Javascript</option> <option value="mediamindPix">Sizmek Pixel/Click</option> <option value="mediamindStandard">Sizmek Standard Creative</option> <option value="spongecellJs">Spongecell JS</option> <option value="smartJS">Smart Ad Server JS</option> <option value="trueEffectJs">True Effect Iframe/JS</option> <option value="trueEffectPix">True Effect Pixel/Click</option> <option value="veltiStandard">Velti Standard Tags</option> <option value="videoHubPix">VideoHub Pixel</option> <option value="vindicoIframe">Vindico Iframe</option> <option value="vindicoPix">Vindico Pixel/Click</option> <option value="vindicoVast">Vindico VAST/VPAID URL</option> <option value="visualIqPix">Visual IQ Pixel</option> <option value="vizuIframe">Vizu Iframe</option> <option value="whiteOpsJs">White Ops Javascript</option> <option value="whiteOpsPix">White Ops Pixel</option> <option value="x1Pix">X+1 Pixel</option> <option value="zedoIframe">Zedo Iframe</option> </select><label for="placementName' + rowNum + '">Placement Name</label> <input type="text" id="pixelNamepix0" class="pixelNameText form-control" type="text" style="width:100%"></input></div><div id="inputTextRow' + rowNum + '" class="col-md-3"> <label for="inputText' + rowNum + '">Tag to be Converted</label> <textarea type="text" id="inputText' + rowNum + '" onchange="getText(\'inputText' + rowNum + '\',\'tagType' + rowNum + '\',\'outputText' + rowNum + '\')" class="inputTagText form-control" wrap="soft" style="width:100%;height:100px"></textarea> </div><div id="outputTextRow' + rowNum + '" class="col-md-3"> <label for="outputText' + rowNum + '">Converted Tag</label> <textarea type="text" id="outputText' + rowNum + '" class="outputTagText form-control" style="width:100%;height:100px" readonly wrap="soft"></textarea> </div><div id="addButton" class="addRemoveButton col-md-1 pulldown"><br /><br /><input type="button" value="Remove" onclick="removeRow(' + rowNum + ');" id="removeButton' + rowNum + '" class="btn btn-danger"><br /><br /><div id="previewTagButton"> <a href="#" onclick="previewTag(\'inputText' + rowNum + '\')"><i class="fa fa-eye fa-lg"></i> Preview Tag</a> </div></div><div id="emptyColumn" class="col-md-2"></div><div class="col-md-2"></div></div>'
      $('#inputOutputContainer').append(tagRow);
  };
// removeRow
  function removeRow(rnum) {
      $('#inputOutput' + rnum).remove();
  };
// getPrintedText
  function getPrintedText(rowEl) {
      // placement names
      console.log('getPix');
      var placement = escapeIt(rowEl.find('.pixelNameText').val());
      var convertedText = escapeIt(rowEl.find('.outputTagText').val());
      return '<!-- ' + placement + '_Converted_Tag -->\r\n' + convertedText + '\r\n';
  };
// getPrintedCsv
  function getPrintedCsv(rowEl) {
      // placement names
      var placement = escapeIt(rowEl.find('.pixelNameText').val());
      var convertedText = escapeIt(rowEl.find('.outputTagText').val());
      convertedText = convertedText.replace(/"/g, '\"');
      convertedText = convertedText.replace(/'/g, '\'');
      //convertedText = convertedText.replace(/\n/g, "\\n");

      console.log(convertedText);
      return '' + placement + '_Converted_Tag,' + '\"' + convertedText + '\"';
  };
// downloadInnerHtml
  function downloadInnerHtml(campaignName, mimeType) {
      //grabs pixel rows by class, maps them and joins them into variable
      var finalText = $('.inputRow').map(function() {
          return getPrintedText($(this));
      }).get().join('\r\n\n');
      var fileName = campaignName + '_converted.txt';
      //creates href link to be downloaded by browser
      var link = document.createElement('a');
      mimeType = mimeType || 'text/plain';
      document.body.appendChild(link); //required in FF, optional for Chrome
      link.target = "_self"; //required in FF, optional for Chrome
      link.setAttribute('download', fileName);
      link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(finalText));
      link.click();
      console.log(finalText);
  };
// downloadInnerHtml
  function downloadInnerHtmlCsv(campaignName, mimeType) {
      //grabs pixel rows by class, maps them and joins them into variable
      var finalText = $('.inputRow').map(function() {
          return getPrintedCsv($(this));
      }).get().join('');
      var fileName = campaignName + '_converted.csv';
      //creates href link to be downloaded by browser
      var link = document.createElement('a');
      mimeType = mimeType || 'application/vnd.ms-excel';
      // Unescape HTML entities
      link.setAttribute('download', fileName);
      link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(finalText));
      link.click();
      console.log(finalText);
  };
// convertToTable
  function convertToTable() {
      //grab placements by class and store into an array
      var placementNames = $('.pixelNameText').map(function() {
          return $(this).val();
      }).get();
      var convertedTags = $('.outputTagText').map(function() {
          return $(this).val();
      }).get();
      $('#hiddenTable').append('<table id=\'tabledTags\'></table>');
      //store table into variable
      var table = $('#tabledTags');
      //adding row headers
      var thPlacement = $('<th/>').appendTo(table);
      thPlacement.html("Placement");
      var thTag = $('<th/>').appendTo(table);
      thTag.html("Converted Tag");
      //loops through the number of array objects, adds a row for the number of objects
      for (var i = 0; i < placementNames.length; i++) {
          var tr = $('<tr/>').appendTo(table);
          var placementNametd = $('<td/>');
          var convertedTagtd = $('<td/>');
          placementNametd.text(placementNames[i]);
          convertedTagtd.text(convertedTags[i]);
          tr.append(placementNametd[0]);
          tr.append(convertedTagtd[0]);
      }
  };
// ------------ END PIXELTRON.HTML -----------------------------
