function formValidation(){
	var user_name = document.forms["login"]["user_name"].value;
	var password = document.forms["login"]["password"].value;
	
	if(user_name == "" || password == "")
	{
		alert("Fields can't be left blank");	
		return false;	
	}
	
}

	function formValidation_signup(){		
		var first_name = document.forms["registration"]["first_name"].value;
		var last_name = document.forms["registration"]["last_name"].value;
		var user_name = document.forms["registration"]["user_name"].value;
		var email = document.forms["registration"]["email"].value;
		var password = document.forms["registration"]["password"].value;
		var confirm_password = document.forms["registration"]["confirm_password"].value;
		var security_question = document.forms["registration"]["security_question"].value;
		var your_answer = document.forms["registration"]["your_answer"].value;
	
		if(first_name == "" || last_name == "" || user_name == "" || password == "" || confirm_password == "" || your_answer == "")
		{
			alert("Fields can't be left blank");	
			return false;	
		}
	
		if(first_name == "First Name" || last_name == "Last Name" || user_name == "User Name")
		{
			alert("Please Enter Valid Fields");	
			return false;	
		}
		
		// Validate user name		
  		var user_name_len = user_name.length;  
		if (user_name_len >= 10 || user_name_len < 3)  
		{ 
			alert("User name length should be between 3 to 10");  
//			uid.focus();
			return false;
    		}

		var atpos=email.indexOf("@");
		var dotpos=email.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
		{
			alert("Not a valid e-mail address");
			return false;
		}

		// Validate passwords
  		var password_len = password.length;  
		if (password_len >= 8 || password_len < 3)  
		{ 
			alert("Password length should be between 3 to 8");  
//			uid.focus();
			return false;
    		}
		if(password != confirm_password){
			alert("Password not matched... Try again");
			return false;
		}

		// Security question
		if(security_question == "Default")
		{
			alert("Please Select valid Security question");
			return false;	
		}
	}

function formValidation_post(){
	var name = document.forms["post-form"]["name"].value;
	var email = document.forms["post-form"]["email"].value;
	var comment = document.forms["post-form"]["comment"].value;
	
	if(name == "" || comment == "" || email == "")
	{
		alert("Fields can't be left blank");	
		return false;
	}

	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  
  	{  
		return (true)  
	}
	alert("You have entered an invalid email address!")  
	return (false)  	
}