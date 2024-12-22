const people = [
    {
      name: "Nancy Kumari",
      profileImage: "https://plus.unsplash.com/premium_photo-1734354794769-2807b5dddd6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1733737272425-c7455b65e29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "10 min"
    },
    {
      name: "Samiksha Mishra",
      profileImage: "https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://plus.unsplash.com/premium_photo-1729005326649-f445d08fc65b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "1 hour"
    },
    {
      name: "Khushi Singh",
      profileImage: "https://images.unsplash.com/photo-1734015169493-845b53c1cbc2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "30 min"
    },
    {
      name: "Yashi Aarya",
      profileImage: "https://images.unsplash.com/photo-1710650010337-59acd8bb6977?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "45 min"
    },
    {
      name: "Janvi singh",
      profileImage: "https://images.unsplash.com/photo-1617462197289-8ea0a366e230?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://media.istockphoto.com/id/1768341863/photo/happy-young-indian-woman-preparing-diwali-flower-rangoli-on-floor-for-pooja-or-ritual-at-home.jpg?s=2048x2048&w=is&k=20&c=ws6s8k5ejQdM6HbFSz836I4RymNLSuZycLmMymqUsMI=",
      timeLike: "2 hours"
    },
    {
      name: "Muskan Chaudhary",
      profileImage: "https://images.unsplash.com/photo-1482555670981-4de159d8553b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1607332897173-885f1b27e7a3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "15 min"
    },
    {
      name: "Santosh Singh",
      profileImage: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1663550910342-094c562bf4bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "20 min"
    },
    {
      name: "Ravisekhar Kumar",
      profileImage: "https://plus.unsplash.com/premium_photo-1727976490037-671e484e93c2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1524660407913-af583292986a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "50 min"
    },
    {
      name: "Faiz Ahmad",
      profileImage: "https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1621786030484-4c855eed6974?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "1 hour"
    },
    {
      name: "Shubham Kumar",
      profileImage: "https://images.unsplash.com/photo-1561688711-a98d0cfd30a2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1599697976256-627739b1fe1f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "5 min"
    }
  ];
var sum =" "
people.forEach(function(elem,idx){
 sum +=`<div class="dabba">
        <div class="status">
            <img  id="${idx}" src="${elem.profileImage}" alt="">
        </div>
        <div class="detail">
            <h4>
                ${elem.name}
            </h4>
            <h6>${elem.timeLike}</h6>
        </div>
       </div>`
})  

var maindabba=document.querySelector('.maindabba')
maindabba.innerHTML=sum;

var full=document.querySelector('.full')
maindabba.addEventListener('click',function(elem){
   var story=people[elem.target.id].story
  full.style.display='block'
  full.style.backgroundImage=`url(${story})`
  setTimeout(function(){
    full.style.display='none'
  },3000)
  
})
