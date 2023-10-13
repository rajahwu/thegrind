"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var tasks_1 = require("../../../data/tasks");
var router = express_1.default.Router();
router.get("/", function (req, res) {
    var tasks = (0, tasks_1.getTasks)();
    res.json({ task: tasks });
});
exports.default = router;
