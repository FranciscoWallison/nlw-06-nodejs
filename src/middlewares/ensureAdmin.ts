import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {connection}  from  '../database';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const usersRepositories = (await connection).getCustomRepository(UsersRepositories);

  const { admin } = await usersRepositories.findOne(user_id);

  // Verificar se usuario admin

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}