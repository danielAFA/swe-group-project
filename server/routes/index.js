const express = require("express");
const router = express.Router();
const { find } = require("./../connect");

/* GET home page. */
router.get("/", (req, res) => {
  console.log("request received");
  res.send("Hello World");
});

router.post("/", async (req, res) => {
  console.log(`role received `);
  const role = req.body.role;
  const roleData = await find(role);
  res.send(roleData);
});

module.exports = router;
