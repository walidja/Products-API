import { Sequelize } from "sequelize";

class DBConnection {
  static sequelize;
  constructor() {}
  static getInstance() {
    if (!DBConnection.sequelize) {
      console.log("Create new Database Connection");
      DBConnection.sequelize = new Sequelize("mysql://root@localhost/products");
      DBConnection.sequelize.authenticate().catch((reason) => {
        throw `Failed. Connection was rejected due to: ${reason}`;
      });
    }
    return DBConnection.sequelize;
  }
}

export default DBConnection;
