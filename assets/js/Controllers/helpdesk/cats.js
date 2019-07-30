//-------------------------------------------------------------------------------------------------
  // document.getElementById shortcut
  function e(n) {
      return document.getElementById(n);
  };
//-------------------------------------------------------------------------------------------------
  //preventing back button stuff
  window.onbeforeunload = function() {
      if ($('#theInput').is(":visible")) {
          return "Any ticket information you have filled out will be lost.";
          console.log("firedIf");
      } else {
          console.log("firedElse");
      }
  };
//-------------------------------------------------------------------------------------------------
  // Populate the select options on page load
  function populateCategory(selectID, selectOptions) {
      var selectElement = e(selectID); // select box
      for (id in selectOptions) { //looping through elements in JSON object and creating the options in select box
          var option = document.createElement("option"); // creates option
          var optionData = selectOptions[id]; // grabs embedded object by ID
          option.text = optionData["label"]; // sets the text
          option.setAttribute("value", id);
          option.setAttribute("id", id);
          option.setAttribute("data-jiraLabel", optionData["jiraLabel"]); // PARENT AdTech JIRA label
          option.setAttribute("data-jiraSubLabel", optionData["jiraSubLabel"]); // SUB AdTech JIRA label
          option.setAttribute("data-sbLabelJira", optionData["sbLabelJira"]);
          option.setAttribute("data-sbIssueCat", optionData["sbIssueCat"]);
          option.setAttribute("data-insightsJiralabel", optionData["insightsJiralabel"]);
          option.setAttribute("data-insightsSubJiralabel", optionData["insightsSubJiralabel"]);
          option.setAttribute("data-affectedArea", optionData["affectedArea"]);
          option.setAttribute("data-formInputs", optionData["formInputs"]);
          if (optionData["parent"] !== null) { // if there is a parent, set class to parent
              option.setAttribute("class", optionData["parent"]);
          }
          selectElement.add(option);
      }
  };
//-------------------------------------------------------------------------------------------------
  // Select a new option in the selectador
  function selectOption(selectID, optionVal) {
      var select = $('#' + selectID);
      select.val(optionVal);
      // Need to trigger a change event for the chained plugin
      select.change();
  };
//-------------------------------------------------------------------------------------------------
  //hides and unhides the sub menus on selectador
  function showSub(selectID, colNum) {
      e(colNum).style.display = "block";
      e(selectID).style.visibility = "visible";
      e('theInput').style.display = "none";
  };
//-------------------------------------------------------------------------------------------------
  function showJira() {
      e('jiraButtonContainer').style.display = "block";
      e('jiraButton').style.display = "block";

  };
//-------------------------------------------------------------------------------------------------
  function showWiki(issueType, subIssue) {
      showJira();
      e('relatedLinks').style.display = "block";
      var selectedSubIssue = subIssue[e('subIssue').value];

      console.log(issueType[selectedSubIssue['parent']])
      var selectedIssueType = issueType[selectedSubIssue['parent']];


      var topLinkLabel = selectedSubIssue['wikiLabel'];
      var topLinkUrl = selectedSubIssue['topWikiLink'];
      var relatedLinks = selectedIssueType['wikiLinks'];

      // Populate Top Link of available
      if (typeof topLinkLabel !== "undefined" && typeof topLinkUrl !== "undefined") {
          populateTopLink(topLinkLabel, topLinkUrl);
          e('moreLinks').innerHTML = "<h4>Additional Links</h4>";

      } else {
          e('topLinkContainer').style.display = "none";
          e('moreLinks').innerHTML = "<h3>Links</h3>";
      }

      // Populate related links if available
      if (typeof relatedLinks !== "undefined") {
          populateRelatedLinks(relatedLinks);
      } else {
          e('additionalLinksContainer').style.display = "none";
      }
  };
//-------------------------------------------------------------------------------------------------
  function populateTopLink(topLinkLabel, topLinkUrl) {
      var topLink = e('topLink');
      topLink.href = topLinkUrl;
      topLink.text = topLinkLabel;
      e('topLinkContainer').style.display = "block";
  };
