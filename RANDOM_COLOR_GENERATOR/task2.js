var box=document.querySelector('.box')
var btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
    var c1=Math.floor(Math.random()*255);
    var c2=Math.floor(Math.random()*255);
    var c3=Math.floor(Math.random()*255);
    box.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
    box.style.height=`${c1}px`
    box.style.width=`${c2}px`
    box.style.borderRadius=`${c3}px`
})