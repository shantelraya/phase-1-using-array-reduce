const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((battery, accumulator) => {return battery += accumulator;}, 0);

console.log(totalBatteries);