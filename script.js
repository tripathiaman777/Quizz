const questions=[
    {
        question : "Who is the Prime Minister of India?",
        a : "Rahul Gandhi",
        b: "Amit Shah",
        c: "Narendra Modi",
        d: "L.K Advani",
        correct: "Narendra Modi"
    
    }
    ,
    {
        question: "What is the capital of Denmark?",
        a: "Jakarta",
        b: "Buenos Aires",
        c:"Copenhagen",
        d:"Madrid",
        correct:"Copenhagen"
    }
    ,
    {
        question: "Which is the most popular programming language in 2021?",
        a:"C++",
        b:"Ruby",
        c:"Java",
        d:"JS",
        correct: "JS"
    },
    {
        question: "Who was the legal advisor of the Constituent Assembly?",
        a: "B.N. Rao",
        b: "Sachidanand Sinha",
        c: "B.R. Ambedkar",
        d: "Rajendra Prasad",
        correct: "B.N. Rao"
    },
    {
        question: "A circular linked list can be used for?",
        a: "Stack",
        b: "Queue",
        c: "Both Stack and Queue",
        d: "Neither Stack and Queue",
        correct: "Both Stack and Queue"
    }
]

const questionT=document.getElementById("question");
const a_text=document.getElementById("a");
const b_text=document.getElementById("b");
const c_text=document.getElementById("c");
const d_text=document.getElementById("d");
const submitBtn=document.getElementById("submit");
const correct=document.getElementById("correct");
const answer=document.getElementsByClassName("answer");
const anstext=document.getElementsByClassName("anstext");
let currentQuiz=0;
let currentQuizData=0;
const scoreshow=document.getElementsByClassName("scores")[0];
// debugger;
let n=0;
let scores=0;
loadQuiz();

function loadQuiz(){
    scoreshow.innerText=`Score: ${scores}`;
    
     currentQuizData=questions[currentQuiz];
    questionT.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    correct.innerText="";

}


function score(){
    if(anstext[n].innerText==currentQuizData.correct){
        scores++;
    }
    else{
        console.log("Hhhere");
        correct.style.backgroundColor="red";
    }
    
    scoreshow.innerText=`Score: ${scores}`;
    
    if(currentQuiz>questions.length-1){
        
     
        currentQuiz=0;
        alert(`Your Score is ${scores}`)
        scores=0;
        setTimeout(loadQuiz, 1500);  
    }
    
}


submitBtn.addEventListener("click", () => {
    // console.log("submit");
    let m=0;
    n=0;
    for(let i=0;i<answer.length;i++){
        if(answer[i].checked==true){
            m=1;
            n=i;
        }
    }
        
        if(m==1)
        {
            currentQuiz++;

            correct.innerText=currentQuizData.correct;
        
            deselectAnswers();
          
            
                score();
          
            setTimeout(loadQuiz,2000)
          
            correct.style.backgroundColor="rgba(94, 240, 10, 0.493)";
        }
        else{
            correct.innerText="Nothing is Selected";
            correct.style.backgroundColor="red";
        }

}

)

function deselectAnswers() {
        for(let i=0;i<answer.length;i++){
            answer[i].checked=false;
        }
    }
