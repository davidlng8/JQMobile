
function test(){
	var menu = $('#menu');
	alert(menu);
}

function convert(s, val){
	//alert('clicked: '+s+' '+val);
	var itm = 0.0,deg;

	if(s == 0){
		itm = (9/5)*val +32;
		deg = 'farenheight';
	}
	else{
		itm = (val-32)*(5/9);
		deg='celcius';
	}
	
	document.getElementById('output').innerHTML = '<h3>'+itm+' degrees '+deg;
	
}

function changeLabel(V){
	//alert(document.getElementById('cFrom').options.selected.value);
	//alert(V);
	if(V == 0)
		document.getElementById('res').innerHTML = 'Farenheight';
	else
		document.getElementById('res').innerHTML = 'Celsius';
}

function setMaxMinVal(){
	var d = new Date();
	var max = d.getFullYear();
	var min = d.getFullYear()-150;
	var val = max-30;
	//alert(max+' '+min+' '+val);
	var bYr = document.getElementById('birthYr');
	var cyr = document.getElementById('CurrYr');
	bYr.min = min;
	cyr.min =min;
	bYr.max=max;
	cyr.max =max;
	bYr.value = val;
	cyr.value = max;
	cyr.data-highlight = 'true';
	bYr.data-highlight ='true';
	//alert(bYr.value);
	
}

function getAge(){
	var bYr = document.getElementById('birthYr').value;
	var cyr = document.getElementById('CurrYr').value;
	var age = cyr -bYr;
	document.getElementById('output').innerHTML = 'You are either '+age+' or '+(age-1);
}

function checkPerfect(V){
	var sum = 1;
	for(var i = 2; i <= (V/2); i++)
		sum += (V%i == 0? i:0);
	
	if(sum == V)
		document.getElementById('output').innerHTML = "You have a perfect number";
	else
		document.getElementById('output').innerHTML = 'Not perfect at all';
	
}

function isEven(V){
	if(!(V%2))
		document.getElementById('output').innerHTML = "You have an Even Number";
	else
		document.getElementById('output').innerHTML = 'Odd number over here';
	
}

