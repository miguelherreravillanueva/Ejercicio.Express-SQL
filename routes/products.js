const express = require("express");
const router = express.Router();
const db = require("../config/database");
const ProductController = require("../controllers/ProductController");

router.post("/createProduct", ProductController.createProduct);
router.put("/updateProductById/:id", ProductController.updateProductById);
router.get("/showProducts", ProductController.showProducts);
router.get("/showAll", ProductController.showAll);
router.get("/selectProductById/:id", ProductController.selectProductById);
router.get("/showByIdDesc", ProductController.showByIdDesc);
router.get("/selectProductByName/:name", ProductController.selectProductByName);
router.delete("/deleteProductById/:id", ProductController.deleteProductById);

module.exports = router