const drawingBoard = document.querySelector('.drawing-board');
let rows = [];
for(let i = 0; i < 16 * 16; i++){
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('single-block');
    drawingBoard.appendChild(tempDiv);
}