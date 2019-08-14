//-------------------------------------------------------------------------------------------------
// Team Type
  var teamType = {
      "ariaDashboard": {
          "parent": null,
          "label": "ARIA Dashboard"
      },
      "audienceExplorer": {
          "parent": null,
          "label": "Audience Explorer"
      },
      "madTech": {
          "parent": null,
          "label": "Performance Campaigns"
      },

      "adTech": {
          "parent": null,
          "label": "Premium Campaigns"
      },

      "slingShot": {
          "parent": null,
          "label": "Slingshot Bugs"
      },
      // Uncomment this out when ready
      // "adsManager": {
      //     "parent": null,
      //     "label": "Ads Manager"
      // },
  };
//-------------------------------------------------------------------------------------------------
// Issue Type
  var issueType = {
      //adtech

      "adTechTools": {
          "parent": "adTech",
          "label": "Ad Tech Tools",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=15336857#TraffickingandAdTechDocumentation-AdTechTools",
              "label": "AdTech Tools"
          }, {
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=15336857",
              "label": "Trafficking & AdTech Documentation"
          }]
      },

      "certification": {
          "parent": "adTech",
          "label": "Certification",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/display/SALESOPS/3rd+Party+Vendor+Acceptance+Matrix",
              "label": "Third Party Vendor Acceptance Matrix"
          }, {
              "link": "https://wiki.savagebeast.com/display/SALESOPS/3rd+Party+Ad+Vendor+Certification+Queue",
              "label": "Third Party Certification Queue"
          }]
      },

      "creative": {
          "parent": "adTech",
          "label": "Creative Issue",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=15336857",
              "label": "Trafficking & AdTech Documentation"
          }, {
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=15336857#TraffickingandAdTechDocumentation-AdTechTools",
              "label": "AdTech Tools"
          }]
      },

      "dfp": {
          "parent": "adTech",
          "label": "DFP",
      },

      "delivery": {
          "parent": "adTech",
          "label": "Delivery Issue",
          "wikiLinks": [{
                  "link": "https://wiki.savagebeast.com/display/apm/Targeting+Key+Values",
                  "label": "Targeting Key Values"
              }, {
                  "link": "https://wiki.savagebeast.com/display/apm/Audience+Segments_National",
                  "label": "Audience Segment Targeting"
              }, {
                  "link": "https://wiki.savagebeast.com/display/SALESOPS/Ad+Targeting+Key+Values",
                  "label": "DFP Targeting Key Values"
              }

          ]
      },

      "discrepancy": {
          "parent": "adTech",
          "label": "Discrepancy"
      },

      "programmatic": {
          "parent": "adTech",
          "label": "Programmatic/Ad Network"
      },

      "measurement": {
          "parent": "adTech",
          "label": "Measurement"
      },

      "qe": {
          "parent": "adTech",
          "label": "QE Tests"
      },

      "richMedia": {
          "parent": "adTech",
          "label": "Rich Media/Sponsorship Issues",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=38804123",
              "label": "Traffic & AdTech Rich Media QA & Launch Process"
          }]
      },

      "targetingissue": {
          "parent": "adTech",
          "label": "Targeting"
      },

      "thirdparty": {
          "parent": "adTech",
          "label": "Third Party"
      },

      "adTechOther": {
          "parent": "adTech",
          "label": "Other",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=15336857",
              "label": "Trafficking & AdTech Documentation"
          }]
      },

      "madAdxcel": {
          "parent": "madTech",
          "label": "Adxcel",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/display/SALESOPS/The+AM+Adxcel+Wiki",
              "label": "The AM Adxcel Wiki"
          }, {
              "link": "http://pandora.com/static/ads/mel/adxcelorator.html",
              "label": "Adxcelorator"
          }]
      },

      "madAppInstall": {
          "parent": "madTech",
          "label": "App Install",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/display/SALESOPS/Mobile+App+Tracking+Vendors",
              "label": "App Install Tracking Vendors"
          }]

      },
      "madCertification": {
          "parent": "madTech",
          "label": "Certifications",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/display/SALESOPS/3rd+Party+Vendor+Acceptance+Matrix",
              "label": "Third Party Vendor Acceptance Matrix"
          }, {
              "link": "https://wiki.savagebeast.com/display/SALESOPS/3rd+Party+Ad+Vendor+Certification+Queue",
              "label": "Third Party Certification Queue"
          }]
      },
      "madConversionTracking": {
          "parent": "madTech",
          "label": "Conversion Tracking",
          "wikiLinks": [{
              "link": "https://support.google.com/dfp_premium/answer/2476943?hl=en&vid=1-635751683584474895-3032327042389473678",
              "label": "DFP's Conversion Tracking Documentation"
          }, ]
      },

      "madMAID": {
          "parent": "madTech",
          "label": "Moble Ad ID (MAID)"
      },

      "madReTargeting": {
          "parent": "madTech",
          "label": "Re-targeting"
      },

      "madTechOther": {
          "parent": "madTech",
          "label": "Other",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/display/SALESOPS/MADTECH+Task+Guide",
              "label": "MadTech Task Guide"
          }]
      },

      "slingAccess": {
          "parent": "slingShot",
          "label": "Access",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=37983913&src=search",
              "label": "Slingshot Known Bugs and Workarounds"
          }, {
              "link": "https://wiki.savagebeast.com/display/eng/Slingshot+Rules",
              "label": "Slingshot Rules"
          }, {
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=51841371",
              "label": "Slingshot Glossary"
          }]
      },

      "ioApprovals": {
          "parent": "slingShot",
          "label": "IO/Approvals",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=37983913&src=search",
              "label": "Slingshot Known Bugs and Workarounds"
          }, {
              "link": "https://wiki.savagebeast.com/display/eng/IO+Approval+Workflow+-+Revenue",
              "label": "IO Approval Workflow"
          }, {
              "link": "https://wiki.savagebeast.com/display/eng/Slingshot+Rules",
              "label": "Slingshot Rules"
          }, {
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=51841371",
              "label": "Slingshot Glossary"
          }]
      },

      "planning": {
          "parent": "slingShot",
          "label": "Planning",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=37983913&src=search",
              "label": "Slingshot Known Bugs and Workarounds"
          }, {
              "link": "https://wiki.savagebeast.com/display/eng/Slingshot+Rules",
              "label": "Slingshot Rules"
          }, {
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=51841371",
              "label": "Slingshot Glossary"
          }]
      },

      "Taxonomy": {
          "parent": "slingShot",
          "label": "Taxonomy",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/display/SALESOPS/Slingshot+Taxonomy+Request+Process",
              "label": "Taxonomy Request Process"
          }, {
              "link": "https://wiki.savagebeast.com/display/SALESOPS/Slingshot+Taxonomy+Product+Timeline",
              "label": "Taxonomy Product Timeline"
          }]
      },

      "trafficking": {
          "parent": "slingShot",
          "label": "Trafficking",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=37983913&src=search",
              "label": "Slingshot Known Bugs and Workarounds"
          }, {
              "link": "https://wiki.savagebeast.com/display/eng/Slingshot+Rules",
              "label": "Slingshot Rules"
          }, {
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=51841371",
              "label": "Slingshot Glossary"
          }]
      },

      "broadcast": {
          "parent": "slingShot",
          "label": "Broadcast",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=37983913&src=search",
              "label": "Slingshot Known Bugs and Workarounds"
          }, {
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=51841371",
              "label": "Slingshot Glossary"
          }]

      },

      "campaignMonitoring": {
          "parent": "slingShot",
          "label": "Campaign Monitoring",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=37983913&src=search",
              "label": "Slingshot Known Bugs and Workarounds"
          }, {
              "link": "https://wiki.savagebeast.com/display/eng/Slingshot+Rules",
              "label": "Slingshot Rules"
          }, {
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=51841371",
              "label": "Slingshot Glossary"
          }]
      },

      "billing": {
          "parent": "slingShot",
          "label": "Billing",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=48337277",
              "label": "Slingshot - Billing Known Bugs and Workarounds"
          }, {
              "link": "https://wiki.savagebeast.com/display/finance/Importer+Matrix",
              "label": "Importer Matrix"
          }, {
              "link": "https://wiki.savagebeast.com/display/finance/Slingshot+Billing+101",
              "label": "Slingshot Billing 101"
          }]
      },

      "ssOther": {
          "parent": "slingShot",
          "label": "Other"
      },
      "explorerDataIssue": {
          "parent": "audienceExplorer",
          "label": "Data Issue",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/display/SALESOPS/Sales+Tech+Operations+Home?preview=%2F41982790%2F77717302%2FAudience+Explorer_Internal+Product+Guide.pdf",
              "label": "Audience Explorer Internal Product Guide"
          }]
      },
      "explorerFeatureIssue": {
          "parent": "audienceExplorer",
          "label": "Feature Issue",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/display/SALESOPS/Sales+Tech+Operations+Home?preview=%2F41982790%2F77717302%2FAudience+Explorer_Internal+Product+Guide.pdf",
              "label": "Audience Explorer Internal Product Guide"
          }]
      },
      "explorerToolAcess": {
          "parent": "audienceExplorer",
          "label": "Tool Access",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/display/SALESOPS/Sales+Tech+Operations+Home?preview=%2F41982790%2F77717302%2FAudience+Explorer_Internal+Product+Guide.pdf",
              "label": "Audience Explorer Internal Product Guide"
          }]
      },
      "explorerFeatureRequest": {
          "parent": "audienceExplorer",
          "label": "Feature Request",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/display/SALESOPS/Sales+Tech+Operations+Home?preview=%2F41982790%2F77717302%2FAudience+Explorer_Internal+Product+Guide.pdf",
              "label": "Audience Explorer Internal Product Guide"
          }]
      },
      "ariaSubmitDataIssue": {
          "parent": "ariaDashboard",
          "label": "Data Issue",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/download/attachments/59586872/ARIA%20Guide%20-%20ROTE%20-%20March%202017v2.pdf?version=1&modificationDate=1490132444063&api=v2",
              "label": "ARIA System Guide"
          }]
      },
      "ariaSubmitFeatureIssue": {
          "parent": "ariaDashboard",
          "label": "Feature Issue",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/download/attachments/59586872/ARIA%20Guide%20-%20ROTE%20-%20March%202017v2.pdf?version=1&modificationDate=1490132444063&api=v2",
              "label": "ARIA System Guide"
          }]
      },
      "ariaSubmitToolAccess": {
          "parent": "ariaDashboard",
          "label": "Tool Access",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/download/attachments/59586872/ARIA%20Guide%20-%20ROTE%20-%20March%202017v2.pdf?version=1&modificationDate=1490132444063&api=v2",
              "label": "ARIA System Guide"
          }]
      },
      "ariaSubmitFeatureRequest": {
          "parent": "ariaDashboard",
          "label": "Feature Request",
          "wikiLinks": [{
              "link": "https://wiki.savagebeast.com/download/attachments/59586872/ARIA%20Guide%20-%20ROTE%20-%20March%202017v2.pdf?version=1&modificationDate=1490132444063&api=v2",
              "label": "ARIA System Guide"
          }]
      },
      /*
      Below are the Issue types for Ads Manager, these can be uncommented when the sub issues are added to JIRA. you can also update the wiki link(s).
      */
      // Ads Manager Issue Types -------------------------------------------------------------------------------------------------------------------------------------------->
      // "adsManagerDataIssue": {
      //     "parent": "adsManager",
      //     "label": "Data Issue",
      //     "wikiLinks": [{
      //         "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=128009510",
      //         "label": "Ads Manager Known Bugs & Workarounds"
      //     }]
      // },
      // "adsManagerFeatureIssue": {
      //     "parent": "adsManager",
      //     "label": "Feature Issue",
      //     "wikiLinks": [{
      //         "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=128009510",
      //         "label": "Ads Manager Known Bugs & Workarounds"
      //     }]
      // },
      // "adsManagerToolAccess": {
      //     "parent": "adsManager",
      //     "label": "Tool Access",
      //     "wikiLinks": [{
      //         "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=128009510",
      //         "label": "Ads Manager Known Bugs & Workarounds"
      //     }]
      // },
      // "adsManagerFeatureRequest": {
      //     "parent": "adsManager",
      //     "label": "Feature Request",
      //     "wikiLinks": [{
      //         "link": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=128009510",
      //         "label": "Ads Manager Known Bugs & Workarounds"
      //     }]
      // },
  };
