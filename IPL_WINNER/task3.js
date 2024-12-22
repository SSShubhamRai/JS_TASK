var teams=[
    { name: 'PBKS', logo: 'image/pbks.jpg' },
    { name: 'DC', logo: 'image/delhi.jpg' },
    { name: 'RCB', logo: 'image/rcb.jpg' },
    { name: 'CSK', logo: 'image/csk.png' },
    { name: 'MI', logo: 'image/mi.png' },
    { name: 'SRH', logo: 'image/srh.png' },
    { name: 'KKR', logo: 'image/kkr.png' },
    { name: 'RR', logo: 'image/rr.jpg' },


]

var btn=document.querySelector('button')
var h1=document.querySelector('h1')


btn.addEventListener('click',()=>{
    var num=Math.floor(Math.random()*teams.length)
    var selectedTeam=teams[num]
    // h1.innerHTML = `${selectedTeam.name} <br><img src="${selectedTeam.logo}" alt="${selectedTeam.name} Logo" style="width: 50px; height: 50px; margin-top: 10px;">`
      // Set the background image of the h1 element and display the team name
      h1.style.backgroundImage = `url(${selectedTeam.logo})`;
      h1.style.backgroundSize = 'contain';
      h1.style.backgroundRepeat = 'no-repeat';
      h1.style.backgroundPosition = 'center'; 
  
      // Display the team name inside the h1
      h1.innerHTML =" ";
})