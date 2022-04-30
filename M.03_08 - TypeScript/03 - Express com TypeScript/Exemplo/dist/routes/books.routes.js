"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const books_middleware_1 = __importDefault(require("../middleware/books.middleware"));
const myRoute = (0, express_1.Router)();
const { getAll, getById, create, update } = new books_controller_1.default();
myRoute
    .route('/')
    .get(getAll)
    .post(books_middleware_1.default, create);
myRoute
    .route('/:id')
    .get(getById)
    .put(books_middleware_1.default, update);
exports.default = myRoute;
