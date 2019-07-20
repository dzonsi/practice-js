// An interface representing vehicle
interface Vehicle {
  run(): void;
}

// A class representing car
class Car implements Vehicle {
  private name: string;
  private parts: Array<string>;

  constructor(name: string, parts: Array<string>) {
    this.name = name;
    this.parts = [...parts];
  }

  public run(): void {
    console.log(`A vehicle ${this.name} is running using ${this.parts.join(', ')}!`);
  }
}

// Function that starts given vehicle
function startVehicle(vehicle: Vehicle): void {
  vehicle.run();
}

// Creation of new car instance
const fordFocus: Vehicle = new Car('Ford Focus', ['4 wheels', 'engine', 'transmission']);
startVehicle(fordFocus); // ...and running it