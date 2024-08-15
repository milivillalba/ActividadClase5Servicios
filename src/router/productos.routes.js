import { Router } from "express";
import { getProducts } from "../controller/productos.controllers.js";

const router = Router();

router.get("/products", getProducts)

export default router;