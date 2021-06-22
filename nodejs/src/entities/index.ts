import {User as User_ } from './sqlite_mysql_postgre/User';
import {User as User_mongo} from './mongodb/User';

const User = process.env.CONNECTION_DRIVE === 'mongodb' ? User_mongo : User_;

export { User };