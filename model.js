import { INTEGER, STRING } from "sequelize";
import { dbConnection } from "./connection.js";

const User = dbConnection.define(
  "users",
  {
    idx: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    first_name: {
      type: STRING(500),
    },
    last_name: {
      type: STRING(500),
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

export { User };
