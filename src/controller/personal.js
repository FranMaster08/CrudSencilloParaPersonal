const helper = require("../helpers/databaseModel");
const personalController = {
  home: (req, res, next) => {
    try {
      const data = helper.read();
      res.status(200).json({ CurrentPersonal: data });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  create : (req, res, next) => {
      try {
          let newUser= req.body
          helper.create(newUser)
          res.redirect('/');
      } catch (error) {
        res.status(500).json(error); 
      }
  },
  delete : (req, res, next) => {
    try {
        let id= req.params.id
        helper.delete(id)
        res.redirect('/');
    } catch (error) {
      res.status(500).json(error); 
    }
}
};

module.exports = personalController;
