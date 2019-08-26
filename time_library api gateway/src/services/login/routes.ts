import { Request, Response } from "express";
import { login } from './LoginController';

export default [{
    path: "/api/v1/login",
    method: "get",
    handler: [
      async (_req: Request, res: Response) => {
        const result = await login();
        res.status(200).send(result);
      }
    ]
  }];