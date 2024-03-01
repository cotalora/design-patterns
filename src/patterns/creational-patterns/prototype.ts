class Prototype {
  public property1: string;
  public property2: number;

  constructor(property1: string, property2: number) {
    this.property1 = property1;
    this.property2 = property2;
  }

  clone(): this {
    const clone = Object.create(this);
    return clone;
  }
}

class ConcretePrototype extends Prototype {
  public additionalProperty: boolean;

  constructor(property1: string, property2: number, additionalProperty: boolean) {
    super(property1, property2);
    this.additionalProperty = additionalProperty;
  }
}

const prototypeInstance = new ConcretePrototype("Hello", 42, true);
const clonedInstance = prototypeInstance.clone();
clonedInstance.property1 = "Hello";

console.log("Original Instance:", prototypeInstance);
console.log("Original Instance Size:", JSON.stringify(prototypeInstance).length);
console.log("Cloned Instance:", clonedInstance);
console.log("Original Instance Size:", JSON.stringify(clonedInstance).length);