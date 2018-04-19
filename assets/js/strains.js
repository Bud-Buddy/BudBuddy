
///////////////////////////////////////// Search JS/////////////////////////////////////////

var hybrid = "strains/search/race/hybrid"
var sativa = "strains/search/race/sativa"
var indica = "strains/search/race/indica"
placeholderString = "strains/search/race/"
var searchInput = ""   
var imgArray = [
    // Hybrid
    "assets/imgs/hybrid1.jpg", "assets/imgs/hybrid2.jpg", "assets/imgs/hybrid3.jpg", "assets/imgs/hybrid4.jpg", "assets/imgs/hybrid5.jpg", "assets/imgs/hybrid6.jpg","assets/imgs/hybrid7.jpg","assets/imgs/hybrid8.jpg","assets/imgs/hybrid9.jpg",
    // Sativa
    "assets/imgs/sativa1.jpg", "assets/imgs/sativa2.jpg", "assets/imgs/sativa3.jpg", "assets/imgs/sativa4.jpg", "assets/imgs/sativa5.jpg", "assets/imgs/sativa6.jpg","assets/imgs/sativa7.jpg","assets/imgs/sativa8.jpg","assets/imgs/sativa9.jpg",
    // Indica
    "assets/imgs/indica1.jpg", "assets/imgs/indica2.jpg", "assets/imgs/indica3.jpg", "assets/imgs/indica4.jpg", "assets/imgs/indica5.jpg", "assets/imgs/indica6.jpg","assets/imgs/indica7.jpg","assets/imgs/indica8.jpg","assets/imgs/indica9.jpg",
]

var strainAPI = "http://strainapi.evanbusse.com/SBAgs43/"
var description = "http://strainapi.evanbusse.com/SBAgs43/strains/data/desc/"


  $(document).on("click",".indica", function(){
            searchInput = indica
            // getInfo()
            appendInfo()
        })
        $(document).on("click",".sativa", function(){
            searchInput = sativa
            // getInfo()
            appendInfo()
        })
        $(document).on("click",".hybrid", function(){
            searchInput = hybrid
            // getInfo()
            appendInfo()

        })
        

function appendInfo(){
    var queryURL  = strainAPI + searchInput
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){

    for(var i=0; i<9; i++) {
        var name = response[i].name
        var type = response[i].race
        var id = response[i].id
        var image = imgArray[i]
        

        // Create New Cards
        var cardsHolder = $("#cardsDiv")
        var newCard = $("<div>") 
            newCard.addClass("card m-3")
            newCard.css({"height":"350px", "display": "inline-block","width":"300px",})
        var newImage = $("<img>")
            newImage.attr("src", image)
            newImage.addClass("searchImages")
            newImage.css({"height":"350px", "display": "inline-block","width":"350px",})
            newImage.addClass("card-img-top")
        var cardMain = $("<div>")
            cardMain.addClass("card-img-overlay")
        var cardTitle = $("<h4>")
            cardTitle.addClass("card-title")
            cardTitle.text(name)
        var cardText = $("<p>")
            cardText.addClass("card-text")
            cardText.text(type)
            cardText.text(id)

            newCard.prepend(newImage, cardMain, cardTitle, cardText)
            cardsHolder.prepend(newCard)

        var infoURL = description + id
            console.log(infoURL)

        $.ajax({
            url: queryURL,
            method:"GET"
        }).then(function(response){
            var strainInfo = response.desc
            console.log(strainInfo)
        })
            
    }

    })

}

 

//Strain Descriptions
// strainapi.evanbusse.com/SBAgs43/strains/data/desc/STRAIN_ID

//Strain Effects
// strainapi.evanbusse.com/SBAgs43/strains/data/effects/STRAIN_ID