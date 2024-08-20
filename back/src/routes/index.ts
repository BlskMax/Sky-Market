import { Router } from "express";
import usersRouter from "./users.router";
import ordersRouter from "./orders.router";
import productsRouter from "./products.router";
import { getAllusers, getUserById } from "../controllers/user.controller";

const router = Router();

router.use("/users", usersRouter);
router.use("/orders", ordersRouter);
router.use("/products", productsRouter);
router.use("/users/getAllUsers", getAllusers); 
router.use("/users/getAllUsers", getUserById); 


export default router;
