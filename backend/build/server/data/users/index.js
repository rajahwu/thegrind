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
exports.getUsers = exports.createUser = exports.UserProfileData = exports.UserCandidate = void 0;
var axios_1 = __importDefault(require("axios"));
var uuid_1 = require("uuid");
var bcrypt_1 = __importDefault(require("bcrypt"));
var UserCandidate = /** @class */ (function () {
    function UserCandidate(username, email, password) {
        this.id = (0, uuid_1.v4)();
        this.username = username.toLowerCase();
        this.email = email.toLowerCase();
        this.password = password;
        this.created_at = new Date().toISOString();
        this.updated_at = new Date().toISOString();
    }
    UserCandidate.hashPassword = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var saltRounds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        saltRounds = 10;
                        return [4 /*yield*/, bcrypt_1.default.hash(password, saltRounds, function (err, hash) {
                                password = hash;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, password];
                }
            });
        });
    };
    return UserCandidate;
}());
exports.UserCandidate = UserCandidate;
var UserProfileData = /** @class */ (function () {
    function UserProfileData(user_id, name, phone) {
        this.id = (0, uuid_1.v4)();
        this.user_id = user_id;
        this.name = name.toLowerCase();
        this.phone = phone;
        this.created_at = new Date().toISOString();
        this.updated_at = new Date().toISOString();
    }
    return UserProfileData;
}());
exports.UserProfileData = UserProfileData;
function createUser(userData) {
    return __awaiter(this, void 0, void 0, function () {
        var username, email, password, name_1, phone, hashedPassword, userCandidate, userProfileData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    username = userData.username, email = userData.email, password = userData.password, name_1 = userData.name, phone = userData.phone;
                    return [4 /*yield*/, bcrypt_1.default.hash(password, 12)];
                case 1:
                    hashedPassword = _a.sent();
                    userCandidate = new UserCandidate(username, email, hashedPassword);
                    userProfileData = new UserProfileData(userCandidate.id, name_1, phone);
                    // Simulate storing the user and profile data in the database
                    // Return the created user and profile objects.
                    return [2 /*return*/, {
                            user: userCandidate,
                            profile: userProfileData,
                        }];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error creating user: ", error_1);
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createUser = createUser;
function getUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var users, response, _i, _a, user, password, username, email, name_2, phone, candidate, profile;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    users = [];
                    return [4 /*yield*/, axios_1.default.get("https://jsonplaceholder.typicode.com/users")];
                case 1:
                    response = _b.sent();
                    _i = 0, _a = response.data;
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    user = _a[_i];
                    return [4 /*yield*/, UserCandidate.hashPassword("secert")];
                case 3:
                    password = _b.sent();
                    username = user.username, email = user.email, name_2 = user.name, phone = user.phone;
                    candidate = new UserCandidate(username, email, password);
                    if (candidate.errors)
                        throw new Error(candidate.errors[0]);
                    profile = new UserProfileData(candidate.id, name_2, phone);
                    users.push({ user: candidate, profile: profile });
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, users];
            }
        });
    });
}
exports.getUsers = getUsers;
// test getUsers
// (async () => {
//     try {
//         const usersData = await getUsers();
//         console.log(usersData);
//     } catch (error) {
//         console.error("Error n the main funciton: ", error);
//     }
// })();
