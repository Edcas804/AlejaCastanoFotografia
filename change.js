//Cambiar ventanas.
$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active');
	$('.galerias article').hide();
	$('.galerias article:first').show();
	
	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
		$('.galerias article').hide();

    var activeTab = $(this).attr('href');
    $(activeTab).show();	
	return false;
	}); 
	
});	