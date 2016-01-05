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

  //Printing out the current roundCounter, showing which out of all we're on right now.
  document.getElementById("quizQuestionText").innerHTML = "Question "+(roundCounter+1)+" of "+questions.length;
  //roundCounter is saying 0 at the start of the game.
  //0 in this case means the first question in my "questions array"
  question = questions[roundCounter][0];

  //Giving choiceA the second value of the "questions"-array.
  choiceA = questions[roundCounter][1];
  //Giving choiceB the third value of the "questions"-array.
  choiceB = questions[roundCounter][2];
  //Giving choiceC the fourth value of the "questions"-array.
  choiceC = questions[roundCounter][3];

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
  //Using the variable i declared in the beginning
  //to group up the radio buttons name. getElementsByName returns an array of the items with the same name.
  choices = document.getElementsByName("choices");
  //For loop to loop through the different radio buttons
  for(var i = 0; i < choices.length; i += 1){
    //Find the radio button that is checked
    if(choices[i].checked){
      //take the value of of the checked button and store it in the choice variable I declared in the beginning.
      choice = choices[i].value;
    }
  }
  //if the value of the checked button equals to the value in the "questions"-array; which is the "answer" to the question
  if(choice == questions[roundCounter][4]){
    //then add one to the correct answered questions.
    correct += 1;
  }
  //add one to the roundCounter at the end of the function
  roundCounter += 1;
  //call the printQuestion function at the end to start over the 'printQuestion' process
  //from the beginning, so that we now cycle through the second question
  //(with our roundCounter now holding the value of = +1 compared to the previous value).
  printQuestion();
}

//A function that should be activated when the user presses the restart button.
function pageReload() {
  window.location.reload();
}

//Added a listener to wait until all items had loaded before we start the quiz.
window.addEventListener("load", printQuestion, false);