//-------------------------------------------------------------------------------------------------
// Sub Issue Type
  var subIssue = {

      "toolsHelpDesk": {
          "parent": "adTechTools",
          "label": "AdTech Help Desk",
          "jiraLabel": "14811",
  		"jiraSubLabel": "19277",
          "formInputs": ['theInput']
      },

      "toolsAdxcelorator": {
          "parent": "adTechTools",
          "label": "Adxcelorator",
          "jiraLabel": "14811",
  		"jiraSubLabel": "19278",
          "formInputs": ['theInput']
      },

      "toolsAMP": {
          "parent": "adTechTools",
          "label": "Amp / Kraken",
          "jiraLabel": "14811",
  		"jiraSubLabel": "19279",
          "formInputs": ['theInput']
      },

      "toolsPostbackReport": {
          "parent": "adTechTools",
          "label": "Postback Report",
          "jiraLabel": "14811",
  		"jiraSubLabel": "19280",
          "formInputs": ['theInput']
      },

      "toolsPixeltron": {
          "parent": "adTechTools",
          "label": "Pixletron",
          "topWikiLink": "pandora.com/static/ads/mel/pixeltron.html",
          "wikiLabel": "List of Pixeltron Vendors",
          "jiraLabel": "14811",
  		"jiraSubLabel": "19281",
          "formInputs": ['theInput', 'campAd', 'toolsVendorForm', 'tags']
      },

      "creativeClick": {
          "parent": "creative",
          "label": "Ad Will Not Click Properly",
          "topWikiLink": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=15336857#TraffickingandAdTechDocumentation-TraffickingWalkthroughs",
          "wikiLabel": "Trafficking Walkthroughs",
          "jiraLabel": "14815",
  		"jiraSubLabel": "19291",
          "formInputs": ['theInput', 'generalForm', 'affectedForm']
      },

      "creativeDisplay": {
          "parent": "creative",
          "label": "Ad Will Not Render Properly",
          "topWikiLink": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=15336857#TraffickingandAdTechDocumentation-TraffickingWalkthroughs",
          "wikiLabel": "Trafficking Walkthroughs",
          "jiraLabel": "14815",
  		"jiraSubLabel": "19292",
          "formInputs": ['theInput', 'generalForm', 'affectedForm']
      },

      "creativeHTML5": {
          "parent": "creative",
          "label": "HTML5 Ad Not Functioning Properly",
          "jiraLabel": "14815",
  		"jiraSubLabel": "19293",
          "formInputs": ['theInput']
      },

      "creativeLandingPage": {
          "parent": "creative",
          "label": "Landing Page Issue",
          "jiraLabel": "14815",
  		"jiraSubLabel": "19294",
          "formInputs": ['theInput']
      },

      "dfpAccessRequest": {
          "parent": "dfp",
          "label": "DFP Access Request",
          "jiraLabel": "14817",
  		"jiraSubLabel": "19295",
          "formInputs": ['theInput']
      },

      "dfpReporting": {
          "parent": "dfp",
          "label": "DFP Reporting",
          "jiraLabel": "14817",
  		"jiraSubLabel": "19296",
          "formInputs": ['theInput']
      },

      "dfpMalvertising": {
          "parent": "dfp",
          "label": "DFP Malvertising Notification",
          "jiraLabel": "14817",
  		"jiraSubLabel": "19297",
          "formInputs": ['theInput']
      },

      "dfpManualEdit": {
          "parent": "dfp",
          "label": "Manual DFP Edit",
          "jiraLabel": "14817",
  		"jiraSubLabel": "19298",
          "formInputs": ['theInput', 'generalForm', 'affectedForm']
      },

      "targetCompSep": {
          "parent": "delivery",
          "label": "Competitive Separation",
          "topWikiLink": "https://support.google.com/dfp_premium/answer/190582?hl=en",
          "wikiLabel": "Competitive Separation Documentation",
          "jiraLabel": "14816",
          "jiraSubLabel": "14829",
          "formInputs": ['theInput', 'generalForm', 'affectedForm', 'deliveryForm']

      },

      "deliveryOver": {
          "parent": "delivery",
          "label": "High/Over-Delivery",
          "topWikiLink": "https://wiki.savagebeast.com/display/pym/PYM+Policies+and+Guidance+for+Campaign+Management",
          "wikiLabel": "Managing Delivery Wiki",
          "jiraLabel": "14816",
          "jiraSubLabel": "14830",
          "formInputs": ['theInput', 'generalForm', 'affectedForm', 'deliveryForm']
      },

      "deliveryUnder": {
          "parent": "delivery",
          "label": "Low/Under-Delivery ",
          "topWikiLink": "https://wiki.savagebeast.com/display/pym/PYM+Policies+and+Guidance+for+Campaign+Management",
          "wikiLabel": "Managing Delivery Wiki",
          "jiraLabel": "14816",
          "jiraSubLabel": "14831",
          "formInputs": ['theInput', 'generalForm', 'affectedForm', 'deliveryForm']
      },

      "deliveryZero": {
          "parent": "delivery",
          "label": "Zero-Delivery",
          "topWikiLink": "https://wiki.savagebeast.com/display/pym/PYM+Policies+and+Guidance+for+Campaign+Management",
          "wikiLabel": "Managing Delivery Wiki",
          "jiraLabel": "14816",
          "jiraSubLabel": "14832",
          "formInputs": ['theInput', 'generalForm', 'affectedForm', 'deliveryForm']
      },
      // ******************************************************************************************
      "infoSpec": {
          "parent": "adTechOther", // was formerly "info" which was incorrect and undefined... and broke the search function
          "label": "Ad Spec Question",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Ad+Specs",
          "wikiLabel": "Ad Specs",
          "jiraLabel": "14819",
          "formInputs": ['theInput'],
          'metaLabels': ['HTML5']
      },
      // ******************************************************************************************
      "infoFaq": {
          "parent": "adTechOther", // was formerly "info" which was incorrect and undefined... and broke the search function
          "label": "FAQ",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Trafficking+FAQ",
          "wikiLabel": "Trafficking FAQ",
          "jiraLabel": "14819",
          "formInputs": ['theInput']
      },
      // ******************************************************************************************
      "infoDfp": {
          "parent": "adTechOther", // was formerly "info" which was incorrect and undefined... and broke the search function
          "label": "Technical DFP Question",
          "topWikiLink": "https://support.google.com/dfp_premium/?hl=en#topic=28132",
          "wikiLabel": "DFP Support",
          "jiraLabel": "14819",
          "formInputs": ['theInput']
      },
      // ******************************************************************************************
      "measurementAudience": {
          "parent": "measurement",
          "label": "Audience Verification",
          "jiraLabel": "19301",
  		"jiraSubLabel": "19302",
          "formInputs": ['theInput']
      },

      "measurementBrand": {
          "parent": "measurement",
          "label": "Brand Safety",
          "jiraLabel": "19301",
  		"jiraSubLabel": "19303",
          "formInputs": ['theInput']
      },

      "measurementViewability": {
          "parent": "measurement",
          "label": "Viewability",
          "jiraLabel": "19301",
  		"jiraSubLabel": "19304",
          "formInputs": ['theInput']
      },

      "programmaticAdMarvel": {
          "parent": "programmatic",
          "label": "AdMarvel",
          "jiraLabel": "19326",
  		"jiraSubLabel": "19329",
          "formInputs": ['theInput']
      },

      "programmaticAdX": {
          "parent": "programmatic",
          "label": "AdX Setup",
          "jiraLabel": "19326",
  		"jiraSubLabel": "19327",
          "formInputs": ['theInput']
      },

      "programmaticAdsWizz": {
          "parent": "programmatic",
          "label": "AdsWizz",
          "jiraLabel": "19326",
  		"jiraSubLabel": "19328",
          "formInputs": ['theInput']
      },

      "programmaticDFP": {
          "parent": "programmatic",
          "label": "DFP Programmatic",
          "jiraLabel": "19326",
  		"jiraSubLabel": "19330",
          "formInputs": ['theInput']
      },

      "programmaticOff": {
          "parent": "programmatic",
          "label": "Off-Platform/Harmonic",
          "jiraLabel": "19326",
  		"jiraSubLabel": "19331",
          "formInputs": ['theInput']
      },

      "rmAmplifiedSolutions": {
          "parent": "richMedia",
          "label": "Amplified Solutions Issue",
          "jiraLabel": "14824",
  		"jiraSubLabel": "19315",
          "formInputs": ['theInput']
      },

      "rmBrandStation": {
          "parent": "richMedia",
          "label": "Brand Station",
          "jiraLabel": "14824",
  		"jiraSubLabel": "14839",
          "formInputs": ['theInput']
      },

      "rmGenreSponsorship": {
          "parent": "richMedia",
          "label": "Genre Sponsorship",
          "jiraLabel": "14824",
  		"jiraSubLabel": "19314",
          "formInputs": ['theInput']
      },

      "rmOther": {
          "parent": "richMedia",
          "label": "Other Amplified/Sponsorship Issue",
          "jiraLabel": "14824",
  		"jiraSubLabel": "19316",
          "formInputs": ['theInput']
      },

      "rmSponsoredListening": {
          "parent": "richMedia",
          "label": "Sponsored Listening",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Sponsored+Listening+-+Trafficking+Walkthrough",
          "wikiLabel": "Sponsored Listening Workflow",
          "jiraLabel": "14824",
          "jiraSubLabel": "16575",
          "formInputs": ['theInput', 'generalForm', 'affectedForm']
      },

      "targetingAudience": {
          "parent": "targetingissue",
          "label": "Audience Segment Targeting Issue",
          "jiraLabel": "19318",
  		"jiraSubLabel": "19320",
          "formInputs": ['theInput']
      },

      "targetingDemo": {
          "parent": "targetingissue",
          "label": "Demo Targeting Issue",
          "jiraLabel": "19318",
  		"jiraSubLabel": "19319",
          "formInputs": ['theInput']
      },

      "targetingGeo": {
          "parent": "targetingissue",
          "label": "Geo-Targeting Issue",
          "jiraLabel": "19318",
  		"jiraSubLabel": "19321",
          "formInputs": ['theInput']
      },

      "thirdpartyMAID": {
          "parent": "thirdparty",
          "label": "MAID Macro Implementation",
          "jiraLabel": "15959",
  		"jiraSubLabel": "19325",
          "formInputs": ['theInput']
      },

      "thirdpartyTag": {
          "parent": "thirdparty",
          "label": "Tag Troubleshooting",
          "jiraLabel": "15959",
  		"jiraSubLabel": "19323",
          "formInputs": ['theInput']
      },

      "thirdpartyID": {
          "parent": "thirdparty",
          "label": "Tag/Vendor Identification",
          "jiraLabel": "15959",
  		"jiraSubLabel": "19324",
          "formInputs": ['theInput']
      },

      "thirdpartyVendor": {
          "parent": "thirdparty",
          "label": "Vendor Certification",
          "jiraLabel": "15959",
  		"jiraSubLabel": "19322",
          "formInputs": ['theInput']
      },

      "qaTraffic": {
          "parent": "qe",
          "label": "QE Test Trafficking",
          "topWikiLink": "https://wiki.savagebeast.com/display/eng/Mobile+Ad+Testing+-+Fundamentals",
          "wikiLabel": "QA Ad Testing Fundamentals",
          "jiraLabel": "14822",
  		"jiraSubLabel": "19312",
          "formInputs": ['theInput', 'platforms', 'environment']

      },

      "qaTroubleshoot": {
          "parent": "qe",
          "label": "QE Test Troubleshooting",
          "topWikiLink": "https://wiki.savagebeast.com/display/eng/Mobile+Ad+Testing+-+Fundamentals",
          "wikiLabel": "QA Ad Testing Fundamentals",
          "jiraLabel": "14822",
  		"jiraSubLabel": "19313",
          "formInputs": ['theInput', 'generalForm', 'affectedForm']
      },

      "certPix": {
          "parent": "certification",
          "label": "Impression/Click Tracking",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Third+Party+Vendor+Certification+Process",
          "wikiLabel": "Third Party Certification Process",
          "jiraLabel": "15959",
  		"jiraSubLabel": "19322",
          "formInputs": ['theInput', 'certForm', 'tags']

      },

      "certRichMedia": {
          "parent": "certification",
          "label": "Rich Media Execution",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Third+Party+Vendor+Certification+Process",
          "wikiLabel": "Third Party Certification Process",
          "jiraLabel": "15959",
  		"jiraSubLabel": "19322",
          "formInputs": ['theInput', 'certForm', 'tags']
      },

      "certTags": {
          "parent": "certification",
          "label": "Third Party Served Banner",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Third+Party+Vendor+Certification+Process",
          "wikiLabel": "Third Party Certification Process",
          "jiraLabel": "15959",
  		"jiraSubLabel": "19322",
          "formInputs": ['theInput', 'certForm', 'tags']
      },

      "discrepAnalytics": {
          "parent": "discrepancy",
          "label": "Analytics Discrepancy",
          "topWikiLink": "https://pandora.my.salesforce.com/sfc/#version/069400000017DWn",
          "wikiLabel": "Google Analytics White Paper",
          "jiraLabel": "14818",
  		"jiraSubLabel": "14836",
          "formInputs": ['theInput', 'generalForm', 'discrepForm', 'affectedForm', 'deliveryForm']
      },

      "discrepBrandStudy": {
          "parent": "discrepancy",
          "label": "Brand Study/Survey Discrepancy",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Discrepancy+Checklist",
          "wikiLabel": "Third Party Discrepancy Checklist",
          "jiraLabel": "14818",
          "jiraSubLabel": "14834",
          "formInputs": ['theInput', 'generalForm', 'discrepForm', 'affectedForm', 'deliveryForm']
      },

      "discrepClick": {
          "parent": "discrepancy",
          "label": "Click Discrepancy",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Discrepancy+Checklist",
          "wikiLabel": "Third Party Discrepancy Checklist",
          "jiraLabel": "14818",
          "jiraSubLabel": "19299",
          "formInputs": ['theInput']
      },

      "discrepImpression": {
          "parent": "discrepancy",
          "label": "Impression Discrepancy",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Discrepancy+Checklist",
          "wikiLabel": "Third Party Discrepancy Checklist",
          "jiraLabel": "14818",
          "jiraSubLabel": "19300",
          "formInputs": ['theInput']
      },

      "discrepGeo": {
          "parent": "discrepancy",
          "label": "Targeting Discrepancy",
          "topWikiLink": "https://pandora.my.salesforce.com/sfc/#version/06940000001aPa3",
          "wikiLabel": "Geo-Targeting White Paper",
          "jiraLabel": "14818",
          "jiraSubLabel": "14835",
          "formInputs": ['theInput', 'generalForm', 'discrepForm', 'affectedForm', 'deliveryForm']
      },

      "adTechOtherSpecs": {
          "parent": "adTechOther",
          "label": "Ad Specs",
          "jiraLabel": "14827",
          "jiraSubLabel": "19309",
          "formInputs": ['theInput']
      },

      "adTechOtherGeneral": {
          "parent": "adTechOther",
          "label": "General Informational",
          "jiraLabel": "14827",
          "jiraSubLabel": "19310",
          "formInputs": ['theInput']
      },

      "adTechOtherOther": {
          "parent": "adTechOther",
          "label": "Other",
          "jiraLabel": "14827",
          "jiraSubLabel": "19311",
          "formInputs": ['theInput']
      },

      "madAdxcelTroubleshoot": {
          "parent": "madAdxcel",
           "label": "Adxcel Campaign/Creative Troubleshooting",
  		 "jiraLabel": "15579",
  		"jiraSubLabel": "19282",
          "formInputs": ['theInput']
      },

      "madAdxcelTrafficking": {
          "parent": "madAdxcel",
          "label": "Adxcel Test Trafficking",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Adxcel+Launch+Process+and+Trafficking+Guide",
          "wikiLabel": "Adxcel Launch Process and Trafficking Guide",
          "jiraLabel": "15579",
  		"jiraSubLabel": "19283",
          "formInputs": ['theInput', 'generalForm', 'affectedForm', 'adXcelForm']
      },

      "madAdxcelDiscrep": {
          "parent": "madAdxcel",
  		"label": "Adxcel Discrepancy",
          "jiraLabel": "15579",
  		"jiraSubLabel": "19284",
          "formInputs": ['theInput']
      },

      "madThirdPartyCert": {
          "parent": "madCertification",
          "label": "Third Party Vendor Certification",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Third+Party+Vendor+Certification+Process",
          "wikiLabel": "Third Party Vendor Certification",
          "jiraLabel": "15959",
  		"jiraSubLabel": "19322",
          "formInputs": ['theInput', 'certForm', 'tags']
      },

      "madDiscrepancy": {
          "parent": "madTechOther",
          "label": "Discrepancy",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Discrepancy+Checklist",
          "wikiLabel": "Third Party Discrepancy Checklist",
          "jiraLabel": "14818",
          "formInputs": ['theInput', 'generalForm', 'discrepForm', 'affectedForm', 'deliveryForm']
      },

      "madMAIDInfo": {
          "parent": "madMAID",
          "label": "MAID Informational Request",
          "jiraLabel": "19305",
  		"jiraSubLabel": "19306",
          "formInputs": ['theInput']
      },

      "madMAIDMacroImplmentation": {
          "parent": "madMAID",
          "label": "MAID Macro Implementation",
          "jiraLabel": "19305",
  		"jiraSubLabel": "19307",
          "formInputs": ['theInput']
      },

      "madMAIDTroubleshooting": {
          "parent": "madMAID",
          "label": "MAID Troubleshooting",
          "jiraLabel": "19305",
  		"jiraSubLabel": "19308",
          "formInputs": ['theInput']
      },

      "madTechOtherOther": {
          "parent": "madTechOther",
          "label": "Other",
          "jiraLabel": "14827",
  		"jiraSubLabel": "19311",
          "formInputs": ['theInput']
      },

      "madGeneralAppInstall": {
          "parent": "madAppInstall",
          "label": "General App Install Question",
          "jiraLabel": "14819",
          "formInputs": ['theInput'],
      },
      "madPostback": {
          "parent": "madAppInstall",
          "label": "Postback Request (Install & Post Install)",
          "topWikiLink": "https://wiki.savagebeast.com/display/eng/Generating+and+Reporting+on+Postback+URLs+for+App+Dev+Campaigns",
          "wikiLabel": "Generating and Reporting on Postback URLs for App Dev Campaigns",
          "jiraLabel": "14814",
          "formInputs": ['theInput']
      },
      "madAppInstallTroubleshooting": {
          "parent": "madAppInstall",
          "label": "Troubleshooting",
          "jiraLabel": "14814",
          "formInputs": ['theInput']
      },
      "madAppInstallVendorQuestion": {
          "parent": "madAppInstall",
          "label": "Vendor Question",
          "jiraLabel": "14819",
          "formInputs": ['theInput']
      },

      "madConversionTest": {
          "parent": "madConversionTracking",
          "label": "Conversion Test Set Up",
          "jiraLabel": "14814",
  		"jiraSubLabel": "19286",
          "formInputs": ['theInput', 'conversionTestForm']
      },

      "madConversionTroubleshooting": {
          "parent": "madConversionTracking",
          "label": "Conversion Troubleshooting",
          "jiraLabel": "14814",
  		"jiraSubLabel": "19287",
          "formInputs": ['theInput']
      },

      "madConversionGeneral": {
          "parent": "madConversionTracking",
          "label": "Conversions General Question",
          "jiraLabel": "14814",
  		"jiraSubLabel": "19285",
          "formInputs": ['theInput']
      },

  	"madInternalPixelRequest": {
          "parent": "madConversionTracking",
          "label": "Internal Pixel Request",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Pandora+Internal+Tracking+Pixel+Request+Process",
          "wikiLabel": "Pandora Internal Tracking Pixel Request",
          "jiraLabel": "14814",
  		"jiraSubLabel": "19288",
          "formInputs": ['theInput']
      },

      "madPostbackRequest": {
          "parent": "madConversionTracking",
          "label": "Postback Request",
          "jiraLabel": "14814",
  		"jiraSubLabel": "19289",
          "formInputs": ['theInput']
      },

      "madSpotlight": {
          "parent": "madConversionTracking",
          "label": "Spotligh Pixel Request",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Spotlight+Tag+Request+Process",
          "wikiLabel": "Spotlight Tag Request Process",
          "jiraLabel": "14814",
  		"jiraSubLabel": "19290",
          "formInputs": ['theInput', 'campAd', 'spotlightForm']
      },

      "boomerang": {
          "parent": "madReTargeting",
          "label": "Boomerang",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Boomerang+Request+Process",
          "wikiLabel": "Boomerang Request Process",
          "jiraLabel": "14823",
          "formInputs": ['theInput', 'campAd', 'boomerangForm']
      },

      "retargetingGeneral": {
          "parent": "madReTargeting",
          "label": "General Questions",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/MADTECH%3A+Boomerang+pixel+Or+Retargeting+pixel",
          "wikiLabel": "Boomerang Pixel or Retargeting Pixel",
          "jiraLabel": "14823",
          "formInputs": ['theInput']
      },
      "login": {
          "parent": "slingAccess",
          "label": "Login Issues",
          "sbIssueCat": "13372",
          "sbLabelJira": "16436",
          "formInputs": ['theInput']

      },
      "slownessDowntime": {
          "parent": "slingAccess",
          "label": "Slowness/Downtime",
          "sbIssueCat": "13372",
          "sbLabelJira": "16436",
          "formInputs": ['theInput']

      },

      "campaignDetails": {
          "parent": "ioApprovals",
          "label": "Campaign Details",
          "sbIssueCat": "13372",
          "sbLabelJira": "13377",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "exportIo": {
          "parent": "ioApprovals",
          "label": "Export IO/Media Plan",
          "sbIssueCat": "13372",
          "sbLabelJira": "15130",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "sfdcSync": {
          "parent": "ioApprovals",
          "label": "SFDC Sync",
          "topWikiLink": "https://wiki.savagebeast.com/download/attachments/46408316/SFDC-SS%20Sync%20Explained_08_20_14.pptx?version=1&modificationDate=1408578710146&api=v2",
          "wikiLabel": "SFDC Sync Rules",
          "sbIssueCat": "13370",
          "sbLabelJira": "13473",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "zipper": {
          "parent": "ioApprovals",
          "label": "Zipper",
          "topWikiLink": "https://wiki.savagebeast.com/display/eng/Slingshot+Rules#SlingshotRules-Zipper",
          "wikiLabel": "Zipper Rules",
          "sbIssueCat": "13372",
          "sbLabelJira": "14772",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "availsTool": {
          "parent": "planning",
          "label": "Avails Tool",
          "topWikiLink": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=38809376",
          "wikiLabel": "Slingshot: Inventory Availability",
          "sbIssueCat": "14770",
          "sbLabelJira": "15124",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "copyOrder": {
          "parent": "planning",
          "label": "Copy Order/Line",
          "sbIssueCat": "13372",
          "sbLabelJira": "15125",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "products": {
          "parent": "planning",
          "label": "Products (GTM)",
          "topWikiLink": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=45484406",
          "wikiLabel": "GTM Roadmap & Backlog",
          "sbIssueCat": "13371",
          "sbLabelJira": "13384",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "singleClickAvails": {
          "parent": "planning",
          "label": "Single Click Avails",
          "topWikiLink": "https://pandora.my.salesforce.com/sfc/#version?selectedDocumentId=06940000002QxhC",
          "wikiLabel": "Single Click Avails One-sheeter",
          "sbIssueCat": "13372",
          "sbLabelJira": "16318",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "reachFrequency": {
          "parent": "planning",
          "label": "Reach/Frequency",
          "topWikiLink": "https://pandora.my.salesforce.com/sfc/#version?selectedDocumentId=06940000002QxhC",
          "wikiLabel": "Reach/Frequency One-sheeter",
          "sbIssueCat": "13372",
          "sbLabelJira": "16317",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "targeting": {
          "parent": "planning",
          "label": "Targeting",
          "topWikiLink": "https://wiki.savagebeast.com/display/apm/Targeting+Key+Values",
          "wikiLabel": "Targeting Key Values",
          "sbIssueCat": "13372",
          "sbLabelJira": "13393",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "wizard": {
          "parent": "planning",
          "label": "Wizard (Product Building Tool)",
          "topWikiLink": "https://wiki.savagebeast.com/download/attachments/29360733/Using%20the%20Wizard.pdf?version=1&modificationDate=1379347977790&api=v2",
          "wikiLabel": "Using the Wizard (pdf)",
          "sbIssueCat": "13372",
          "sbLabelJira": "13386",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "yieldMax": {
          "parent": "planning",
          "label": "Yield Max",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Yield+Max:+The+Basics",
          "wikiLabel": "Yield Max: The Basics",
          "sbIssueCat": "13372",
          "sbLabelJira": "15845",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "newProduct": {
          "parent": "Taxonomy",
          "label": "New Product Request",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Slingshot+Taxonomy",
          "wikiLabel": "Slingshot Taxonomy",
          "sbIssueCat": "13372",
          "sbLabelJira": "13384",
          "formInputs": ['theInput', 'newProductTaxonomyForm']
      },
      "editProduct": {
          "parent": "Taxonomy",
          "label": "Edit Product Request",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Slingshot+Taxonomy",
          "wikiLabel": "Slingshot Taxonomy",
          "sbIssueCat": "13372",
          "sbLabelJira": "13384",
          "formInputs": ['theInput', 'editProductTaxonomyForm']
      },
      "bufferRequest": {
          "parent": "Taxonomy",
          "label": "Edit Default Buffers",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Slingshot+Taxonomy",
          "wikiLabel": "Slingshot Taxonomy",
          "sbIssueCat": "13372",
          "sbLabelJira": "13384",
          "formInputs": ['theInput', 'editProductTaxonomyForm']
      },
      "rulesets": {
          "parent": "Taxonomy",
          "label": "Third Party Rulesets",
          "sbIssueCat": "13372",
          "sbLabelJira": "15846",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Slingshot+Taxonomy",
          "wikiLabel": "Slingshot Taxonomy",
          "formInputs": ['theInput', 'editRulesetsForm']
      },

      "adAssociation": {
          "parent": "trafficking",
          "label": "Ad Association",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/DFP+Ad+Unit+Taxonomy",
          "wikiLabel": "DFP Ad Unit Taxonomy",
          "sbIssueCat": "13372",
          "sbLabelJira": "13375",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "bulkEdit": {
          "parent": "trafficking",
          "label": "Bulk Edit",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Bulk+Edit+FAQs",
          "wikiLabel": "Bulk Edit FAQs",
          "sbIssueCat": "13372",
          "sbLabelJira": "15844",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "creativeTemplates": {
          "parent": "trafficking",
          "label": "Creative Templates",
          "sbIssueCat": "13372",
          "sbLabelJira": "15126",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "creatives": {
          "parent": "trafficking",
          "label": "Creatives",
          "sbIssueCat": "13373",
          "sbLabelJira": "13387",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "creativesForceCode": {
          "parent": "trafficking",
          "label": "Creative Force Code (QR Code)",
          "topWikiLink": "[INSERT]",
          "sbIssueCat": "13373",
          "sbLabelJira": "16435",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "creativeFlighting": {
          "parent": "trafficking",
          "label": "Creative Flighting",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Creative+Flighting",
          "wikiLabel": "Creative Flighting",
          "sbIssueCat": "13373",
          "sbLabelJira": "16319",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "creativeWeighting": {
          "parent": "trafficking",
          "label": "Creative Weighting",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Creative+Weighting",
          "wikiLabel": "Creative Weighting",
          "sbIssueCat": "13373",
          "sbLabelJira": "16320",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "deleteLines": {
          "parent": "trafficking",
          "label": "Delete",
          "sbIssueCat": "13372",
          "sbLabelJira": "15127",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "dfpCreatives": {
          "parent": "trafficking",
          "label": "DFP Creatives",
          "sbIssueCat": "13373",
          "sbLabelJira": "13389",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "dfpDelivery": {
          "parent": "trafficking",
          "label": "DFP Delivery",
          "sbIssueCat": "13373",
          "sbLabelJira": "13388",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "dfpPush": {
          "parent": "trafficking",
          "label": "DFP Push",
          "topWikiLink": "https://wiki.savagebeast.com/display/SALESOPS/Slingshot+Troubleshooting#SlingshotTroubleshooting-CommonDFPPushErrors",
          "wikiLabel": "Common DFP Push Errors",
          "sbIssueCat": "13373",
          "sbLabelJira": "13389",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "flighting": {
          "parent": "trafficking",
          "label": "Flighting",
          "sbIssueCat": "13372",
          "sbLabelJira": "13380",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "greenlightRedlight": {
          "parent": "trafficking",
          "label": "Greenlight/Redlight",
          "sbIssueCat": "13372",
          "sbLabelJira": "13392",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "manageAssets": {
          "parent": "trafficking",
          "label": "Manage Assets",
          "sbIssueCat": "13372",
          "sbLabelJira": "15131",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "manualOverride": {
          "parent": "trafficking",
          "label": "Manual Override",
          "topWikiLink": "https://wiki.savagebeast.com/download/attachments/46399619/Manual%20Override%20User%20Guide.docx?version=1&modificationDate=1408647906451&api=v2",
          "wikiLabel": "Manual Override User Guide",
          "sbIssueCat": "13372",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "muggles": {
          "parent": "trafficking",
          "label": "Muggles (Pre-DFP Push)",
          "topWikiLink": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=44313149",
          "wikiLabel": "Muggles/Magick UI Columns",
          "sbIssueCat": "13372",
          "sbLabelJira": "13383",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "magick": {
          "parent": "trafficking",
          "label": "Magick (Post-DFP Push)",
          "topWikiLink": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=44313149",
          "wikiLabel": "Muggles/Magick UI Columns",
          "sbIssueCat": "13372",
          "sbLabelJira": "13383",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "calculations": {
          "parent": "broadcast",
          "label": "Calculations",
          "topWikiLink": "https://wiki.savagebeast.com/display/CS/BROADCAST+RESOURCE+CENTER?preview=/51844861/51709843/radio-cheat-sheet-2015.pdf",
          "wikiLabel": "Calculations Cheat Sheet",
          "sbIssueCat": "13372",
          "sbLabelJira": "13376",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "eBiz": {
          "parent": "broadcast",
          "label": "eBiz",
          "topWikiLink": "https://wiki.savagebeast.com/display/CS/Broadcast+Translator",
          "wikiLabel": "Broadcast Translator",
          "sbIssueCat": "13372",
          "sbLabelJira": "13379",
          "formInputs": ['theInput', 'slingshotForm', 'broadcastForm']
      },

      "multiMarkets": {
          "parent": "broadcast",
          "label": "Multi-Markets",
          "topWikiLink": "https://wiki.savagebeast.com/display/~swold/Multimarket+Radio+Orders",
          "wikiLabel": "Multi-Market Radio Orders",
          "sbIssueCat": "13372",
          "sbLabelJira": "15848",
          "formInputs": ['theInput', 'slingshotForm', 'broadcastForm']
      },
      "adJuster": {
          "parent": "campaignMonitoring",
          "label": "AdJuster",
          "topWikiLink": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=44317461",
          "wikiLabel": "Adjuster Rules",
          "sbIssueCat": "13371",
          "sbLabelJira": "14440",
          "formInputs": ['theInput', 'slingshotForm', 'discrepForm']
      },

      "homePage": {
          "parent": "campaignMonitoring",
          "label": "Homepage",
          "sbIssueCat": "13372",
          "sbLabelJira": "13391",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "importers": {
          "parent": "campaignMonitoring",
          "label": "Importers",
          "sbIssueCat": "13372",
          "sbLabelJira": "16233",
          "formInputs": ['theInput']
      },

      "notifications": {
          "parent": "campaignMonitoring",
          "label": "Notifications",
          "topWikiLink": "https://wiki.savagebeast.com/pages/viewpage.action?pageId=44316417",
          "wikiLabel": "Notifications User Guidance & Parameters",
          "sbIssueCat": "13372",
          "sbLabelJira": "14476",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "osi": {
          "parent": "campaignMonitoring",
          "label": "OSI",
          "sbIssueCat": "13372",
          "sbLabelJira": "15132",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "reports": {
          "parent": "campaignMonitoring",
          "label": "Reports",
          "topWikiLink": "https://wiki.savagebeast.com/display/finance/Slingshot+Reports+Matrix",
          "wikiLabel": "Slingshot Reports Matrix",
          "sbIssueCat": "13371",
          "sbLabelJira": "13385",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "invoicePush": {
          "parent": "billing",
          "label": "Invoice Push",
          "topWikiLink": "https://wiki.savagebeast.com/display/eng/Slingshot+-%3E+Salesforce+-+Invoices",
          "wikiLabel": "Slingshot > Salesforce > Invoices",
          "sbIssueCat": "13371",
          "sbLabelJira": "13381",
          "formInputs": ['theInput', 'slingshotForm']
      },

      "invoicesTab": {
          "parent": "billing",
          "label": "Invoice Tab",
          "topWikiLink": "https://wiki.savagebeast.com/display/eng/Slingshot+-%3E+Salesforce+-+Invoices",
          "wikiLabel": "Slingshot > Salesforce > Invoices",
          "sbIssueCat": "13371",
          "sbLabelJira": "13382",
          "formInputs": ['theInput', 'slingshotForm']
      },
      "other": {
          "parent": "ssOther",
          "label": "Other",
          "sbIssueCat": "13374",
          "sbLabelJira": "13390",
          "formInputs": ['theInput', 'slingshotForm']
      },

      //AUDIENCE EXPLORER
      //DATA ISSUE
      "explorerDataIssueData": {
          "parent": "explorerDataIssue",
          "label": "Data Lag",
          "jiraLabel": "19004",
          "jiraSubLabel": "19008",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "explorerDataIssueMissing": {
          "parent": "explorerDataIssue",
          "label": "Missing Segments",
          "jiraLabel": "19004",
          "jiraSubLabel": "19009",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "explorerDataIssueOverview": {
          "parent": "explorerDataIssue",
          "label": "Overview Data Discrepancy",
          "jiraLabel": "19004",
          "jiraSubLabel": "19010",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "explorerDataIssueDemoDiscrep": {
          "parent": "explorerDataIssue",
          "label": "Demographics Data Discrepancy",
          "jiraLabel": "19004",
          "jiraSubLabel": "19011",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "explorerDataIssueDemoUnavail": {
          "parent": "explorerDataIssue",
          "label": "Demographics Data Unavailable",
          "jiraLabel": "19004",
          "jiraSubLabel": "19012",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "explorerDataIssueListeningDiscrep": {
          "parent": "explorerDataIssue",
          "label": "Listening Data Discrepancy",
          "jiraLabel": "19004",
          "jiraSubLabel": "19015",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "explorerDataIssueListeningUnavail": {
          "parent": "explorerDataIssue",
          "label": "Listening Data Unavailable",
          "jiraLabel": "19004",
          "jiraSubLabel": "19016",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "explorerDataIssueLifestyleDiscrep": {
          "parent": "explorerDataIssue",
          "label": "Lifestyle Data Discrepancy",
          "jiraLabel": "19004",
          "jiraSubLabel": "19013",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "explorerDataIssueLifestyleUnavail": {
          "parent": "explorerDataIssue",
          "label": "Lifestyle Data Unavailable",
          "jiraLabel": "19004",
          "jiraSubLabel": "19014",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "explorerDataIssueExported": {
          "parent": "explorerDataIssue",
          "label": "Exported Data Issue",
          "jiraLabel": "19004",
          "jiraSubLabel": "19017",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      //FEATURE ISSUE
      "explorerFeatureIssueExports": {
          "parent": "explorerFeatureIssue",
          "label": "Exports",
          "jiraLabel": "19005",
          "jiraSubLabel": "19018",
          "formInputs": ['theInput']
      },
  	    "explorerFeatureIssueShareable": {
          "parent": "explorerFeatureIssue",
          "label": "Shareable Link",
          "jiraLabel": "19005",
          "jiraSubLabel": "19019",
          "formInputs": ['theInput']
      },
  	    "explorerFeatureIssueCustomization": {
          "parent": "explorerFeatureIssue",
          "label": "Customization of Headers",
          "jiraLabel": "19005",
          "jiraSubLabel": "19020",
          "formInputs": ['theInput']
      },
  		"explorerFeatureIssueFilters": {
          "parent": "explorerFeatureIssue",
          "label": "Filters",
          "jiraLabel": "19005",
          "jiraSubLabel": "19021",
          "formInputs": ['theInput']
      },
  		"explorerFeatureIssueVisualization": {
          "parent": "explorerFeatureIssue",
          "label": "Visualization",
          "jiraLabel": "19005",
          "jiraSubLabel": "19022",
          "formInputs": ['theInput']
      },
      //TOOL ACCESS
      "explorerToolAcessLogin": {
          "parent": "explorerToolAcess",
          "label": "Login Issue",
          "jiraLabel": "19007",
          "jiraSubLabel": "19026",
          "formInputs": ['theInput']
      },
      "explorerToolAcessSystem": {
          "parent": "explorerToolAcess",
          "label": "System Outage",
          "jiraLabel": "19007",
          "jiraSubLabel": "19027",
          "formInputs": ['theInput']
      },
      //FEATURE REQUESTS
      "explorerFeatureRequestReport": {
          "parent": "explorerFeatureRequest",
          "label": "Report Builder Request",
          "jiraLabel": "19006",
          "jiraSubLabel": "19023",
          "formInputs": ['theInput']
      },
      "explorerFeatureRequestNew": {
          "parent": "explorerFeatureRequest",
          "label": "New Data Request",
          "jiraLabel": "19006",
          "jiraSubLabel": "19024",
          "formInputs": ['theInput']
      },
      "explorerFeatureRequestGeneral": {
          "parent": "explorerFeatureRequest",
          "label": "General Feedback",
          "jiraLabel": "19006",
          "jiraSubLabel": "19025",
          "formInputs": ['theInput']
      },

  	//ARIA
      //DATA ISSUE
      "ariaDataIssueDataLag": {
          "parent": "ariaSubmitDataIssue",
          "label": "Data Lag",
          "jiraLabel": "18542",
          "jiraSubLabel": "18546",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "ariaDataIssueMissingCampaigns": {
          "parent": "ariaSubmitDataIssue",
          "label": "Missing Campaigns",
          "jiraLabel": "18542",
          "jiraSubLabel": "18547",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "ariaDataIssueDemoDataDiscrep": {
          "parent": "ariaSubmitDataIssue",
          "label": "Demographic Data Discrepancy",
          "jiraLabel": "18542",
          "jiraSubLabel": "18548",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "ariaDataIssueDemoDataUnavailable": {
          "parent": "ariaSubmitDataIssue",
          "label": "Demographic Data Unavailable",
          "jiraLabel": "18542",
          "jiraSubLabel": "18549",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "ariaDataIssueExportedDataIssue": {
          "parent": "ariaSubmitDataIssue",
          "label": "Exported Data Issue",
          "jiraLabel": "18542",
          "jiraSubLabel": "18550",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "ariaDataIssueGeoDataDiscrep": {
          "parent": "ariaSubmitDataIssue",
          "label": "Geo Data Discrepancy",
          "jiraLabel": "18542",
          "jiraSubLabel": "18551",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "ariaDataIssueGeoDataUnavailable": {
          "parent": "ariaSubmitDataIssue",
          "label": "Geo Data Unavailable",
          "jiraLabel": "18542",
          "jiraSubLabel": "18552",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "ariaDataIssueIncorrectCTR": {
          "parent": "ariaSubmitDataIssue",
          "label": "Incorrect CTR",
          "jiraLabel": "18542",
          "jiraSubLabel": "18553",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "ariaDataRFDataDiscrep": {
          "parent": "ariaSubmitDataIssue",
          "label": "R&F Data Discrepancy",
          "jiraLabel": "18542",
          "jiraSubLabel": "18554",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "ariaDataRFDataUnavailable": {
          "parent": "ariaSubmitDataIssue",
          "label": "R&F Data Unavailable",
          "jiraLabel": "18542",
          "jiraSubLabel": "18555",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "ariaData3PDataDiscrep": {
          "parent": "ariaSubmitDataIssue",
          "label": "3rd Party Data Discrepancy",
          "jiraLabel": "18542",
          "jiraSubLabel": "18556",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },
      "ariaData3PDataUnavailable": {
          "parent": "ariaSubmitDataIssue",
          "label": "3rd Party Data Unavailable",
          "jiraLabel": "18542",
          "jiraSubLabel": "18557",
          "formInputs": ['theInput', 'insightsDashboardForm', 'insightsBugForm']
      },

      //FEATURE ISSUE
      "ariaFeatureIssueExports": {
          "parent": "ariaSubmitFeatureIssue",
          "label": "Exports",
          "jiraLabel": "18543",
          "jiraSubLabel": "18558",
          "formInputs": ['theInput']
      },
      "ariaFeatureIssueViewsNavigation": {
          "parent": "ariaSubmitFeatureIssue",
          "label": "Views Navigation",
          "jiraLabel": "18543",
          "jiraSubLabel": "18559",
          "formInputs": ['theInput']
      },
      "ariaFeatureIssueBreakdowns": {
          "parent": "ariaSubmitFeatureIssue",
          "label": "Breakdowns",
          "jiraLabel": "18543",
          "jiraSubLabel": "18560",
          "formInputs": ['theInput']
      },
      "ariaFeatureIssueColumnSets": {
          "parent": "ariaSubmitFeatureIssue",
          "label": "Column Sets",
          "jiraLabel": "18543",
          "jiraSubLabel": "18561",
          "formInputs": ['theInput']
      },
      "ariaFeatureIssueCustomizeColumns": {
          "parent": "ariaSubmitFeatureIssue",
          "label": "Customize Columns",
          "jiraLabel": "18543",
          "jiraSubLabel": "18562",
          "formInputs": ['theInput']
      },
      "ariaFeatureIssueBreadcrumbNavigation": {
          "parent": "ariaSubmitFeatureIssue",
          "label": "Breadcrumb Navigation",
          "jiraLabel": "18543",
          "jiraSubLabel": "18563",
          "formInputs": ['theInput']
      },
      "ariaFeatureIssueFilters": {
          "parent": "ariaSubmitFeatureIssue",
          "label": "Filters",
          "jiraLabel": "18543",
          "jiraSubLabel": "18564",
          "formInputs": ['theInput']
      },
      "ariaFeatureIssueDataRangeSelector": {
          "parent": "ariaSubmitFeatureIssue",
          "label": "Data Range Selector",
          "jiraLabel": "18543",
          "jiraSubLabel": "18565",
          "formInputs": ['theInput']
      },
      "ariaFeatureIssueVisualization": {
          "parent": "ariaSubmitFeatureIssue",
          "label": "Visualization",
          "jiraLabel": "18543",
          "jiraSubLabel": "18566",
          "formInputs": ['theInput']
      },

      //TOOL ACCESS
      "ariaAccessLoginIssue": {
          "parent": "ariaSubmitToolAccess",
          "label": "Login Issue",
          "jiraLabel": "18544",
          "jiraSubLabel": "18567",
          "formInputs": ['theInput']
      },
      "ariaAccessSystemOutage": {
          "parent": "ariaSubmitToolAccess",
          "label": "System Outage",
          "jiraLabel": "18544",
          "jiraSubLabel": "18568",
          "formInputs": ['theInput']
      },

      //FEATURE REQUEST
      "ariaFeatureRequestReportBuilder": {
          "parent": "ariaSubmitFeatureRequest",
          "label": "Report Builder Feature Request",
          "jiraLabel": "18545",
          "jiraSubLabel": "18569",
          "formInputs": ['theInput']
      },
      "ariaFeatureRequestNewDataRequest": {
          "parent": "ariaSubmitFeatureRequest",
          "label": "New Data Request",
          "jiraLabel": "18545",
          "jiraSubLabel": "18570",
          "formInputs": ['theInput']
      },
      "ariaFeatureRequestGeneralFeedback": {
          "parent": "ariaSubmitFeatureRequest",
          "label": "General Feedback",
          "jiraLabel": "18545",
          "jiraSubLabel": "18571",
          "formInputs": ['theInput']
      },
      /*
      Below are all of the sub issues for the Ads Manager fields. When the labels and sublabels
      are added to JIRA, you can come in and uncomment these values, and enter the individual label
      numbers so the tickets know where to route in JIRA.
      */
      // // Ads Manager - Sub Issues --------------------------------------->
      // // Data Issue - Data Lag
      // "adsManagerDataIssueDataLag": {
      //     "parent": "adsManagerDataIssue",
      //     "label": "Data Lag",
      //     "jiraLabel": "",
      //     "jiraSubLabel": "",
      //     "formInputs": ['theInput']
      // },
      // // Data Issue - Missing Data
      // "adsManagerDataIssueMissingData": {
      //     "parent": "adsManagerDataIssue",
      //     "label": "Missing Data",
      //     "jiraLabel": "",
      //     "jiraSubLabel": "",
      //     "formInputs": ['theInput']
      // },
      // // Data Issue - Incorrect Data
      // "adsManagerDataIssueIncorrectData": {
      //     "parent": "adsManagerDataIssue",
      //     "label": "Incorrect Data",
      //     "jiraLabel": "",
      //     "jiraSubLabel": "",
      //     "formInputs": ['theInput']
      // },
      // // Feature Issue - Header
      // "adsManagerFeatureIssueHeader": {
      //     "parent": "adsManagerFeatureIssue",
      //     "label": "Header",
      //     "jiraLabel": "",
      //     "jiraSubLabel": "",
      //     "formInputs": ['theInput']
      // },
      // // Feature Issue - Ads Manager Dashboard
      // "adsManagerFeatureIssueAdsManagerDashboard": {
      //     "parent": "adsManagerFeatureIssue",
      //     "label": "Ads Manager Dashboard",
      //     "jiraLabel": "",
      //     "jiraSubLabel": "",
      //     "formInputs": ['theInput']
      // },
      // // Tool Access - Login Issue
      // "adsManagerToolAccessLoginIssue": {
      //     "parent": "adsManagerToolAccess",
      //     "label": "Login Issue",
      //     "jiraLabel": "",
      //     "jiraSubLabel": "",
      //     "formInputs": ['theInput']
      // },
      // // Tool Access - System Outage
      // "adsManagerToolAccessSystemOutage": {
      //     "parent": "adsManagerToolAccess",
      //     "label": "System Outage",
      //     "jiraLabel": "",
      //     "jiraSubLabel": "",
      //     "formInputs": ['theInput']
      // },
      // // Feature Request - Feature Request
      // "adsManagerFeatureRequestFeatureRequest": {
      //     "parent": "adsManagerFeatureRequest",
      //     "label": "Feature Request",
      //     "jiraLabel": "",
      //     "jiraSubLabel": "",
      //     "formInputs": ['theInput']
      // },
  };
//-------------------------------------------------------------------------------------------------
