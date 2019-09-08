//to strike off the todo
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

//click x to delete todo
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//add new to-do
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab new text for todo
		var todoText = $(this).val();
		$(this).val("");
		//create new todo
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$("i").click(function(){
	$("input[type='text']").fadeToggle();
});