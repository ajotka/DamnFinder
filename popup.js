// Copyright (c) 2018 AJOTKA. All rights reserved.


function damnFind(highlight, textColor, words, myClass) {

  var stringWords = '';
  for (var i=0; i < words.length; i++) {
    if( i != words.length - 1)
      stringWords = stringWords + "'" + words[i] + "',";
    else
      stringWords = stringWords + "'" + words[i] + "'";
  }

  var stringCode = 'var tables = document.getElementsByClassName("'+myClass+'");var words=['+stringWords+'];for(var i = 0; i < tables.length; i++) {var s = tables[i].innerHTML;for (var j = 0; j < words.length; j++) { s = s.replace(words[j], \'<span style="background-color:'+ highlight +';color:'+ textColor +';">\'+words[j]+\'</span>\'); } tables[i].innerHTML = s;}';

  chrome.tabs.executeScript(null,
    {code:
        stringCode
    });

}


$("#search").on('click', function() {
  var highlight = document.getElementById("highlight").value;
  var textColor = document.getElementById("textColor").value;
  var words = document.getElementById("words").value.split(',');
  var myClass = document.getElementById("myClass").value;

  damnFind(highlight, textColor, words, myClass);
});

/* events with inputs & textarea */
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

/* change tabs */
$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});