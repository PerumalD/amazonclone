const router = require('express').Router();
const Product = require("../models/product");

const upload = require("../middlewares/upload-photo")

// POST request - Create a New Product
router.post("/products", upload.single("photos"), async(req, res) => {
    try {
        let product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.photos = req.file.location;
        product.stockQuantity = req.body.stockQuantity;

        await product.save();

        res.json({
            status: true,
            mesage: "Successfully saved"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message

        })
    }
});



module.exports = router;



// GET Request - Get all the Products




// GET Request - Get a single Product



//PUT Request - Update a Single Product



// DELETE Request - Delete a Single Product