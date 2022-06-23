var tin, tout, sort, reverse, copy;
tin = elid('in');
tout = elid('out');
sort = elid('sort');
reverse = elid('reverse');
copy = elid('copy');
clear = elid('clear');
sort.onclick = function(e){
	if(tin.value){
		var array = tin.value.split('\n');
		tout.value = array.sort().join('\n');
	}
}
reverse.onclick = function(e){
	if(tin.value){
		var array = tin.value.split('\n');
		tout.value = array.sort().reverse().join('\n');
	}
}
copy.onclick = function(e){
	if(tout.value){
		tout.select();
		tout.setSelectionRange(0, 99999);
		document.execCommand('copy');
	}
}
clear.onclick = function(e){
	tin.value = '';
	tout.value = '';
	tin.focus();
}
