const div2 = document.querySelector('.div2')

div2.style.margin = "20px "
div2.style.padding = "30px"
div2.style.border ="10px solid red"
div2.style.borderRadius ="10px"
div2.style.justifyContent = "center"
div2.style.textAlign = "center"

const div1 = document.querySelector('.div1')

div1.style.margin = "20px "
div1.style.padding = "30px"
div1.style.border ="10px solid red"
div1.style.borderRadius ="10px"
div1.style.justifyContent = "center"
div1.style.textAlign = "center"

const btn =document.querySelector('.btn')

btn.style.margin ="2px";
btn.style.padding = "20px 40px"
// btn.style.hover.padding = "30px 50px"


window.addEventListener('click',function()
{
    console.log("window");
}, false);

document.addEventListener('click',function(e)
{
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log("document");
}, false);

document.querySelector('.div2').addEventListener('click',function()
{
    console.log("DIV 2");
}, {once : true});

document.querySelector('.div1').addEventListener('click',function()
{
    console.log("DIV 1");
}, false);

document.querySelector('.btn').addEventListener('click',function(e)
{
    e.preventDefault();
    console.log(e.target.innerText ="clicked!!");
}, false);
