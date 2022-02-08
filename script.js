let container = document.querySelector(".mainContainer");
let btn = document.querySelector("button");

// Loop to Create 16x16 Grid of Square Divs
let rowArray = [];
let gridSquareArray = []

let numSide =prompt("Number of squares per side of grid?");
function createGrid() {
    for (let i = 0; i < numSide; i++) {
        rowArray[i] = document.createElement("div");
        rowArray[i].classList.add("row");
        for (let j = 0; j < numSide; j++) {
            gridSquareArray[j] = document.createElement("div");
            gridSquareArray[j].classList.add("gridSquare");
            gridSquareArray[j].style.border = "0.5px solid black";
            gridSquareArray[j].style.color = "antiquewhite";
            rowArray[i].appendChild(gridSquareArray[j]);
        }
        container.appendChild(rowArray[i]);
    }
}

//EventListener to create "hover" effect
container.addEventListener("mouseover", function(event) {
    event.target.classList.add("hover");
});

createGrid();

//Reset Button + Re-create Grid
let gridNodeList = document.querySelectorAll(".gridSquare");
let jsGridArray = Array.from(gridNodeList);


btn.addEventListener("click", ()=> {
    for (i=0; i<numSide**2 ;i++) {
        jsGridArray[i].classList.remove("hover");
    }
});

