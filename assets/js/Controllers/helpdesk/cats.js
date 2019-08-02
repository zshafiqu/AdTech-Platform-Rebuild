//-------------------------------------------------------------------------------------------------
  // Shortcut to get tag ID's quickly
  function e(n) {
      return document.getElementById(n);
  };
//-------------------------------------------------------------------------------------------------
  // Method used to prevent accidently navigating away from the page & losing unsaved info
  window.onbeforeunload = function() {
      if ($('#theInput').is(":visible")) {
          return "Any ticket information you have filled out will be lost.";
          console.log("firedIf");
      } else {
          console.log("firedElse");
      }
  };
//-------------------------------------------------------------------------------------------------
  // Method ppulates the multiple selector on the page by parsing the structured data file
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
  // Method for selecting an option within the menu, used for filling in autocomplete
  function selectOption(selectID, optionVal) {
      var select = $('#' + selectID);
      select.val(optionVal);
      // Need to trigger a change event for the chained plugin
      select.change();
  };
//-------------------------------------------------------------------------------------------------
  // Method to show/hide submenu
  function showSub(selectID, colNum) {
      e(colNum).style.display = "block";
      e(selectID).style.visibility = "visible";
      e('theInput').style.display = "none";
  };
//-------------------------------------------------------------------------------------------------
  // Method to show FILE A JIRA button
  function showJira() {
      e('jiraButtonContainer').style.display = "block";
      e('jiraButton').style.display = "block";

  };
//-------------------------------------------------------------------------------------------------
  // Method to retrieve Wiki info and show it in its container
  function showWiki(issueType, subIssue) {
    showJira();
    e('relatedLinks').style.display = "block";
    var selectedSubIssue = subIssue[e('subIssue').value];
    var selectedIssueType = issueType[selectedSubIssue['parent']];

    var topLinkLabel = selectedSubIssue['wikiLabel'];
    var topLinkUrl = selectedSubIssue['topWikiLink'];
    var relatedLinks = selectedIssueType['wikiLinks'];

    // Checks for available top link
    if (typeof topLinkLabel !== "undefined" && typeof topLinkUrl !== "undefined") {
        populateTopLink(topLinkLabel, topLinkUrl);
        e('moreLinks').innerHTML = '<p id="moreLinks" style="margin-bottom: 10px; font-size:1.3em"><b>Additional Links:</b></p>';

    } else {
        e('topLinkContainer').style.display = "none";
        e('moreLinks').innerHTML = '<p id="moreLinks" style="margin-bottom: 10px; font-size:1.3em"><b>Links:</b></p>';
    }

    // Checks for available related links
    if (typeof relatedLinks !== "undefined") {
        populateRelatedLinks(relatedLinks);
    } else {
        e('moreLinks').innerHTML = '<p id="moreLinks" style="margin-bottom: 10px; font-size:1.3em"><b>No Links Available</b></p>';
        e('additionalLinksContainer').style.display = "block";
    }
    $('html, body').animate({ scrollTop: $("#jiraButtonContainer").offset().top }, 1400);
  };
//-------------------------------------------------------------------------------------------------
  // Method used to populate top link container
  function populateTopLink(topLinkLabel, topLinkUrl) {
      var topLink = e('topLink');
      topLink.href = topLinkUrl;
      topLink.text = topLinkLabel;
      e('topLinkContainer').style.display = "block";
  };
//-------------------------------------------------------------------------------------------------
  // Method used to populate related link container
  function populateRelatedLinks(relatedLinks) {
      var ul = $('#additionalLinks');
      ul.empty();

      for (var i = 0; i < relatedLinks.length; i++) {
          var link = relatedLinks[i];
          $('<li><a href="' + link['link'] + '" target="_blank">' + link['label'] + '</a></li>').appendTo(ul);
      }
      e('additionalLinksContainer').style.display = "block";
  };
