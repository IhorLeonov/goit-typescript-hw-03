class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 1000);
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  private tenants: object[] = [];

  constructor(protected key: Key) {}

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const person = new Person(key);

const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);

// export {};
