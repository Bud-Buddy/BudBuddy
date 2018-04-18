///////////////////////////// Quiz JS ///////////////////////////////////////
var questions = [
    {
    question: "On a typical Saturday night, you are...",
    answerList: [
        { strain: "indica", value: "Chilling on the couch in front of the TV" },
        { strain: "sativa", value: "Dancing like a maniac" },
        { strain: "hybrid", value: "Having dinner with friends" },
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
        { strain: "indica", value: "Housecat. Nothing but naps and belly rubs? Yes please!" },
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
    var divHolder = $('<div>')
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

///////////////////////////////////////// Search JS/////////////////////////////////////////

var hybrid = "strains/search/race/hybrid"
var sativa = "strains/search/race/sativa"
var indica = "strains/search/race/indica"
placeholderString = "strains/search/race/"
searchInput = ""
var imgArray = [
    // Hybrid
    "../imgs/hybrid1.jpg", "../imgs/hybrid2.jpg", "../imgs/hybrid3.jpg", "../imgs/hybrid4.jpg", "../imgs/hybrid5.jpg", "../imgs/hybrid6.jpg","../imgs/hybrid7.jpg","../imgs/hybrid8.jpg","../imgs/hybrid9.jpg",
    // Sativa
    "../imgs/sativa1.jpg", "../imgs/sativa2.jpg", "../imgs/sativa3.jpg", "../imgs/sativa4.jpg", "../imgs/sativa5.jpg", "../imgs/sativa6.jpg","../imgs/sativa7.jpg","../imgs/sativa8.jpg","../imgs/sativa9.jpg",
    // Indica
    "../imgs/indica1.jpg", "../imgs/indica2.jpg", "../imgs/indica3.jpg", "../imgs/indica4.jpg", "../imgs/indica5.jpg", "../imgs/indica6.jpg","../imgs/indica7.jpg","../imgs/indica8.jpg","../imgs/indica9.jpg",
]

var strainAPI = "http://strainapi.evanbusse.com/SBAgs43/"


  $(document).on("click",".indica", function(){
            searchInput = indica
            appendInfo()
        })
        $(document).on("click",".sativa", function(){
            searchInput = sativa
            appendInfo()
        })
        $(document).on("click",".hybrid", function(){
            searchInput = hybrid
            appendInfo()

        })
        

function appendInfo(){
    var queryURL  = strainAPI + searchInput
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){
        console.log("array of objects", response)

    for(var i=0; i<10; i++) {
        var name = response[i].name
        var type = response[i].race
        var image = imgArray[i]

        // Create New Cards
        var cardsHolder = $("#cardsDiv")
        var newCard = $("<div class='row'>") 
            newCard.html("<h5>"+ name + "</h5>")
        var eachType = $("<p class='card-text'>")
            eachType.text(type)
        var newImage = $("<img>")
        newImage.attr("src", image)
        newCard.prepend(newImage)
        newCard.prepend(eachType)
        cardsHolder.prepend(newCard)
    }

    })
    
}



///////////////////////////////  Newsletter JS /////////////////////////////////////
    var config = {
        apiKey: "AIzaSyCfVOWeY9yI7DmN0a8yi_KdF4t7ZBfoOdk",
        authDomain: "newuserbudbuddy.firebaseapp.com",
        databaseURL: "https://newuserbudbuddy.firebaseio.com",
        projectId: "newuserbudbuddy",
        storageBucket: "",
        messagingSenderId: "545337048381"
    };
    firebase.initializeApp(config);

    var database = firebase.database()


    database.ref("/users").on("child_added", function(snap){
        console.log(snap.val())
        var nameData = snap.val().name
        var ageData = snap.val().age
        var emailData = snap.val().email

    
        $("#newUserDiv").console.log( nameData + " " + ageData + " " + emailData )
    })

   
    
    $("#signUpBtn").on("click", function(){
        var name =  $("#name").val()
        var age = $("#age").val()
        var email = $("#email").val()
        
        database.ref("/users").push({
            name: name,
            age: age,
            email: email
        })
        $('#exampleModalCenter').modal('hide')
    })