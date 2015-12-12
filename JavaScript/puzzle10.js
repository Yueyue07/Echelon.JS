var currentStage;
getLocal();

if (currentStage < 10) {
  alert('Cheater');
  window.location.href = 'index.html';
} else {

  var submitButton = document.getElementById('submit-button');
  var textInput = document.getElementById('text-input');

  var disableButton = function() {
    submitButton.disabled = true;
    textInput.disabled = true;
  };

  timerAll(90);

  submitButton.addEventListener('click', function(e){
    e.preventDefault();
    if (textInput.value === '121') {
      localize(11);
      document.getElementById('res-correct').className = 'visible';
      disableButton();
      stopTimer();
    } else {
      if (currentStage % 2 === 0) {
        localize(currentStage - 1);
      }
      document.getElementById('res-wrong').className = 'visible';
      disableButton();
      stopTimer();
    }
  });
  //Continue and Returns buttons.
  $('#return-button').on('click', function(e){
    e.preventDefault();
    window.location = 'puzzle' + currentStage + '.html';
  });

  $('#cont').on('click', function(e) {
    e.preventDefault();
    window.location= 'puzzle' + currentStage + '.html';
  });

}
