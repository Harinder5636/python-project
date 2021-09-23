let input;
let output;

// cache elements
const outputEls = document.querySelector('#result');
const inputEls= document.querySelector('#inputt');


document.querySelector('#addButton').addEventListener('click', adding)
document.querySelector('#subButton').addEventListener('click', sub)


function render() {
   outputEls.textContent = output
   input = inputEls.textContent
console.log(inputEls.textContent,input,"update")
    
}

function adding (){
output = parseInt(outputEls.textContent) + parseInt(inputEls.value)
render()
    // outputEls = outputEls.textContent + inputEls.textContent
}

function sub (){
    output = parseInt(outputEls.textContent) - parseInt(inputEls.value)
    render()
}