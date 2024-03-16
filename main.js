function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Process additional options
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var _b = Object.entries(option)[0], key = _b[0], value = _b[1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Example usage:
var myCar = createCar("Toyota", "Camry", { color: "Blue" }, { hasSunroof: true });
console.log(myCar); // Print the car object
