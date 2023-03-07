
function totalQuestionsHtml(questionArr) {
    return (
    `
    <b>1</b> von <b>${questionArr.length}</b> Fragen
    <button class="btn">Nächste Frage</button>
    `
    );
}