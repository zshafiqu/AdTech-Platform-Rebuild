// defines some shitty global variables because JIRA issue collector is the fucking worst. also all these global variables are the fucking worst.

//document.getElementById shortcut
function e(n){
    return document.getElementById(n);
};
//loops through fields in form and prints them to a result array
var fields = $( "#userInput :visible, .hiddenCheck" ).serializeArray();
    $( "#results" ).empty();
    jQuery.each( fields, function( i, field ) {
        if (field.value == "") {
          $( "#results" ).append( field.name + ": " );
          $( "#results" ).append( field.value + "n/a \n" );
        }
          else{
          $( "#results" ).append( field.name + ": " );
          var val = field.value
          val = val.replace(/&/g, '&amp;')
                     .replace(/>/g, '&gt;')
                     .replace(/</g, '&lt;')
                     .replace(/"/g, '&quot;')
                     .replace(/'/g, '&apos;');
          $( "#results" ).append( val + " \n");

    }

});
// variables storing some values that get populated when the issue collector window appears
var emails = e('emailAdd').value;
var summ = e('summary').value;
var descrip = $('#results').text();
var rushNo = e('priorityValue').value;
var selectedOption = e("subIssue").options[e("subIssue").selectedIndex]
var labelJira2 = selectedOption.getAttribute("data-jiraLabel");
var subLabelJira2 = selectedOption.getAttribute("data-jiraSubLabel");
var sbIssueCat2 = selectedOption.getAttribute("data-sbIssueCat");
var sbLabelJira2 = selectedOption.getAttribute("data-sbLabelJira");

var affectedArea2 = selectedOption.getAttribute("data-affectedArea");
//adtech JIRA info
var teamSelected = e('teamType').value;
    switch (teamSelected){
        case "madTech":
            var teamJira = '14809';
            break;
        case "adTech":
            var teamJira = '14810';
            break;
        default:
            break;
    }
//assign proper issue label based on what issue type is selected.
/*var issueTypeSelected = e("subIssue").value;
    switch (issueTypeSelected){
        //adTechTools
        case "toolsBug":
        case "toolsFeatureRequest":
        case "toolsVendor":
            var labelJira = "14811";
            break;
        //analytics
        case "discrepAnalytics":
            var labelJira = "14812";
            break;
        //certification
        case "idfaPostback":
        case "madThirdPartyCert":
        case "certPix":
        case "certRichMedia":
        case "certTags":
            var labelJira = "14813";
            break;
        //conversionTracking
        case "conversion":
            var labelJira = "14814";
            break;
        //creativeIssue
        case "creativeClick":
        case "creativeDisplay":
            var labelJira = "14815";
            break;
        //deliveryIssue
        case "targetCompSep":
            var labelJira = "14816";
            var subLabelJira = "14829";
            break;
        case "deliveryOver":
            var labelJira = "14816";
            var subLabelJira = "14830";
            break;
        case "deliveryUnder":
            var labelJira = "14816";
            var subLabelJira = "14831";
            break;
        case "deliveryZero":
            var labelJira = "14816";
            var subLabelJira = "14832";
            break;
        //DFP
        case "infoDfp":
            var labelJira ="14817";
            break;
        //discrepancy
        case "discrepBillable":
        case "madDiscrepancy":
            var labelJira = "14818";
            var subLabelJira = "14833";
            break;
        case "discrepBrandStudy":
            var labelJira = "14818";
            var subLabelJira = "14834";
            break;
        case "discrepGeo":
            var labelJira = "14818";
            var subLabelJira = "14835";
            break;
        case "discrepAnalytics":
            var labelJira = "14818";
            var subLabelJira = "14836";
            break;
        //informational
        case "infoSpec":
        case "infoFaq":
        case "madTroubleshooting":
        case "madGeneral":
            var labelJira = "14819";
            break;
        //internalTracking
        case "internalTracking":
            var labelJira = "14820";
            break;
        //postBack
        case "idfaPostback":
            var labelJira = "14821";
            break;
        //qaTrafficking
        case "qaMobile":
        case "qaWeb":
        case "qaCross":
            var labelJira = "14822";
            break;
        //retargeting
        case "retargeting":
            var labelJira = "14823";
            break;
        //richMedia
        case "rmAo":
            var labelJira = "14824";
            var subLabelJira = "14837";
            break;
        case "rmBb":
            var labelJira = "14824";
            var subLabelJira = "14838";
            break;
        case "rmBr":
            var labelJira = "14824";
            var subLabelJira = "14839";
            break;
        case "rmCc":
            var labelJira = "14824";
            var subLabelJira = "14840";
            break;
        case "rmInt":
            var labelJira = "14824";
            var subLabelJira = "14841";
            break;
        case "rmP1":
            var labelJira = "14824";
            var subLabelJira = "14842";
            break;
        case "rmVx":
            var labelJira = "14824";
            var subLabelJira = "14843";
            break;
        case "other":
            var labelJira = "14824";
            break;
        case "searchAdd":
            var labelJira = "14825";
            break;
        case "inHouseTTR":
            var labelJira = "14826";
            break;
//slingshot labels
        case "campaignDetails":
            var sbIssueCat = "13372";
            var sbLabelJira = "13377";
            break;
        case "exportIo":
            var sbIssueCat = "13372";
            var sbLabelJira = "15130";
            break;
        case "sfdcSync":
            var sbIssueCat = "13370";
            var sbLabelJira = "13473";
            break;
        case "zipper":
            var sbIssueCat = "13372";
            var sbLabelJira = "14772";
            break;
        case "echoSign":
            var sbIssueCat = "13372";
            var sbLabelJira = "15129";
            break;
        case "availsTool":
            var sbIssueCat = "14770";
            var sbLabelJira = "15124";
            break;
        case "targeting":
            var sbIssueCat = "13372";
            var sbLabelJira = "13393";
            break;
        case "defaultSettings":
            var sbIssueCat = "13372";
            var sbLabelJira = "15128";
            break;
        case "wizard":
            var sbIssueCat = "13372";
            var sbLabelJira = "13386";
            break;
        case "copyOrder":
            var sbIssueCat = "13372";
            var sbLabelJira = "15125";
            break;
        case "adAssociation":
            var sbIssueCat = "13372";
            var sbLabelJira = "13375";
            break;
        case "creativeTemplates":
            var sbIssueCat = "13372";
            var sbLabelJira = "15126";
            break;
        case "creatives":
            var sbIssueCat = "13372";
            var sbLabelJira = "13378";
            break;
        case "deleteLines":
            var sbIssueCat = "13372";
            var sbLabelJira = "15127";
            break;
        case "dfpCreatives":
            var sbIssueCat = "13373";
            var sbLabelJira = "13387";
            break;
        case "dfpDelivery":
            var sbIssueCat = "13373";
            var sbLabelJira = "13388";
            break;
        case "dfpPush":
            var sbIssueCat = "13373";
            var sbLabelJira = "13389";
            break;
        case "flighting":
            var sbIssueCat = "13372";
            var sbLabelJira = "13380";
            break;
        case "greenlightRedlight":
            var sbIssueCat = "13372";
            var sbLabelJira = "13392";
            break;
        case "manageAssets":
            var sbIssueCat = "13372";
            var sbLabelJira = "15131";
            break;
        case "manualOverride":
            var sbIssueCat = "13372";
            var sbLabelJira = "";
            break;
        case "muggles":
            var sbIssueCat = "13372";
            var sbLabelJira = "13383";
            break;
        case "magick":
            var sbIssueCat = "13372";
            var sbLabelJira = "13383";
            break;
        case "calculations":
            var sbIssueCat = "13372";
            var sbLabelJira = "13376";
            break;
        case "eBiz":
            var sbIssueCat = "13372";
            var sbLabelJira = "13379";
            break;
        case "multiMarkets":
            var sbIssueCat = "13372";
            var sbLabelJira = "15848"
            break;
        case "adJuster":
            var sbIssueCat = "13371";
            var sbLabelJira = "14440";
            break;
        case "homePage":
            var sbIssueCat = "13372";
            var sbLabelJira = "13391";
            break;
        case "notifications":
            var sbIssueCat = "13372";
            var sbLabelJira = "14476";
            break;
        case "osi":
            var sbIssueCat = "13372";
            var sbLabelJira = "15132";
            break;
        case "reports":
            var sbIssueCat = "13371";
            var sbLabelJira = "13385";
            break;
        case "products":
            var sbIssueCat = "13371";
            var sbLabelJira = "13384";
            break;
        case "invoicePush":
            var sbIssueCat = "13371";
            var sbLabelJira = "13381";
            break;
        case "invoicesTab":
            var sbIssueCat = "13371";
            var sbLabelJira = "13382";
            break;
        case "bulkEdit":
            var sbIssueCat = "13372";
            var sbLabelJira = "15844";
            break;
        case "yieldMax":
            var sbIssueCat = "13372";
            var sbLabelJira = "15845";
            break;
        case "rulesets":
            var sbIssueCat = "13372";
            var sbLabelJira = "15846";
            break;
        case "infrastructureFeatureRequest":
            var affectedArea = "14670";
            break;
        case "planningFeatureRequest":
            var affectedArea = "14671";
            break;
        case "contractFeatureRequest":
            var affectedArea = "14672";
            break;
        case "creativeFeatureRequest":
            var affectedArea = "14673";
            break;
        case "orderFeatureRequest":
            var affectedArea = "14674";
            break;
        case "billingFeatureRequest":
            var affectedArea = "14675";
            break;
        case "reportsFeatureRequest":
            var affectedArea = "14676";
            break;
        default:
            var labelJira = "14827";
            var sbLabelJira = "13390";
            var sbIssueCat = "13374";
            break;
    }
*/
//JIRA ISSUE COLLECTOR SCRIPTS
//adtech task
jQuery.ajax({
    url: "https://jira.savagebeast.com/s/d41d8cd98f00b204e9800998ecf8427e/en_USq7iftx-1988229788/6256/37/1.4.7/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=ee76ef34",
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
//slingshot feature request
jQuery.ajax({
    url: "https://jira.savagebeast.com/s/fb5c6c36c282dd3b46fc5ccec1f1be16-T/en_US-6ev2rc/6343/37/1.4.16/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=dd15e9a2",
    type: "get",
    cache: true,
    dataType: "script"
});
//adtech BUG issue collector customized trigger function
$(document).ready(function() {
    window.ATL_JQ_PAGE_PROPS = $.extend(window.ATL_JQ_PAGE_PROPS, {
    'ee76ef34' : {
    triggerFunction : function( showCollectorDialog ) {
        $('#jira').click( function(e) {
            e.preventDefault();
            showCollectorDialog();
        });

    },
    // ==== we add the code below to set the field values ====
    fieldValues: {
        summary : summ,
        description : descrip,
        email : emails,
        priority : rushNo,
        'customfield_13474' : teamJira, //madtech or adtech
        'customfield_13475' : labelJira2, //label
        'customfield_13475:1': subLabelJira2, //sub label

        }
    },
 //slingshot Feature Request
    'dd15e9a2' : {
    triggerFunction : function( showCollectorDialog ) {
        $('#featureJira').click( function(e) {
            e.preventDefault();
            showCollectorDialog();
         });
    },
    fieldValues: {
        summary : summ,
        email : emails,
        priority : rushNo,
        'customfield_12385': '13100', // pillar
        'customfield_13370': affectedArea2
        //'customfield_14274': affectedWorkflow
        }
    },
//slinghsot BUG
    'a5f0d946' : {
    triggerFunction : function( showCollectorDialog ) {
        $('#slingJira').click( function(e) {
            e.preventDefault();
            showCollectorDialog();
         });
    },
    fieldValues: {
        summary : summ,
        description : descrip,
        email : emails,
        priority : rushNo,
        'customfield_12385': '13100', // pillar
        'customfield_12470': sbIssueCat2, // sb issue category
        'customfield_12471': sbLabelJira2, // sb label
        }
    }
}
)});
