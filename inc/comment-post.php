 <?php
                                if(isset($_SESSION["user"]))
                                {
                                ?>  
          <div class="primary" id = "post-comments">
                <form method="post" action="post-your-comment.php" name = "post-form" id="contactform">

                    <div>
                    	<p>Post Your Comment</p>
                    </div>

                    <div>
	                    <label>Name <span class="required">*</span></label>
    	                <input name="name" type="text" id="name" value="Your Name" type="text" size="30" onfocus="if(this.value == 'Your Name') {this.value=''}" onblur="if(this.value == ''){this.value ='Your Name'}" />
                    </div>

                    <div>
        	            <label>Email <span class="required">*</span></label>
            	        <input name="email" type="text" id="email" value="Your Email" type="text" size="30" onfocus="if(this.value == 'Your Email') {this.value=''}" onblur="if(this.value == ''){this.value ='Your Email'}" />
                    </div>

                    <div>
                	    <label>Message <span class="required">*</span></label>
                    	<textarea name="message" rows="10" cols="50"  id="message" value = 'Your Comment' onfocus="if(this.value == 'Your Comment') {this.value=''}" onblur="if(this.value == ''){this.value ='Your Comment'}" ></textarea><br /><br />
                    </div>

                    <div>
				         <input type="submit"  value="Submit" class="button">
	        	 		 <input type="reset" value="Reset" class="button">
		    </div>

                </form>
            </div>
 <?php
                                }
                                ?>