let express =  require("express");
const router = express.Router();

let {list,show,create,update,remove} = require( "../controllers/tasksController");


router.get("/tasks", list);
router.get("/tasks/:id", show);
router.post("/tasks", create);
//router.put("/tasks/:id", update);
//router.delete("/tasks/:id", remove);

module.exports =  router;