const express = require("express");
const { submitReview } = require("../controllers/reviewController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/submit", protect, submitReview);

module.exports = router;
