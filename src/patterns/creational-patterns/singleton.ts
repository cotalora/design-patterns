class Singleton {
  private static instance: Singleton | null = null;
  private storageTest: string[] = [];

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public addValueToStorage(value: string) {
    if (!value) return;

    this.storageTest = [...this.storageTest, value];
  }

  public getStorage() { return this.storageTest };
}




const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log('The instances are equals:', instance1 === instance2);

instance1.addValueToStorage('Pepito Pérez');
console.log('The storage from the instance 1 is:', instance1.getStorage());
instance2.addValueToStorage('Juan Gonzalez');
console.log('The storage from the instance 2 is:', instance2.getStorage());