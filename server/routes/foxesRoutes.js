let express =  require("express");
const router = express.Router();

let {list,show,create,update,remove} = require( "../controllers/foxesController");


router.get("/foxes", list);

module.exports =  router;