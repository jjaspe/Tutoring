var main=function(){
	
	$('.area').click(						
    	function()
    	{
		//Hide all (.subjects)
		$('.subjects').hide();
		 //show this one
    	 $(this).children('.subjects').show();
    	}
	);
}
	
$(document).ready(main);
	