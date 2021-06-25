import {connection}  from  '../database';
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

class ListUserService {
  async execute() {
    const usersRepositories = (await connection).getCustomRepository(UsersRepositories);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}

export { ListUserService };