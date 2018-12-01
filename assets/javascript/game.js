
    // Number user has to get. Randomly ranges from 19-120.
    var numToTarget = [Math.floor(Math.random() * 101)+19];
    $("#targNum").text(numToTarget);
    
     // Number that you start with.
    var myScore = 0;

    var wins = 0;
    var losses = 0;
    
    // 4 crystal images.
    var imgArray = [
    "https://www.colourbox.com/preview/4545062-red-crystal.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51snWRfynML._SL500_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWdoqVf8dP5AjAWtN4zUmEmeUI38D7uB-k1JF59MpptBVAXDlmw",
    "https://vignette.wikia.nocookie.net/thelorienlegacies/images/7/71/Green_Wind_Crystal.PNG/revision/latest?cb=20160610041134"
    ];
    //Wrapping a reset button. Everytime I tried to do this, it broke the code!

    // function reset(){} that encapsulated the whole thing from here on down.
    function reset(){
      
        $(".crystals").empty();

        // Array that has random values from 0-12.
        var randomArr = Array.from({length: 4}, () => Math.floor(Math.random() * 12)+1);
        console.log(randomArr);

        // For loop  to generate crystal images.
        for (var i = 0; i < 4; i++) {
            // giving each Crystal an img tag.
            var imageCrystal = $("<img>");
            imageCrystal.attr("src", imgArray[i]);
            imageCrystal.addClass("crystal-image");
            
            // giving each crystal a random number value.
            imageCrystal.attr("data-crystalvalue", randomArr[i]);
            $(".crystals").append(imageCrystal);

        }
    }
    reset();

    // On click function.
    $(document).on("click", ".crystal-image", function() {
    
        // Look into the individual crystal that was clicked.
        var crystalValue = ($(this).attr("data-crystalvalue"));

        // Extract the number value from it.
        crystalValue = parseInt(crystalValue);

        //Add it to my Score.
        myScore += crystalValue;
        
        
        
        // Win/ Lose Condition.
        if (myScore === parseInt(numToTarget)){
            alert("Woohoo, you won!");
            wins++;
            //resets score to 0
            $("#myNum").text(myScore = 0);
            //Gives crystals new values. I couldn't figure out how to do this!
            reset();
           
        }
        else if (myScore >= numToTarget){
            alert("Oops! You went over.");
            losses++;
            $("#myNum").text(myScore = 0);
            //Gives crystals new values. I couldn't figure out how to do this!
            reset();
            
        }
    
    // update html.
    $("#myNum").text(myScore);
    $("#myWins").text(wins);
    $("#myLosses").text(losses);

    
    
    });


    

    
   












