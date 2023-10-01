const express = require("express");
const app = express();
const router = express.Router();

const userController = require("../Controllers/userController");
const adminController = require("../Controllers/adminController");
const subAdminController = require("../Controllers/subAdminController");
const postController = require("../Controllers/postController");

router.get("/create", userController.create);
router.get("/read", userController.create);
router.get("/delete", userController.create);
router.get("/update", userController.create);

router.get("/create", adminController.create);
router.get("/read", adminController.create);
router.get("/delete", adminController.create);
router.get("/update", adminController.create);

router.get("/create", subAdminController.create);
router.get("/read", subAdminController.create);
router.get("/delete", subAdminController.create);
router.get("/update", subAdminController.create);

router.get("/create", postController.create);
router.get("/read", postController.create);
router.get("/delete", postController.create);
router.get("/update", postController.create);

module.exports = router;
