"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(_name, _birthDate = new Date()) {
        this._name = _name;
        this._birthDate = _birthDate;
    }
    get name() { return this._name; }
    ;
    get birthDate() { return this._birthDate; }
    ;
    get age() { return this.howOld(this._birthDate); }
    set name(param) {
        this.isNameValid(param);
        this._name = param;
    }
    set bithDate(param) {
        const age = this.howOld(param);
        if (!this.isAgeValid(age))
            throw new Error('Idade acima de 120');
        this._birthDate = param;
    }
    howOld(param) {
        const diff = new Date().getTime() - param.getTime();
        if (diff <= 0)
            throw new Error('Data Inválida');
        const yearInMilissegundos = 31536000000;
        return Math.floor(diff / yearInMilissegundos);
    }
    ;
    isNameValid(name) {
        if (name.length < 3)
            throw new Error('Nome deve conter mais de 3 letras');
    }
    isAgeValid(param) {
        const result = param < 120 ? true : false;
        return result;
    }
}
exports.default = Person;
