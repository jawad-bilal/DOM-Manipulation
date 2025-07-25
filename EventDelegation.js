// DOM MANIPULATION

const ul = document.querySelector("ul")

ul.style.padding = "20px 0px"
ul.style.height ="100px"

const listItems1 = document.querySelectorAll(".listItems")

for (let i = 0; i < listItems1.length; i++) {

    listItems1[i].style.color = 'red';
    listItems1[i].style.fontSize = '2rem';
    listItems1[i].style.border = '5px solid red';
    listItems1[i].style.margin = '10px auto';
    listItems1[i].style.padding = '10px 0px';
    listItems1[i].style.backgroundColor = '#f0f0f0';
    listItems1[i].style.borderRadius = '50px';
    listItems1[i].style.textAlign = 'center';
    listItems1[i].style.fontFamily = 'Arial, sans-serif';
    listItems1[i].style.fontWeight = 'bold';
    listItems1[i].style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0)';
    listItems1[i].style.listStyle = 'none';
    listItems1[i].style.width =" 500px"
}

// // Event Delegation

// document.querySelector("#football").addEventListener("click",function(e){

//     console.log("football is clicked!!")

//     const target =e.target;
//     // document.querySelector("li")
//     if(target.matches("li")){
//         target.style.backgroundColor ="lightgrey"
//     }
// })
// document.querySelector("#basketball").addEventListener("click",function(e){

//     console.log("basketball is clicked!!")

//     const target =e.target;
//     // document.querySelector("li")
//     if(target.matches("li")){
//         target.style.backgroundColor ="lightgrey"
//     }
// })
// document.querySelector("#golf").addEventListener("click",function(e){

//     console.log("golf is clicked!!")

//     const target =e.target;
//     // document.querySelector("li")
//     if(target.matches("li")){
//         target.style.backgroundColor ="lightgrey"
//     }
// })
// document.querySelector("#tennis").addEventListener("click",function(e){

//     console.log("tennis is clicked!!")

//     const target =e.target;
//     // document.querySelector("li")
//     if(target.matches("li")){
//         target.style.backgroundColor ="lightgrey"
//     }
// })
// document.querySelector("#boxing").addEventListener("click",function(e){

//     console.log("boxing is clicked!!")

//     const target =e.target;
//     // document.querySelector("li")
//     if(target.matches("li")){
//         target.style.backgroundColor ="lightgrey"
//     }
// })

document.querySelector("#sports").addEventListener("click", function(e){
    console.log(e.target.getAttribute('id') + " is clicked");

    const target = e.target;

    if (target.matches('li')){
        target.style.backgroundColor ="black";
    }
})

const sports =document.querySelector("#sports");
const newsports = document.createElement("li");

newsports.innerText = "rubdy";
newsports.setAttribute("id", "rubdy");


sports.appendChild(newsports);

