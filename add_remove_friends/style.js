var btn=document.querySelector(".btn")
var h1=document.querySelector('h1')

btn.addEventListener('click',()=>{
    h1.innerHTML='Request Sending.....'
    h1.style.color='yellow'
    setTimeout(function(){
        h1.innerHTML='Friends'
        h1.style.color='green'
    },3000)
})