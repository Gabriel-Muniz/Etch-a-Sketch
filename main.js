const container = document.querySelector('.container')
const defaultSize = 16;
let cellSize = 50;

drawGrid(cellSize);
setCellSize(cellSize)
function drawGrid(cellQuantity) {
    for (let i = 0; i < cellQuantity * cellQuantity; i++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('gridCell');
        container.appendChild(divGrid)
    }
}

function setCellSize() {
    cellSize = 800 / cellSize;
    
    getGrid().forEach(cell => {
        cell.style.width = `${cellSize}px`
        cell.style.height = `${cellSize}px`
    });
}

function getGrid(){
    const gridCells = document.querySelectorAll('.gridCell');
    return gridCells;
}

getGrid().forEach(grid => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = "#141414";
    })
});