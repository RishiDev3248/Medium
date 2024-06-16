"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInputs = exports.createInputs = exports.signinInputs = exports.signupInputs = void 0;
const zod_1 = __importDefault(require("zod"));
//signup
exports.signupInputs = zod_1.default.object({
    email: zod_1.default.string().email(),
    username: zod_1.default.string().optional(),
    password: zod_1.default.string().min(6)
});
//signin
exports.signinInputs = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
//create
exports.createInputs = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
// update
exports.updateInputs = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.number()
});
