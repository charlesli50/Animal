/* reading the submit and output as JSON */

function display() {
	data = $('form').serializeArray()
	console.log(data)
	$("#result").html(JSON.stringify(data))
}

$("form").submit(function(e) {
    e.preventDefault();
});

/* "other" text option on radio buttons disabled and enabled with "other" radio button selected */

// animal type
$('#other_ani').click(function(){
	if ($("#other_animal").is(":checked")){
		console.log("its a checkeded")
		$("#other_animal_text").prop("disabled", false)
		$("#other_animal_text").prop("required", true)
	}
})
$('#dog_animal').click(function(){
	if ($("#dog_animal").is(":checked")){
		console.log("its a checkeded")
		$("#other_animal_text").prop("disabled", true)
		$("#other_animal_text").prop("required", false)
	}
})
$('#cat_animal').click(function(){
	if ($("#cat_animal").is(":checked")){
		console.log("its a checkeded")
		$("#other_animal_text").prop("disabled", true)
		$("#other_animal_text").prop("required", false)
	}
})
// dropped at rotherwood

$('#other_dro').click(function(){
	if ($("#other_dropped").is(":checked")){
		console.log("its a checkeded")
		$("#other_dropped_text").prop("disabled", false)
		$("#other_dropped_text").prop("required", true)
	}
})
$('#other_yes').click(function(){
	if ($("#other_yes").is(":checked")){
		console.log("its a checkeded")
		$("#other_dropped_text").prop("disabled", true)
		$("#other_dropped_text").prop("required", false)
	}
})
$('#other_no').click(function(){
	if ($("#other_no").is(":checked")){
		console.log("its a checkeded")
		$("#other_dropped_text").prop("disabled", true)
		$("#other_dropped_text").prop("required", false)
	}
})
// dropped off by who

$('#other_b').click(function(){
	if ($("#other_by").is(":checked")){
		console.log("its a checkeded")
		$("#other_by_text").prop("disabled", false)
		$("#other_by_text").prop("required", true)
	}
})
$('#aco').click(function(){
	if ($("#aco").is(":checked")){
		console.log("its a checkeded")
		$("#other_by_text").prop("disabled", true)
		$("#other_by_text").prop("required", false)
	}
})
$('#finder').click(function(){
	if ($("#finder").is(":checked")){
		console.log("its a checkeded")
		$("#other_by_text").prop("disabled", true)
		$("#other_by_text").prop("required", false)
	}
})


//switching between forms


$('#dog_select').on("click", function(){
	$('#cat_select, #other_select').removeClass("selected")
	$('#dog_select').addClass("selected")
	$('#cat_form, #other_form').hide()
	$('#dog_form').show()
})
$('#cat_select').on("click", function(){
	$('#dog_select, #other_select').removeClass("selected")
	$('#cat_select').addClass("selected")
	$('#dog_form, #other_form').hide()
	$('#cat_form').show()
})
$('#other_select').on("click", function(){
	$('#cat_select, #dog_select').removeClass("selected")
	$('#other_select').addClass("selected")
	$('#cat_form, #dog_form').hide()
	$('#other_form').show()
})

//verification

