console.log('Program begins');
alert('Welcome to my first JavaScript quiz. Find out how smart are you.'); 


var score = 0;

//Model:
function Question(question, answer) {
  this.question = question;
  this.answer = answer;
}

var questions = [new Question("What is the capital of Australia?", "canberra"),
                 new Question("What is the chemical formula for water?", "h2o"),
                 new Question("What is the biggest island on the Earth?", "greenland"),
                 new Question("What is the name of nuclear plant that exploded in Ukraine?", "chernobyl"),
                 new Question("In the production of coconuts in world, which country ranks top?", "philippines")];
//End of Model


//ask all the questions
for (var i = 0; i < questions.length; i++) {
  var getAnswer = prompt(questions[i].question);
  number = i + 1;
  if (getAnswer.toLowerCase() === questions[i].answer) {
    score++;
    document.write('<p>You have answered correctly on question '+ number +'. Your score is ' + score + '.</p>');
  } else {
     document.write ('<p>Your answer on '+ number +' question is wrong, move on to the next question. Your score is ' + score + '.</p>');
  }
}

alert('You have reached the end of the test. Check your results!');

//Results
if (score === 5) {
document.write('<h2>Awesome, You got the GOLD CROWN. Congratulations, you are really smart</h2>'); // gold medalist IF statement
} else if (score === 4 || score === 3) {
    document.write('<h2>Great, You got the SILVER CROWN. You are good, but you need to read and learn more</h2>');
  }//silver medalist ELSE IF statement
    else if (score === 2 || score === 1) {
    document.write('<h2>Great, You got the BRONZE CROWN. You are okay, but you need to read and learn more and try to obtain SILVER CROWN</h2>');  
    }//bronze medalist ELSE IF statement
  else {
    document.write('<h2>Sorry, no CROWNS for you today. Learn more to get to the BRONZE CROWN achievement.</h2>');//no medalist
  }     
//Goodbye message
document.write('<p>If you want to play quiz again, just refresh the page. Thank you for playing.</p>');
//program ends

console.log('Program ends');

