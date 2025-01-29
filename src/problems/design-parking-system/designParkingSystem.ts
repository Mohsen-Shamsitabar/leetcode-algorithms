class ParkingSystem {
  spots: [number, number, number] = [0, 0, 0];

  constructor(big: number, medium: number, small: number) {
    this.spots = [big, medium, small];
  }

  public addCar(carType: number): boolean {
    if (this.spots[carType - 1] === 0) return false;

    this.spots[carType - 1]--;
    return true;
  }
}

export default ParkingSystem;
