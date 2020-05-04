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

// New local data @ line 70
// axios
//   .get("http://reactify.theironnetwork.org/data/testimonials.js")
//   .then(function (response) {
//     exports.testimonials = response.data;
//   });

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
exports.testimonials = [
  {
    id: 1,
    name: "Samuel Yeh",
    avatar: "/images/samuel.png",
    profile: "/images/client-1.png",
    designation: "F2E Developer",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 2,
    name: "Emmy Loren",
    avatar: "/images/user-2.jpg",
    profile: "/images/client-2.png",
    designation: "UX Developer",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
  },
  {
    id: 3,
    name: "Astell Mercell",
    avatar: "/images/user-3.jpg",
    profile: "/images/client-3.png",
    designation: "Director of Brand Development at R.Inc",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  },
];

exports.languages = [
  {
    name: "English",
    icon: "en",
  },
  {
    name: "Japanese",
    icon: "ja",
  },
];
exports.sidebarFilters = [
  {
    id: 1,
    class: "sidebar-overlay-dark",
    name: "message.dark",
  },
  {
    id: 2,
    class: "sidebar-overlay-light",
    name: "message.light",
  },
  {
    id: 3,
    class: "sidebar-overlay-pink",
    name: "message.danger",
  },
  {
    id: 4,
    class: "sidebar-overlay-primary",
    name: "message.primary",
  },
  {
    id: 5,
    class: "sidebar-overlay-warning",
    name: "message.warning",
  },
  {
    id: 6,
    class: "sidebar-overlay-success",
    name: "message.success",
  },
  {
    id: 7,
    class: "sidebar-overlay-purple",
    name: "message.info",
  },
];
// header filter
exports.headerFilters = [
  {
    id: 1,
    class: "header-color-light",
  },
  {
    id: 2,
    class: "header-color-primary",
  },
  {
    id: 3,
    class: "header-color-warning",
  },
  {
    id: 4,
    class: "header-color-success",
  },
  {
    id: 5,
    class: "header-color-error",
  },
  {
    id: 6,
    class: "header-color-info",
  },
];
exports.sidebarBackgroundImages = [
  {
    id: 1,
    imageurl: "/images/side1.jpg",
  },
  {
    id: 2,
    imageurl: "/images/side2.jpg",
  },
];
