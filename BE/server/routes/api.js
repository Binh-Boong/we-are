const appsController = require("../controllers/apps.controller");
const Router = require("../routes/router");

const router = new Router();

router.get("/teams", appsController.teams);

module.exports = router;
