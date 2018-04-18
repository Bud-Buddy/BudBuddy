
///////////////////////////////////////// Search JS/////////////////////////////////////////

var hybrid = "strains/search/race/hybrid"
var sativa = "strains/search/race/sativa"
var indica = "strains/search/race/indica"
placeholderString = "strains/search/race/"
searchInput = ""
var imgArray = [
    // Hybrid
    "assets/imgs/hybrid1.jpg", "assets/imgs/hybrid2.jpg", "assets/imgs/hybrid3.jpg", "assets/imgs/hybrid4.jpg", "assets/imgs/hybrid5.jpg", "assets/imgs/hybrid6.jpg","assets/imgs/hybrid7.jpg","assets/imgs/hybrid8.jpg","assets/imgs/hybrid9.jpg",
    // Sativa
    "assets/imgs/sativa1.jpg", "assets/imgs/sativa2.jpg", "assets/imgs/sativa3.jpg", "assets/imgs/sativa4.jpg", "assets/imgs/sativa5.jpg", "assets/imgs/sativa6.jpg","assets/imgs/sativa7.jpg","assets/imgs/sativa8.jpg","assets/imgs/sativa9.jpg",
    // Indica
    "assets/imgs/indica1.jpg", "assets/imgs/indica2.jpg", "assets/imgs/indica3.jpg", "assets/imgs/indica4.jpg", "assets/imgs/indica5.jpg", "assets/imgs/indica6.jpg","assets/imgs/indica7.jpg","assets/imgs/indica8.jpg","assets/imgs/indica9.jpg",
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
        var newCard = $("<div>") 
            newCard.html(name)
        var eachType = $("<p>")
            eachType.text(type)
        var newImage = $("<img>")
        newImage.attr("src", image)
        newImage.addClass("searchImages")
        newCard.prepend(newImage)
        newCard.prepend(eachType)
        cardsHolder.prepend(newCard)
    }

    })
    
}

