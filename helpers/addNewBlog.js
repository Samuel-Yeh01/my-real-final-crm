let Handlebar = require("handlebars");
Handlebar.registerHelper("addNewBlog", function () {
  return `<div class="app-card blog-widget">
			   <div class="app-card-content">
			      <form novalidate="novalidate">
			         <div id="myVueDropzone" class="dropzone dz-clickable">
			            <div class="dz-message"><input name="token" placeholder="Placeholder" value="xxx" type="hidden"></div>
			         </div>
			         <div class="add-blog-widget">
						    <form class="col s12">
						      <div class="row">
						        <div class="input-field col s12">
						          <input placeholder="Placeholder" id="subject" type="text" class="validate">
						          <label for="subject">Subject</label>
						        </div>
						      </div>
						      <div class="row">
						        <div class="input-field col s12">
						          <textarea></textarea> 
						          <label for="email">Message</label>
						        </div>
						      </div>
						      <div class="row">
						        <div class="input-field col s12">
						          <input type="submit" name="submit" value="Submit">
						        </div>
						      </div>
						    </form>
			         </div>
			      </form>
			   </div>
			</div>`;
});
