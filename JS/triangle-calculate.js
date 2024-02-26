/**
 * Objective : get base, height of a triangle. calculate the area by using the provided formula and then display the area
 * step - 1 : get base value of the triangle
 * step - 2 : added an id in the base input field 
 * step - 3 : use getElementById to access the base input field
 * step - 4 : get value from the input field. (value is string now)
 * step - 5 : use parseFloat
 */

function calculateTriangleArea(){
    const triangleBaseinput = document.getElementById('triangle-base');
    const tringleBaseText = triangleBaseinput.value;
    const base = parseFloat(tringleBaseText);
    console.log(base);

    // get trigngle height
    const triangleHeightinput = document.getElementById('tringle-height');
    const tringleHeightText = triangleHeightinput.value;
    const height = parseFloat(tringleHeightText);
    console.log(height);

    //calculate area
    const area = 0.5 * base * height;
    console.log("Area of tringle is : ",  area);

    // display tringle area
    const tringleAreaSpan = document.getElementById('tringle-area');
    tringleAreaSpan.innerText = area;
}