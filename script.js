var inputs=document.getElementsByClassName('input');
var calculation=document.getElementById('go');
var clear=document.getElementById('clear');

for (var i=0; i<inputs.length; i++){
	inputs[i].addEventListener('change',stringChanged);
}

calculation.addEventListener('click',goClicked);
clear.addEventListener('click',clearClicked);

function stringChanged(e){
	var input=String(e.target.value);
	var outputElement=document.getElementById('output');
	var outputValue=outputElement.innerHTML;
	addString(input, outputValue);
}

function addString(input, outputValue){
	var outputElement=document.getElementById('output');
	outputElement.innerHTML=outputValue+input;
}

function goClicked(e){
	document.getElementById('output').classList.toggle('show');
}

function clearClicked(e){
	document.getElementsByClassName('input').value='';
	document.getElementById('output').innerHTML='';
}