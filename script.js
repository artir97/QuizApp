
let questionArr = questions_japan;
let currentQuestion = 0;
let correctAnswers = 0;

function init(){
    let questions = document.getElementById('questions');
    questions.innerHTML = totalQuestionsHtml(questionArr, currentQuestion);

    showQuestionAndAnswers();
}


function showQuestionAndAnswers(){
    if (currentQuestion >= questionArr.length) {
        let totalAnswers = document.getElementById('total-answers');

        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display: none';

        totalAnswers.innerHTML = totalQuestionsAnsweredHtml(correctAnswers, questionArr);
    }else{
        let percent = (currentQuestion+1) / questionArr.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style.width = `${percent}%`;
        console.log('percent', percent);
        let question = questionArr[currentQuestion];

        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection){
    let question = questionArr[currentQuestion];
    let selectedQuestionNumber = Number(selection.slice(-1));

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber === question['right_answer']) {
        correctAnswers++;
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('The answer is wrong');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion(){
    currentQuestion++;
    questions.innerHTML = totalQuestionsHtml(questionArr, currentQuestion);
    showQuestionAndAnswers();
    resetAnswerButtons();
}


function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');

    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}