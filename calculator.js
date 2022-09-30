const calculator = {
    //targeting the screen
    screen: document.getElementById('screen'),
    
    // targeting the screen
    button: document.querySelectorAll('button'),

    // targeting the functionalities
    ac: document.getElementById('clear'),
    del: document.getElementById('delete'),
    add: document.getElementById('add'),
    sub: document.getElementById ('sub'),
    multiply: document.getElementById('times'),
    divide: document.getElementById('divide'),
    equal: document.getElementById('equal'),

    result: []

}



let btns = calculator.button;

btns.forEach(btn => btn.addEventListener('click', (e) => { 
    e.preventDefault();
    e.stopPropagation();
    let figure = e.target.innerHTML
    calculator.screen.value += figure
}, false))

calculator.add.addEventListener('click',(e)=> {
    calculator.screen.value += "+";
    let result = calculator.result;
},false)

calculator.ac.addEventListener('click', (e) => {
    calculator.screen.value = ""
})

calculator.del.addEventListener ('click', (e) => {
    calculator.screen.value = calculator.screen.value.slice(0,-1);
})

calculator.sub.addEventListener('click',(e)=> {
    calculator.screen.value += "-";
    let result = calculator.result;
},false)

calculator.multiply.addEventListener('click',(e)=> {
    calculator.screen.value += "*";
    let result = calculator.result;
},false)

calculator.divide.addEventListener('click',(e)=> {
    calculator.screen.value += "/";
    let result = calculator.result;
},false)


calculator.equal.addEventListener('click',(e)=> {
    calculator.screen.value = eval(calculator.screen.value);
},false)



