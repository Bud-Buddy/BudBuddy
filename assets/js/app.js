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
        // console.log(snap.val())
        var nameData = snap.val().name
        var ageData = snap.val().age
        var emailData = snap.val().email
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