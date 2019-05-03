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
var checkedValues=[];
var userAns = [];
var correctDiv;
var checked= false;

$(document).ready(function() {
 
  $("#start_button").show();
  $("#done_button").show();

  $("#start_button").on("click", startGame);
  
  $("#done_button ").on("click", function() {
    checked =true;
  });



  function reset(){
    $("#start_button").show();
  $("#start_button").on("click", startGame);
  $("#question-div").empty();
  }

  function timer() {
    count--;
    $("#timeRemaining").text("Time Remaining: " + timeConverter(count));
    if (count === 0 || checked === true ) {
      check();
      console.log("Times up!");
      clearInterval(timer);
      clearInterval (intervalID);
      $("#question-div").empty();
      $("#done_button").css("visibility", "hidden");
      $("#timeRemaining").css("visibility", "hidden");
    };
  };

  function check(){
    var playerChoice = $("#question-div input:radio[name=answer0]:checked").val();
    userAns.push(playerChoice);
    playerChoice = $("#question-div input:radio[name=answer1]:checked").val();
    userAns.push(playerChoice);
    playerChoice = $("#question-div input:radio[name=answer2]:checked").val();
    userAns.push(playerChoice);
    playerChoice = $("#question-div input:radio[name=answer3]:checked").val();
    userAns.push(playerChoice);
    playerChoice = $("#question-div input:radio[name=answer4]:checked").val();
    userAns.push(playerChoice);
    console.log(userAns);

    if (userAns[0] == triviaQuestions[0].correctAns){
      console.log("yay");
      correct ++;
    }else{
      console.log("wrong");
      incorrect++;
    };
    if (userAns[1] == triviaQuestions[1].correctAns){
      console.log("yay");
      correct ++;
    }else{
      console.log("wrong");
      incorrect++;
    };
    if (userAns[2] == triviaQuestions[2].correctAns){
      console.log("yay");
      correct ++;
    }else{
      console.log("wrong");
      incorrect++;
    };
    if (userAns[3] == triviaQuestions[3].correctAns){
      console.log("yay");
      correct ++;
    }else{
      console.log("wrong");
      incorrect++;
    };
    if (userAns[4] == triviaQuestions[4].correctAns){
      console.log("yay");
      correct ++;
    }else{
      console.log("wrong");
      incorrect++;
    };
    for (let i =0; i <userAns.length; i++){
      if (userAns[i] === undefined){
        incorrect ++;
      }
    } 
    var newDiv = $('<h1>');
    var newDiv2 = $('<h1>');
    newDiv.text('Answers correct: ');
    newDiv.append('<span>' + correct + '</span>');
    newDiv.addClass('h1, bg-dark');
    newDiv2.text('Answers incorrect: ');
    newDiv2.append('<span>' + incorrect + '</span>');
    $(".correct").append(newDiv); 
    $(".incorrect").append(newDiv2); 
  }


function finished(){
    $("#question-div").empty();
    var newDiv = $('<h1>');
    newDiv.text('Answers correct: ' + correct);
    $(".correct").append(newDiv);
} 
  
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

}


  



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
