
let currentQuestion = 0;

function init(){
    let questionArr = questions_japan;
    let questions = document.getElementById('questions');

    questions.innerHTML = totalQuestionsHtml(questionArr);
}


function showQuestion(){

}