const container = document.querySelector('.container')
divArray = []
let totalCells = 256;
for (let i = 0; i < totalCells; i++) {
    let div = document.createElement('div');
    div.classList.add('grid')
    div.setAttribute('id', i + 1)
    divArray[i] = div;
    container.appendChild(div)
}

container.style.width = `${Math.sqrt(totalCells) * 50}px`;
console.log(divArray.length)
divArray.forEach(gridIndividual => {
    gridIndividual.addEventListener('mouseover', () => {
        gridIndividual.style.backgroundColor = '#141414';
    })
});