var anOne = document.getElementById('aOne');
var anTwo = document.getElementById('aTwo');
var anThree = document.getElementById('aThree');
var subButton = document.getElementById('subButt');
var show = document.getElementById('answer');
var contin = document.getElementById('cont');

timerAll(60, 'answer');

subButton.addEventListener('click', function(e){
	event.preventDefault();
	if ((anOne.value == "'morals'" && anTwo.value == "'cpu'" && anThree.value == "'emotion'") || (anOne.value == 'morals' && anTwo.value == 'cpu' && anThree.value == 'emotion') || (anOne.value == '"morals"' && anTwo.value == '"cpu"' && anThree.value == '"emotion"') 
	){
		show.className = ('visible');
		document.getElementById('wroAns').className = ('hidden');
		subButton.className = ('hidden');
		document.getElementById('return-button').className = 'hidden';
	} else {
		show.className = ('visible');
		contin.className = ('hidden');
		document.getElementById('corAns').className = ('hidden');
		subButton.className = ('hidden');	
	}
	})

contin.addEventListener('click', function(e){
	event.preventDefault();
	window.location.href = ('puzzle4.html');
})

document.getElementById('return-button').addEventListener('click', function(e){
	event.preventDefault();
	window.location.href = ('Fail.html');
})