import express from "express";
import { Types } from "mongoose";
import { Imessage } from "../common/interface/message.interface";
const router = express.Router();
import messageModel from "../models/message.schema";
import productService from "../services/product.service";
import {
  ISearchProduct,
  product_db_schema,
} from "../common/interface/product.interface";
router.post("/createProduct", async (req, res) => {
  try {
    const product: product_db_schema = req.body;
    await productService.createProduct(product);
    res.json({ success: true, message: "Producto agregado" });
  } catch (error: any) {
    res.json({ success: false, message: "error al crear el producto" });
  }
  res.end();
});
router.post("/findProducts", async (req, res) => {
  try {
    const params: ISearchProduct = req.body;
    const products = await productService.findProduct(
      params.skip,
      params.limit,
      params.searchText
    );
    res.json({ success: true, message: "Producto encontrado", data: products });
  } catch (error: any) {
    res.json({ success: false, message: "error al encontrar productos" });
  }
  res.end();
});
router.put("/updateProduct/:mongoId", async (req, res) => {
  try {
    const params: product_db_schema = req.body;
    const mongoId = req.params.mongoId;
    await productService.updateProduct(params, mongoId);
    res.json({ success: true, message: "Producto actualizado" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error al actualizar" });
  }
});

router.delete("/:mongoId", async (req, res) => {
  try {
    const mongoId = req.params.mongoId;
    await productService.deleteProduct(mongoId);
    res.json({ success: true, message: "Producto Eliminado" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error al eliminar" });
  }
});
export default router;
