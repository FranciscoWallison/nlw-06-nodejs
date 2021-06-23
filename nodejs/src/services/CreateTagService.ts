import {connection}  from  '../database';
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = (await connection).getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("Incorrect name!");
    }

    // SELECT * FROM TAGS WHERE NAME = 'name'
    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    } as any);

    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }

    const tag = tagsRepositories.create({
      name,
    } as any);

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };