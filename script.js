Survey
    .StylesManager
    .applyTheme("defaultV2");

const surveyJson = {
    "title": "Survey",
    "logo": "logo2.png",
    "logoHeight": "50px",
    "logoWidth": "100px",
    "logoPosition": "right",
    "completedHtmlOnCondition": [{
        "expression": "{summ} = 0",
        "html": "</br> <h3>Consider studying something else :( </h3> </br> <iframe src='https://docs.google.com/forms/d/e/1FAIpQLSfCnrhmJrkB40SbpPBZWCqqg6WW6EyZbzQBYn4K1FpLwU0mlA/viewform?embedded=true' style = \"width:100%; height:500px;\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading…</iframe> "
      }, {
        "expression": " {summ} > 0",
        "html": "</br> <h3>It appears that Digital Health is your destiny! Check out how to apply here: </h3> <br><a href=\"https://taltech.ee/en/masters-programmes/digital-health\">https://taltech.ee/en/masters-programmes/digital-health</a> <br> <iframe src='https://docs.google.com/forms/d/e/1FAIpQLSfCnrhmJrkB40SbpPBZWCqqg6WW6EyZbzQBYn4K1FpLwU0mlA/viewform?embedded=true' style = \"width:100%; height:500px;\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading…</iframe>  "
      }],
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "image",
            "name": "banner",
            "imageLink": "Question_1.webp",
            "imageWidth": "100%",
            "imageHeight": "100%",

          },
         {
          "type": "checkbox",
          "name": "question1",
          "title": "What areas of health care interest you the most? (Select all that apply)",
          "titleLocation": "top",
          "hideNumber": true,
          "isRequired": true,
          "choices": [
           {
            "value": "1",
            "text": "Changing the current processes of health care"
           },
           {
            "value": "2",
            "text": "Digitalising health care delivery"
           },
           {
            "value": "3",
            "text": "Data analysis and management"
           },
           {
            "value": "4",
            "text": "Public health and policy"
           }
          ],
          "showNoneItem": true,
          "noneItemValue": "0"
         }
        ],
        "visible": true,
        "navigationButtonsVisibility": "show"
       },
     {
      "name": "page2",
      "elements": [
        {
            "type": "image",
            "name": "banner",
            "imageLink": "Question_2.webp",
            "imageWidth": "100%",
            "imageHeight": "100%"
            
            
          },
       {
        "type": "matrix",
        "name": "question2",
        "titleLocation": "hidden",
        "isRequired": true,
        "columns": [
         {
          "value": "4",
          "text": "Very familiar"
         },
         {
          "value": "3",
          "text": "Somewhat familiar"
         },
         {
          "value": "2",
          "text": "Not very familiar"
         },
         {
          "value": "1",
          "text": "Not at all familiar"
         }
        ],
        "rows": [
         {
          "value": "q1",
          "text": "How familiar are you with Digital Health concepts and technologies?"
         }
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
        {
          "type": "image",
          "name": "banner",
          "imageLink": "Question_3.webp",
          "imageWidth": "100%",
          "imageHeight": "100%"
          
        },
       {
        "type": "checkbox",
        "name": "question3",
        "title": "What is your educational background?",
        "titleLocation": "top",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         {
          "value": "5",
          "text": "Medical or healthcare"
         },
         {
          "value": "4",
          "text": "Information technology or computer science"
         },
         {
          "value": "3",
          "text": "Business or management"
         },
         {
          "value": "2",
          "text": "Law or policy"
         },
         {
          "value": "1",
          "text": "Other"
         }
         
        ]
        
       }
      ],
      "visible": true,
      "navigationButtonsVisibility": "show"
     },
     {
      "name": "page4",
      "elements": [
        {
          "type": "image",
          "name": "banner",
          "imageLink": "Question_4.webp",
          "imageWidth": "100%",
          "imageHeight": "100%"
          
        },
       {
        "type": "checkbox",
        "name": "question4",
        "title": "What kind of career do you see yourself pursuing in Digital Health?",
        "titleLocation": "top",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         {
          "value": "4",
          "text": "Health care innovator in daily practice"
         },
         {
          "value": "3",
          "text": "Business owner or start-up CEO"
         },
         {
          "value": "2",
          "text": "Data analyst or manager in health care"
         },
         {
          "value": "1",
          "text": "Public health advocate or policy maker"
         }
        ],
        "showNoneItem": true,
        "noneText": "Other"
       }
      ],
      "visible": true,
      "navigationButtonsVisibility": "show"
     },
     {
        "name": "page5",
        "elements": [
          {
              "type": "image",
              "name": "banner",
              "imageLink": "Question_5.webp",
              "imageWidth": "100%",
              "imageHeight": "100%"
              
            },
         {
          "type": "matrix",
          "name": "question5",
          "titleLocation": "hidden",
          "isRequired": true,
          "columns": [
           {
            "value": "4",
            "text": "Very important"
           },
           {
            "value": "3",
            "text": "Somewhat important"
           },
           {
            "value": "1",
            "text": "Not very important"
           },
           {
            "value": "0",
            "text": "Not at all important"
           }
          ],
          "rows": [
           {
            "value": "q1",
            "text": "How important is it to you to make a positive impact on healthcare through your work?"
           }
          ]
         },
         {
            type: "expression",
            name: "total result",
            title: "Total value",
            expression: "{question1[0]} + {question5.q1} ",
            "visible": false,
        }

        ]
       }
    ],
    calculatedValues: [
        {name: "summ", expression: "{question1[0]} + {question5.q1}"}
    ]
   };

const survey = new Survey.Model(surveyJson);
survey.focusFirstQuestionAutomatic = false;
survey.getQuestionByName("question1").noneItem.value = "0";
function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

// survey.onComplete.add(alertResults);

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});
