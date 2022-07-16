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

        //For identification purpose only
        tempDiv.classList.add('single-block');

        //Store the current brightness and color so we can access and modify on hover
        tempDiv.dataset.brightness = "100";
        tempDiv.dataset.color = "white";

        tempDiv.style.filter = `brightness(${tempDiv.dataset.brightness}%)`;
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


//Event functions, these are separate functions so that I can remove them as needed

/*  
    Only add the event listeners to the grid elements if a mousedown event happened, and remove on mouseup
    This essentially means that we can choose when we want to draw by holding down the left mouse-button
*/
function mousedownEvent(e){
    gridDivs.forEach(gridElement => {
        gridElement.addEventListener('mouseover', changeColor);
    });
}
function mouseupEvent(e){
    gridDivs.forEach(gridElement => {
        gridElement.removeEventListener('mouseover', changeColor);
    });
}

function resetBtnEvent(e){
    createGrid(currentNumOfBlocks);
}

//For the extra credit, the base exercise only required an e.target.classlist.add or e.target.style.backgroundColor
function changeColor(e){
    if(e.target.dataset.color === "white"){
        e.target.style.backgroundColor = getRandomColor();
        e.target.dataset.color = e.target.style.backgroundColor;
    }
    else{
        if(e.target.dataset.brightness > 0){
            e.target.style.filter = `brightness(${+e.target.dataset.brightness - 10}%)`;
            e.target.dataset.brightness = `${e.target.dataset.brightness - 10}`;
        }
    }
}

//Helper functions
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }