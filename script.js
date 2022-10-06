document.addEventListener('DOMContentLoaded', function(){
    container = document.querySelector('.container')
    for(let i = 0; i < 256; i++){
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
})