// Make a class for exporting:-
export default class User {
  #username = undefined;
  #password = undefined;
  constructor(username, password) {
    this.#username = username;
    this.#password = password;
  }
  show() {
    return `Your Username: ${this.#username} and Password: ${this.#password}`;
  }
}

export class LaptopBrand {
  #modelName = null;
  #brandName = null;
  #processor = null;
  constructor(brand, model, processor) {
    this.#brandName = brand;
    this.#modelName = model;
    this.#processor = processor;
  }
  getSpecificatons() {
    return `This laptop is : ${this.#brandName}'s ${
      this.#modelName
    } which has a ${this.#processor} processor`;
  }
}
