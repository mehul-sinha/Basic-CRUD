const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller.js");

router.get("/", productController.getProducts);
router.get("/:id", productController.getSingleProduct);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
