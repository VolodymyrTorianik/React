const express = require("express");
const router = express.Router();

const {
  getAllMasters
} = require("../controllers/masterController");

const {
  createRequest,
  getRequestsByEmail,
  deleteRequest
} = require("../controllers/requestController");


router.get("/masters", getAllMasters);
router.post("/requests", createRequest);
router.get("/requests/:email", getRequestsByEmail);
router.delete("/requests/:id", deleteRequest);

module.exports = router;
