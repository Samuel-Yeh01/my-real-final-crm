let Handlebar = require("handlebars");
Handlebar.registerHelper("json", function (context) {
  return JSON.stringify(context);
});
