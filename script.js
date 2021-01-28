//ready()
$(document).ready(function() {
	//hover()
	$("#hide").hover(function(){
		//hide()
		$("#hide").hide(500)
		//show()
		$("#show").show(1000)
	});
	//click()
	$("#slide").click(function(){
		//slideToggle()
		$("form").slideToggle()
	});
	//dblclick()
	$(".with-rgba").dblclick(function(){
		//animate()
		$(".with-rgba").animate({opacity: '0.5'})
		//removeClass()
		$(".shadow").removeClass("shadow")
	});
	$("span:first").dblclick(function(){
		//fadeToggle
		$("img:first").fadeToggle(2000)
	});
	$("#btnChange").click(function(){
		//toggleClass(), draggable()
		$("#changeColor").toggleClass("darkmagenta").draggable()
	});
	//on()
	$("#css").on("mouseover", function(){
		//css()
		$(this).css("background-color", "red").draggable()
	});
	//datepicker()
	$("#datepicker").datepicker({
		inline: true
	});
});