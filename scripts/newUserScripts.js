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


	$.validator.addMethod('_selectList', function (value) {
/*
		
		if(value == 0)
		{
			return false;	
		}
		
		else
		{
			return true;
		}
*/
/*
		if(value == 0)
		{
			return false;	
		}
		return true;
*/
		return (!(value == 0));
	});


	$.validator.addMethod('_CN', function (value) {
/*		
		1-111-1111111
		11-111-1111111
		111-111-1111111
		1111-111-1111111
*/		
		var reg = /^\d{1,4}\-\d{3}\-\d{7}$/;
		
		//return (reg.test(value) == true);
		if(reg.test(value) == true)
		{
			return true;	
		}
		return false;
	});

	$.validator.addMethod('_Pass', function (value) {

		var reg = /^[a-z][a-z0-9]{5,15}$/i;
		
		//return (reg.test(value) == true);
		if(reg.test(value) == true)
		{
			return true;	
		}
		return false;
	});

	$.validator.addMethod('_UN', function (value) {

		var reg = /^[a-z][a-z0-9]{5,19}$/i;
		
		//return (reg.test(value) == true);
		if(reg.test(value) == true)
		{
			return true;	
		}
		return false;
	});


	$.validator.addMethod('_name', function (value, element) {

		if(element.name == "middleName" && !value)
		{
			return true;	
		}
		var reg = /^[a-z]+$/i;
		
		//return (reg.test(value) == true);
		if(reg.test(value) == true)
		{
			return true;	
		}
		return false;

	});

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
			firstName:{
				_name:true	
			},
			middleName:{
				_name:true	
			},
			lastName:{
				_name:true	
			},
			email:{
				required:true,
				email:true	
			},
			userName:{
				_UN:true	
			},
			pass1:{
				_Pass:true	
			},
			pass2:{
				required:true,
				equalTo:'#pass1'
			},
			contactNumber:{
				_CN:true	
			},
			gender:{
				required:true	
			},
			'interests[]':{
				required:true	
			},
			day:{
				_selectList:true	
			},
			month:{
				_selectList:true	
			},
			year:{
				_selectList:true	
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
				_selectList:true	
			},
			profileImage:{
				required:true	
			},
			captcha:{
				required:true	
			}
		},
			messages:{
			//add messages here
			firstName:'Invalid/Missing First Name',
			middleName:'Invalid Middle Name',
			lastName:'Invalid/Missing Last Name',
			email:{
				required:'Missing Email',
				email:'Invalid Email'	
			},
			userName:'Invalid/Missing User Name',
			pass1:'Invalid/Misisng Password',
			pass2:{
				required:'Missing Password',
				equalTo:'Mismatched Password'				
			},
			contactNumber:'Invalid/Missing Contact Number',
			gender:'Missing Gender',
			'interests[]':'Missing Interest',
			day:'Missing Day',
			month:'Missing Month',
			year:'Missing Year',
			streetAddress:{
				
				required:'Missing Street Address',
				minlength:'Too Short Street Address'	
			},
			city:'Missing City',
			state:'Missing state',
			country:'Missing country',
			profileImage:'Missing Profile Image',
			captcha:'Missing captcha',
			
		}
	});

});







