abstract class Product {
  abstract displayInfo(): void;
  abstract sayHello(): void;
} 

class ConcreteProductA implements Product {
  displayInfo(): void {
    console.log("I`m a type A product");
  }

  sayHello(): void {
    console.log("Hello from A product");
  }
}

class ConcreteProductB implements Product {
  displayInfo(): void {
    console.log("I`m a type B product");
  }

  sayHello(): void {
    console.log("Hello from B product");
  }
}

class Factory {
  createProduct(type: string): Product {
    switch (type) {
      case "A":
        return new ConcreteProductA();
      case "B":
        return new ConcreteProductB();
      default:
        throw new Error("Tipo de producto no válido");
    }
  }
}

const factory = new Factory();

const product = factory.createProduct('B');
product.displayInfo();