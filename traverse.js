// DOM MANIPULATION

const h1 = document.querySelector('h1')
h1.style.textAlign = 'center';
h1.style.color = 'green' ;
h1.style.fontSize = '2.7rem';


const  ul1 = document.querySelector('ul');
// ul1.style.backgroundColor = 'black';
ul1.style.padding = '0px 300px';
// ul1.style.margin = '2px';

const listItems1 = document.querySelectorAll('.list-items');


for (let i = 0; i < listItems1.length; i++) {

    listItems1[i].style.color = 'red';
    listItems1[i].style.fontSize = '2rem';
    listItems1[i].style.border = '3px solid red';
    listItems1[i].style.margin = '20px auto';
    listItems1[i].style.padding = '20px 0px' ;
    listItems1[i].style.backgroundColor = '#f0f0f0';
    listItems1[i].style.borderRadius = '100px';
    listItems1[i].style.textAlign = 'center';
    listItems1[i].style.fontFamily = 'Arial, sans-serif';
    listItems1[i].style.fontWeight = 'bold';
    listItems1[i].style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0)';
    listItems1[i].style.listStyle = 'none';
}

// TRAVERSE THE DOM

// PARENT NODE TRAVERSAL

// let ul = document.querySelector('ul');

// console.log(ul);

// console.log(ul.parentNode.parentNode);

// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);

// console.log(html.parentElement);


//CHILD NODE TRAVERSAL

// const html1 = document.documentElement;

// console.log(html1.childNodes)
// console.log(html1.childElementCount)

let ul = document.querySelector('ul')

// console.log (ul.childNodes)
// console.log (ul.childElementCount)
// console.log(ul.firstChild)
// console.log(ul.lastChild)
console.log(ul.children)

console.log(ul.firstElementChild)
console.log(ul.lastElementChild)

ul.childNodes[1].style.backgroundColor = 'black';
ul.childNodes[5].style.backgroundColor = 'black';
ul.childNodes[9].style.backgroundColor = 'black';


// SIBLING NODE TRAVERSAL

