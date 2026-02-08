const express = require("express");
const router = express.Router();
const controller = require("../controllers/catalog.controller");

router.post("/category", controller.createCategory);
router.get("/category", controller.getCategories);
router.post("/subcategory", controller.createSubcategory);

module.exports = router;
