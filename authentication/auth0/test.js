const { auth } = require("express-openid-connect");

const config = {
  required: false,
  auth0Logout: true,
  appSession: {
    secret: "a long, randomly-generated string stored in env",
  },
  baseURL: "http://localhost:3000",
  clientID: "x7TQ7hjU1BGhR20MCqpvWyGoQfZ19Ff1",
  issuerBaseURL: "https://my-crm.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
});
