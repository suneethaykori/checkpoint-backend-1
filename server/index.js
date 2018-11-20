let express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://syk:test123@ds045157.mlab.com:45157/checkpoint1");

let MessagesRoutes  = require("./routes/messagesRoutes");
let OrdersRoutes  = require("./routes/ordersRoutes");
let TasksRouters  = require("./routes/tasksRoutes");
let FoxesRouters  = require("./routes/foxesRoutes");

app.use(express.static('public'));
app.use(MessagesRoutes);
app.use(OrdersRoutes);
app.use(TasksRouters);
app.use(FoxesRouters);

app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
     console.log("Web server is now living in apartment 3001");
 });