const questions=[

    {
        question: "React is ...................... ?",
        answers: [
            {text: "Framework", correct: false},
            {text: "javasceipt Library", correct: true},
            {text: "Script ", correct: false},
            {text: "Database", correct: false},
        ]
    },



    {
        question: "which of this color is a primary color",
        answers: [
            {text: "Gray", correct: false},
            {text: "yellow", correct: true},
            {text: "light", correct: false},
            {text: "dark", correct: false},
        ]
    },
    {
        question: "which of this spelling is correct ",
        answers: [
            {text: "seemless", correct: false},
            {text: "seamless", correct: true},
            {text: "sameless", correct: false},
            {text: "simeless", correct: false},
        ]
    },



    {
        question: "which is the largest animal in the world",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is the largest continent in the world",
        answers: [
            {text: "Africa", correct: false},
            {text: "Europe", correct: true},
            {text: "North America", correct: false},
            {text: "South America", correct: false},
        ]
    }, 
    
    {    question: "which is the smallest desert in the world",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "catatumbo", correct: true},
        ]
    },

    {
        question: "which is the cooledest desert in the world",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },
    
    {
        question: "which is the smallest continent in the world",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },   
    
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQestionIndex =0;
let score =0;

function startQuiz(){
    currentQestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQestion = questions[currentQestionIndex]
    let questionNo = currentQestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQestion.
    question;

    currentQestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    }

    )

}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    }

        );
        nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";

}


function handleNextButton(){
    currentQestionIndex++;
    if(currentQestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();

    }
});
startQuiz();


