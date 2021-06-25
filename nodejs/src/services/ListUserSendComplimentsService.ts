import {connection}  from  '../database';
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = (await connection).getCustomRepository(
      ComplimentsRepositories
    );

    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
    });

    return compliments;
  }
}

export { ListUserSendComplimentsService };