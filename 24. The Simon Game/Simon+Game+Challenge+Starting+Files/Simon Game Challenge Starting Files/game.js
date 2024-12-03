var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence(){
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 4);

    var randomChosenColor = buttonColors[randomNumber]

    gamePattern.push(randomChosenColor)

    //jQuery
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

    level += 1;
    $("#level-title").html("Level " + level);

}

//Button click
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    console.log(userChosenColour);

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1); 
});


//Playing sound
function playSound(name){
    // var audio = new Audio("sounds/"+ randomChosenColor +".mp3");
    // audio.play();
    var audio = new Audio("sounds/"+ name +".mp3");
    audio.play();
}



//Button animation
function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColour).removeClass("pressed");
    }, 100);
}


//Step 7
var firstKeyPress = false;
$(document).keypress(function(event){
    
    console.log(event.key);
    if(firstKeyPress === false){
        nextSequence();
        
    }

    firstKeyPress = true;
    gameStart = true;
    
})

//Step 8

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("You are right!");
        console.log(userClickedPattern);
        console.log(gamePattern);

        if (userClickedPattern !=0){
            if (currentLevel === gamePattern.length-1){
                setTimeout(function(){
                    nextSequence();
                }, 1000);
    
                userClickedPattern = [];
            }    
        }
        
    }else{
        console.log("You are wrong!");
        console.log(userClickedPattern);
        console.log(gamePattern);
        gameOver();
        startOver();
       
        
    }
}

// checkAnswer(userClickedPattern.length-1); 


//Step 9

//Game Over sound
function gameOverSound(){
    var audio = new Audio("sounds/wrong.mp3")
    audio.play();
}


function gameOver(){
    gameOverSound();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
}


// Game continuing without while loop
var gameIsOn = 1;


//Start Over
function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    firstKeyPress = false;
}


// function randomColor(){
//     var randomChosenColor = buttonColors[nextSequence()]
//     return randomChosenColor;
// }

// var randomChosenColor = randomColor();



// Experiment:
// $("#"+randomChosenColor).click(function(){
//     console.log("I got clicked!");
// })






