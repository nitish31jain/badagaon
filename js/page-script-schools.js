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
		image7.src="images/jain-mandir-11.jpg"
		var image8=new Image()
		image8.src="images/shaahi-masjid-1.jpg"
		var image9=new Image()
		image9.src="images/shiv-math-1.jpg"
		var image10=new Image()
		image10.src="images/janera-taalab.jpg"
		var image11=new Image()
		image11.src="images/thatiber-babdi.jpg"
		var image12=new Image()
		image12.src="images/bhainsasur-ka-mandir-2.jpg"
		var image13=new Image()
		image13.src="images/park.jpg"
		var image14=new Image()
		image14.src="images/pokhna-taalaab-1.jpg"
		var image15=new Image()
		image15.src="images/pokhna-taalaab-2.jpg"
		//if browser does not support the image object, exit.
		if (!document.images)
			return
		document.images.slide.src=eval("image"+step+".src")
		if (step<15)
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