"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = __importDefault(require("./auth"));
var tasks_1 = __importDefault(require("./api/tasks"));
var users_1 = require("../data/users");
var app = (0, express_1.default)();
var port = 8000;
app.use(express_1.default.json());
app.use("/api/auth", auth_1.default);
app.use("/api/tasks", tasks_1.default);
app.get("/docs", function (req, res) {
    res.sendFile(__dirname + "/docs/modules.html");
});
app.get("/users", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, users_1.getUsers)()];
            case 1:
                users = _a.sent();
                if (!users)
                    return [2 /*return*/];
                res.json({ users: users });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get("/users/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, users, user, err_2, message;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                userId = parseInt(req.params.id, 10);
                return [4 /*yield*/, (0, users_1.getUsers)()];
            case 1:
                users = _b.sent();
                if (!users)
                    return [2 /*return*/];
                if (userId < 0 || userId >= users.length) {
                    throw new Error("User not found");
                }
                user = (_a = users[userId]) !== null && _a !== void 0 ? _a : null;
                if (!user)
                    throw new Error("user not found");
                res.json(user);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _b.sent();
                message = void 0;
                if (err_2 instanceof Error)
                    message = err_2.message;
                else
                    message = String(err_2);
                res.status(500).json({ error: message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get("/", function (req, res) {
    res.send("the daily grind");
});
app.listen(port, function () {
    console.log("Listening on port ".concat(port, "..."));
});
exports.default = app;