//-------------------------------------------------------------------------------------------------
  // Method for search bar functions. Creates set from structured data, and on hitting enter fills in form
  function populateAutocomplete(teamType, issueType, subIssue) {
      var searchElement = $('#searchBar');
      var counter = 0;
      // Important to make sure all values in Data.js are consistent
      // This will break if something references an undefined value
      // Use debug info to check your expected output vs console output
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
              // Wiki must reflect inputted values
              showWiki(issueType, subIssue);

          }
      // Close the search bar upon hitting enter.. 'keycode 13'
      }).keyup(function (e) {
        if(e.which === 13) {
          searchElement.autocomplete('close');
          // add smooth scroll for when you hit enter
          $('html, body').animate({ scrollTop: $("#jiraButtonContainer").offset().top }, 1000);
          return false;
        }
      // Close the search bar when mousing on the search bar
      }).mouseup(function (e) {
        if(e.which === 1) {
          searchElement.autocomplete('close');
          return false;
        }
      // Create regular expression to append list item as search query. This depends on usage of the jquery UI smoothness import..
      }).data('ui-autocomplete')._renderItem = function(ul, item) {
          // http://stackoverflow.com/questions/3344804/how-to-make-matched-text-bold-with-jquery-ui-autocomplete
          var regexp = new RegExp('(' + this.term + ')', 'gi');
          var label = item.label.replace(regexp, '<b>$1</b>');

          return $('<li><a href="#">' + label + '</a></li>').appendTo(ul);
      }
  };
//-------------------------------------------------------------------------------------------------
  // Find appropriate forms for selection and display it
  function showForm() {
      e('userInput').reset();
      // e('jiraButtonContainer').style.display = "none";
      e('summaryForm').style.display = "block";

      var issueTypeSelected = e("subIssue").value;
      var formInputs = e(issueTypeSelected).getAttribute("data-formInputs").split(",");
      for (var i = 0; i < formInputs.length; i++) {
          var singleForm = formInputs[i];
          e(singleForm).style.display = "block"
      }
      // smooth scroll down to form
      $('html, body').animate({ scrollTop: $("#summaryForm").offset().top -300}, 1000);
  };
//-------------------------------------------------------------------------------------------------
  // If someone changes their selection, hide everything so we can redisplay their updated values
  function hideAllStuff() {
      e('description').style.display = "block";
      e('theInput').style.display = "none";
      e('relatedLinks').style.display = "none";
      e('jiraButtonContainer').style.display ="none";
  };
//-------------------------------------------------------------------------------------------------
  // Hide all JIRA forms
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
  // Parse email to build username reference String
  function addJiraWatcher(element) {
      var pandoraDom = /@.*/;
      var ldap = e(element).value;
      ldap = ldap.replace(pandoraDom, '');
      managerEmailAdd.value = "[~" + ldap + "]";
  };
//-------------------------------------------------------------------------------------------------
  // Parse watcher list to build username reference(s)
  function addWatcherList(list) {
      var pandoraDom = /@.*|\[~|]/g;
      var emailList = e(list).value.split(',');
      var ldapList = [];
      for (var c = 0; c < emailList.length; c++) {
          var ldap = "[~" + emailList[c].replace(pandoraDom, '').trim() + "]";
          ldapList.push(ldap);
      }
      e(list).value = ldapList.join(', ')
  };
//-------------------------------------------------------------------------------------------------
  // Shows manager email div for rush requests
  function managerEmailReq() {
      if (e('rushRequest').checked == true) {
          e('managerEmailContainer').style.display = "block";
          e('priorityValue').value = '1';
      } else {
          e('managerEmailContainer').style.display = "none";
      }
  };
//-------------------------------------------------------------------------------------------------
  // Shows watcher container when add watchers are selected
  function showWatcherContainer() {
      if (e('addWatcher').checked == true) {
          e('watcherContainer').style.display = "block";
      } else {
          e('watcherContainer').style.display = "none";
      }
  };
//-------------------------------------------------------------------------------------------------
  // Reset values with ID 'name'
  function resetStuff(name) {
      e('name').reset();
  };
//-------------------------------------------------------------------------------------------------
  // Clears default text
  function clearDefault(name) {
      e('name').value = "";
      alert('cleard');
  };
//-------------------------------------------------------------------------------------------------
  // Verifies emails is a valid pandora email
  function verifyEmail() {
      // var validString = "@pandora.com";
      // if (e('emailAdd').value.indexOf(validString) === 0) {
      //     return false;
      // } else {
      //     return true;
      // }
      return;
  };
