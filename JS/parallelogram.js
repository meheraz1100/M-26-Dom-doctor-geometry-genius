function calculateParallelogramArea(){
    // get base of the parallelogram
    const baseInput = document.getElementById('Parallelogram-base');
    const baseText = baseInput.value
    const base = parseFloat(baseText);
    console.log(base);

    // get width of the parallelogram
    const heightInput = document.getElementById('Parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    // calculate the area
    const area = base * height;
    console.log("Total area of the parallelogram : ", area);

    // display the area
    const areaDisplay = document.getElementById('Parallelogram-area');
    areaDisplay.innerText = area;
}