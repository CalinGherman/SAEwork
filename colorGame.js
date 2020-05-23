numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset")
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i = 0; i <squares.length; i++){
        if(colors[i]){
           squares[i].style.background = colors[i]; 
        }
        else{
            squares[i].style.display = "none"
        }
    }
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i = 0; i <squares.length; i++){
           squares[i].style.background = colors[i];
            squares[i].style.display = "block"
    }
})




resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked colors
    colorDisplay.textContent = pickedColor;
    //remove the corect or try again mesage 
    messageDisplay.textContent = "";
    //to set the play again to new color after pressing it
    this.textContent = "New Colors"
    //change color of square 
    for(var i = 0; i<squares.length ; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "steelblue"
})


colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    //add Initial colors to squares-------------------------
 squares[i].style.backgroundColor = colors[i];

// add click listener to the squares----------
 squares[i].addEventListener("click", function(){
     //grab colors of clicked square--------
    let clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
       messageDisplay.textContent = "Correct"
       resetButton.textContent = "PLAY AGAIN ?"
       changeColors(clickedColor);
       h1.style.backgroundColor = clickedColor;
      
    }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
    }
 });
}

let changeColors = function(color){
    //select all squers
    for(let i = 0; i < squares.length; i++){
        //change each color to match giving color
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr = [];
    //repete num times
    for(let i = 0; i < num; i++){
        //get random colors and pish into arr
        arr.push(randomColor())
    }
    //return the array
    return arr;
}
function randomColor(){
    //pick a "red" from 0-255
    let r = Math.floor(Math.random() * 256)
    // pick a "green" from 0-255
    let g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0-255
    let b = Math.floor(Math.random() * 256)

     return "rgb(" + r + ", " + g + ", " + b + ")";
}