//-------------------------------------------------------------------------------------------------
  // A function that we use to make sure the email address ends in "@pandora.com"
    function checkEmail() {
      
      var validEmail = "@pandora.com";
      var currEmail = e('emailAdd').value;

      if(currEmail.substring(currEmail.length-12,currEmail.length) != validEmail) {
        console.log("Invalid email")
        return false;
      } else {
        console.log("Valid email")
        // Now move onto the form method
        formMin();
      }
    }

//-------------------------------------------------------------------------------------------------
  // Verifies all required fields are filled out
  function formMin() {
      var teamSelected = e('teamType').value
      var caminIssueType = e('issueType').value
      console.log(teamSelected);
      // jQuery $.getScript() requires an HTTP connection, so without a local web server the function call won't work [it will return a 404 error].
      // while loading locally, I'll just use a script tag
      var imported = document.createElement('script');
      imported.src = 'assets/js/Controllers/helpdesk/issue_collector.js';
      document.head.appendChild(imported);
      // $.getScript('/issue_collector.js');
      if (e('summary').value !== "" && e('description').value !== "" && e('emailAdd').value !== "" && e('issueType').value !== "slingshotFeatureRequest") {
          console.log(verifyEmail);
          switch (teamSelected) {
              //-----------------------
              case "slingShot":
                  // <button id=\"slingJira\" value=\"Submit\" class=\"btn btn-primary border rounded-0\" type=\"button\" style=\"margin-top: 20px;\">Submit</button>
                  e('submits').innerHTML = '<button id=\"slingJira\" value=\"Submit\" class=\"btn btn-primary border rounded-0\" type=\"button\">Submit</button>';
                  break;
              //-----------------------
              case "featureRequest":
                  e('submits').innerHTML = '<button id=\"jiraSubmitButton\" value=\"Submit\" class=\"btn btn-primary border rounded-0\" type=\"button\">Submit</button>';
                  break;
              //-----------------------
              case "adTech":
              //-----------------------
              case "ariaDashboard":
                  e('submits').innerHTML = '<button id=\"jira\" value=\"Submit\" class=\"btn btn-primary border rounded-0\" type=\"button\">Submit</button>';
                  break;
              //-----------------------
  			      case "audienceExplorer":
                  e('submits').innerHTML = '<button id=\"jira\" value=\"Submit\" class=\"btn btn-primary border rounded-0\" type=\"button\">Submit</button>';
                  break;
              //-----------------------
              case "madTech":
                  e('submits').innerHTML = '<button id=\"jira\" value=\"Submit\" class=\"btn btn-primary border rounded-0\" type=\"button\">Submit</button>';
                  break;
              //-----------------------
              case "campaignInsights":
                  if (caminIssueType === "insightsSubmitDataIssue") {
                      e('submits').innerHTML = '<button id=\"caminDataJira\" value=\"Submit\" class=\"btn btn-primary border rounded-0\" type=\"button\">Submit</button>';
                  } else if (caminIssueType === "insightsDashboardAccess") {
                      e('submits').innerHTML = '<button id=\"caminBugJira\" value=\"Submit\" class=\"btn btn-primary border rounded-0\" type=\"button\">Submit</button>';
                  } else if (caminIssueType === "insightsFeatureRequest") {
                      e('submits').innerHTML = '<button id=\"caminFeatureJira\" value=\"Submit\" class=\"btn btn-primary border rounded-0\" type=\"button\">Submit</button>';
                  } else {
                      console.log("No issue type detected");
                  }
                  break;
              //-----------------------
              default:
                  alert("Default");
                  break;
          }
      } else if (e('issueType').value == "slingshotFeatureRequest" && e('summary').value !== "" && e('emailAdd').value !== "") {
          e('submits').innerHTML = '<button id=\"featureJira\" value=\"Submit\" class=\"btn btn-primary border rounded-0\" type=\"button\">Submit</button>';
      } else {
      // nothing
      }
  };
  //-------------------------------------------------------------------------------------------------
