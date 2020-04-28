let Handlebar = require("handlebars");
Handlebar.registerHelper("times", function (n, block) {
  var temp = "";
  for (var i = 0; i < n; ++i) {
    temp += block;
  }
  return temp;
});
