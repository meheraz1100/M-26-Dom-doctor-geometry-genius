function calculateRectangleArea(){
    // get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value
    const length = parseFloat(lengthText);
    console.log(length);

    // get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // calculate the area
    const area = length * width;
    console.log("Total area of the rectangle : ", area);

    // display the area
    const areaDisplay = document.getElementById('rectangle-area');
    areaDisplay.innerText = area;
}