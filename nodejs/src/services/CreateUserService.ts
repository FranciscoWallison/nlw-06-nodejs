import {connection}  from  '../database';
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = (await connection).getCustomRepository(UsersRepositories);

    console.log("Email", email);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    } as any);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
    } as any);

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };