$(document).ready(function() {
//===============++++++++++++++++======================++++++++//
    //variables
//===============++++++++++++++++======================++++++++//
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var count= 10;
  
  var intervalID;
  var clockRunning = false;

  var triviaObj = [
    {
      question: "What is the fastest land animal?",
      answers: [
        "Lion",
        "Gazelle",
        "Antelope", 
        "Cheetah"
     ],
      correctAnsInd: "3"
    },
    {
      question: "What is the scientific name for modern day humans?",
      answers: [
        "Homo Ergaster",
        "Homo Neanderthalensis",
        "Homo Sapiens",
        "Homo Ergaster"
      ],
      correctAnsInd: "2"
    },
    {
      question: "Hippocampus is the Latin name for which marine creature?",
      answers: [
        "Seahorse",
        "Dolphin",
        "Whale",
        "Octopus"
      ],
      correctAnsInd: "0"
    },
    {
    question: "What do you call a baby bat?",
    answers: [
      "Chick",
      "Pup",
      "Kid",
      "Chick"
    ],
    correctAnsInd: "1"
  },
  {
    question: "The Kākāpō is a large, flightless, nocturnal parrot native to which country?",
    answers: [
        "Australia",
        "New Zealand",
        "Madagascar",
        "South Africa"
    ],
    correctAnsInd: "1"
},
  ];

//===============++++++++++++++++======================++++++++//
  //PLACES THE QUESTIONS AND ANSWERS ONTO THE PAGE 
//===============++++++++++++++++======================++++++++//
  function showQA(){
  var h4Class = 0;
  var answerClass = 0;
  for (var i in triviaObj){
        h4Class ++;
        var questions = $( ".questions" ).append( '<h3 class= "p-2 question' + h4Class + '">' +  triviaObj[i].question +  "</h3>" );
        answersArr = (triviaObj[i].answers);
        
        console.log(answersArr.length);

        if (questions === questions){
            for (let i =0; i < answersArr.length; i++){
            var answers = $(".questions").append('<label class= "p-2"><input class = "p-3 inputs" type="radio" name="answers1" value="1">' + '<span class="pl-2">' + answersArr[i] +''+ '</span>' +'</label>');
            } 
        }
    $("#QA").html(questions);
    $("#QA").html(answers);
  }
}
//===============++++++++++++++++======================++++++++//
  //start and stop buttons
//===============++++++++++++++++======================++++++++//
$("#start-btn").show();

$("#start-btn").on("click", startGame);


function startGame(){
    if (!clockRunning){
        intervalID= setInterval(timer, 1000);
        clockRunning = true;
        timer();
    }
    $("#start-btn").hide();
    showQA();
    correctAnswers = 0;
    incorrectAnswers = 0;
    timeRemaining = 2;

}

function stop(){
    // $(".questions").hide();
}



function timer()
{
  count = count - 1;
  $("#timeRemaining").text("Time Remaining: " + timeConverter(count));
  if (count < 1)
  {
     clearInterval(intervalID);
     stop();
     console.log("DONE");
     //counter ended, do something here
     return;
  }
 
}

// check
$("input[type='radio']").click(function(){
  var radioValue = $("input[name='gender']:checked").val();
  if(radioValue){
      alert("Your are a - " + radioValue);
  }
});


function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
  
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }


 // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        // event.preventDefault();





});


