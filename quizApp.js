//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, 
//and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them 
//appropriatly

  //code here

var User = function(name, email, password, totalScore){
	this.name = name,
	this.email = email,
	this.password = password,
	totalScore = totalScore
}

//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here

var Question = function(title, answersArray, rightAnswer, difficulty) {
	this.title = title,
	this.answersArray = answersArray,
	this.rightAnswer = rightAnswer,
	this.difficulty = difficulty
}

//Create a users Array which is going to hold all of our users.

  //code here

var users = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here

var user1 = users.push(new User("Bryan", 'bryan@gmail.com', 'pass1'));
var user2 = users.push(new User("Hailey", 'hailey@gmail.com', 'pass2'));
var user3 = users.push(new User("Tyler", 'tyler@gmail.com', 'pass3'));

//Create a questions Array which is going to hold all of our questions

  //code here

var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here

var q1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', answersArray, "True", 1);
var q2 = new Question('T/F: JavaScript is just a scripting version of Java', answersArray, "False", 2);
var q3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", answersArray, "True", 3);

//Now push all of your instances of Question into the questions Array

  //code here

questions.push(q1, q2, q3);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here

for (var i = 0; i < users.length; i++) {
	console.log(users[i]);
};

for (var i = 0; i < questions.length; i++) {
	console.log(questions[i]);
};