let Handlebar = require("handlebars");
Handlebar.registerHelper("vcard", function (value, title, id) {
  return (
    `<div class="card" >
   				<div class="card-content">
   					<h3 class="fw-bold mb-1">$ <span class="counter" data-count=` +
    value +
    `></span></h3>
   					<p class="text-sm text-muted">` +
    title +
    `</p>
   				</div>
   				<div class="px-4 pb-4">
   					<canvas id=` +
    id +
    ` style="height: 50px; width:180px;"></canvas>
   			   </div>
   		</div>`
  );
});
