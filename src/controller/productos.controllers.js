import ProductServices from "../services/ProductServices.js"


 export const createProduct = async(req, res)=>{
    try {
        const product = await ProductServices.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message : error.message});
    }
 }

export const getProducts = async (req,res) =>{
    try {
        const products = await ProductServices.getAllProduct(req.body);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
 };

 export const updateProduct = async (req, res) => {
    try {
      const product = await ProductServices.updateProduct(req.params.id, req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const deleteProduct = async (req, res) => {
    try {
      await ProductServices.deleteProduct(req.params.id);
      res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };