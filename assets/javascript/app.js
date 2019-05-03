var triviaQuestions = [{
  question: "What is the fastest land animal?",
  answers: ["Lion", "Gazelle", "Antelope", "Cheetah"],
  correctAns: "Cheetah"
},
{
  question: "What is the scientific name for modern day humans?",
  answers: ["Homo Ergaster", "Homo Neanderthalensis","Homo Sapiens", "Homo Ergaster"],
  correctAns: "Homo Sapiens"
},
{
  question: "Hippocampus is the Latin name for which marine creature?",
  answers: ["Seahorse", "Dolphin", "Whale", "Octopus"],
  correctAns: "Seahorse"
},
{
  question: "What do you call a baby bat?",
  answers: ["Chick", "Pup", "Kid", "Chick"],
  correctAns: "Pup",
},
{
  question:
    "The Kākāpō is a large, flightless, nocturnal parrot native to which country?",
  answers: ["Australia", "New Zealand", "Madagascar", "South Africa"],
  correctAns: "New Zealand",
}];

var correct = 0;
var incorrect = 0;
var count = 10;
var intervalID;
var clockRunning = false;
var number;
  

$(document).ready(function() {
 
  $("#start_button").show();

  $("#start_button").on("click", startGame);
  



  function timer() {
    count--;
    $("#timeRemaining").text("Time Remaining: " + timeConverter(count));
    if (count === 0) {
      console.log("Times up!");
      clearInterval(timer);
      clearInterval (intervalID);
      check();
    }
  };


 
  function startGame() {
    $("#start_button").css("visibility", "hidden");
    clearInterval (intervalID);
    intervalID = setInterval(timer, 1000); 
    timer();



    for (var i = 0; i < triviaQuestions.length; i++) {
    $("#question-div").append("<h2 class='h2 mb-2 mt-4'>" + triviaQuestions[i].question + "</h2>");
    for (var j = 0; j < triviaQuestions[i].answers.length; j++) {
     $("#question-div").append(
          '<input class= "mr-2 ml-3 radios" type="radio" name="answer' +
          
            i +
            '" value="' +
            triviaQuestions[i].answers[j]+
            '">' +
            triviaQuestions[i].answers[j]
        );
      }  
  };


    $(".radios").one("click", function(){
      number = $(this).val();
   });


  };

  
console.log(number);



  function timeConverter(t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

  
}); //end div
