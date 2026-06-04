import mysql from "mysql2/promise";
import { config } from "./env.js";

export const getConnection = async () => {
  return mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.name,
    port: config.db.port,
  });
};