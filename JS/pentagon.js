function calculatePentagonArea(){
    // get base of the pentagon
    const baseInput = document.getElementById('Pentagon-base');
    const baseText = baseInput.value
    const base = parseFloat(baseText);
    console.log(base);

    // get height of the pentagon
    const heightInput = document.getElementById('Pentagon-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);
    
    // calculate the area
    const area = 0.5 * base * height;
    console.log("Total area of the pentagon : ", area);

    // display the area
    const areaDisplay = document.getElementById('Pentagon-area');
    areaDisplay.innerText = area;
}