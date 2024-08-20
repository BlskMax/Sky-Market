import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsService, getProductsbYidService } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductById = catchedController(
  async (req: Request, res: Response) => {
    const {id} = req.params;
    const productId = Number(id);
    const product = await getProductsbYidService(productId);
    res.json(product);
  }
)
