let UserModel = require("../models/TasksModels");

module.exports.list =  function list(request, response) {
    UserModel.find({}).exec()
    .then(c => {
    return response.json(c);
    });
}

module.exports.show =  function show(req, res) {
    UserModel.findById(req.params.id).exec()
    .then(con => {
        return res.json(con);
    });
}


module.exports.create =  function create(req, res) {
    const newTask = new UserModel();

    newTask.task = req.body.task;
    newTask.date = req.body.date;

    newTask.save().then(savedMes => {
        console.log(savedMes);
      });
}