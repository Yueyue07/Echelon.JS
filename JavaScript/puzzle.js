var currentStage;
getLocal();

if (currentStage < 0) {
  window.location.href = 'index.html';
  alert('Cheater');
} else {

  // Add Event Listen buttons functions:
  var correct = document.getElementById('res-correct');
  var wrong = document.getElementById('res-wrong');

  var disableButtons = function () {
    $('.choices').disabled = true;
  };

  timerAll(90);

  // Event Listeners for Answers
  $('.choices').on('click', function(e) {
    if ($(this).hasClass('correct')) {
      event.preventDefault();
      localize(currentStage += 1);
      correct.className="visible";
      disableButtons();
      stopTimer();
    } else {
      event.preventDefault();
      wrong.className="visible";
      disableButtons();
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
    window.location= 'puzzle' + (currentStage + 1) + '.html';
  });
}
