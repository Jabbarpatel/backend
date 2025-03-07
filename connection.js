import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = new Sequelize(process.env.DB_URL, {
  dialect: "mysql",
});
