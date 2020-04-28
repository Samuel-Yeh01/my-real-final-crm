let express = require("express");
let router = express.Router();
let app = express();

router.get("/", function (req, res, next) {
  res.redirect("/default");
});

let defaultRouting = require("./default/ecommerce");
let sessionRouting = require("./session/session");

router.use("/default", defaultRouting);
router.use("/", sessionRouting);

module.exports = router;
