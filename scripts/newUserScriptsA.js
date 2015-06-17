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

	$.validator.addMethod('nameCheck', function (value, element) {
		
		var reg = /^[a-z]+$/i;
		
/*
		if(reg.test(value) == true)
		{
			return true;
		}
		
		else
		{
			return false;	
		}
*/		
/*		
		if(reg.test(value))
		{
			return true;
		}
		
		else
		{
			return false;	
		}
*/
/*
		if(reg.test(value))
		{
			return true;
		}
		return false;	
*/


		if(element.name == "middleName" && !value)
		{
			return true;	
		}
		
		
		return reg.test(value);



	});

	$.validator.addMethod('uName', function (value) {

		var reg = /^[a-z][a-z0-9]{5,19}$/;
		return reg.test(value);

	});


	$.validator.addMethod('password', function (value) {

		var reg = /^[a-z][a-z0-9]{5,15}$/;
		return reg.test(value);

	});

	$.validator.addMethod('CN', function (value) {

		var reg = /^\d{1,4}\-\d{3}\-\d{7}$/;
		return reg.test(value);

	});

	$.validator.addMethod('selectList', function (value) {
/*
		if(value == 0)
		{
			return false;	
		}
		
		return true;
*/
		return (!(value == 0));




	});

	$("#userForm").validate({
		submitHandler:function(form) {
			SubmittingForm();
		},
		rules: {
			
			firstName:{
				nameCheck:true
			},
			middleName:{
				nameCheck:true
			},
			lastName:{
				nameCheck:true
			},
			email:{
				required:true,
				email:true	
			},
			userName:{
				uName:true	
			},
			pass1:{
				password:true	
			},
			pass2:{
				required:true,
				equalTo:'#pass1'
			},
			contactNumber:{
				required:true,
				CN:true	
			},
			gender:{
				required:true	
			},
			'interest[]':{
				required:true	
			},
			day:{
				selectList:true	
			},
			month:{
				selectList:true	
			},
			year:{
				selectList:true	
			},
			streetAddress:{
				required:true,
				minlength:10	
			},
			city:{
				required:true	
			},
			state:{
				required:true	
			},
			country:{
				selectList:true	
			},
			profileImage:{
				required:true	
			},
			captcha:{
				required:true	
			}
		},
		messages: {
			firstName:'Invalid/Missing First Name',
			middleName:'Invalid/Missing Middle Name',
			lastName:'Invalid/Missing Last Name',
			email:{
				required:'Missing Email',
				email:'Invalid Email'	
			},
			userName:'Invalid/Misisng User Name',
			pass1:'Invalid/Missing Password',
			pass2:{
				required:'Missing Password',
				equalTo:'Mismatched Password'
			},
			contactNumber:{
				required:'Missing Contact Number',
				CN:'Invalid Contact Number'
			},
			gender:'Missing Gender',
			'interest[]':'Missing Interests',
			day:'Missing Day',
			month:'Missing Month',
			year:'Missing Year',
			streetAddress:{
				required:'Missing Street Address',
				minlength:'Too Short Street Address'	
			},
			city:'Missing City',
			state:'Missing State',
			country:'Missing Country',
			profileImage:'Missing ProfileImage',
			captcha:'Missing Captcha'
		}
	});
	
	
});







