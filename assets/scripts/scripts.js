const fromUnit = document.getElementById("from-unit");
const toUnit = document.getElementById("to-unit");
const inputValue = document.getElementById("input-value");
const outputElement = document.getElementById("output");

const conversionFactors = {
  cm: { cm: 1, meter: 0.01, km: 0.00001 },
  meter: { cm: 100, meter: 1, km: 0.001 },
  km: { cm: 100000, meter: 1000, km: 1 },
  kg: { kg: 1, g: 1000 },
  g: { g: 1, kg: 0.001 },
  fahrenheit: { celsius: -17.2 },
};

// Perform temperature convertion
function convertTemperature(from, to, value) {
  if (from === "fahrenheit" && to === "celsius") {
    return (value - 32) * (5 / 9);
  } else {
    return value * (9 / 5) + 32;
  }
}

// Perform conversion
function convert() {
  const from = fromUnit.value;
  const to = toUnit.value;
  const value = parseFloat(inputValue.value);

  // Handle unchoosen units
  if (!value || from === "hidden-option" || to === "hidden-option") {
    outputElement.innerHTML = "Please choose a unit";
    return;
  }

  // Handle converting temperatures
  if (
    (fromUnit === "fahrenheit" && toUnit === "celsius") ||
    (fromUnit === "celsius" && toUnit === "fahrenheit")
  ) {
    const result = convertTemperature(from, to, value);
    outputElement.innerHTML = result.toFixed(2);
    return;

  }

  // Perform conversion using the conversionFactors map
  const conversionFactor = conversionFactors[from][to];
  const result = value * conversionFactor;

  // Display final result
  outputElement.innerHTML = result.toFixed(2);
}
