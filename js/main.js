//Declaring variables I'm going to use later
var position = 0;
var test;
var test_status;
var question;
var choice;
var choices;
var choiceA;
var choiceB;
var choiceC;
var correct = 0;

//Here is the questions for the quiz. I'm using multi dimentional arrays for this.
//I'm storing the answer last - in the same array as the question and different choices
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
