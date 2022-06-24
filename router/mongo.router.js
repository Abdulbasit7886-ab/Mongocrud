const express = require("express");
const router = express.Router();
const auth = require("../controller/mongo.controller");
const controller = require("../controller/auth.controller");
const auth1 = require("../middleware/auth.middleware");
// const middle= require("../middleware/mongo.middleware")
// const middlemongose = require("../middleware/mongo.middleware");
router.get('/token',auth1.check, auth.read);
router.post('/token',auth1.check, auth.create);
router.delete('/token/:id',auth1.check, auth.delete);
router.put('/token/:id',auth1.check, auth.put);
router.post('/login', auth1.login , controller.verify);
router.post('/decode', auth1.authorize);

module.exports = router;