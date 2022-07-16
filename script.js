const drawingBoard = document.querySelector('.drawing-board');
const resetBtn = document.querySelector('.reset');
const changeResBtn = document.querySelector('.change-res');
const WINDOW_SIZE = 960;
let currentNumOfBlocks = 16;
let gridDivs;
createGrid(currentNumOfBlocks);
changeResBtn.addEventListener('click', changeResolution);


function createGrid(blockNum){
    //Remove event listeners so they don't cause problems
    resetBtn.removeEventListener('click', resetBtnEvent);
    window.removeEventListener('mousedown', mousedownEvent);
    window.removeEventListener('mouseup', mouseupEvent);
    currentNumOfBlocks = blockNum;
    
    //Create the drawing board, according to the blockNum parameter and the WINDOW_SIZE const
    drawingBoard.innerHTML = "";
    for(let i = 0; i < blockNum * blockNum; i++){
        const blockSize = (WINDOW_SIZE / blockNum).toString() + "px";
        const tempDiv = document.createElement('div');
        tempDiv.classList.add('single-block');
        tempDiv.style.width = blockSize;
        tempDiv.style.height = blockSize;
        drawingBoard.appendChild(tempDiv);
    }

    //Save the grid into a variable and set the various event listeners
    gridDivs = document.querySelectorAll('.single-block');
    resetBtn.addEventListener('click', resetBtnEvent);
    window.addEventListener('mousedown', mousedownEvent);
    window.addEventListener('mouseup', mouseupEvent);
}

function changeResolution(){
    let numOfBlocks = 0;
    while(numOfBlocks < 1 || numOfBlocks > 100){
        numOfBlocks = prompt("Please choose a resolution (the number of blocks per row and column) between 1 and 100!");
    }
    createGrid(numOfBlocks);
}


//Helper functions, these are separate functions so that I can remove them as needed
function mousedownEvent(e){
    gridDivs.forEach(gridElement => {
        gridElement.addEventListener('mouseover', addListener);
    });
}
function mouseupEvent(e){
    gridDivs.forEach(gridElement => {
        gridElement.removeEventListener('mouseover', addListener);
    });
}
function resetBtnEvent(e){
    gridDivs.forEach(gridElement => {
        gridElement.classList.remove('colored');
    });
}
function addListener(e){
    e.target.classList.add('colored');
}