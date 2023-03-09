
function totalQuestionsHtml(questionArr, currentQuestion) {
    return (
    `
    <div>
        <b>${currentQuestion+1}</b> von <b>${questionArr.length}</b> Fragen
    </div>
    <button class="btn" disabled id="next-button" onclick="nextQuestion()">Nächste Frage</button>
    `
    );
}

function totalQuestionsAnsweredHtml(correct, questionArr){
    return (
    `
    Du hast <b>${correct}</b> Fragen von <b>${questionArr.length}</b> richtig beantworet
    `
    );
}