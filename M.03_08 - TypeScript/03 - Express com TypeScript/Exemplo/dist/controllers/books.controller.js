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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const books_service_1 = __importDefault(require("../services/books.service"));
class BooksController {
    constructor() {
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const books = yield this.service.getAll();
            return res.status(http_status_codes_1.StatusCodes.OK).json(books);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const book = yield this.service.getById(id);
            if (!book)
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: 'Book not found!' });
            return res.status(http_status_codes_1.StatusCodes.OK).json(book);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const book = req.body;
            const bookCreated = yield this.service.create(book);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(bookCreated);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const book = req.body;
            yield this.service.update(id, book);
            res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        });
        this.service = new books_service_1.default();
    }
}
exports.default = BooksController;
