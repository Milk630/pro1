// $(function(){
	function hungBar(){
		
		var hddb = $('#hddb');
		$(document).scroll(function(){
			if($(document).scrollTop() >= 500){
				hddb.css({display:'block'})
			}else{
				hddb.css({display:'none'})
			}
		})
	}
	hungBar();
// })