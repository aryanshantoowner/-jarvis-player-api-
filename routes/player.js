const express = require("express");
const router = express.Router();

router.get("/players", (req, res) => {
  res.json({
    success: true,
    message: "Player API Working 🚀",
    data: []
  });
});

module.exports = router;
