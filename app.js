const buttons = document.querySelectorAll('.btns')
const increment = document.querySelector('#increment')
const decrement = document.querySelector('#decrement')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const cound = document.querySelector('#cound')

let counter1 = 1
let counter2 = 0

buttons.forEach((i)=> {
    i.addEventListener('click' ,()=> {
    counter1 = i.innerHTML
    h1.innerHTML = counter1
    console.log('hello');
    })
})
const couterFunction = ()=> {
    decrement.addEventListener('click',()=> {
        counter2--
        p.innerHTML = counter2
        if(counter2 < 0 ){
            counter2 = 1
        }

    })
    increment.addEventListener('click',()=> {
        counter2++
        p.innerHTML = counter2 + counter1
    })
}
couterFunction()

cound.addEventListener('click',()=> {
    add()
})
const add = ()=> {
    let counts = counter2 * counter1
    p.innerHTML = counts
}