//-------------------------------------------------------------------------------------------------
  function populateRelatedLinks(relatedLinks) {
      var ul = $('#additionalLinks');
      ul.empty();

      for (var i = 0; i < relatedLinks.length; i++) {
          var link = relatedLinks[i];
          $('<li><a href="' + link['link'] + '" target="_blank">' + link['label'] + '</a></li>').appendTo(ul);
      }
      e('additionalLinksContainer').style.display = "block";
  };
  //hides/unhides sections of the form based on which issue type is selected
//-------------------------------------------------------------------------------------------------
  // Populate the Autocomplete for the search bar
  function populateAutocomplete(teamType, issueType, subIssue) {
      var searchElement = $('#searchBar');
      var counter = 0;
      // Build the array for populating the autocomplete
      var searchSet = [];
      for (key in subIssue) {
          if (subIssue.hasOwnProperty(key)) {
            var obj = {}
            var si = subIssue[key];
            var it = issueType[si['parent']];
            var tt = teamType[it['parent']];
            // console.log(counter);
            // console.log(subIssue[key]);
            // console.log(issueType[si['parent']]);
            // console.log(teamType[it['parent']]);
            // counter++;
            var label = tt['label'] + ' > ' + it['label'] + ' > ' + si['label'];
            obj['label'] = label;
            obj['teamType'] = it['parent'];
            obj['issueType'] = si['parent'];
            obj['subIssue'] = key;
            searchSet.push(obj);
          }
      }

      // Set the autocomplete properties
      searchElement.autocomplete({
          source: searchSet,
          autoFocus: true,
          // Fill in the select box options when an autocomplete option is selected
          select: function(event, ui) {
              hideAllStuff();
              var selected = ui.item;
              selectOption('teamType', selected.teamType);
              showSub('issueType', 'col2');
              selectOption('issueType', selected.issueType);
              showSub('subIssue', 'col3');
              selectOption('subIssue', selected.subIssue);
              showWiki();
          }
      }).data('ui-autocomplete')._renderItem = function(ul, item) {
          // This highlights the matching portions of text in the dropdown items
          // Based on answers to this SO question: http://stackoverflow.com/questions/3344804/how-to-make-matched-text-bold-with-jquery-ui-autocomplete
          var regexp = new RegExp('(' + this.term + ')', 'gi');
          var label = item.label.replace(regexp, '<b>$1</b>');

          return $('<li><a href="#">' + label + '</a></li>').appendTo(ul);
      }
  };
//-------------------------------------------------------------------------------------------------
  function showForm() {
      e('userInput').reset();
      e('jiraButton').style.display = "none";
      e('summaryForm').style.display = "block";
      var issueTypeSelected = e("subIssue").value;
      var formInputs = e(issueTypeSelected).getAttribute("data-formInputs").split(",");
      for (var i = 0; i < formInputs.length; i++) {
          var singleForm = formInputs[i];
          e(singleForm).style.display = "block"
      }
  };
//-------------------------------------------------------------------------------------------------
  //hide forms when a user re-selects a different issue type
  function hideAllStuff() {
      e('description').style.display = "block";
      e('theInput').style.display = "none";
      e('relatedLinks').style.display = "none";
  };
//-------------------------------------------------------------------------------------------------
  function hideStuff() {
      var jiraForm = e('jiraForm');
      var children = jiraForm.childNodes;
      for (var c = 0; c < children.length; c++) {
          if (children[c].style) {
              children[c].style.display = 'none';
          } else {}
      }
  };
//-------------------------------------------------------------------------------------------------
  function addJiraWatcher(element) {
      var pandoraDom = /@.*/;
      var ldap = e(element).value;
      ldap = ldap.replace(pandoraDom, '');
      managerEmailAdd.value = "[~" + ldap + "]";
  };
