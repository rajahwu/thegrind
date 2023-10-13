"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var user_1 = __importDefault(require("../models/user"));
router.post("/", function (req, res) {
    var _a = req.body, username = _a.username, email = _a.email, password = _a.password;
    var newUser = user_1.default.create({ username: username, email: email, password: password });
    res.json(newUser);
});
exports.default = router;
