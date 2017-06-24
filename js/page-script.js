var quotations = new Array()
quotations[0]= "बडागांव"
quotations[1]= "Badagaon"
function display()
{
	a=Math.floor(Math.random()*quotations.length)
	document.getElementById('logo').innerHTML=quotations[a]
	setTimeout("display()",1500)
}

function slideit(){
		var image1=new Image()
		image1.src="images/amrat-lal-phanindra.jpg"
		var image2=new Image()
		image2.src="images/narayan-daas-khare.jpg"
		var image3=new Image()
		image3.src="images/bhadra-kali-mandir.jpg"
		var image4=new Image()
		image4.src="images/dhasan-river-4.jpg"
		var image5=new Image()
		image5.src="images/dhaurigarh-kila-1.jpg"
		var image6=new Image()
		image6.src="images/hanuman-mandir-1.jpg"
		var image7=new Image()
		image7.src="images/hanuman-mandir-6.jpg"
		var image8=new Image()
		image8.src="images/jain-mandir-11.jpg"
		var image9=new Image()
		image9.src="images/shaahi-masjid-1.jpg"
		var image10=new Image()
		image10.src="images/shiv-math-1.jpg"
		var image11=new Image()
		image11.src="images/janera-taalab.jpg"
		var image12=new Image()
		image12.src="images/thatiber-babdi.jpg"
		var image13=new Image()
		image13.src="images/bhainsasur-ka-mandir-2.jpg"
		var image14=new Image()
		image14.src="images/park.jpg"
		var image15=new Image()
		image15.src="images/pokhna-taalaab-1.jpg"
		var image16=new Image()
		image16.src="images/pokhna-taalaab-2.jpg"
		var image17=new Image()
		image17.src="images/jaama-masjid-1.jpg"

		//if browser does not support the image object, exit.
		if (!document.images)
			return
		document.images.slide.src=eval("image"+step+".src")
		if (step<17)
			step++
		else
			step=1
		//call function "slideit()" every 2.5 seconds
		setTimeout("slideit()",2500)
}

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