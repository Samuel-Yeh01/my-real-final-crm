let axios = require("axios");

axios
  .get("http://reactify.theironnetwork.org/data/vuely/supportRequests.js")
  .then(function (response) {
    exports.supportRequests = response.data;
  });

axios
  .get("http://reactify.theironnetwork.org/data/vuely/todo.js")
  .then(function (response) {
    exports.todo = response.data;
  });

axios
  .get("http://reactify.theironnetwork.org/data/testimonials.js")
  .then(function (response) {
    exports.testimonials = response.data;
  });

axios
  .get("http://reactify.theironnetwork.org/data/express/cartdata.js")
  .then(function (response) {
    exports.cartdata = response.data;
  });

axios
  .get("http://reactify.theironnetwork.org/data/vuely/invoice.js")
  .then(function (response) {
    exports.invoice = response.data;
  });

axios
  .get("http://reactify.theironnetwork.org/data/vuely/recentOrders.js")
  .then(function (response) {
    exports.recentOrders = response.data;
  });

axios
  .get("http://reactify.theironnetwork.org/data/vuely/reviews.js")
  .then(function (response) {
    exports.reviews = response.data;
  });

axios
  .get("http://reactify.theironnetwork.org/data/galleryImages.js")
  .then(function (response) {
    exports.gallery = response.data;
  });

axios
  .get("http://reactify.theironnetwork.org/data/vuely/users.js")
  .then(function (response) {
    exports.users = response.data;
  });

axios
  .get("http://reactify.theironnetwork.org/data/vuely/connections.js")
  .then(function (response) {
    exports.connections = response.data;
  });

axios
  .get("http://reactify.theironnetwork.org/data/faqs.js")
  .then(function (response) {
    exports.faqs = response.data;
  });

// TODO: 剩餘之export的hash資料，依情況再漸進加入!
