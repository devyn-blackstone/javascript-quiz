var start = document.getElementById("start");
var timer = document.getElementById("timer");
var intro = document.getElementById("intro");
var finalScore = document.getElementById("finalScore");
var submitScore = document.getElementById("submitScore");
var title = document.getElementById("title");
var answers1 = document.getElementById("answer1");
var answers2 = document.getElementById("answer2");
var answers3 = document.getElementById("answer3");
var questionsLocation = document.getElementById("questions");
var buttons = document.getElementById("buttons");
var endOfQuiz = document.getElementById('endOfQuiz');
var startOver = document.getElementById('startOver');

var questions = [
    {
    question: "To create a function we can use what kind of declaration?",
    answer: ['function', 'exclamation', 'confirming'],
    correctAnswer: 'function'
    },
    {
    question: "What is used to repeat the same code multiple times?",
    answer: ['loops', 'if/else', 'console.log'],
    correctAnswer: 'loops',
    },
    {
    question: "What key is used for the remainder operator?",
    answer: ['%', '*', '!'],
    correctAnswer: '%',
    },
    {
    question: "What tag do you put the link to your javascript file in?",
    answer: ['<script>', '<img>', '<a>'],
    correctAnswer: '<script>',
    },
    {
    question: "What data type has only true or false as its value?",
    answer: ['boolean','string', 'number'],
    correctAnswer: 'boolean',
}];

var totalTime = questions.length * 10
// var clockId = null
var index = 0

start.addEventListener("click", function(){
    intro.classList.add('hide');
    questionsLocation.classList.remove('hide');
    displayQuestion();
    clockId = setInterval(countdown, 1000)
});

function countdown(){
    timer.textContent = totalTime + 'sec'
    totalTime-- 
};

function displayQuestion(){
    if(index >= questions.length){
        endQuiz();
        finalScore.textContent = "Final Score " + totalTime;  
    }
    else{
        title.textContent = questions[index].question;
        answers1.textContent = questions[index].answer[0];
        answers2.textContent = questions[index].answer[1];
        answers3.textContent = questions[index].answer[2];
    }
};

buttons.addEventListener("click", correctAnswer);
// function nextQuestion(){
//     displayQuestion();
// }

function correctAnswer(event){
    var clickedAnswer = event.target.textContent; 
    if(clickedAnswer === questions[index].correctAnswer){
        alert('Correct');
    }
    else{
        alert('WRONG!')
        totalTime -= 5
    }
    index++
    displayQuestion();
}

function endQuiz(){
    questionsLocation.classList.add('hide');
    endOfQuiz.classList.remove('hide');
    console.log(endOfQuiz);
};

submitScore.addEventListener("click", function(){
    endOfQuiz.classList.add('hide');
    startOver.classList.remove('hide');
    console.log(startOver);
});


// store initials and score in local storage