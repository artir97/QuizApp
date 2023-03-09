
let questionArr = questions_ww1;
let currentQuestion = 0;
let correctAnswers = 0;
let AUDIO_SUCCESS = new Audio('audio/correct.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');

function init() {
    let questions = document.getElementById('questions');
    questions.innerHTML = totalQuestionsHtml(questionArr, currentQuestion);

    showQuestionAndAnswers();
}


function showQuestionAndAnswers() {
    if(gameIsOver()){
        showEndScreen();
    } else {
        updateProgressBar();
        showNextQuestion();
    }
}


function gameIsOver() {
    return currentQuestion >= questionArr.length;
}


function showEndScreen() {
    let totalAnswers = document.getElementById('total-answers');
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none';
    totalAnswers.innerHTML = totalQuestionsAnsweredHtml(correctAnswers, questionArr);
}


function showNextQuestion() {
    let question = questionArr[currentQuestion];

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function updateProgressBar() {
    let percent = (currentQuestion + 1) / questionArr.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}


function answer(selection) {
    let question = questionArr[currentQuestion];
    let selectedQuestionNumber = Number(selection.slice(-1));

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        correctAnswer(selection);
    } else {
        wrongAnswer(selection, idOfRightAnswer);
    }
    enableNextBtn();
}


function correctAnswer(selection){
    correctAnswers++;
    document.getElementById(selection).parentNode.classList.add('bg-success');
    AUDIO_SUCCESS.play();
}


function wrongAnswer(selection, idOfRightAnswer){
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    AUDIO_FAIL.play();
}


function enableNextBtn() {
    document.getElementById('next-button').disabled = false;
}


function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber === question['right_answer'];
}


function nextQuestion() {
    currentQuestion++;
    questions.innerHTML = totalQuestionsHtml(questionArr, currentQuestion);
    showQuestionAndAnswers();
    resetAnswerButtons();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');

    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame() {
    document.getElementById('end-screen').style = 'display: none';
    document.getElementById('question-body').style = '';

    currentQuestion = 0;
    correctAnswers = 0;

    resetAnswerButtons();
    init();
}


function chooseTopic(topic) {
    switch (topic) {
        case 'ww1':
            questionArr = questions_ww1;
            break;

        case 'ww2':
            questionArr = questions_ww2;
            break;

        case 'viet-war':
            questionArr = questions_vietnam;
            break;

        case 'jap-war':
            questionArr = questions_japan;
            break;

        default:
            break;
    }
    restartGame();
}