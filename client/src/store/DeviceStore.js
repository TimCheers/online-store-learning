import {makeAutoObservable} from "mobx";

export class DeviceStore {
    constructor() {
        this._types = [{id: 1, name: "Холодильники"}, {id: 2, name: "Смартфоны"}, {id: 3, name: "Ноутбуки"}, {
            id: 4,
            name: "Телевизоры"
        },];
        this._brands = [{id: 1, name: "Apple"}, {id: 2, name: "Samsung"}, {id: 3, name: "Asus"}, {
            id: 4,
            name: "Lenovo"
        },];
        this._devices = [{
            id: 1, name: "12 pro", price: 10000000, rating: 0, img: "0ecf5bf1-ab2e-4b0c-a9f0-dd2eda415d03.jpg",
        }, {
            id: 2, name: "X3", price: 372731, rating: 0, img: "812b701f-78fa-4765-952e-2f9d703003ec.jpg",
        }, {
            id: 3, name: "Afdiuiq8", price: 372731, rating: 0, img: "5d8a0c7f-4c53-4d8a-bd2e-16e02866c814.jpg",
        },]
        this._selectedType = {}
        this._selectedBrand ={}
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}
