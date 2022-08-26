// setting all the variables
const container = document.querySelector('.container')
const sizeEl = document.querySelector('.size')
// this is a let variable because we can change the size
let size = sizeEl.value
const color = document.querySelector('.color')
const resetBtn = document.querySelector('.btn')

let draw = false

function populate(size){
    container.style.setProperty('--size', size)
    // for loop to create div elements and class pixel
    for(let i = 0; i < size * size; i++){
        const div = document.createElement('div') 
        div.classList.add('pixel')

        // when we move the mouse over screen, if button isnt pressed then nothing happens
        div.addEventListener('mouseover', function(){
            if(!draw) return
            div.style.backgroundColor = color.value
        })

        div.addEventListener('mousedown', function(){
            div.style.backgroundColor = color.value
        })

        container.appendChild(div)
    }
}

function reset() {
        container.innerHTML = ''
        populate(size)
}

// even listener for mouse
// when mouse is over screen and is clicked, then draws
window.addEventListener("mousedown",function(){
    draw = true
})
window.addEventListener("mouseup",function(){
    draw = false
})



// listen for click event on reset button
resetBtn.addEventListener('click', reset)

// listen for change event on reset button
// used to be 'change' but now moved to 'keyup' so grid changes as soon as typed in
sizeEl.addEventListener('keyup', function(){
    size = sizeEl.value
    reset()
})

populate(size)