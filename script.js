document.addEventListener('DOMContentLoaded', function(){

    // check for change on input
    document.querySelector('.size').addEventListener('keyup', () => {
        // find the Nodes, set message to blank after each change
        width = document.querySelector('.size')
        message = document.querySelector('.message');
        message.innerHTML = " "

        // check if width is a valid size
        if(width.value < 101 && width.value > 0){
            size(width.value)
        }
        else{
            // set error message if not
            message.innerHTML = "Must be between 0 & 100";
        }
    })

    // get the main box
    container = document.querySelector('.container')

    // function for setting amount of boxes in div - default to 16
    function size(number = 16){
        // input squared
        total = number * number
        // remove existing nodes, so they dont overfill the page
        while(container.lastChild){
            container.removeChild(container.lastChild)
        }
        // dynamically set the width of columns and rows
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

        // added the neccesary amount of boxes
        for(let i = 0; i < total; i++){
            div = document.createElement('div')
            div.classList = ('div')
            container.append(div)
        }
        
        // make the mouseover event work
        divs = document.querySelectorAll('.div')
        divs.forEach((div)=>{
            div.addEventListener('mouseover', () => {
                div.classList = ('color')
            })
    })
    }

    // call function to setup boxes
    size()
})