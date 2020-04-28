let Handlebar = require("handlebars");
Handlebar.registerHelper("appCardAction", function (
  button_id,
  section_id,
  sec_wrap_id
) {
  return (
    `<div class="card-actions">
               <a class='dropdown-trigger' href='#' data-target=` +
    button_id +
    `>
                  <i aria-hidden="true" class="v-icon material-icons theme--light">more_vert</i>
               </a>
               <ul class='dropdown-content appCardAction' id=` +
    button_id +
    `>
                  <li>
                     <a class="d-fullscreen" id="fullScreen" onclick="showFullScreen(` +
    sec_wrap_id +
    `)">
                        <i class="fas fa-arrows-alt"></i>
                        <span>Full Screen</span>
                     </a>
                  </li>
                  <li>
                     <a class="d-reload" id="reload" onclick="elementReload(` +
    sec_wrap_id +
    `)">
                        <i class="fas fa-sync-alt"></i>
                        <span>Reload</span>
                     </a>
                  </li>
                  <li>
                     <a class="d-close" id="close" onclick="sectionClose(` +
    sec_wrap_id +
    `)" >
                        <i class="fas fa-times"></i>
                        <span>Close</span>
                     </a>
                  </li>
               </ul>
            </div>`
  );
});
