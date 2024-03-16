function createCar(manufacturer: string, modelName: string, ...options: Record<string, unknown>[]): Record<string, unknown> {
    const carInfo: Record<string, unknown> = {
        manufacturer,
        modelName,
    };

    for (const option of options) {
        const [key, value] = Object.entries(option)[0];
        carInfo[key] = value;
    }

    return carInfo;
}


const myCar = createCar("Toyota", "Camry", { color: "Blue" }, { hasSunroof: true });

console.log(myCar);
