const questions = [
  {
    question: "What does the dog say?",
    options: ["very", "such", "woof"],
    correct: "woof",
    choice: null

  },
  {
    question: "What is 10 + 10?",
    options: ["8", "28", "20", "30"],
    correct: "20",
    choice: null
  },
  {
   question: "What is Athena's favorite animal?",
   options: ["jellyfish", "penguins", "otters"],
   correct: "otters",
   choice: null
 },
  {
   question: "What is 20 + 80?",
   options: ["60", "20", "100"],
   correct: "100",
   choice: null
 }
];

let numberOfQuestions = questions.length;
let currentQuestionNumber = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () =>{
  LoadQuestion();
});

function LoadQuestion() {
  document.querySelector("#question").innerHTML = questions[currentQuestionNumber].question;
  const options = document.querySelector("#options");
  options.innerHTML = "";

  for (const option of questions[currentQuestionNumber].options){
    options.innerHTML += `<button class="option">${option}</button>`;
  }

  document.querySelectorAll(".option").forEach(option => {
    option.onclick = () => {
      questions[currentQuestionNumber].choice = option.textContent;

      document.querySelector("#score").innerHTML = correct + "/" + currentQuestionNumber;
      
      if (questions[currentQuestionNumber].choice === questions[currentQuestionNumber].correct) {
        correct++;
      }

      currentQuestionNumber++;
      currentQuestionNumber >= numberOfQuestions
       ? EndQuiz()
       : LoadQuestion();
    }
  });
}

function EndQuiz() {

  document.querySelector("#question").innerHTML = "You were " +  (correct / currentQuestionNumber)*100 + "% correct.";
  document.querySelector("#options").innerHTML = "";
  const eval = document.querySelector("#eval");
  eval.innerHTML = "";

  for (const elmnt of questions){
    if  (elmnt.correct == elmnt.choice){
      eval.innerHTML += `<div id="correct">
                            <h4 id="evalQuestion">${elmnt.question}</h4>
                            <h5>Correct answer: ${elmnt.correct}</h5>
                            <h5>Your answer: ${elmnt.choice}</h5>
                          </div>`;
    }else{
      eval.innerHTML += `<div id="incorrect">
      <h4 id="evalQuestion">${elmnt.question}</h4>
      <h5>Correct answer: ${elmnt.correct}</h5>
      <h5>Your answer: ${elmnt.choice}</h5>
    </div>`;
    }
  }
}
