function populate() {
    if(quiz.isEnded()){
       showScores();
    }
    else{
        
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();

    }
}

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Questão " + currentQuestionNumber + " de  " + quiz.questions.length;

};

function showScores() {
	var gameOverHtml = "<h1>Resultado</h1>";
	gameOverHtml += "<h2 id='score'>Acertou: " + quiz.score + "/5</h2>";
    if(quiz.score < 3){
        gameOverHtml += "<h2 id='score'>Que pena, estude mais sobre a Ironhack.</h2>";
        
        
    }else{
        gameOverHtml += "<h2 id='score'>Parabéns você conhece bem a IronHack.</h2>";
    }
setTimeout(function(){
    window.location.reload();
}, 3000)

var element = document.getElementById("quiz");
element.innerHTML = gameOverHtml;

} 

var questions = [
	new Question("Em que ano a Ironhack foi fundada?", ["2018", "2021", "2015", "2013"], "2013"),
	new Question("Qual o número aproximado de alunos formados?", ["2000", "500", "5000+", "1000"], "5000+"),
    new Question("Onde foi inaugurado o primeiro Câmpus IronHack?", ["Barcelona", "Miami", "Paris", "Berlim"], "Barcelona"),
	new Question("Em 2021, a Ironhack recebeu um aporte de...", ["U$1 Milhão", "U$5 Milhões ", "U$10 Milhões", "U$20 Milhões"], "U$20 Milhões"),
    new Question("Qual a melhor Lead Teacher da Ironhack mundial?", ["Karen Okasaki", "Karen Okasaki", "Karen Okasaki", "Karen Okasaki"], "Karen Okasaki"),
		
];

var quiz = new Quiz(questions);

populate();
