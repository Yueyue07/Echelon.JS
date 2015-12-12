var currentStage;
getLocal();

if (currentStage < 9) {
  alert('Cheater');
  window.location.href = 'index.html';
} else {

  var anOne = document.getElementById('aOne');
  var anTwo = document.getElementById('aTwo');
  var submitButt = document.getElementById('subButt');
  var showCor = document.getElementById('res-correct');
  var showWro = document.getElementById('res-wrong');
  var cont = document.getElementById('cont');

  var disableButtons = function() {
    anOne.disabled = true;
    anTwo.disabled = true;
    submitButt.disabled = true;
  };

  timerAll(90);

  submitButt.addEventListener('click', function(e){
    e.preventDefault();
    if ((anOne.value == 12 && anTwo.value == 'undefined') || (anOne.value == 12 && anTwo.value == 'Undefined')){
    	showCor.className = ('visible');
      localize(10);
      disableButtons();
      stopTimer();
    } else {
      if (currentStage % 2 === 0) {
        localize(currentStage - 1);
      }
    	showWro.className = ('visible');
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
    window.location.href = "interm1.html";
  });
}
