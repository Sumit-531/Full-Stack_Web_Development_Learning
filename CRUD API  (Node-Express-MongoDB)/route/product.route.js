import express from "express";
import {getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct} from "../controllers/product.controllers.js";

const router = express.Router();

// CREATE
// Create products
router.post("/", createProduct);

// READ
// Get all the products
router.get("/", getAllProducts);

// Get one product by ID
router.get("/:id", getSingleProduct);

// UPDATE
// Update a product based on Id
router.put("/:id", updateProduct);

// DELETE
// Delete a product
router.delete("/:id", deleteProduct);



export default router;