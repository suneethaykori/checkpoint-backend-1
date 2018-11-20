let UserModel = require("../models/OrderModels");

module.exports.list =  function list(request, response) {
    UserModel.find({}).exec()
    .then(c => {
    return response.json(c);
    });
}

module.exports.show =  function show(req, res) {
    UserModel.findById(req.params.id).exec()
    .then(com => {
        return res.json(com);
    });
}


module.exports.create =  function create(req, res) {
    const newOrder = new UserModel();

    newOrder.orderDate = req.body.orderDate;
    newOrder.orderTime = req.body.orderTime;
    newOrder.amount = req.body.amount;

    newOrder.save().then(savedMes => {
        console.log(savedMes);
      });
}