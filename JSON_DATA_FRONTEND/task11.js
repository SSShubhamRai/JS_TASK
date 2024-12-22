var arr=[
    {
        name:"Shubham",
        age:21,
        city:"Begusarai"
    },
    {
        name:"Shivam",
        age:20,
        city:"Bihat"
    },
    {
        name:"Saurabh",
        age:22,
        city:"Gaya"
    },
    {
        name:"Rohan",
        age:22,
        city:"Mujjafarpur"
    }
]
var sum=" "
arr.forEach(function(elem){
    sum += 
    `<div class="card">
    <h1>${elem.name}</h1>
    <h4>${elem.age}, ${elem.city}</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores voluptatibus qui et, omnis magnam hic possimus ex tenetur, veritatis voluptatum fugiat tempora cum fuga molestiae.</p>
    </div>`;
    
})

var body=document.querySelector('body')
body.innerHTML=sum
// arr.forEach(function(elem){
//     console.log(elem.name+" "+elem.age+" "+elem.city)
// })