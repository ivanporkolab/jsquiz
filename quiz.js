console.log('Program begins');
alert('Welcome to my first JavaScript quiz. Find out how smart are you.'); 
var firstQuestion = prompt('What is the capital of Australia?');
var score = 0;
/*
Begin the quiz with first question
Score is set to 0
*/
    firstQuestion === false; 
      if (firstQuestion === 'canberra'.toLowerCase()) {
        firstQuestion === true;
        var scoreOne = 1;
        document.write('<p>You have answered correctly. Your score is ' + scoreOne + '.</p>');
        
}  else {
  var scoreOne = 0;
  document.write ('<p>Your answer is wrong, move on to the next question. Your score is ' + scoreOne + '. </p>');
}

//Second question
var secondQuestion = prompt('What is the chemical formula for water')
      secondQuestion === false; 
      if (secondQuestion === 'h2o' || secondQuestion === 'h^2o'.toLowerCase()) {
        secondQuestion === true;
        var scoreTwo = parseInt(scoreOne) + 1;
        document.write('<p>You have answered correctly. Your score is ' + scoreTwo + '.</p>')

}  else {
  var scoreTwo = parseInt(scoreOne) + 0;
  document.write ('<p>Your answer is wrong, move on to the next question. Your score is ' + scoreTwo + '.</p>');
}

//Third question
var thirdQuestion = prompt('What is the biggest island on the Earth')
      thirdQuestion === false; 
      if (thirdQuestion === 'greenland'.toLowerCase() || thirdQuestion === 'green land'.toLowerCase()) {
        thirdQuestion === true;
        var scoreThree = parseInt(scoreTwo) + 1;
        document.write('<p>You have answered correctly. Your score is ' + scoreThree + '.</p>')
}  else {
  var scoreThree = parseInt(scoreTwo) + 0;
  document.write ('<p>Your answer is wrong, move on to the next question. Your score is ' + scoreThree + '.</p>');
}

//Fourth question
var fourthQuestion = prompt('What is the nuclear plant that exploded in Ukraine?');
      fourthQuestion === false; 
      if (fourthQuestion === 'chernobyl'.toLowerCase()) {
      fourthQuestion === true; 
      var scoreFour = parseInt(scoreThree) + 1; 
      document.write('<p>You have answered correctly. Your score is ' + scoreFour + '.</p>');
} else {
  var scoreFour = parseInt(scoreThree) + 0;
  document.write ('<p>Your answer is wrong, move on to the next question. Your score is ' + scoreFour + '.</p>');
}

//Fifth question
var fifthQuestion = prompt('In the production of coconuts in world, which country ranks top?');
      fifthQuestion === false; 
      if (fifthQuestion === 'philippines'.toLowerCase()) {
      fifthQuestion === true; 
      var scoreFive = parseInt(scoreFour) + 1; 
      document.write('<p>You have answered correctly. Your score is ' + scoreFive + '.</p>');
} else {
  var scoreFive = parseInt(scoreFour) + 0;
  document.write ('<p>Your answer is wrong. Your score is ' + scoreFive + '.</p>');
}
//End of the quiz

alert('You have reached the end of the test. Check your results!');

//Results

var score = scoreFive; 
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

