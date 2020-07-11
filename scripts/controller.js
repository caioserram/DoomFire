const gridHeight = 300;
const gridWidth = 300;
const fireMaximumIntensity = 36;
const firePixelsArray = [];

function start() {
  createFireDataStructure();
}

function createFireDataStructure() {
  for (let i = 0; i < gridHeight; i++) {
    firePixelsArray[i] = [];
    for (let j = 0; j < gridWidth; j++) {
      firePixelsArray[i][j] = fireMaximumIntensity;
    }
  }
}

start();
