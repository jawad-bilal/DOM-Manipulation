// DOM MANIPULATION
// JUST A PRACTICE TO SEE WHAT WE CAN DO WITHIN THE DOM AND THE THINGS WE CAN SELECT
// get element by id

// const title= document.getElementById('main-heading');
// console.log(title);

// get element by class name

// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);

// get element by tag name

// const listItem = document.getElementsByTagName('li');
// console.log(listItem);

// query selector
// const firstli = document.querySelector('li');
// console.log(firstli);

// query selector all

// const Allli = document.querySelectorAll('li');
// console.log(Allli);

// STYLING ELEMENTS

// const title= document.querySelector('#main-heading');

// title.style.color = 'red' ;

// console.log(title);
//  title.style.color = 'blue';

// const listItems = document.querySelectorAll('.list-items');


// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = 'blue';
//     listItems[i].style.fontSize = '1.5rem';
//     listItems[i].style.border = '3px solid black';

// }

// CREATING ELEMENTS

const ul = document.querySelector('ul');
const li = document.createElement('li');

// ADDING ELEMENTS TO THE DOM

ul.append(li);

// MODIFTYING TEXT IN DOM
// const firstlistitem = document.querySelector('.list-items');

// console.log(firstlistitem.innerText);
// console.log(firstlistitem.textContent);
// console.log(firstlistitem.innerHTML);


li.innerText = 'X-Men';

// Modifying attributes and classes

li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const heading = document.querySelector('#main-heading');

console.log(heading.getAttribute('id'));

li.classList.add('list-items')
// li.classList.remove('list-items')
const  ul1 = document.querySelector('ul');
ul1.style.backgroundColor = 'black';
ul1.style.paddingLeft = '0px';

const listItems1 = document.querySelectorAll('.list-items');


for (let i = 0; i < listItems1.length; i++) {

    listItems1[i].style.color = 'red';
    listItems1[i].style.fontSize = '2rem';
    listItems1[i].style.border = '3px solid red';
    listItems1[i].style.margin = '10px auto';
    listItems1[i].style.padding = '10px 0px' ;
    listItems1[i].style.backgroundColor = '#f0f0f0';
    listItems1[i].style.borderRadius = '5px';
    listItems1[i].style.textAlign = 'center';
    listItems1[i].style.fontFamily = 'Arial, sans-serif';
    listItems1[i].style.fontWeight = 'bold';
    listItems1[i].style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0)';
    listItems1[i].style.listStyle = 'none';

}
li.remove();
