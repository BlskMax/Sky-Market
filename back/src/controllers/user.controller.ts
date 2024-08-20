import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import {
  loginUserService,
  registerUserService,
  getAllUsersService,
  getUserByIdService,
} from "../services/user.service";
import { User } from "../entities/User";

export const registerUser = catchedController(
  async (req: Request, res: Response) => {
    const { email, password, name, address, phone } = req.body;
    const newUser = await registerUserService({
      email,
      password,
      name,
      address,
      phone,
    });
    res.status(201).send(newUser);
  }
);

export const login = catchedController(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await loginUserService({ email, password });
  res.status(200).send({
    login: true,
    user: user.user,
    token: user.token,
  });
});

export const getAllusers = async (req: Request, res: Response) => {
  try {
      const users: User[] = await getAllUsersService();
      res.status(200).json(users);
  } catch (error: any) {
          res.status(400).json({
              message: error.message,
          });
      }
  };

  export const getUserById = async (
    req: Request <{id: number}, {}, {}>,
    res: Response
) => {
    try {
        const { id } = req. params;
        const user: User | null = await getUserByIdService(Number(id));
        res.status(200).json(user);
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
        });
    }
};
