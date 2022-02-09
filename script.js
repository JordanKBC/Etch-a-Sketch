let container = document.querySelector(".mainContainer");
let btn = document.querySelector("button");


let rowArray = [];
let gridSquareArray = []
let numSide;

//Function to prompt user to indicate number of sides
function promptNumSide () {
    numSide =prompt("Number of squares per side of grid?");
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
btn.addEventListener("click", ()=> {
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

//EventListener to clear
// btn.addEventListener("click", ()=> {
//     promptNumSide();
// });