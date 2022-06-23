var iu = elid('in');
var g = elid('generate');
var ou = elid('out');
var cp = elid('copy');
var cl = elid('clear');
g.onclick = function(e){
	var o = '-';
	ou.value = iu.value
	.toLowerCase()
	.replace(/[^0-9a-z\s]/g, '')
	.replace(/\s\s+/g, ' ')
	.replace(/\s*$/, '')
	.replace(/\s/g, o);
}
cp.onclick = function(e){
	if(ou.value != ''){
		ou.select();
		ou.setSelectionRange(0, 99999);
		document.execCommand('copy');
	}
}
cl.onclick = function(e){
	ou.value = iu.value = '';
}
