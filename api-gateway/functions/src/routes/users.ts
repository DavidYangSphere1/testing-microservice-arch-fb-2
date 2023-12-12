import express, { Request, Response, Router } from "express";
import axios from "axios";

const userRouter: Router = express.Router();

userRouter.get("/", async (req: Request, res: Response) => {
  const result = await axios.get("http://127.0.0.1:5004/thisappflies/us-central1/user");
  res.status(200).send(result.data);
});

userRouter.get("/pin", async (req: Request, res: Response) => {
  const result = await axios.get("http://127.0.0.1:5004/thisappflies/us-central1/user/pin");
  res.status(200).send(result.data);
});

export default userRouter;