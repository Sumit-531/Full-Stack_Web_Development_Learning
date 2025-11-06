import Product from "../models/product.model.js";


// CREATE
// Create products
const createProduct = async(req,res) =>{
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// READ
// Get all the products
const getAllProducts = async (req,res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

// Get one product by ID
const getSingleProduct = async (req,res) =>{
    try{
        // get id
        const { id } = req.params;
        const product = await Product.findById(id);
        // product check
        if(!product){
            return res.status(404).json({message: "Product not found!"});
        }
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

// UPDATE
// Update a product based on Id
const updateProduct =  async (req,res) =>{
    try{
        // get id
        const { id } = req.params;

        // product update
        const product = await Product.findByIdAndUpdate(id, req.body);

        // product check
        if(!product){
            return res.status(404).json({message: "Product not found!"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch(error){
        res.status(500).json({message: error.message});
    }
};

// DELETE
// Delete a product
const deleteProduct = async (req,res) =>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            res.status(404).json({message: "Product not found!"});
        }
        res.status(200).json({message: "Product deleted successfully!"});

    } catch(error){
        res.status(500).json({message: error.message});
    }
};


export {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
};