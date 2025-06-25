const express = require("express");
const router = express.Router();

const {
  getAllRequests,
  updateRequestStatus
} = require("../controllers/adminController");

// GET /api/admin/requests
router.get("/requests", getAllRequests);

// PATCH /api/admin/requests/:id
router.patch("/requests/:id", updateRequestStatus);

module.exports = router;
