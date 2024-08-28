import ProductServices from "../services/ProductServices"
import { Request,Response } from "express";


 export const createProduct = async(req:Request, res:Response)=>{
    try {
        const product = await ProductServices.createProduct(req.body);
        res.status(201).json(product);
    } catch (error:any) {
        res.status(500).json({ message : error.message});
    }
 }

export const getProducts = async (req:Request,res:Response) =>{
    try {
        const products = await ProductServices.getAllProduct(req.body);
        res.status(200).json(products);
    } catch (error:any) {
        res.status(500).json({ message: error.message});
    }
 };

 export const updateProduct = async (req:Request, res:Response) => {
    try {
      const product = await ProductServices.updateProduct(req.params.id, req.body);
      res.status(200).json(product);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const deleteProduct = async (req:Request, res:Response) => {
    try {
      await ProductServices.deleteProduct(req.params.id);
      res.status(200).json({ message: 'Producto eliminado' });
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };