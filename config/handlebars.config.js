const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const blocks = [];
function configHandlebars(expressApp, viewsPath) {
  let Handlebars = exphbs.create({
    defaultLayout: "main",
    extname: "hbs",
    layoutsDir: viewsPath + "/layouts/",
    partialsDir: viewsPath + "/partials/",
    helpers: {
      block: function (name) {
        let val = (blocks[name] || []).join("\n");

        // clear the block
        blocks[name] = [];
        return val;
      },
      extend: function (name, context) {
        let block = blocks[name];
        if (!block) {
          block = blocks[name] = [];
        }

        block.push(context.fn(this));
      },
    },
  });
  // View engine setup
  expressApp.engine("hbs", Handlebars.engine);
  expressApp.set("view engine", "hbs");
  expressApp.set("views", viewsPath);
}

module.exports = (app, viewsPath) => {
  configHandlebars(app, viewsPath);
};
