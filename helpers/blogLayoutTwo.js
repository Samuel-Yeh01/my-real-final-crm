let Handlebar = require("handlebars");
Handlebar.registerHelper("blogLayoutTwo", function () {
  return `<div>
			   <div class="blog-four-layout white--text pa-4 d-custom-flex align-end">
					<div>
						<h3>Where Can You Find Unique Myspace Layouts Nowadays</h3>
						<span class="white--text fs-14" >11 Nov 2017 , By: Admin , 5 Comments </span>
						<div class="d-custom-flex justify-space-between">
							<div>
								<button class="share-icon">
									<i class="fas fa-share-alt"></i>
								</button>
								<button class="favorite-icon">
									<i class="fas fa-heart"></i>
								</button>
							</div>
							<button class="more">
								<i class="fas fa-ellipsis-h"></i>
							</button>
						</div>
					</div>
				</div>
			</div>`;
});
