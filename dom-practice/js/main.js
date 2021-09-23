console.log('main.js file is loaded')

const titleEl = document.getElementById("title"); 

console.log(titleEl, "titleEl")
console.dir(titleEl)

console.log(titleEl.className);

//change the color
// titleEl.style.color = "green";


//set font size
// // titleEl.style.fontSize = '60px';

// const pEl = document.querySelector('.cool');

// pEl.textContent = "sangam";
// console.log(pEl);

// const bodyEl = document.querySelector('body');
// bodyEl.style.backgroundColor = 'white';
// console.dir(bodyEl)

// const aEl = document.querySelectorAll('a');
// aEl.setAttribute('href', 'https;//www.google.com');

const commentEls = document.querySelectorAll('.comment');
console.log(commentEls)

commentEls.forEach((comment) => {
    console.log(comment)
})

