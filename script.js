

var question = document.getElementById("maintextarea");
var beginQuiz;
var textArea = document.getElementById("textarea");


function quizopening() {

    textArea.style.visibility = "hidden"
    

    beginQuiz = document.createElement("BUTTON");
    beginQuiz.innerHTML = "Begin";
    document.body.children[4].appendChild(beginQuiz);
    beginQuiz.addEventListener("click", function () {
        question1();
    });
}
quizopening();

var timeemaining;
var totaltimegiven = 100;
var timer = document.getElementById("timer");

function countdown() {
    timeRemaining = setInterval(function() {
    totaltimegiven --;
    timer.textContent = "Time left: " + totaltimegiven;
        if (totaltimegiven <= 0) {
            clearInterval (totaltimegiven);
            totaltimegiven = 0;
            timer.textContent = "Times up"
            postquiz();
        }


    }, 1000);
}


var score = 0
function correct() {
    score += 20
}



function wrong() {
    totaltimegiven -=15;
}



var a1;
var a2;
var a3;
var a4;

//Question 1 layout.
function question1() {
    beginQuiz.remove();
    countdown();
    question.textContent = "Which built-in method returns the character at the specified index?";
        
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "characterAt()";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question2();
        wrong();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "getCharAt()";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question2();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "charAt()";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        question2();
        correct();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "none of the above";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        question2();
        wrong();

    });
}

//Question 2 layout.
function question2() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Which built-in method reverses the order of the elements of an array?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "changeOrder(order)";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question3();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "reverse()";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question3();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "sort(order)";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        question3();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "none of the above";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        question3();
        wrong();
    });
}

//Question 3 layout.
function question3() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Which of the following function of String object causes a string to be displayed in a small font, as if it were in a <small> tag?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Link()";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question4();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "small()";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question4();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "sup()";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        question4();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "sub()";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        question4();
        wrong();
    });
}

//Question 4 layout.
function question4() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "push()";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question5();
        correct();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "pop()";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question5();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Object";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("join", function () {
        
        question5();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "None of these";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("map()", function () {
        
        question5();
        wrong();
    });
}

//Question 5 layout.
function question5() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "concat()";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
       
        postquiz();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "match()";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        postquiz();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "search()";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        postquiz();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "replace()";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        postquiz();
        correct();
        
    });
}


var highscore = document.getElementById("textarea")

function postquiz() {
    correct();
    
    
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    textArea.style.visibility = "visible";
    question.textContent = "Quiz Complete! Your score is " + score + "%. Please enter your initials below."
    
    submitButton = document.createElement("BUTTON");
    submitButton.innerHTML = "Submit";
    document.body.children[4].appendChild(submitButton);
    submitButton.addEventListener("click", function () {
        localStorage.setItem("user", highscore.value);
        localStorage.setItem("score", score);
        scorepage();
    });
}


var mainText = document.getElementById("maintextarea");
var banner = document.getElementById("banner");

//High score page layout.
function scorepage() {
    

    submitButton.remove();
    
    highscore.style.visibility = "hidden";
    banner.textContent = "High Scores"
    
    mainText.textContent = localStorage.getItem("user") + ": " + localStorage.getItem("score");
    
    Restart = document.createElement("BUTTON");
    Restart.innerHTML = "Restart Quiz";
    document.body.children[4].appendChild(Restart);
    Restart.addEventListener("click", function () {
        location.reload();
    });

    clearScore = document.createElement("BUTTON");
    clearScore.innerHTML = "Clear Scores";
    document.body.children[4].appendChild(clearScore);
    clearScore.addEventListener("click", function () {
        localStorage.clear();
        question.textContent = "";
    });
}