let Handlebar = require("handlebars");
Handlebar.registerHelper("preLoader", function (data, options) {
  return `<div class="section-preloader-wrapper" style="display: none;">
            <div class="preloader-wrapper active small">
               <div class="spinner-layer spinner-red-only">
                  <div class="circle-clipper left">
                     <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                     <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                     <div class="circle"></div>
                  </div>
               </div>
            </div>
         </div>  `;
});
