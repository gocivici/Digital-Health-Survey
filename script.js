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
        "expression": "{summ} > 5",
        "html": "</br> <img src='https://media.istockphoto.com/id/817260662/photo/tv-test-card-or-test-pattern-sd-4-3-ratio-generic.jpg?s=170667a&w=0&k=20&c=GVIhs2lQT4QFLi9gvqylgykzqv1C7drUwgwpZ0HdyIg='>  </br> <h3>You got {summ} points, persona 1</h3> </br>  Nullam vel maximus erat, ut iaculis enim. Praesent quis mauris nec nulla auctor volutpat et vitae tellus. Mauris vestibulum sodales ultricies. Integer sit amet tellus mollis, eleifend nunc in, ultricies ex. Etiam et massa bibendum, commodo lorem nec, euismod massa. Praesent a odio vel ipsum convallis fermentum ut id metus. Ut nec lorem non lectus imperdiet viverra ac eu nulla. Quisque et felis sed elit posuere condimentum. Nulla a cursus eros, sit amet tincidunt lacus."
      }, {
        "expression": " 3 < {summ} <= 5",
        "html": "You got {summ} points, persona 2 </br> </br> <img src='https://media.istockphoto.com/id/817260662/photo/tv-test-card-or-test-pattern-sd-4-3-ratio-generic.jpg?s=170667a&w=0&k=20&c=GVIhs2lQT4QFLi9gvqylgykzqv1C7drUwgwpZ0HdyIg='> <br> Nullam vel maximus erat, ut iaculis enim. Praesent quis mauris nec nulla auctor volutpat et vitae tellus. Mauris vestibulum sodales ultricies. Integer sit amet tellus mollis, eleifend nunc in, ultricies ex. Etiam et massa bibendum, commodo lorem nec, euismod massa. Praesent a odio vel ipsum convallis fermentum ut id metus. Ut nec lorem non lectus imperdiet viverra ac eu nulla. Quisque et felis sed elit posuere condimentum. Nulla a cursus eros, sit amet tincidunt lacus. "
      }, {
        "expression": "{summ} < 3",
        "html": "You got {summ} points, persona 3 </br> </br> <img src='https://media.istockphoto.com/id/817260662/photo/tv-test-card-or-test-pattern-sd-4-3-ratio-generic.jpg?s=170667a&w=0&k=20&c=GVIhs2lQT4QFLi9gvqylgykzqv1C7drUwgwpZ0HdyIg='> Nullam vel maximus erat, ut iaculis enim. Praesent quis mauris nec nulla auctor volutpat et vitae tellus. Mauris vestibulum sodales ultricies. Integer sit amet tellus mollis, eleifend nunc in, ultricies ex. Etiam et massa bibendum, commodo lorem nec, euismod massa. Praesent a odio vel ipsum convallis fermentum ut id metus. Ut nec lorem non lectus imperdiet viverra ac eu nulla. Quisque et felis sed elit posuere condimentum. Nulla a cursus eros, sit amet tincidunt lacus."
      }],
    "pages": [
     {
      "name": "page1",
      "elements": [
        {
            "type": "image",
            "name": "banner",
            "imageLink": "https://media.istockphoto.com/id/817260662/photo/tv-test-card-or-test-pattern-sd-4-3-ratio-generic.jpg?s=170667a&w=0&k=20&c=GVIhs2lQT4QFLi9gvqylgykzqv1C7drUwgwpZ0HdyIg="
            
            
          },
       {
        "type": "matrix",
        "name": "question1",
        "titleLocation": "hidden",
        "columns": [
         {
          "value": "5",
          "text": "Strongly Agree"
         },
         {
          "value": "4",
          "text": "Agree"
         },
         {
          "value": "3",
          "text": "Neither agree nor disagree"
         },
         {
          "value": "2",
          "text": "Disagree"
         },
         {
          "value": "1",
          "text": "Strongly Disagree"
         }
        ],
        "rows": [
         {
          "value": "q1",
          "text": "I'm familiar with Digital Health concepts and technologies"
         }
        ]
       }
      ]
     },
     {
        "name": "page2",
        "elements": [
          {
              "type": "image",
              "name": "banner",
              "imageLink": "https://media.istockphoto.com/id/817260662/photo/tv-test-card-or-test-pattern-sd-4-3-ratio-generic.jpg?s=170667a&w=0&k=20&c=GVIhs2lQT4QFLi9gvqylgykzqv1C7drUwgwpZ0HdyIg="
              
              
            },
         {
          "type": "matrix",
          "name": "question2",
          "titleLocation": "hidden",
          "columns": [
           {
            "value": "5",
            "text": "Strongly Agree"
           },
           {
            "value": "4",
            "text": "Agree"
           },
           {
            "value": "3",
            "text": "Neither agree nor disagree"
           },
           {
            "value": "2",
            "text": "Disagree"
           },
           {
            "value": "1",
            "text": "Strongly Disagree"
           }
          ],
          "rows": [
           {
            "value": "q1",
            "text": "A different question"
           }
          ]
         },
         {
            type: "expression",
            name: "total result",
            title: "Total value",
            expression: "{question1.q1} + {question2.q1} ",
            "visible": false,
        }

        ]
       }
    ],
    calculatedValues: [
        {name: "summ", expression: "{question1.q1} + {question2.q1}"}
    ]
   };

const survey = new Survey.Model(surveyJson);
survey.focusFirstQuestionAutomatic = false;

function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

// survey.onComplete.add(alertResults);

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});