
let questionArr = questions_japan;
let currentQuestion = 0;


function init(){
    let questions = document.getElementById('questions');
    questions.innerHTML = totalQuestionsHtml(questionArr);

    showQuestionAndAnswers();
}


function showQuestionAndAnswers(){
    let question = questionArr[currentQuestion];

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}