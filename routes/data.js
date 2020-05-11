const axios = require("axios");

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
// sidebarFilters
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
// Recent Sale
exports.recentSales = [
  {
    title: "Aadi",
    sale: "225 Sale",
    views: "280 Views",
    price: "$59",
    img: "/images/icon1.jpeg",
  },
  {
    title: "Event Promo",
    sale: "225 Sale",
    views: "280 Views",
    price: "$59",
    img: "/images/icon2.jpeg",
  },
  {
    title: "Lawking",
    sale: "225 Sale",
    views: "280 Views",
    price: "$59",
    img: "/images/icon3.jpeg",
  },
  {
    title: "Adminify",
    sale: "225 Sale",
    views: "280 Views",
    price: "$59",
    img: "/images/icon4.jpeg",
  },
  {
    title: "Reactify",
    sale: "225 Sale",
    views: "280 Views",
    price: "$59",
    img: "/images/icon1.jpeg",
  },
  {
    title: "Adminify",
    sale: "225 Sale",
    views: "280 Views",
    price: "$59",
    img: "/images/icon2.jpeg",
  },
  {
    title: "Reactify",
    sale: "225 Sale",
    views: "280 Views",
    price: "$59",
    img: "/images/icon3.jpeg",
  },
];
// topSelling
exports.topSelling = [
  {
    id: "1",
    name: "Bluetooth Speakers",
    price: "$255",
    thumbnail: "/images/product-1.png",
  },
  {
    id: "2",
    name: "Jbm Headphones",
    price: "$340",
    thumbnail: "/images/product-2.png",
  },
  {
    id: "3",
    name: "AT Jack Radio",
    price: "$340",
    thumbnail: "/images/product-3.png",
  },
];
// recentChat
exports.recentChat = [
  {
    id: 1,
    active: true,
    userName: "Jason Oner",
    avatar: "/images/avatars/user-28.jpg",
  },
  {
    id: 2,
    active: true,
    userName: "Ranee Carlson",
    avatar: "/images/avatars/user-29.jpg",
  },
  {
    id: 3,
    userName: "Cindy Baker",
    avatar: "/images/avatars/user-30.jpg",
  },
  {
    id: 4,
    userName: "Ali Connors",
    avatar: "/images/avatars/user-31.jpg",
  },
  {
    id: 5,
    userName: "Harrison Hartman",
    avatar: "/images/avatars/user-35.jpg",
  },
];
// newEmail
exports.newEmail = [
  {
    id: 1,
    from: "john@example.com",
    subject: "Lorem ipsum is simply dummy text",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable.",
    sender_name: "John Doe",
    date: "10:30 PM",
    sender_avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
    replyTextBox: false,
  },
  {
    id: 2,
    from: "lisa@example.com",
    subject: "Contrary to popular belief, Lorem Ipsum",
    message:
      "Lorem ipsum is simply dummy random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable.",
    sender_name: "Lisa Roy",
    date: "10:50 PM",
    sender_avatar: "http://reactify.theironnetwork.org/data/images/user-2.jpg",
    replyTextBox: false,
  },
  {
    id: 3,
    from: "zara@example.com",
    subject: "Popular belief, Lorem Ipsum Pessages",
    message:
      "Popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
    sender_name: "Zara",
    date: "Yesterday",
    sender_avatar: "http://reactify.theironnetwork.org/data/images/user-3.jpg",
    replyTextBox: false,
  },
  {
    id: 4,
    from: "mayare@example.com",
    subject: "It has roots in a piece of classical Latin literature",
    message:
      "Contrary to popular belief, Lorem Ipsum Popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
    sender_name: "Mayare Amr",
    date: "Yesterday",
    sender_avatar: "http://reactify.theironnetwork.org/data/images/user-4.jpg",
    replyTextBox: false,
  },
  {
    id: 5,
    from: "brom@example.com",
    subject: "Lorem ipsum is simply dummy text for prrinting new tycasting",
    message:
      "Popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
    sender_name: "Brom Tay",
    date: "Yesterday",
    sender_avatar: "http://reactify.theironnetwork.org/data/images/user-5.jpg",
    replyTextBox: false,
  },
];

exports.features = {
  basic: [
    "Granular access and controls",
    "Desktop sync",
    "Mobile access",
    "Version history",
    "SSL and at-rest encryption",
    "Two-factor authentication",
    "Standard business support",
    "User management",
    "25,000 API calls per month",
  ],
  pro: [
    "Includes all Starter features plus",
    "Advanced user and security reporting",
    "Custom branding",
    "Mobile security controls",
    "Integrations with EMM providers",
    "Data Loss Prevention (DLP)",
    "Standard business support",
    "50,000 API calls per month",
    "25,000 API calls per month",
  ],
  advanced: [
    "Includes all Business features plus",
    "Unlimited external collaborators",
    "Full content visibility and management",
    "Unlimited integrations",
    "Workflow automations",
    "Document watermarking",
    "Device trust (advanced mobile requirements)",
    "Password policy enforcement",
    "Metadata and custom templates",
  ],
};
