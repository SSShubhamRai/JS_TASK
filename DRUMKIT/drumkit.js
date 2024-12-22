const drumButtons = document.querySelectorAll('.drum');
let currentAudio = null
  drumButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sound = button.getAttribute('data-sound');
      playSound(sound);
    });
  });

  function playSound(sound) {
  if (currentAudio !== null) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(`./drumsong/${sound}.mp3`);
  currentAudio.play();
  }
  
  