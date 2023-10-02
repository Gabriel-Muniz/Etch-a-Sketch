const container = document.querySelector('.container');
const resizeBtn = document.querySelector('.resize-btn');
const defaultSize = 16;
let cellSize = defaultSize;

drawGrid(cellSize);

function drawGrid(cellQuantity) {
    for (let i = 0; i < cellQuantity * cellQuantity; i++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('gridCell');
        container.appendChild(divGrid)
    }
    setCellSize(cellQuantity);
    addMouseoverEventListeners();
}

function setCellSize(cellNewSize) {
    cellSize = 800 / cellNewSize;
    
    getGrid().forEach(cell => {
        cell.style.width = `${cellSize}px`
        cell.style.height = `${cellSize}px`
    });
}

function getGrid(){
    const gridCells = document.querySelectorAll('.gridCell');
    return gridCells;
}

function addMouseoverEventListeners() {
    getGrid().forEach(grid => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = "#141414";
        })
    });
}

function deleteGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

resizeBtn.addEventListener('click', () => {
    let newSize = prompt("How many cells do you want?", defaultSize);
    console.log("Button clicked");
    deleteGrid()
    drawGrid(newSize);
    setCellSize(newSize)
})
