document.addEventListener('DOMContentLoaded', () => {

    function changeColour(div) {
      // give three random amounts to rgb
      if (color == "Rainbow") {
        first = Math.floor(Math.random() * 255);
        second = Math.floor(Math.random() * 255);
        third = Math.floor(Math.random() * 255);
        div.style.backgroundColor = `rgb(${first}, ${second}, ${third})`;
        container.style.boxShadow = `5px 10px rgb(${first}, ${second}, ${third})`;
      }
      // update to white
      else if (color == "Eraser") {
        div.style.backgroundColor = "white";
        container.style.boxShadow = `5px 10px #888888`;
      }
      // update to black
      else {
        div.style.backgroundColor = "black";
        container.style.boxShadow = `5px 10px #888888`;
      }
    }

    let mouseDown = false

    // check for change on input
    document.querySelector('.size').addEventListener('keyup', () => {
        // find the Nodes, set message to blank after each change
        width = document.querySelector('.size')
        message = document.querySelector('.message');
        message.innerHTML = " "

        // check if width is a valid size
        if (width.value < 51 && width.value > 0) {
            size(width.value)
        }
        else {
            // set error message if not
            message.innerHTML = "Must be between 1 & 50";
        }
    })

    // get the main box
    const container = document.querySelector('.container')

    // function for setting amount of boxes in div - default to 16
    function size(number = 16) {
        // input squared
        total = number * number
        // remove existing nodes, so they dont overfill the page
        while (container.lastChild) {
            container.removeChild(container.lastChild)
        }
        // dynamically set the width of columns and rows
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

        // added the neccesary amount of boxes
        for (let i = 0; i < total; i++) {
            div = document.createElement('div')
            div.classList = ('div')

            container.append(div)
        }

        // make the mouseover event work, add eventlistner to all buttons
        let divs = document.querySelectorAll('.div')
        divs.forEach((div) => {
            div.addEventListener("mousedown", (event) => {
                changeColour(div)
                mouseDown = true
                event.preventDefault();
            });
            div.addEventListener('mouseover', () => mouseDown && changeColour(div))
            div.addEventListener("mouseup", () => mouseDown = false);
        })
    
    }
    // Color managment
    // get the buttons, add event listeners to all, and update color, unless clear - empty board
    color = "black"
    changes = document.querySelectorAll('.change')
    changes.forEach((change) => {
        change.addEventListener("click", () => {
            // turn all buttons back to original color
            changes.forEach((change) => {
                change.style.backgroundColor = "white"})

            // change this button to light coral
            change.style.backgroundColor = "#fdfaa6";

            // clear board
            if(change.innerHTML == "Clear"){
                let clearDivs = document.querySelectorAll('.div')
                clearDivs.forEach((c) => {
                    c.style.backgroundColor = "white";
                    container.style.boxShadow = '5px 10px #888888';
                })
            }
            else{
                // ready to paint board black or as an eraser
                return color = change.innerHTML
            }
            
        })
    })

    // call function to setup boxes
    size()
})