//-------------------------------------------------------------------------------------------------
  function addWatcherList(list) {
      var pandoraDom = /@.*|\[~|]/g;
      var emailList = e(list).value.split(',');
      var ldapList = [];
      for (var c = 0; c < emailList.length; c++) {
          var ldap = "[~" + emailList[c].replace(pandoraDom, '').trim() + "]";
          ldapList.push(ldap);
      }
      e(list).value = ldapList.join(',')
  };
//-------------------------------------------------------------------------------------------------
  //shows manager email for rush requests
  function managerEmailReq() {
      if (e('rushRequest').checked == true) {
          e('managerEmailContainer').style.display = "block";
          e('priorityValue').value = '1';
      } else {
          e('managerEmailContainer').style.display = "none";
      }
  };
//-------------------------------------------------------------------------------------------------
  function showWatcherContainer() {
      if (e('addWatcher').checked == true) {
          e('watcherContainer').style.display = "block";
      } else {
          e('watcherContainer').style.display = "none";
      }
  };
//-------------------------------------------------------------------------------------------------
  //resets whatever
  function resetStuff(name) {
      e('name').reset();
  };
//-------------------------------------------------------------------------------------------------
  //clears default text
  function clearDefault(name) {
      e('name').value = "";
      alert('cleard');
  };
//-------------------------------------------------------------------------------------------------
  //verifies emails is a valid pandora email
  function verifyEmail() {
      var validString = "@pandora.com";
      if (e('emailAdd').value.indexOf(validString) === 0) {
          return false;
      } else {
          return true;
      }
  };
//-------------------------------------------------------------------------------------------------
  //verifies all required fields are filled out
  function formMin() {
      var teamSelected = e('teamType').value
      var caminIssueType = e('issueType').value
      console.log(teamSelected);
      $.getScript("js/issue_collector.js");
      if (e('summary').value !== "" && e('description').value !== "" && e('emailAdd').value !== "" && e('issueType').value !== "slingshotFeatureRequest") {
          console.log(verifyEmail);
          switch (teamSelected) {
              case "slingShot":
                  e('submits').innerHTML = '<input type=\"button\" id=\"slingJira\" value=\"Submit\" class=\"submit_button\"></input>';
                  break;
              case "featureRequest":
                  e('submits').innerHTML = '<input type=\"button\" id=\"jiraSubmitButton\" value=\"Submit\" class=\"submit_button\"></input>';
                  break;
              case "adTech":
  			case "ariaDashboard":
                  e('submits').innerHTML = '<input type=\"button\" id=\"jira\" value=\"Submit\" class=\"submit_button\"></input>';
                  break;
  			case "audienceExplorer":
                  e('submits').innerHTML = '<input type=\"button\" id=\"jira\" value=\"Submit\" class=\"submit_button\"></input>';
                  break;
              case "madTech":
                  e('submits').innerHTML = '<input type=\"button\" id=\"jira\" value=\"Submit\" class=\"submit_button\"></input>';
                  break;
              case "campaignInsights":
                  if (caminIssueType === "insightsSubmitDataIssue") {
                      e('submits').innerHTML = '<input type=\"button\" id=\"caminDataJira\" value=\"Submit\" class=\"submit_button\"></input>';
                  } else if (caminIssueType === "insightsDashboardAccess") {
                      e('submits').innerHTML = '<input type=\"button\" id=\"caminBugJira\" value=\"Submit\" class=\"submit_button\"></input>';
                  } else if (caminIssueType === "insightsFeatureRequest") {
                      e('submits').innerHTML = '<input type=\"button\" id=\"caminFeatureJira\" value=\"Submit\" class=\"submit_button\"></input>';
                  } else {
                      console.log("no issue type detected");
                  }
                  break;
              default:
                  alert("default");
                  break;
          }
      } else if (e('issueType').value == "slingshotFeatureRequest" && e('summary').value !== "" && e('emailAdd').value !== "") {
          e('submits').innerHTML = '<input type=\"button\" id=\"featureJira\" value=\"Submit\" class=\"submit_button\"></input>';
      } else {
      // nothing
      }
  };
  //-------------------------------------------------------------------------------------------------
