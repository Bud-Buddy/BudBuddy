///////////////////////////// Quiz JS ///////////////////////////////////////
var questions = [
    {
    question: "On a typical Saturday night, you are...",
    answerList: [
        { strain: "indica", value: "Chilling on the couch in front of the TV." },
        { strain: "sativa", value: "Dancing like a maniac." },
        { strain: "hybrid", value: "Having dinner with friends." },
    ]
    }, {
    question: "Which of the following sounds like a dream vacation to you?",
    answerList: [
        { strain: "indica", value: "Hours of lounging in the sun. Then a nap." },
        { strain: "sativa", value: "21 countries in 21 days" },
        { strain: "hybrid", value: "Equal parts relaxation and adventure." },
    ]
    }, {
    question: "What type of animal do you most relate to?",
    answerList: [
        { strain: "indica", value: "Housecat. Nothing but naps and belly rubs? Yes, please!" },
        { strain: "sativa", value: "Hummingbird. I'm always flying somewhere." },
        { strain: "hybrid", value: "Labrador retriever. I like a good cuddle after hours of playing in the yard." },
    ]
    }, {
    question: "Which color is your favorite?",
    answerList: [
        { strain: "indica", value: "Blue" },
        { strain: "sativa", value: "Hot pink" },
        { strain: "hybrid", value: "Green" },
    ]
    }, {
    question: "What ails you?",
    answerList: [
        { strain: "indica", value: "Body aches" },
        { strain: "sativa", value: "Anxiety and depression" },
        { strain: "hybrid", value: "Not much; I'm just a little bored." },
    ]
    }
];

function renderQuestions() {
    var form = $('<form id="questionForm">')
    for (var i = 0; i < questions.length; i++) {
    var divHolder = $('<div class="questionContainer">')
    var screenQuestionHolder = $('<p>').text(questions[i].question)
    divHolder.append(screenQuestionHolder)
    divHolder.append("<input type='radio' data-strain=" + questions[i].answerList[0].strain + " class='answerButton' value='" + questions[i].answerList[0] + "' name='" + i + "'>" + questions[i].answerList[0].value + "</input> </br>")
    divHolder.append("<input type='radio' data-strain=" + questions[i].answerList[1].strain + " class='answerButton' value='" + questions[i].answerList[1] + "' name='" + i + "'>" + questions[i].answerList[1].value + "</input> </br>")
    divHolder.append("<input type='radio' data-strain=" + questions[i].answerList[2].strain + " class='answerButton mb-4' value='" + questions[i].answerList[2] + "' name='" + i + "'>" + questions[i].answerList[2].value + "</input> </br>")
    form.append(divHolder)
    }

    $('#questions').append(form);
}
renderQuestions()
$(document).on("click", ".submit", collectUserAnswers)

function collectUserAnswers() {
    var tally = { indica: 0, sativa: 0, hybrid: 0 }
    var answerForm = $('#questionForm')
    var allAnswers = $(".answerButton")
    allAnswers.map(function (i, item) {
    if (allAnswers[i].checked) {
        var strain = allAnswers[i].attributes["data-strain"].value
        tally[strain]++
        console.log(tally)
    }

    })
    if (tally.sativa > tally.indica && tally.sativa > tally.hybrid) {
    console.log("sativa wins")
    $('#modalSativa').modal('show')
    }
    else if (tally.indica > tally.hybrid) {
    console.log("indica wins")
    console.log($('#modalIndica'))
    $('#modalIndica').modal('show')
    }
    else {
    console.log("hybrid wins")
    $('#modalHybrid').modal('show')
    }
}
