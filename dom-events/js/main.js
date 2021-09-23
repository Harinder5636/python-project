console.log('javascript file is loading!')









//select out button 
const ul = document.querySelector('ul');
ul.addEventListener('click', handleClick);

function handleClick(evt){
console.log(evt.target);
console.dir(evt.target)
evt.target.style.color = "red";
}




const btn = document.querySelector('button');

btn.addEventListener('click', function(evt){
    const li = document.createElement('li');
    const inp = document.querySelector('input');
    // console.log(input.value)
    li.textContent = inp.value;
    // console.log(li)
    // console.log(li);
    document.querySelector('ul').appendChild(li);
    
    inp.value = ''
});
