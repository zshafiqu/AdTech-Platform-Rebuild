  function e(n) {
    return document.getElementById(n);
  };
//-----------------------------------------------
  function generateCode() {

  var randomQue = e("randomizeQuestions").value;
  var questionT = e("questionType").value;
  var surveyTyp = e("surveyType").value;
  var randomAns = e("randomizeAnswers").value;
  var	questionI = e("questionInput").value;
  var responseI = e("responseInput0").value;
  var questioT2 = e("questionType2").value;
  var surveyTy2 = e("surveyType2").value;
  var randomAn2 = e("randomizeAnswers2").value;
  var	questioI2 = e("questionInput2").value;
  var responsI2 = e("responseInputt0").value;
  var questioT3 = e("questionType3").value;
  var surveyTy3= e("surveyType3").value;
  var randomAn3 = e("randomizeAnswers3").value;
  var	questioI3 = e("questionInput3").value;
  var responsI3 = e("responseInputtt0").value;
  var questioT4 = e("questionType4").value;
  var surveyTy4 = e("surveyType4").value;
  var randomAn4 = e("randomizeAnswers4").value;
  var	questioI4 = e("questionInput4").value;
  var responsI4 = e("responseInputttt0").value;
  var questioT5 = e("questionType5").value;
  var surveyTy5 = e("surveyType5").value;
  var randomAn5 = e("randomizeAnswers5").value;
  var	questioI5 = e("questionInput5").value;
  var responsI5 = e("responseInputtttt0").value;
  var questioT6 = e("questionType6").value;
  var surveyTy6 = e("surveyType6").value;
  var randomAn6 = e("randomizeAnswers6").value;
  var	questioI6 = e("questionInput6").value;
  var responsI6 = e("responseInputttttt0").value;
  var questioT7 = e("questionType7").value;
  var surveyTy7 = e("surveyType7").value;
  var randomAn7 = e("randomizeAnswers7").value;
  var	questioI7 = e("questionInput7").value;
  var responsI7 = e("responseInputtttttt0").value;
  var questioT8 = e("questionType8").value;
  var surveyTy8 = e("surveyType8").value;
  var randomAn8 = e("randomizeAnswers8").value;
  var	questioI8 = e("questionInput8").value;
  var responsI8 = e("responseInputttttttt0").value;

  var htmlCode2 = "<body>\n"
  	htmlCode2 += "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n"
  	htmlCode2 += "  <script type=\"text/javascript\">\n"
  	htmlCode2 += "    function startRicherActivity() {\n"
  	htmlCode2 += "      slot = \"NOW_PLAYING\",\n"
  	htmlCode2 += "      assetType = \"DISPLAY_1X1\";\n"
  	htmlCode2 += "      rewriteURL();\n"
  	htmlCode2 += "      Pandora.startRicherActivity({\n"
  	htmlCode2 += "        pageURL: slingshot.pageURL, //L2 page URL\n"
  	htmlCode2 += "        startUrl: slingshot.startUrl,\n"
  	htmlCode2 += "        disableNativeTimer: true,\n"
  	htmlCode2 += "        offerName: 'uninterrupted1',\n"
  	htmlCode2 += "        rewardProperties: '{\"brandName\": \"'+slingshot.brandName+'\", \"lineId\": \"'+lineId+'\", \"creativeId\": \"'+creativeId+'\", \"offerButtonLabel\": \"'+slingshot.offerButtonLabel+'\", \"offerButtonUrl\": \"'+slingshot.offerButtonUrl+'\", \"leadInBannerUrl\": \"'+leadInBannerUrl+'\", \"leadInAudioUrl\": \"'+leadInAudioUrl+'\", \"vxOffer\": \"{{order_entry_id}}\", \"slot\": \"NOW_PLAYING\", \"assetType\": \"DISPLAY_1X1\"}',\n"
  	htmlCode2 += "        rewardThresholdSeconds: slingshot.rewardThresholdSeconds,\n"
  	htmlCode2 += "        engagementUrls: slingshot.engagementUrls,\n"
  	htmlCode2 += "        adServerCorrelationId: corrId.toString()\n"
  	htmlCode2 += "      });\n"
  	htmlCode2 += "      document.getElementById('click').style.pointerEvents = 'none';\n"
  	htmlCode2 += "    }\n"
  	htmlCode2 += "    function rewriteURL () {\n"
  	htmlCode2 += "      newL2URL = slingshot.pageURL.split(\"?\")[2];\n"
  	htmlCode2 += "      newL2URL = slingshot.pageURL.replace(newL2URL, '');\n"
  	htmlCode2 += "      getData();\n"
  	htmlCode2 += "    }\n"
  	htmlCode2 += "  <\/script>\n"
  	htmlCode2 += "  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://pandora.com/static/creatives/valueExchange/default-slingshot/vae_SL_RM_blue.css\">\n"
  	htmlCode2 += "  <div id=\"stage\">\n"
  	htmlCode2 += "    <div id=\"click\" onclick=\"startRicherActivity();\"></div>\n"
  	htmlCode2 += "    <div id=\"text\">Interact to start your hour of<br /><strong>uninterrupted listening</strong></div>\n"
  	htmlCode2 += "    <div id=\"hero\"></div>\n"
  	htmlCode2 += "    <div id=\"start\"><span><strong>START</strong> MY HOUR</span></div>\n"
  	htmlCode2 += "  </div>\n"
  	htmlCode2 += "\n"
  	htmlCode2 += "  <script type=\"text/javascript\">\n"
  	htmlCode2 += "    // UPDATE URL FOR L2 LANDING PAGE\n"
  	htmlCode2 += "    var L2 = \"https://pandora.com/static/creatives/valueExchange/surveys/SL_Survey_L2.html\",\n"
  	htmlCode2 += "        lineId = \"%eaid!\",\n"
  	htmlCode2 += "        creativeId = \"%ecid!\",\n"
  	htmlCode2 += "        corrId = \"%%CACHEBUSTER%%\",\n"
  	htmlCode2 += "        lValue = \"%%PATTERN:l%%\",\n"
  	htmlCode2 += "        slot = \"SLAP\",\n"
  	htmlCode2 += "        assetType = \"RICHER_ACTIVITY\",\n"
  	htmlCode2 += "        L2pageURL;\n"
  	htmlCode2 += "\n"
  	htmlCode2 += "    //vars defined by slingshot\n"
  	htmlCode2 += "    slingshot = {\n"
  	htmlCode2 += "      heroImage        : \"https://pandora.com/static/creatives/valueExchange/surveys/img/hero.png\", //URL of hero image\n"
  	htmlCode2 += "      startUrl         : \"https://adserver.pandora.com/haymaker/ext/start/externalId=%eaid!&creativeId=%ecid!&l=%%PATTERN:l%%&correlationId=%%CACHEBUSTER%%&assetType=DISPLAY_1X1&slot=NOW_PLAYING\",\n"
  	htmlCode2 += "      rewardThresholdSeconds: \"15\", //default is 15\n"
  	htmlCode2 += "      pageURL : L2pageURL, // URL for L2 page, with additional info appended\n"
  	htmlCode2 += "      industryCategory: \"{{industry_category}}\",\n"
  	htmlCode2 += "      engagementUrls: \"{{engagement_tracker_url}}\",\n"
  	htmlCode2 += "\n"
  	htmlCode2 += "      // vars to be added by trafficking - replace [PANDA]\n"
  	htmlCode2 += "      brandName        : \"[PANDA]\", //truncation logic done by slingshot\n"
  	htmlCode2 += "      offerButtonLabel : \"[PANDA]\",\n"
  	htmlCode2 += "      offerButtonUrl   : \"[PANDA]\"\n"
  	htmlCode2 += "    }\n"
  	htmlCode2 += "\n"
  	htmlCode2 += "    // trafficking - replace [PANDA] with vx offer\n"
  	htmlCode2 += "    order_entry_id = \"{{order_entry_id}}\";\n"
  	htmlCode2 += "    leadInBannerUrl = \"https://pubads.g.doubleclick.net/gampad/adx?iu=4204/%s/prod.nowplaying&t=vxo%3D{{order_entry_id}}%26vx%3D1%26daf%3D%%PATTERN:daf%%%26t4%3D%%PATTERN:t4%%&sz=320x50&l=%%PATTERN:l%%\";\n"
  	htmlCode2 += "    leadInAudioUrl = \"http://pandora.com/static/creatives/valueExchange/audio/SL_intro.mp3\";\n"
  	htmlCode2 += "    slapCorrId = Math.floor(Math.random() * 1000000000000); // 1 out of trillion uniqueness\n"
  	htmlCode2 += "    var os,\n"
  	htmlCode2 += "        version;\n"
  	htmlCode2 += "\n"
  	htmlCode2 += "    //sets hero image as background for the hero div\n"
  	htmlCode2 += "    document.getElementById('hero').style.backgroundImage = 'url('+slingshot.heroImage+')';\n"
  	htmlCode2 += "\n"
  	htmlCode2 += "    getData();\n"
  	htmlCode2 += "    function getData() {\n"
  	htmlCode2 += "      var surveyContent = [\n"
  	htmlCode2 += "      [ // first survey question\n"
    htmlCode2 += "        '"+questionT+"', // question type\n"
    htmlCode2 += "        '"+surveyTyp+"', // survey type: single, multiple, agree-disagree\n"
    htmlCode2 += "        '"+questionI+"', // question\n"
    htmlCode2 += "        '"+randomAns+"', // randomize answers? true or false\n"

    var counter = 0;

    for (counter = 0; counter <= rowNum; counter++) {
  	var whichResponse = "responseInput"
  	whichResponse += counter
  	if (e(whichResponse)) { responseI = e(whichResponse).value; }
  	if (e(whichResponse)) {
  		if (counter != rowNum) { htmlCode2 += "        '"+responseI+"', // response\n"  }
  		else { htmlCode2 += "        '"+responseI+"' // response AND last element, no comma needed\n" }
  		}
  	}

  	htmlCode2 += "       ]"
      if (questioI2 || questioI3 || questioI4 || questioI5 || questioI6 || questioI7 || questioI8) { htmlCode2 += "," }
  	htmlCode2 += "\n"
  	htmlCode2 += "\n"
  	if (questioI2) {
  	htmlCode2 += "      [ // second survey question\n"
      htmlCode2 += "        '"+questioT2+"', // question type\n"
      htmlCode2 += "        '"+surveyTy2+"', // survey type: single, multiple, agree-disagree\n"
      htmlCode2 += "        '"+questioI2+"', // question\n"
      htmlCode2 += "        '"+randomAn2+"', // randomize answers? true or false\n"
  	var counter = 0;
  	for (counter = 0; counter <= rowNum2; counter++) {
  	var whichResponse = "responseInputt"
  	whichResponse += counter
  	if (e(whichResponse)) { responsI2 = e(whichResponse).value; }
  	if (e(whichResponse)) {
  		if (counter != rowNum2) { htmlCode2 += "        '"+responsI2+"', // response\n" }
  		else { 	htmlCode2 += "        '"+responsI2+"' // response AND last element, no comma needed\n" }
  		}
  	}
      htmlCode2 += "       ]"
      if (questioI3 || questioI4 || questioI5 || questioI6 || questioI7 || questioI8) { htmlCode2 += "," }
  	htmlCode2 += "\n"
  	htmlCode2 += "\n"
  	}
  	if (questioI3) {
  	htmlCode2 += "      [ // third survey question\n"
      htmlCode2 += "        '"+questioT3+"', // question type\n"
      htmlCode2 += "        '"+surveyTy3+"', // survey type: single, multiple, agree-disagree\n"
      htmlCode2 += "        '"+questioI3+"', // question\n"
      htmlCode2 += "        '"+randomAn3+"', // randomize answers? true or false\n"
  	var counter = 0;
  	for (counter = 0; counter <= rowNum3; counter++) {
  	var whichResponse = "responseInputtt"
  	whichResponse += counter
  	if (e(whichResponse)) { responsI3 = e(whichResponse).value; }
  	if (e(whichResponse)) {
  		if (counter != rowNum3) { htmlCode2 += "        '"+responsI3+"', // response\n" }
  		else { htmlCode2 += "        '"+responsI3+"' // response AND last element, no comma needed\n" }
  		}
  	}
      htmlCode2 += "       ]"
      if (questioI4 || questioI5 || questioI6 || questioI7 || questioI8) { htmlCode2 += "," }
  	htmlCode2 += "\n"
  	htmlCode2 += "\n"
  	}
  	if (questioI4) {
  	htmlCode2 += "      [ // fourth survey question\n"
      htmlCode2 += "        '"+questioT4+"', // question type\n"
      htmlCode2 += "        '"+surveyTy4+"', // survey type: single, multiple, agree-disagree\n"
      htmlCode2 += "        '"+questioI4+"', // question\n"
      htmlCode2 += "        '"+randomAn4+"', // randomize answers? true or false\n"
  	var counter = 0;
  	for (counter = 0; counter <= rowNum4; counter++) {
  	var whichResponse = "responseInputttt"
  	whichResponse += counter
  	if (e(whichResponse)) { responsI4 = e(whichResponse).value; }
  	if (e(whichResponse)) {
  		if (counter != rowNum4) { htmlCode2 += "        '"+responsI4+"', // response\n" }
  		else { htmlCode2 += "        '"+responsI4+"' // response AND last element, no comma needed\n" }
  		}
  	}
  	htmlCode2 += "       ]"
      if (questioI5 || questioI6 || questioI7 || questioI8) { htmlCode2 += "," }
  	htmlCode2 += "\n"
  	htmlCode2 += "\n"
  	}
  	if (questioI5) {
  	htmlCode2 += "      [ // fifth survey question\n"
      htmlCode2 += "        '"+questioT5+"', // question type\n"
      htmlCode2 += "        '"+surveyTy5+"', // survey type: single, multiple, agree-disagree\n"
      htmlCode2 += "        '"+questioI5+"', // question\n"
      htmlCode2 += "        '"+randomAn5+"', // randomize answers? true or false\n"
  	var counter = 0;
  	for (counter = 0; counter <= rowNum5; counter++) {
  	var whichResponse = "responseInputtttt"
  	whichResponse += counter
  	if (e(whichResponse)) { responsI5 = e(whichResponse).value; }
  	if (e(whichResponse)) {
  		if (counter != rowNum5) { htmlCode2 += "        '"+responsI5+"', // response\n" }
  		else { htmlCode2 += "        '"+responsI5+"' // response AND last element, no comma needed\n" }
  		}
  	}
  	htmlCode2 += "       ]"
      if (questioI6 || questioI7 || questioI8) { htmlCode2 += "," }
  	htmlCode2 += "\n"
  	htmlCode2 += "\n"
  	}
  	if (questioI6) {
  	htmlCode2 += "      [ // sixth survey question\n"
      htmlCode2 += "        '"+questioT6+"', // question type\n"
      htmlCode2 += "        '"+surveyTy6+"', // survey type: single, multiple, agree-disagree\n"
      htmlCode2 += "        '"+questioI6+"', // question\n"
      htmlCode2 += "        '"+randomAn6+"', // randomize answers? true or false\n"
  	var counter = 0;
  	for (counter = 0; counter <= rowNum6; counter++) {
  	var whichResponse = "responseInputttttt"
  	whichResponse += counter
  	if (e(whichResponse)) { responsI6 = e(whichResponse).value; }
  	if (e(whichResponse)) {
  		if (counter != rowNum6) { htmlCode2 += "        '"+responsI6+"', // response\n" }
  		else { htmlCode2 += "        '"+responsI6+"' // response AND last element, no comma needed\n" }
  		}
  	}
  	htmlCode2 += "       ]"
  	if (questioI7 || questioI8) { htmlCode2 += "," }
  	htmlCode2 += "\n"
  	htmlCode2 += "\n"
  	}
  	if (questioI7) {
  	htmlCode2 += "      [ // seventh survey question\n"
      htmlCode2 += "        '"+questioT7+"', // question type\n"
      htmlCode2 += "        '"+surveyTy7+"', // survey type: single, multiple, agree-disagree\n"
      htmlCode2 += "        '"+questioI7+"', // question\n"
      htmlCode2 += "        '"+randomAn7+"', // randomize answers? true or false\n"
  	var counter = 0;
  	for (counter = 0; counter <= rowNum7; counter++) {
  	var whichResponse = "responseInputtttttt"
  	whichResponse += counter
  	if (e(whichResponse)) { responsI7 = e(whichResponse).value; }
  	if (e(whichResponse)) {
  		if (counter != rowNum7) { htmlCode2 += "        '"+responsI7+"', // response\n" }
  		else { htmlCode2 += "        '"+responsI7+"' // response AND last element, no comma needed\n" }
  		}
  	}
  	htmlCode2 += "       ]"
      if (questioI8) { htmlCode2 += "," }
  	htmlCode2 += "\n"
  	htmlCode2 += "\n"
  	}
  	if (questioI8) {
  	htmlCode2 += "      [ // eighth survey question\n"
      htmlCode2 += "        '"+questioT8+"', // question type\n"
      htmlCode2 += "        '"+surveyTy8+"', // survey type: single, multiple, agree-disagree\n"
      htmlCode2 += "        '"+questioI8+"', // question\n"
      htmlCode2 += "        '"+randomAn8+"', // randomize answers? true or false\n"
  	var counter = 0;
  	for (counter = 0; counter <= rowNum8; counter++) {
  	var whichResponse = "responseInputttttttt"
  	whichResponse += counter
  	if (e(whichResponse)) { responsI8 = e(whichResponse).value; }
  	if (e(whichResponse)) {
  		if (counter != rowNum8) { htmlCode2 += "        '"+responsI8+"', // response\n" }
  		else { htmlCode2 += "        '"+responsI8+"' // response AND last element, no comma needed\n" }
  		}
  	}
  	htmlCode2 += "       ]\n"
  	htmlCode2 += "\n"
  	}
  	htmlCode2 += "    ];\n"
  	if (randomQue == "true") {
  	    htmlCode2 += "    var randomQst = true; // randomize questions - set to false to turn off\n"
  	} else {
  	    htmlCode2 += "    var randomQst = false; // randomize questions - set to false to turn off\n"
  	}
  	htmlCode2 += "      var hive = [\n"
      htmlCode2 += "          slingshot.brandName,\n"
  	htmlCode2 += "          lineId,\n"
  	htmlCode2 += "          creativeId,\n"
  	htmlCode2 += "          slingshot.offerButtonLabel,\n"
  	htmlCode2 += "          slingshot.offerButtonUrl,\n"
  	htmlCode2 += "          leadInBannerUrl,\n"
  	htmlCode2 += "          leadInAudioUrl,\n"
  	htmlCode2 += "          order_entry_id,\n"
  	htmlCode2 += "          corrId,\n"
  	htmlCode2 += "          slot,\n"
  	htmlCode2 += "          assetType,\n"
  	htmlCode2 += "          lValue,\n"
  	htmlCode2 += "          os,\n"
  	htmlCode2 += "          version\n"
  	htmlCode2 += "      ];\n"
  	htmlCode2 += "      surveyContent = JSON.stringify(surveyContent);\n"
  	htmlCode2 += "      surveyContent = btoa(surveyContent);\n"
  	htmlCode2 += "      randomQst = JSON.stringify(randomQst);\n"
  	htmlCode2 += "      randomQst = btoa(randomQst);\n"
  	htmlCode2 += "      hive = JSON.stringify(hive);\n"
  	htmlCode2 += "      hive = btoa(hive);\n"
  	htmlCode2 += "      L2pageURL = L2+\"?a=\"+surveyContent+\"?b=\"+randomQst+\"?c=\"+hive;\n"
  	htmlCode2 += "      console.log(L2pageURL);\n"
  	htmlCode2 += "      slingshot.pageURL = L2pageURL;\n"
  	htmlCode2 += "    }\n"
  	htmlCode2 += "\n"
  	htmlCode2 += "    richerActivityServable = {\n"
  	htmlCode2 += "      data : [{\n"
  	htmlCode2 += "              id : %eaid!,\n"
  	htmlCode2 += "              sourceId : 'DFP',\n"
  	htmlCode2 += "              creativeId : '%ecid!',\n"
  	htmlCode2 += "              siteId : '%esid!',\n"
  	htmlCode2 += "              placementId : '%epid!',\n"
  	htmlCode2 += "              advertiserId : '%eadv!',\n"
  	htmlCode2 += "              campaignId : '%ebuy!',\n"
  	htmlCode2 += "              assetType : 'RICHER_ACTIVITY',\n"
  	htmlCode2 += "              slots : [\n"
  	htmlCode2 += "                       'SLAP'\n"
  	htmlCode2 += "                       ],\n"
  	htmlCode2 += "              trackingEvents : [ {\n"
  	htmlCode2 += "                                urls : [''],\n"
  	htmlCode2 += "                                type : 'CLICK'\n"
  	htmlCode2 += "                                }, {\n"
  	htmlCode2 += "                                urls : ['http://adserver.pandora.com/haymaker/ext/error/externalId='+lineId+'&creativeId='+creativeId+'&l='+lValue+'&correlationId='+slapCorrId+'&slot=SLAP&assetType=RICHER_ACTIVITY'],\n"
  	htmlCode2 += "                                type: 'ERROR'\n"
  	htmlCode2 += "                                }, {\n"
  	htmlCode2 += "                                urls : ['http://adserver.pandora.com/haymaker/ext/creative_view/externalId='+lineId+'&creativeId='+creativeId+'&l='+lValue+'&correlationId='+slapCorrId+'&slot=SLAP&assetType=RICHER_ACTIVITY'],\n"
  	htmlCode2 += "                                type : 'CREATIVE_VIEW'\n"
  	htmlCode2 += "                                }, {\n"
  	htmlCode2 += "                                urls : ['http://adserver.pandora.com/haymaker/ext/click/externalId='+lineId+'&creativeId='+creativeId+'&l='+lValue+'&correlationId='+slapCorrId+'&slot=SLAP&assetType=RICHER_ACTIVITY','http://adserver.pandora.com/haymaker/ext/accept_invitation/externalId='+lineId+'&creativeId='+creativeId+'&l='+lValue+'&correlationId='+slapCorrId+'&slot=SLAP&assetType=RICHER_ACTIVITY'],\n"
  	htmlCode2 += "                                type : 'ACCEPT_INVITATION'\n"
  	htmlCode2 += "                                }, {\n"
  	htmlCode2 += "                                urls : [''],\n"
  	htmlCode2 += "                                type : 'IMPRESSION'\n"
  	htmlCode2 += "                                }, {\n"
  	htmlCode2 += "                                urls : [slingshot.engagementUrls],\n"
  	htmlCode2 += "                                type : 'ENGAGEMENT'\n"
  	htmlCode2 += "                                }, {\n"
  	htmlCode2 += "                                urls : ['http://adserver.pandora.com/haymaker/ext/close/externalId='+lineId+'&creativeId='+creativeId+'&l='+lValue+'&correlationId='+slapCorrId+'&slot=SLAP&assetType=RICHER_ACTIVITY'],\n"
  	htmlCode2 += "                                type : 'CLOSE'\n"
  	htmlCode2 += "                                }\n"
  	htmlCode2 += "                                ],\n"
  	htmlCode2 += "              payload : '',\n"
  	htmlCode2 += "              contentType : 'text/html',\n"
  	htmlCode2 += "              pageUrl : slingshot.pageURL,\n"
  	htmlCode2 += "              brandName : slingshot.brandName,\n"
  	htmlCode2 += "              heroImageUrl : slingshot.heroImage,\n"
  	htmlCode2 += "              disableNativeTimer : true,\n"
  	htmlCode2 += "              industryCategory : slingshot.industryCategory,\n"
  	htmlCode2 += "              offerName : 'uninterrupted1',\n"
  	htmlCode2 += "              offerDisplayName: '1 HOUR REWARD',\n"
  	htmlCode2 += "              rewardThresholdSeconds : slingshot.rewardThresholdSeconds,\n"
  	htmlCode2 += "              adServerCorrelationId : slapCorrId.toString(),\n"
  	htmlCode2 += "              rewardProperties : '{\"brandName\": \"'+slingshot.brandName+'\", \"lineId\": \"'+lineId+'\", \"creativeId\": \"'+creativeId+'\", \"offerButtonLabel\": \"'+slingshot.offerButtonLabel+'\", \"offerButtonUrl\": \"'+slingshot.offerButtonUrl+'\", \"leadInBannerUrl\": \"'+leadInBannerUrl+'\", \"leadInAudioUrl\": \"'+leadInAudioUrl+'\", \"vxOffer\":\"{{order_entry_id}}\", \"slot\":\"SLAP\", \"assetType\":\"RICHER_ACTIVITY\"}',\n"
  	htmlCode2 += "              ttl : 14400\n"
  	htmlCode2 += "              }\n"
  	htmlCode2 += "              ],\n"
  	htmlCode2 += "              meta : {\n"
  	htmlCode2 += "                  length : 1\n"
  	htmlCode2 += "              }\n"
  	htmlCode2 += "    }\n"
  	htmlCode2 += "\n"
  	htmlCode2 += "    servableContext = { servable : richerActivityServable };\n"
  	htmlCode2 += "\n"
  	htmlCode2 += "    if (typeof(Pandora) != 'object') {\n"
  	htmlCode2 += "      Pandora = {};\n"
  	htmlCode2 += "    };\n"
  	htmlCode2 += "\n"
  	htmlCode2 += "    var onPandoraReady = Pandora.onPandoraReady;\n"
  	htmlCode2 += "    Pandora.onPandoraReady = function() {\n"
  	htmlCode2 += "      if (typeof(onPandoraReady) == 'function') {\n"
  	htmlCode2 += "        onPandoraReady();\n"
  	htmlCode2 += "      }\n"
  	htmlCode2 += "      os = Pandora.getProperty('os');\n"
  	htmlCode2 += "      version = Pandora.getProperty('version');\n"
  	htmlCode2 += "      Pandora.sendEvent({context: JSON.stringify(servableContext)});\n"
  	htmlCode2 += "      Pandora.sendEvent({context: '{ \"adIdentifiers\" : { \"creativeId\": \"'+creativeId+'\", \"lineId\": \"'+lineId+'\" }}'});\n"
  	htmlCode2 += "      Pandora.sendEvent({context: '{\"adMetaData\":{\"type\":\"uninterruptedListening\",\"headerText\":\"Uninterrupted Listening\",\"brandName\":\"'+slingshot.brandName+'\",\"heroImage\":\"'+slingshot.heroImage+'\"}}'});\n"
  	htmlCode2 += "    }\n"
  	htmlCode2 += "  <\/script>\n"
  	htmlCode2 += "\n"
  	htmlCode2 += "</body>\n"
      e("surveyCode").value = htmlCode2;
  }
  var rowNum = 0;
  var rowNum2 = 0;
  var rowNum3 = 0;
  var rowNum4 = 0;
  var rowNum5 = 0;
  var rowNum6 = 0;
  var rowNum7 = 0;
  var rowNum8 = 0;
  //removes added rows
  function removeRow(rnum) {
      $('#divRow' + rnum).remove();
  }
  //adds rows
  function addAnswer() {
          //increases row number
          rowNum++;
           //defines a new row's HTML
          var row = ' <div id="divRow' + rowNum + '" class="rowDisplay row"><div id="displayName" class="displayNames col-md-2"><b>Answer: </b><textarea id="responseInput'+rowNum+'" style="width:800px;height:25px"></textarea><input type="button" value="Remove" onclick="removeRow(' + rowNum + ');" id="removeButton' + rowNum + '" class="btn btn-default"></div><div id="emptyColumn" class="col-md-2"></div>';
          //appends the new row to the div
  		$('#itemRows').append(row);

  }
  //removes added rows
  function removeRow2(rnum) {
      $('#divRow2' + rnum).remove();
  }
  //adds rows
  function addAnswer2() {
          //increases row number
          rowNum2++;
           //defines a new row's HTML
          var row2 = ' <div id="divRow2' + rowNum2 + '" class="rowDisplay row"><div id="displayName" class="displayNames col-md-2"><b>Answer: </b><textarea id="responseInputt'+rowNum2+'" style="width:800px;height:25px"></textarea><input type="button" value="Remove" onclick="removeRow2(' + rowNum2 + ');" id="removeButton' + rowNum2 + '" class="btn btn-default"></div><div id="emptyColumn" class="col-md-2"></div>';
          //appends the new row to the div
  		$('#itemRows2').append(row2);

  }
  //removes added rows
  function removeRow3(rnum) {
      $('#divRow3' + rnum).remove();
  }
  //adds rows
  function addAnswer3() {
          //increases row number
          rowNum3++;
           //defines a new row's HTML
          var row3 = ' <div id="divRow3' + rowNum3 + '" class="rowDisplay row"><div id="displayName" class="displayNames col-md-2"><b>Answer: </b><textarea id="responseInputtt'+rowNum3+'" style="width:800px;height:25px"></textarea><input type="button" value="Remove" onclick="removeRow3(' + rowNum3 + ');" id="removeButton' + rowNum3 + '" class="btn btn-default"></div><div id="emptyColumn" class="col-md-2"></div>';
          //appends the new row to the div
  		$('#itemRows3').append(row3);

  }
  //removes added rows
  function removeRow4(rnum) {
      $('#divRow4' + rnum).remove();
  }
  //adds rows
  function addAnswer4() {
          //increases row number
          rowNum4++;
           //defines a new row's HTML
          var row4 = ' <div id="divRow4' + rowNum4 + '" class="rowDisplay row"><div id="displayName" class="displayNames col-md-2"><b>Answer: </b><textarea id="responseInputttt'+rowNum4+'" style="width:800px;height:25px"></textarea><input type="button" value="Remove" onclick="removeRow4(' + rowNum4 + ');" id="removeButton' + rowNum4 + '" class="btn btn-default"></div><div id="emptyColumn" class="col-md-2"></div>';
          //appends the new row to the div
  		$('#itemRows4').append(row4);

  }
  //removes added rows
  function removeRow5(rnum) {
      $('#divRow5' + rnum).remove();
  }
  //adds rows
  function addAnswer5() {
          //increases row number
          rowNum5++;
           //defines a new row's HTML
          var row5 = ' <div id="divRow5' + rowNum5 + '" class="rowDisplay row"><div id="displayName" class="displayNames col-md-2"><b>Answer: </b><textarea id="responseInputtttt'+rowNum5+'" style="width:800px;height:25px"></textarea><input type="button" value="Remove" onclick="removeRow5(' + rowNum5 + ');" id="removeButton' + rowNum5 + '" class="btn btn-default"></div><div id="emptyColumn" class="col-md-2"></div>';
          //appends the new row to the div
  		$('#itemRows5').append(row5);

  }
  //removes added rows
  function removeRow6(rnum) {
      $('#divRow6' + rnum).remove();
  }
  //adds rows
  function addAnswer6() {
          //increases row number
          rowNum6++;
           //defines a new row's HTML
          var row6 = ' <div id="divRow6' + rowNum6 + '" class="rowDisplay row"><div id="displayName" class="displayNames col-md-2"><b>Answer: </b><textarea id="responseInputttttt'+rowNum6+'" style="width:800px;height:25px"></textarea><input type="button" value="Remove" onclick="removeRow6(' + rowNum6 + ');" id="removeButton' + rowNum6 + '" class="btn btn-default"></div><div id="emptyColumn" class="col-md-2"></div>';
          //appends the new row to the div
  		$('#itemRows6').append(row6);

  }
  //removes added rows
  function removeRow7(rnum) {
      $('#divRow7' + rnum).remove();
  }
  //adds rows
  function addAnswer7() {
          //increases row number
          rowNum7++;
           //defines a new row's HTML
          var row7 = ' <div id="divRow7' + rowNum7 + '" class="rowDisplay row"><div id="displayName" class="displayNames col-md-2"><b>Answer: </b><textarea id="responseInputtttttt'+rowNum7+'" style="width:800px;height:25px"></textarea><input type="button" value="Remove" onclick="removeRow7(' + rowNum7 + ');" id="removeButton' + rowNum7 + '" class="btn btn-default"></div><div id="emptyColumn" class="col-md-2"></div>';
          //appends the new row to the div
  		$('#itemRows7').append(row7);

  }
  //removes added rows
  function removeRow8(rnum) {
      $('#divRow8' + rnum).remove();
  }
  //adds rows
  function addAnswer8() {
          //increases row number
          rowNum8++;
           //defines a new row's HTML
          var row8 = ' <div id="divRow8' + rowNum8 + '" class="rowDisplay row"><div id="displayName" class="displayNames col-md-2"><b>Answer: </b><textarea id="responseInputttttttt'+rowNum8+'" style="width:800px;height:25px"></textarea><input type="button" value="Remove" onclick="removeRow8(' + rowNum8 + ');" id="removeButton' + rowNum8 + '" class="btn btn-default"></div><div id="emptyColumn" class="col-md-2"></div>';
          //appends the new row to the div
  		$('#itemRows8').append(row8);

  }
