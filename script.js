const drawingBoard = document.querySelector('.drawing-board');
let rows = [];
for(let i = 0; i < 16 * 16; i++){
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('single-block');
    drawingBoard.appendChild(tempDiv);
}
const gridDivs = document.querySelectorAll('.single-block');

window.addEventListener('mousedown', (e) => {
    gridDivs.forEach(gridElement => {
        gridElement.addEventListener('mouseover', addListener);
    });
});

window.addEventListener('mouseup', (e) => {
    gridDivs.forEach(gridElement => {
        gridElement.removeEventListener('mouseover', addListener);
    });
});

function addListener(e){
    e.target.classList.add('colored');
}