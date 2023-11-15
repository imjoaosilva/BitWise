import { Flag } from "../@types/flag.type";
import { Request, Response, NextFunction } from "express";
import { hasFlag } from "../services/flag.service";


export const FlagMiddleware = (flag: Flag) => (req: Request, res: Response, next: NextFunction) => {
}