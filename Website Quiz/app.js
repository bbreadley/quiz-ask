const body = document.getElementById("mainBody")
const mainTitle = document.getElementById("mainTitle")
const answerButton = document.getElementById("answers");
const startBtn = document.getElementById("startButton");
const questions = document.getElementById("question");
const answerOne = document.getElementById("ans-1");
const answerTwo = document.getElementById("ans-2");
const answerThree = document.getElementById("ans-3");
const answerFour = document.getElementById("ans-4");
var currentQuestion = 0;
var maxQuestion = 5;
var marks = 0;

const questionsList = [
    ["1. What does HTML stand for?", "Hypertext Preprocessor", "Hypertext Markup Link", "Hypertext Markup Language", "Hypertext Webmaker"],
    ["2. Who invented the C language?", "Dennis Ritchie", "Alan Turing", "Ken Thompson", "Terry Davis"],
    ["3. Which of the following is NOT a programming language?", "Elixir", "HTML", "Holy C", "Rust"],
    ["4. What is a prime example of an OOP language?", "Python", "C", "Javascript", "C++"],
    ["5. >++++[<+++++++>-]<+.", "Rust", "Cheese", "Brainf***", "Symbol Language"]
];
const answer = ["ans-3", "ans-1", "ans-2", "ans-4", "ans-3"];

const quiz = () => {    /* Main quiz */

    // End quiz; if currentQuestion exceeds maxQuestion, quiz will end
    if (currentQuestion >= maxQuestion) {
        end();
    }
    console.log(currentQuestion);
    console.log(marks);
    answerButton.style.pointerEvents = "all";   /* Codes including .style.pointerEvents is used to avoid the user clicking more than 1 button after answering */
    questions.innerHTML = questionsList[currentQuestion][0];
    answerOne.innerHTML = questionsList[currentQuestion][1];
    answerTwo.innerHTML = questionsList[currentQuestion][2];
    answerThree.innerHTML = questionsList[currentQuestion][3];
    answerFour.innerHTML = questionsList[currentQuestion][4];
}

/* Adds event listener to 4 elements in an array. This allows for four individual event listeners in one line */
[answerOne, answerTwo, answerThree, answerFour].map(answers => answers.addEventListener("click", function () {
    console.log(answers.id);
    if (answers.id == answer[currentQuestion]){ /* For when the user gets the answer correctly */
        answerButton.style.pointerEvents = "none";
        body.style.backgroundColor = "chartreuse";
        currentQuestion += 1;
        marks += 1;
        setTimeout(() => {
            body.style.backgroundColor = "burlywood";
            quiz();
        }, 1000);

    } else {    /* For when the user gets the answer wrong */
        answerButton.style.pointerEvents = "none";
        body.style.backgroundColor = "crimson";
        currentQuestion += 1;
        setTimeout(() => {
            body.style.backgroundColor = "burlywood";
            quiz();
        }, 1000);
    }
}))

// End
const end = () => {
    questions.textContent = `You ended the quiz with ${marks} marks. Congrats!`;
    answerOne.style.display = "none";
    answerTwo.style.display = "none";
    answerThree.style.display = "none";
    answerFour.style.display = "none";
    
}

/*  
    Starts the quiz
    Hides the main menu element
*/
startBtn.addEventListener("click", () => {
    document.querySelector(".hide").style.display = "flex";
    document.querySelector("#mainMenuContainer").style.display = "none";

    quiz();
})