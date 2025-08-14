import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Holodilnik" },
      { id: 2, name: "Telefon" },
      { id: 3, name: "Notebook" },
      { id: 6, name: "Notebooke" },
    ];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Samsung" },
      { id: 3, name: "Asus" },
      { id: 4, name: "Lenovo" },
    ];
    this._devices = [
      {
        id: 1,
        name: "12 pro",
        price: 10000000,
        rating: 0,
        img: "0ecf5bf1-ab2e-4b0c-a9f0-dd2eda415d03.jpg",
      },
      {
        id: 2,
        name: "X3",
        price: 372731,
        rating: 0,
        img: "812b701f-78fa-4765-952e-2f9d703003ec.jpg",
      },
      {
        id: 3,
        name: "Afdiuiq8",
        price: 372731,
        rating: 0,
        img: "5d8a0c7f-4c53-4d8a-bd2e-16e02866c814.jpg",
      },
    ];
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
  get types() {
    return this.types;
  }
  get brands() {
    return this.brands;
  }
  get devices() {
    return this.devices;
  }
}
