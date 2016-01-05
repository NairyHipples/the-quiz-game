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
  [ "If there are 6 apples and you take away 4, how many do you have?", "4", "6", "2", "A" ],
  [ "Before Mt. Everest was discovered, what was the highest mountain in the world?", "Mt. K2", "Mt. Mckinley", "Mt. Everest", "C" ],
  [ "Adam's mother had three children. The first child was named April. The second child was named May. What was the third child's name?", "Adam", "March", "June", "A" ],
  [ "If it took eight men: ten hours to build a wall, how long would it take four men to build it?", "5 hours", "15 hours", "None of the above", "C" ],
  [ "How can a man go eight days without sleep?", "By drinking RedBull", "By sleeping during the night time", "By never going to sleep", "B" ]

];

//A function used to print the question to the page.
function printQuestion(){
  //Fetching the area the text is going to be printed to
  quizArea = document.getElementById("quizArea");

  //Quiz ended with 6 of 5 questions, adding conditional statement to solve the problem.
  //Check if we are above or at the last question
  if(roundCounter >= questions.length){
    //Displays how many questions the user got correct out of the total amounts of questions.
    quizArea.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions right.</h2>";
    //If the quiz is over, change our h2 "quizQuestionText" to "Quiz Completed"
    document.getElementById("quizQuestionText").innerHTML = "Quiz Completed!";
    //If the quiz is over, add the Restart Quiz button, and that triggers our pageReload() function when pressed.
    quizArea.innerHTML += "<button class='btn btn-success btn-lg' onclick='pageReload()'>Restart Quiz</button>";

    //If the user wants to restart, set the roundCounter to 0 to load the first question
    roundCounter = 0;
    //And also set the score back to zero.
    correct = 0;

    //To prevent the printQuestion() function to run further if this if statement is true
    return false;
  }

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
  //I'm creating an onclick to trigger the 'checkChecked()' function below.
  quizArea.innerHTML += "<button class='btn btn-lg btn-primary' onclick='checkChecked()'>Submit Answer</button>";

}

//Function to see if a radiobutton is selected or not
function checkChecked(){
  choices = document.getElementsByName("choices");

  //Loop through every item in the choices array,
  for(var i = 0; i < choices.length; i+=1){
    //You can only get in here if a radio button is selected
    if(choices[i].checked){
      //if checked call the checkAnswer function
      checkAnswer();
    }
  }
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

//Adding a start button to not call the 'printQuestion()' function in the beginning
$('#startButton').click(function(){
  printQuestion();
});

//Added a listener to wait until all items had loaded before we start the quiz.
window.addEventListener("load", '', false);
