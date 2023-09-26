const container = document.querySelector('.container')
divArray = []
let totalCells = 256;
for (let i = 0; i < totalCells; i++) {
    let div = document.createElement('div');
    div.classList.add('grid')
    div.setAttribute('id', i+1)
    divArray[i] = div;
    console.log(divArray[i])
}

divArray.forEach(gridIndividual => {
    container.appendChild(gridIndividual)
});

container.style.width = `${Math.sqrt(totalCells)*50}px`;
