
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


function answer(selection){
    let question = questionArr[currentQuestion];
    let selectedQuestionNumber = Number(selection.slice(-1));

    if (selectedQuestionNumber === question['right_answer']) {
        console.log('You got the right answer');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('The answer is wrong');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
}