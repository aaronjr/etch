document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('.size').addEventListener('keyup', () => {
        width = document.querySelector('.size')
        message = document.querySelector('.message');
        message.innerHTML = " "

        if(width.value < 101 && width.value > 0){
            size(width.value)
        }
        else{
            message.innerHTML = "Must be between 0 & 100";
        }
        
    })

    container = document.querySelector('.container')

    function size(number = 16){
        total = number * number
        while(container.lastChild){
            container.removeChild(container.lastChild)
        }
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

        for(let i = 0; i < total; i++){
            div = document.createElement('div')
            div.classList = ('div')
            container.append(div)
        }
        
        divs = document.querySelectorAll('.div')
        divs.forEach((div)=>{
            div.addEventListener('mouseover', () => {
                div.classList = ('color')
            })
    })
    }
    size()

})