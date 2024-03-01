class Engine {
  private parts: string[] = [];

  addPart(part: string) {
    this.parts.push(part);
  }

  showParts() {
    console.log(`Engine parts: ${this.parts.join(', ')}`);
  }
}

interface EngineBuilder {
  buildPartA(): void;
  buildPartB(): void;
  getResult(): Engine;
}

class ConcreteEngineBuilder implements EngineBuilder {
  private engine: Engine = new Engine();

  buildPartA(part: string = 'Part A') {
    this.engine.addPart(part);
  }

  buildPartB(part: string = 'Part B') {
    this.engine.addPart(part);
  }

  getResult() {
    return this.engine;
  }
}

class Director {
  private builder: EngineBuilder;

  constructor(builder: EngineBuilder) {
    this.builder = builder;
  }

  construct() {
    this.builder.buildPartA();
    this.builder.buildPartB();
  }
}

const builder = new ConcreteEngineBuilder();
const director = new Director(builder);

director.construct();

const engine = builder.getResult();
engine.addPart('New Part 1');
engine.addPart('New Part 2');
engine.addPart('New Part 3');
engine.showParts();
