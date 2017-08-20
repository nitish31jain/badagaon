                <p class="intro">
                In hac habitasse platea risus dictumst. Suspendisse enim arcu. Aliquam erat volutpat.
                Phasellus a dui nisi. Nunc nec quam vitae nisl vehicula euismod. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed commodo ligula blandit risus. Pellentesque magna mi,
                iaculis pharetra eu, fermentum ullamcorper nisi. Integer fringilla magna ut quam vulputate erat.
                </p>
                
                <form method="post" action="contact.php" id="contactform">

                    <div>
                    <p>Send me a message</p>
                    </div>

                    <div>
                    <label>Name <span class="required">*</span></label>
                    <input name="name" type="text" id="name" value="" />
                    </div>

                    <div>
                    <label>Email <span class="required">*</span></label>
                    <input name="email" type="text" id="email" value="" />
                    </div>

                    <div>
                    <label>Website</label>
                    <input name="website" type="text" id="website" value="" />
                    </div>

                    <div>
                    <label>Subject</label>
                    <input name="subject" type="text" id="subject"  value="" />
                    </div>

                    <div>
                    <label>Message <span class="required">*</span></label>
                    <textarea name="message" rows="20" cols="50"  id="message" ></textarea><br /><br />
                    </div>

                    <div>
					<input type="submit"  value="Submit" class="button">
         			<input type="reset" value="Reset" class="button">
					</div>
                </form>