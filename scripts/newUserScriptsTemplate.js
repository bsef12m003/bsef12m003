// JavaScript Document
$(document).ready(function(e) {
    
	SubmittingForm = function() {
			//alert("The form has been validated.");
			//return true;
			$("#userForm").submit();
	}

/*
	$.validator.addMethod('rule_name', function (value, element) {
	});
*/
/*
	$.validator.addMethod('rule_name', function (value) {

	});
*/

/*
	$("#userForm").validate();
	{}	
	submitHandler:function(form){},rules:{},messages:{}
	SubmittingForm();	
*/
	$("#userForm").validate({submitHandler:function(form){
			SubmittingForm();
		},
			rules:{
			//add rules here
		},
			messages:{
			//add messages here
		}
	});

});







