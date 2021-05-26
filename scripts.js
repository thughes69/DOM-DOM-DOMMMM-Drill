//listen for button function when content loads
document.addEventListener("DOMContentLoaded", function () {
  //create button
  let button = document.createElement("button");
  //add button text
  let btnText = document.createTextNode("Add Square!");
  //set button class
  button.className = "button";
  //put text in button
  button.appendChild(btnText);
  //put button in body
  document.body.appendChild(button);
  //create id counter
  let counter = 0;

  let container = document.createElement("div");
  container.id = "square-container";
  document.body.appendChild(container);

  //listen for button click
  button.addEventListener("click", buttonClick);
  function buttonClick() {
    //create div
    let square = document.createElement("div");
    //set id to incremented id
    square.id = counter++;
    //set div class
    square.className = "black-square";
    square.textContent = square.id;
    container.append(square);

    square.addEventListener("mouseleave", function () {
      console.log("jfsdnfkjsndkfjn");
      square.textContent = "";
    });

    square.addEventListener("mouseenter", function() {
        square.textContent = "";
    });
    
    square.addEventListener("click", squareClick);
    function squareClick () {
        //generate random int 1 through 5
        let num = Math.floor(Math.random() * 6);
        //set color based on int value
        if (num === 0) {
            square.style.backgroundColor = "pink";
        } else if (num === 1) {
            square.style.backgroundColor = "blue";
        } else if (num === 2) {
            square.style.backgroundColor = "yellow";
        } else if (num === 3) {
            square.style.backgroundColor = "green";
        } else if (num === 4) {
            square.style.backgroundColor = "purple";
        } else if (num === 5) {
            square.style.backgroundColor = "orange";
        }
    }
//listen for doubleclick on div
square.addEventListener("dblclick", squareDoubleClick);
function squareDoubleClick () 
{
    //check for odd or even
    if (square.id % 2 === 0) {
        //set variable to current ID + 1
        let elementID = parseInt(square.id) + 1;
        //set variable to element with that ID
        let element = document.getElementById(elementID);
        //delete element or display an alert depending on if element exists
        if (element == null) {
            alert("Square with ID " + elementID + " does not exist.")
        } else {
            element.parentNode.removeChild(element);
        }      
    } else {
        //set variable to current ID - 1
        let elementID = parseInt(square.id) - 1;
        //set variable to element with that ID
        let element = document.getElementById(elementID);
        //delete element or display an alert depending on if element exists
        if (element == null) {
            alert("Square with ID " + elementID + " does not exist.")
        } else {
            element.parentNode.removeChild(element);
        }
    }
}
}

});
