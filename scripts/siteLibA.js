// JavaScript Document
$(document).ready(function(e) {
	
//	alert("ss");
	LoadDays();
	LoadMonths();
	LoadYears();
    
});



function LoadDays()
{
	
	var output = "<select id='day' name='day'>";		
	
	output += "<option value='0'>Day</option>";
	
	
	for(var i = 1 ; i <= 31; i++)
	{
		output += "<option value='" + i + "'>" + i + "</option>";
	}
	
	output += "</select>";
	
	$("#dayC").html(output);
}

function LoadMonths()
{
	
	var output = "<select id='month' name='month'>";		
	
	output += "<option value='0'>Month</option>";
	
	
	for(var i = 1 ; i <= 12; i++)
	{
		output += "<option value='" + i + "'>" + i + "</option>";
	}
	
	output += "</select>";
	
	$("#monthC").html(output);
}

function LoadYears()
{
	
	var output = "<select id='year' name='year'>";		
	
	output += "<option value='0'>Year</option>";
	
	
	for(var i = 1900 ; i <= 2007; i++)
	{
		output += "<option value='" + i + "'>" + i + "</option>";
	}
	
	output += "</select>";
	
	$("#yearC").html(output);
}














