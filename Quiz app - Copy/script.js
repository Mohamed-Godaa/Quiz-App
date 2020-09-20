const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let qurrentQuiz = 0;
let score = 0;
let answer = undefined;
let  qurrentQuizdata = quizData[qurrentQuiz];

const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("btn");
const answerEls = document.querySelectorAll(".answer");


function loadQuiz() {
    let qurrentQuizdata = quizData[qurrentQuiz];
    quiz.innerText = qurrentQuizdata.question ;
    a_text.innerText = qurrentQuizdata.a;
    b_text.innerText = qurrentQuizdata.b;
    c_text.innerText = qurrentQuizdata.c;
    d_text.innerText = qurrentQuizdata.d;
}

function checkAnswers() {
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselect() {
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    });
}

loadQuiz();

btn.addEventListener("click", () => {
    checkAnswers()
    if(checkAnswers()) {
        if (answer === qurrentQuizdata.correct){
        score++;
        }
        deselect()
        qurrentQuiz++;
        if (qurrentQuiz < quizData.length) {
            loadQuiz();   
        }else{
            alert(" Hurraaaaaaay! Finished all quizzes your score is" + score + "of" + quizData.length)
        }
    }else{
        alert("Please choose an answer");
        deselect();
        qurrentQuiz = 0;
        loadQuiz();
    }
});