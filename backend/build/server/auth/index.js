"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var register_1 = __importDefault(require("./register"));
var login_1 = __importDefault(require("./login"));
var logout_1 = __importDefault(require("./logout"));
var router = express_1.default.Router();
router.use("/register", register_1.default);
router.use("/login", login_1.default);
router.use("/logout", logout_1.default);
exports.default = router;
