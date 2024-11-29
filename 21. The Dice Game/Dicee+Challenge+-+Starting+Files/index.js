function randomNumberGenerator(){
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    return randomNumber1;
}

function result(p1, p2){
    if (p1 > p2){
        return "Player 1 Wins!";
    } else if (p2 > p1){
        return "Player 2 Wins!";
    } else {
        return "Draw!";
    }
}


var player1 = randomNumberGenerator();
document.querySelector(".dice>.img1").setAttribute("src", "./images/dice" + player1 + ".png");

var player2 = randomNumberGenerator();
document.querySelector(".dice>.img2").setAttribute("src", "./images/dice" + player2 + ".png");

document.querySelector("h1").innerHTML = result(player1, player2);