
  const padKeys = document.querySelectorAll('div[data-key]');

  function clickPlay () {

  }

  document.onkeydown = (event) => {
      
        // console.log(padKeys.dataset.key);
      let recoverKey = event.keyCode;
      let keyPlay = document.querySelector(`div[data-key='${recoverKey}']`);
     console.log(recoverKey);
      
     if(keyPlay) {
      keyPlay.classList.add('playing');
     }

    document.onkeyup = (event) => {
      keyPlay.classList.remove('playing');
    };


  padKeys.forEach(padKey => {
    let keyValue = parseInt(padKey.dataset.key);

    if (recoverKey === keyValue) {
        keyPlay.classList.add('playing');
      } else {
        
      }

  })
}

