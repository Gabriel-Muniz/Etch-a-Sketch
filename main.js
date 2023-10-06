const container = document.querySelector('.container-grid');
const slider = document.querySelector('.slider-grid');
const sliderOutput = document.querySelectorAll('.slider-value')
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

slider.oninput = function() {
    Array.from(sliderOutput).forEach(span => {
        span.textContent = this.value;
    })
    deleteGrid()
    drawGrid(this.value);
    setCellSize(this.value)
}

function setCellSize(cellNewSize) {
    cellSize = (700 / cellNewSize) - 2;
    
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
            grid.style.backgroundColor = `rgb${getRandomColor()}`;
        })
    });
}

function getRandomColor(){
    let red, green, blue;
    red = getRandomNumber(255);
    green = getRandomNumber(255);
    blue = getRandomNumber(255);
    return `(${red}, ${green}, ${blue})`;
}

console.log(getRandomColor());
function getRandomNumber(desiredNum) {
    let num = Math.random() * desiredNum;
    Math.floor(num);
    return num;
}

function deleteGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}
