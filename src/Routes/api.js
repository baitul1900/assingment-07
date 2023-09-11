const express = require("express");
const app = express();
const router = express.Router();
const blogController = require("../Controllers/blogController");

router.get("/create", blogController.create);
router.get("/read", blogController.create);
router.get("/delete", blogController.create);
router.get("/update", blogController.create);

module.exports = router;
