import { Request, Response, Router } from "express";
import validateUserRegister from "../middlewares/userRegister.middleware";
import validateUserLogin from "../middlewares/userLogin.middleware";
import { getAllusers, login, registerUser, getUserById } from "../controllers/user.controller";
import checkLogin from "../middlewares/checkLogin.middleware";
import { OrderRepository } from "../repositories/order.repository";

const usersRouter = Router();

usersRouter.post("/register", validateUserRegister, registerUser);

usersRouter.post("/login", validateUserLogin, login);

usersRouter.get("/getAllUsers", getAllusers)

usersRouter.get('/getUserById/:id', getUserById);

usersRouter.get("/orders", checkLogin, async (req: Request, res: Response) => {
  const { userId } = req.body;
  const orders = await OrderRepository.find({
    relations: ["products"],
    where: { user: { id: userId } },
  });

  res.send(orders);
});

export default usersRouter;
