import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListUserService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const users = await usersRepositories.find();

    const tags = await tagsRepositories.find();

    const usersTags = {
      users: users,
      tags: tags
    }

    return classToPlain(usersTags);
  }
}

export { ListUserService };