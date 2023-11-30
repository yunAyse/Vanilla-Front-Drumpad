
  const padKeys = document.querySelectorAll('div[data-key]');


  document.onkeydown = (event) => {
      

      const recoverKey = event.keyCode;
      const keyPlay = document.querySelector(`div[data-key='${recoverKey}']`);
      const myAudio = document.querySelector(`audio[data-key="${recoverKey}"]`);

     console.log(myAudio);
      
     if(keyPlay) {
      keyPlay.classList.add('playing');
      myAudio.play();
 
     }
}


    document.onkeyup = () => {
      const keyPlays = document.querySelectorAll('.key');

      keyPlays.forEach((keyPlay => {
        keyPlay.classList.remove('playing');
      
      }));

    };
