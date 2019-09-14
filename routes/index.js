var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/data", function(req, res, next) {

  const tweets = [
    { id: 1, text: "Holi", user: { screen_name: "John" } },
    { id: 2, text: "Holi", user: { screen_name: "John" } },
    { id: 3, text: "Holi", user: { screen_name: "John" } },
    { id: 1, text: "Holi", user: { screen_name: "John" } },
    { id: 2, text: "Holi", user: { screen_name: "John" } },
    { id: 3, text: "Holi", user: { screen_name: "John" } }

  ];

  res.json(tweets);
});

module.exports = router;
