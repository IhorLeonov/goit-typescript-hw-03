class Key {
  signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 1000);
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: object) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  public tenants: object[] = [];

  constructor(protected key: object) {
    this.key = key;
  }

  public comeIn(person: object) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: object): void;
}

class MyHouse extends House {
  public openDoor(key: object) {
    if (key === key) {
      this.door = true;
      console.log(this.door);
    }
  }
}

// const key = new Key();

// const person = new Person(key);

// const house = new MyHouse(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// export {};
