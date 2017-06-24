<!DOCTYPE html>
<!--[if IE 7 ]>    <html class="ie7 oldie"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8 oldie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html> <!--<![endif]-->

<head>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="utf-8"/>
    <meta name="description" content="Badagaon Dhasan, A Town Near District Tikamgarh">
    <meta name="keywords" content="Badagaon Dhasan, Badagaon (Dhasan), Badagaon (dhasan), badagaon dhasan">
    <meta name="author" content="Nitish Jain">

    <title>Welcome to Portal of Badagaon Dhasan </title>

    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="css/nivo-slider.css" type="text/css" />
    <link rel="stylesheet" href="css/jquery.fancybox-1.3.4.css" type="text/css" />

    <!--[if lt IE 9]>
	    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery-1.6.1.min.js"><\/script>')</script>

    <script src="js/jquery.smoothscroll.js"></script>
    <script src="js/jquery.nivo.slider.pack.js"></script>
    <script src="js/jquery.easing-1.3.pack.js"></script>
    <script src="js/jquery.fancybox-1.3.4.pack.js"></script>
    <script src="js/init.js"></script>

</head>

<body>

	<!-- header-wrap -->
	<div id="header-wrap">
		 <header>
			<?php include('inc/header.php'); ?>
		 </header>
	</div>

	<!-- content-wrap -->
	<div class="content-wrap">
		<!-- main -->
	  <section id="main">
	 			  <?php include('inc/common-main-section.php'); ?>
		          <a class="back-to-top" href="#main">Back to Top</a>	  
	  </section>

    <!-- Styles -->
   	  <section id="styles" class="clearfix">
            <h2> बडागांव धसान </h2>
            <div class="primary">
				<div class = "post">
						<marquee id="test" behavior="scroll" direction="up" height="100" scrolldelay="300" scrollamount="2" onMouseOver="document.all.test.stop()" onMouseOut="document.all.test.start()"> <p style = 'font-size:14px; color : black;'> पर्याप्त जानकारी की कमी के कारण बहुत सारे लोगों की डिटेल इस पेज में नही है | जो किसी भी परीक्षा में चयनित हुए हों, चाहे वो कोई भी परीक्षा हो और जिनका नाम इस पेज में नही है, या जिसका है तो कोई गलती हो, या कोई कभी भी कोई परीक्षा में चयनित हों, और टाइम टू टाइम अपडेट के लिए हमारे ईमेल एड्रेस..... dhasan.badagaon@gmail.com पर अपनी पूरी डिटेल भेजें | </p> </marquee>
						<?php include('inc/students-selected-in-exams.php'); ?>
				</div>
			</div>
		    <aside>
						<?php include ('inc/badagaon-at-glance-panel.php'); ?>
						<?php include ('inc/sidebar-menu-panel.php'); ?>
						<?php include ('inc/other-facility-panel.php'); ?>

    	                <p> For More information and updates please email us to </p>
        	            <p>
    	        	        dhasan.badagaon@gmail.com
                    	</p>
        </aside>

          <a class="back-to-top" href="#main">Back to Top</a>   	    
	</section>

           <!-- contact -->
<!--      <section id="contact" class="clearfix">
					<?php include('inc/comment-post.php'); ?>
					<a class="back-to-top" href="#main">Back to Top</a>		
		</section> -->
</div>

<!-- footer -->
<footer>
					<?php include('inc/footer.php'); ?>
</footer>

</body>
</html>
