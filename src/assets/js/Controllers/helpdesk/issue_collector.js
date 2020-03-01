//document.getElementById shortcut
function e(n) {
    return document.getElementById(n);
};
//-------------------------------------------------------------------------------------------------
//loops through fields in form and prints them to a result array
var fields = $("#userInput :visible, .hiddenCheck").serializeArray();
$("#results").empty();
jQuery.each(fields, function(i, field) {
    if (field.value == "") {
        $("#results").append(field.name + ": ");
        $("#results").append(field.value + "n/a \n");
    } else {
        $("#results").append(field.name + ": ");
        var val = field.value
        val = val.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
        $("#results").append(val + " \n");

    }

});
//-------------------------------------------------------------------------------------------------
// variables storing some values that get populated when the issue collector window appears
var emails = e('emailAdd').value;
var summ = e('summary').value;
var descrip = $('#results').text();
var rushNo = e('priorityValue').value;

//
var selectedOption = e("subIssue").options[e("subIssue").selectedIndex]

//assigns label JIRA IDs from data-attributes set in data.js
//adtech JIRA labels
var labelJira2 = selectedOption.getAttribute("data-jiraLabel");
var subLabelJira2 = selectedOption.getAttribute("data-jiraSubLabel");

//SB JIRA labels
var sbIssueCat2 = selectedOption.getAttribute("data-sbIssueCat");
var sbLabelJira2 = selectedOption.getAttribute("data-sbLabelJira");

//INSIGHTS label
var insightsJiraLabel = selectedOption.getAttribute("data-insightsJiralabel")
var insightsSubJiraLabel = selectedOption.getAttribute("data-insightsSubJiralabel")

// sets watchers field
var watchers = e('watcherList').value;
var pandoraDom = /@.*|\[~|]/g;
//removes pandora.com and created jira-friendly tag
var watchers = watchers.replace(pandoraDom, "");
console.log(watchers)

//-------------------------------------------------------------------------------------------------
var affectedArea2 = selectedOption.getAttribute("data-affectedArea");
//adtech JIRA info
var teamSelected = e('teamType').value;
switch (teamSelected) {
    case "madTech":
        var teamJira = '14809';
        break;
    case "adTech":
        var teamJira = '14810';
        break;
    default:
        break;
}
//-------------------------------------------------------------------------------------------------
//JIRA ISSUE COLLECTOR SCRIPTS
//adtech task
jQuery.ajax({
    url: "https://jira.savagebeast.com/s/239f1ad6d5a2eaa203ca0f9a3f86dacb-T/en_US-e5wjos/71010/b6b48b2829824b869586ac216d119363/2.0.14/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=ee76ef34",
    type: "get",
    cache: true,
    dataType: "script"
});

//madtech task
jQuery.ajax({
    url: "https://jira.savagebeast.com/s/d41d8cd98f00b204e9800998ecf8427e/en_USq7ifur-1988229788/6256/37/1.4.7/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=8e3cd526",
    type: "get",
    cache: true,
    dataType: "script"
});
//slingshot bug
jQuery.ajax({
    url: "https://jira.savagebeast.com/s/f5d9cd90fd805130605196d70f853932-T/en_US5lx1xk/6343/37/1.4.16/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=a5f0d946",
    type: "get",
    cache: true,
    dataType: "script"
});
//CAMIN Feature Request
jQuery.ajax({
    url: "https://jira.savagebeast.com/s/4368bc05f06a943a03c45459f133c76f-T/en_UStkolit/64022/37/1.4.26/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=ec7732fc",
    type: "get",
    cache: true,
    dataType: "script"
});
//CAMIN Data Issue
jQuery.ajax({
    url: "https://jira.savagebeast.com/s/4368bc05f06a943a03c45459f133c76f-T/en_UStkolit/64022/37/1.4.26/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=b55e6b5d",
    type: "get",
    cache: true,
    dataType: "script"
});

//CAMIN Bug
jQuery.ajax({
    url: "https://jira.savagebeast.com/s/4368bc05f06a943a03c45459f133c76f-T/en_UStkolit/64022/37/1.4.26/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=277bee0c",
    type: "get",
    cache: true,
    dataType: "script"
});
//-------------------------------------------------------------------------------------------------
//adtech BUG issue collector customized trigger function
$(document).ready(function() {
    window.ATL_JQ_PAGE_PROPS = $.extend(window.ATL_JQ_PAGE_PROPS, {
        'ee76ef34': {
            triggerFunction: function(showCollectorDialog) {
                $('#jira').click(function(e) {
                    e.preventDefault();
                    showCollectorDialog();
                });

            },
            // ==== we add the code below to set the field values ====
            fieldValues: {
                summary: summ,
                description: descrip,
                email: emails,
                priority: rushNo,
                'customfield_13474': teamJira, //madtech or adtech
                'customfield_13475': labelJira2, //label
                'customfield_13475:1': subLabelJira2, //sub label
                'customfield_14471': watchers, //watchers list
            }
        },
        //slinghsot BUG
        'a5f0d946': {
            triggerFunction: function(showCollectorDialog) {
                $('#slingJira').click(function(e) {
                    e.preventDefault();
                    showCollectorDialog();
                });
            },
            fieldValues: {
                summary: summ,
                description: descrip,
                email: emails,
                priority: rushNo,
                'customfield_12385': '16222', // pillar
                'customfield_14595': '16196', //sub-pillar
                'customfield_12470': sbIssueCat2, // sb issue category
                'customfield_12471': sbLabelJira2, // sb label
                'customfield_14471': watchers, //watchers list
            }
        },
        //CAMIN Bug
        '277bee0c': {
            triggerFunction: function(showCollectorDialog) {
                $('#caminBugJira').click(function(e) {
                    e.preventDefault();
                    showCollectorDialog();
                });
            },
            fieldValues: {
                summary: summ,
                description: descrip,
                email: emails,
                priority: rushNo,
                'customfield_14695': insightsJiraLabel, // camin issue category
                'customfield_14695:1': insightsSubJiraLabel, // camin label
                'customfield_14471': watchers, //watchers list
            }
        },
        //CAMIN Data
        'b55e6b5d': {
            triggerFunction: function(showCollectorDialog) {
                $('#caminDataJira').click(function(e) {
                    e.preventDefault();
                    showCollectorDialog();
                });
            },
            fieldValues: {
                summary: summ,
                description: descrip,
                email: emails,
                priority: rushNo,
                'customfield_14695': insightsJiraLabel, // camin issue category
                'customfield_14695:1': insightsSubJiraLabel, // camin label
                'customfield_14471': watchers, //watchers list
            }
        },
        //CAMIN Feature
        'ec7732fc': {
            triggerFunction: function(showCollectorDialog) {
                $('#caminFeatureJira').click(function(e) {
                    e.preventDefault();
                    showCollectorDialog();
                });
            },
            fieldValues: {
                summary: summ,
                description: descrip,
                email: emails,
                priority: rushNo,
                'customfield_14695': insightsJiraLabel, // camin issue category
                'customfield_14695:1': insightsSubJiraLabel, // camin label
                'customfield_14471': watchers, //watchers list
            }
        }
    })
});
//-------------------------------------------------------------------------------------------------
