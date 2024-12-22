// const onButton=document.querySelector('.switchOn');
// const offButton=document.querySelector('.switchOff');
// const bulb=document.querySelector('.bulb');
// onButton.addEventListener('click',()=>{
//     bulb.style.backgroundColor='#FFD700'
// })
// offButton.addEventListener('click',()=>{
//     bulb.style.backgroundColor='black'
// })

const btn=document.querySelector('.btn');
const bulb=document.querySelector('.bulb');

let flag=1;
btn.addEventListener('click',()=>{
    if(flag==1){
        bulb.style.backgroundColor='#FFD700'
        flag=0;
        btn.innerHTML="ON"
    }
    else{
        bulb.style.backgroundColor='black'
        btn.innerHTML="OFF"
        flag=1;
    }
})