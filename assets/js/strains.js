///////////////////////////////////////// Search JS/////////////////////////////////////////
(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();



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

    for(var i=0; i<9; i++) {
        var name = response[i].name
        var type = response[i].race
        var id = response[i].id
        var image = imgArray[i]


        // Create New Cards
        var cardsHolder = $("#cardsDiv")
        var cardContainer = $("<div>")
            cardContainer.addClass("border")
        var newCard = $("<div>") 
            newCard.addClass("card border m-5")
            newCard.css({"height":"", "display": "inline-block","width":""})
        var newImage = $("<img>")
            newImage.attr("src", image)
            newImage.addClass("searchImages")
            newImage.css({"height":"350px", "display": "inline-block","width":"",})
            newImage.addClass("card-img-top")
        var cardMain = $("<div>")
            cardMain.addClass("card-img-overlay")
        var cardTitle = $("<h4>")
            cardTitle.addClass("card-header lead")
            cardTitle.text(name)
       
        var cardInfoText = $("<p>")
            cardInfoText.addClass("card-text")
            // cardInfoText.text(info)


            
            newCard.prepend(cardContainer, newImage, cardMain, cardTitle, cardInfoText)
            cardsHolder.prepend(newCard)
            
            var infoURL = description + id
    
         $.ajax({
                    url: infoURL,
                    method:"GET"
                }).then(function(response){
                    var info = response.desc
                    console.log("url" + infoURL + "info : "+ info)     
            })
            
    }

    })

}

 

//Strain Descriptions
// strainapi.evanbusse.com/SBAgs43/strains/data/desc/STRAIN_ID

//Strain Effects
// strainapi.evanbusse.com/SBAgs43/strains/data/effects/STRAIN_ID