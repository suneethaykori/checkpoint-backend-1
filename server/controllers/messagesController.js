//const state = require("../state");
let UserModel = require("../models/MessageModels");

module.exports.list =  function list(request, response) {
    UserModel.find({}).exec()
    .then(m => {
    return response.json(m);
    });
}

module.exports.show =  function show(req, res) {
    UserModel.findById(req.params.id).exec()
    .then(com => {
        return res.json(com);
    });
}


module.exports.create =  function create(req, res) {
    const newMes = new UserModel();

    newMes.name = req.body.name;
    newMes.date = req.body.date;
    newMes.message = req.body.message;

    newMes.save().then(savedMes => {
        console.log(savedMes);
      });
}