var btn=document.querySelector("button")
var growth=document.querySelector("#growth")
var h1=document.querySelector("h1")
var card=document.querySelector("#card")
var grow=0
btn.addEventListener("click",()=>{
  var growInterval= setInterval(function(){
    var randomGrowth = Math.floor(Math.random() * 5) + 1;
    grow += randomGrowth;
    if (grow >= 100) {
        grow = 100;
        clearInterval(growInterval); 
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.2;
        btn.style.pointerEvents = 'none';
        // card.style.backgroundColor = 'red';
        btn.style.backgroundColor='red';
      }
     h1.innerHTML=grow+"%"
     growth.style.width = grow + "%";
   },300)
//    setTimeout(function(){
//     btn.innerHTML='Downloaded'
//     btn.style.opacity=0.2
//     btn.style.pointerEvents='none'
//     card.style.backgroundColor='red'
//    },30000)
})