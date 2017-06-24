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
		image1.src="images/bhadra-kali-mandir.jpg"
		var image2=new Image()
		image2.src="images/bhadra-kali-devi-mandir.jpg"
		var image3=new Image()
		image3.src="images/shani-dev-mandir.jpg"
		var image4=new Image()
		image4.src="images/bhagwan-dattatra-mandir.jpg"
		var image5=new Image()
		image5.src="images/shiv-ji-temple.jpg"
		var image6=new Image()
		image6.src="images/sai-baba-mandir.jpg"

		//if browser does not support the image object, exit.
		if (!document.images)
			return
		document.images.slide.src=eval("image"+step+".src")
		if (step<6)
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