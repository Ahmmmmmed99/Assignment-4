let button1 = document.querySelector('.button-one')
let button2 = document.querySelector('.button-two')

let text = document.querySelector('.text')

button1.onclick = function() 
{
    text.innerText = "I'm right";
}

button2.onclick = function() 
{
    text.innerText = "No, I'm right";
}