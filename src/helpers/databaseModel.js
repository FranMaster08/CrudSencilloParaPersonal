const fs = require("fs");
const path = require("path");
const directorio = path.resolve(__dirname, "../database/personalData.json");
const { uuid } = require("uuidv4");
const databaseModel = {
  read: () => {
    const contentFile = fs.readFileSync(directorio, "utf8");
    return JSON.parse(contentFile);
  },
  create: (newEmploy) => {
    try {
      let currentData = databaseModel.read();
      newEmploy.id = uuid();
      currentData.push(newEmploy);
      fs.writeFileSync(directorio, JSON.stringify(currentData));
      return true;
    } catch (error) {
      console.log("Ocurrio un error", error);
      throw error;
    }
  },

  delete: (id) => {
    try {
      const currentData = databaseModel.read();
      const data = currentData.filter((personal) => personal.id !== id);
      fs.writeFileSync(directorio, JSON.stringify(data));
      return true;
    } catch (error) {
      console.log("Ocurrio un error", error);
      throw error;
    }
  },
};
module.exports = databaseModel;
