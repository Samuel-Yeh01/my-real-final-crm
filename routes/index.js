const express = require("express");
const router = express.Router();
const app = express();

router.get("/", function (req, res, next) {
  res.redirect("/default");
});

const defaultRouting = require("./default/ecommerce");
const sessionRouting = require("./session/session");

router.use("/default", defaultRouting);
router.use("/", sessionRouting);

module.exports = router;
