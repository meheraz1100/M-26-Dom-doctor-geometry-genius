function calculateRhombusArea(){
    // get base of the rhombus
    const baseInput = document.getElementById('Rhombus-base');
    const baseText = baseInput.value
    const base = parseFloat(baseText);
    console.log(base);

    // get height of the rhombus
    const heightInput = document.getElementById('Rhombus-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);
    
    // calculate the area
    const area = 0.5 * base * height;
    console.log("Total area of the rhombus : ", area);

    // display the area
    const areaDisplay = document.getElementById('Rhombus-area');
    areaDisplay.innerText = area;
}