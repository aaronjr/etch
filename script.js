document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('.size').addEventListener('keyup', () => {
        width = document.querySelector('.size')
        size(width.value)
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
    }
    
    divs = document.querySelectorAll('.div')
        divs.forEach((div)=>{
            div.addEventListener('mouseover', () => {
                div.classList = ('color')
            })
        })

    size()
})