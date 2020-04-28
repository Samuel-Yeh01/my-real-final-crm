let Handlebar = require("handlebars");
Handlebar.registerHelper("socialShare", function (
  icon,
  friends_count,
  friends_label,
  feeds_count,
  feeds_label
) {
  return (
    '<div class="card social-share-wrap">' +
    '<div class="card-content">' +
    '<div class="facebook d-flex align-items-center justify-content-between">' +
    '<span class="social-icon border  rounded-circle">' +
    '<i class="' +
    icon +
    '"></i>' +
    "</span>" +
    '<span class="social-desc d-flex">' +
    "<span>" +
    '<span class="d-block fw-bold">' +
    friends_count +
    "</span>" +
    '<span class="d-block">' +
    friends_label +
    "</span>" +
    "</span>" +
    "<span>" +
    '<span class="d-block fw-bold">' +
    feeds_count +
    "</span>" +
    '<span class="d-block">' +
    feeds_label +
    "</span>" +
    "</span>" +
    "</span>" +
    "</div>" +
    "</div>" +
    "</div>"
  );
});
