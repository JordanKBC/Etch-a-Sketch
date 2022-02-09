let container = document.querySelector(".mainContainer");

let resetBtn = document.querySelector(".resetButton");

let rowArray = [];
let gridSquareArray = []
let numSide;

//Function to prompt user to indicate number of sides
function promptNumSide () {
    numSide = prompt("Number of squares per side of grid?");
    if (numSide > 100) {
        alert("Please choose a number below 100.")
        numSide = prompt("Number of squares per side of grid?");
    }
}

//Function to Create Grid
function createGrid() {
    for (let i = 0; i < numSide; i++) {
        rowArray[i] = document.createElement("div");
        rowArray[i].classList.add("row");
        for (let j = 0; j < numSide; j++) {
            gridSquareArray[j] = document.createElement("div");
            gridSquareArray[j].classList.add("gridSquare");
            gridSquareArray[j].style.border = "0.5px solid black";
            rowArray[i].appendChild(gridSquareArray[j]);
        }
        container.appendChild(rowArray[i]);
    }
}

//EventListener to create "hover" effect
container.addEventListener("mouseover", function(event) {
    event.target.classList.add("hover");
});

promptNumSide();
createGrid();

//EventListener to remove "hover" effect
resetBtn.addEventListener("click", ()=> {
    let gridNodeList = document.querySelectorAll(".gridSquare");
    let rowNodeList = document.querySelectorAll(".row");
    for (i=0; i<numSide**2 ;i++) {
        let gridNode = gridNodeList[i]
        gridNode.remove()
    }
    for (i=0; i<numSide ;i++) {
        let rowNode= rowNodeList[i]
        rowNode.remove()
    }
    promptNumSide();
    createGrid();
});


// let defaultBlackBtn = document.querySelector(".bButton");
// let randomRGBBtn = document.querySelector(".cButton");


//Random Color Generator
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }


// //Event Listener to generate random color once button is clicked
// let randomColor = getRandomColor();
// document.documentElement.style.setProperty('--some-color', 'randomColor');
