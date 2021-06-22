import { EntityRepository, Repository } from 'typeorm';

import { User } from '../entities';

@EntityRepository(User)
class UsersRepositories extends Repository<typeof User> {}

export { UsersRepositories };