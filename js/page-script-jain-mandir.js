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
		image1.src="images/jain-mandir-1.jpg"
		var image2=new Image()
		image2.src="images/jain-mandir-2.jpg"
		var image3=new Image()
		image3.src="images/jain-mandir-3.jpg"
		var image4=new Image()
		image4.src="images/jain-mandir-4.jpg"
		var image5=new Image()
		image5.src="images/jain-mandir-5.jpg"
		var image6=new Image()
		image6.src="images/jain-mandir-6.jpg"
		var image7=new Image()
		image7.src="images/jain-mandir-7.jpg"
		var image8=new Image()
		image8.src="images/jain-mandir-8.jpg"
		var image9=new Image()
		image9.src="images/jain-mandir-9.jpg"
		var image10=new Image()
		image10.src="images/jain-mandir-10.jpg"
		var image11=new Image()
		image11.src="images/jain-mandir-11.jpg"
		var image12=new Image()
		image12.src="images/jain-mandir-12.jpg"

		//if browser does not support the image object, exit.
		if (!document.images)
			return
		document.images.slide.src=eval("image"+step+".src")
		if (step<12)
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