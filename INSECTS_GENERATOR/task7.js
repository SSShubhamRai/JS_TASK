var btn=document.querySelector("button")
var arr=[
"https://imgs.search.brave.com/IG1d858NHU2i2-Kw6_wtky4KM7L9CZuRZjRD8kyove8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NS9JbnNlY3QucG5n",
"https://imgs.search.brave.com/MGastpJaqeAd9P7cVwRMtAUkOZUsa9yd1OOyFy-1Mbg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEvQnV0/dGVyZmx5LVBORy1U/cmFuc3BhcmVudC1J/bWFnZXMucG5n",
"https://imgs.search.brave.com/iSC1e48GLdLM-8zYjX-deO3qruAdhCKjFfsgI2BrVPA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTYvUmVk/LUxhZHlidWctSW5z/ZWN0LVBORy1GaWxl/LnBuZw",
"https://imgs.search.brave.com/qZdkOyYNmkPTP6CfGJdTM2177WbQx029y5uQiQ-yOWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NS9JbnNlY3QtUE5H/LUNsaXBhcnQucG5n"
]

btn.addEventListener('click',function(){
    var valueX=Math.random()*100;
    var valueY=Math.random()*100;
    var rotate=Math.random()*360;
    var num=Math.floor(Math.random()*arr.length)

    var img=document.createElement("img")
    img.setAttribute("src",arr[num]);
    document.body.appendChild(img)
    img.style.height="140px"
    img.style.position='absolute'
    img.style.left=valueX+'%'
    img.style.top=valueY+'%'
    img.style.rotate=rotate+'deg'
    
})