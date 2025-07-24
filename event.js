// DOM MANIPULATION 

// EVENT LISTENERS

// element.addEventListener("click", function); SYNTAX

const buttontwo = document.querySelector('.btn-2')

function alertBtn (){
    alert("I love JavaScript!!");
}

buttontwo.addEventListener("click", alertBtn)

// MOUSE OVER

const button3 = document.querySelector('.btn-3')

function alertbtn (){
    alert("I hate you !!")
}

button3.addEventListener("mouseover",alertbtn)


// REVEAL EVENT

const RevealBtn = document.querySelector('.reveal-btn');

const hiddencontent = document.querySelector(".hidden-content");

function revealcontent(){
    if(hiddencontent.classList.contains('reveal-btn'))
    {
        hiddencontent.classList.remove('reveal-btn')

    }
    else{
        hiddencontent.classList.add('reveal-btn')
    }

}

RevealBtn.addEventListener('click',revealcontent);