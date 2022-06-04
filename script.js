const grid = document.querySelector('.grid');


function generateGRID(numItems) {

    let height = 40 / numItems + "em"

    let width = 40 / numItems + "em"


    let divArr = []

    for(let i = 0; i < numItems; i++) {

        divArr[i] = document.createElement("div")
        grid.appendChild(divArr[i])

        for (j = 0; j < numItems; j++) {
            // Create a new div
            const newDiv = document.createElement("div");
            // Create a class attribute
            const classAttribute = document.createAttribute("class");
            // Set the value of the class attribute
            classAttribute.value = "gamecell";
            // Add the class attribute to the div
            newDiv.setAttributeNode(classAttribute);
            // Create a style attribute for cell width
            const widthHeightAttribute = document.createAttribute("style")
            // Assign a value to the style attribute
            widthHeightAttribute.value = `width: ${width}; height: ${height};`;
            // Add the style attribute to the div
            newDiv.setAttributeNode(widthHeightAttribute);
            // Add the new element with the text content to the DOM
            divArr[i].appendChild(newDiv);
        }

    }

    onload();
    return;
    
} 



function colorGrid() {
    
    console.log("hello")
  
    return;
}


function onload() {
    let gridPixels = document.querySelectorAll(".gamecell");
    console.log(gridPixels.length)
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("click",colorGrid))
    return;
}


generateGRID(16)

