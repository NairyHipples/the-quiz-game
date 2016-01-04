/* Declaring variables I'm going to use later */

//I'm adding a roundCounter variable to hold what question we are on.
var roundCounter = 0;
//The area the question is going to be sent to
var quizArea;
//The text, saying what the question is
var quizQuestionText;
var question;
var choice;
var choices;
//Alternative A
var choiceA;
//Alternative B
var choiceB;
//Alternative C
var choiceC;
//Store how many questions the user got correct out of the total.
var correct = 0;

//Here are the questions for the quiz. I'm using multi dimentional arrays for this.
//I'm storing the answer last - in the same array as the question and the different choices
var questions = [
  [ "What is 1 + 1?", "0", "1", "2", "B" ],
  [ "What is 1 + 1?", "0", "1", "2", "B" ],
  [ "What is 1 + 1?", "0", "1", "2", "B" ],
  [ "What is 1 + 1?", "0", "1", "2", "B" ],
  [ "What is 1 + 1?", "0", "1", "2", "B" ],
  [ "What is 1 + 1?", "0", "1", "2", "B" ],
  [ "What is 1 + 1?", "0", "1", "2", "B" ],
  [ "What is 1 + 1?", "0", "1", "2", "B" ],
  [ "What is 1 + 1?", "0", "1", "2", "B" ]
 //Filler questions to begin with. there are 9 in total.
];

//A function used to print the question to the page.
function printQuestion(){
  //Fetching the area the text is going to be printed to
  quizArea = document.getElementById("quizArea");

  //roundCounter is saying 0 at the start of the game.
  //0 in this case means the first question in my "questions array"
  question = questions[roundCounter][0];

  //Printing out the quiz question to the quizArea div
  quizArea.innerHTML = "<h3>"+question+"</h3>";
  //Adding radio buttons to the quizArea div.
  quizArea.innerHTML += "<input type='radio' name='choices' value='A'> "+choiceA+"<br>";
  quizArea.innerHTML += "<input type='radio' name='choices' value='B'> "+choiceB+"<br>";
  quizArea.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br><br>";
  //I'm creating an onclick to trigger the 'checkAnswer()' function below.
  quizArea.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

}

//A function to check and store the users answer.
function checkAnswer(){
  //Do something
}

//A function that should be activated when the user presses the restart button.
function pageReload() {
  window.location.reload();
}

//Added a listener to wait until all items had loaded before we start the quiz.
window.addEventListener("load", printQuestion, false);
