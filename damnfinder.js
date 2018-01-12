var tables = document.getElementsByClassName('UFICommentActorAndBody');

/* If you want to add some words, please put them below: */
var rude = ['fuck','kurcze'];

for(var i = 0; i < tables.length; i++) {
	var s = tables[i].innerHTML;
	for (var j = 0; j < rude.length; j++) {
 		s = s.replace(rude[j], '<span style="background-color:#fac;">'+rude[j]+'</span>');
	}
	tables[i].innerHTML = s;
}