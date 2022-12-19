import knexQB from 'knex';
import { DB_CONFIG } from "../config/db/db_config.js";

export const knexDb = knexQB(DB_CONFIG[process.env.NODE_PROFILE]);
