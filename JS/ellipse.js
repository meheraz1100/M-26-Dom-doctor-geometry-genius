function calculateEllipseAreaA(){
    // get the value of a 
    const aInput = document.getElementById('Ellipse-a');
    const aText = aInput.value;
    const a = parseFloat(aText);
    console.log(a);

    // get the value of b
    const bInput = document.getElementById('Ellipse-b');
    const bText = bInput.value;
    const b = parseFloat(bText);
    console.log(b);

    // calculate the area
    const area = 3.1416 * a * b;
    console.log(area);

    //display the area
    const displayArea = document.getElementById('Ellipse-area');
    displayArea.innerText = area;
}