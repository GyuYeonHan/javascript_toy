const SHOWING_CS = "SHOWING";

let currentCellNumber = 1;

function slideLeft() {
    const currentCell = document.querySelector(".SHOWING");
    let nextCell = document.querySelector(`.cell:nth-child(${currentCellNumber-1})`);
    currentCellNumber -= 1;

    if(!nextCell) {
        currentCellNumber = 5;
        nextCell = document.querySelector(`.cell:nth-child(${currentCellNumber})`);
    } 
    currentCell.classList.remove(SHOWING_CS);
    nextCell.classList.add(SHOWING_CS);
}

function slideRight() {
    const currentCell = document.querySelector(".SHOWING");
    let nextCell = document.querySelector(`.cell:nth-child(${currentCellNumber+1})`);
    currentCellNumber += 1;

    if(!nextCell) {
//        nextCell = document.querySelector(".cell");
        currentCellNumber = 1;
        nextCell = document.querySelector(`.cell:nth-child(${currentCellNumber})`);
    } 
    currentCell.classList.remove(SHOWING_CS);
    nextCell.classList.add(SHOWING_CS);
}


function init() {
    const firstCell = document.querySelector(".cell");
    firstCell.classList.add(SHOWING_CS);
//    setInterval(slideRight,1000);
    const leftButton = document.querySelector(".leftBtn");
    const rightButton = document.querySelector(".rightBtn");
    leftButton.addEventListener("click", slideLeft);
    rightButton.addEventListener("click", slideRight);
}

init();

