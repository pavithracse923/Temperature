function convertTemperature() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  const targetUnit = document.getElementById("targetUnit").value;
  let result;

  if (isNaN(temp)) {
    alert("Please enter a valid temperature!");
    return;
  }

  if (unit === "Celsius") {
    if (targetUnit === "Fahrenheit") result = (temp * 9/5) + 32;
    else if (targetUnit === "Kelvin") result = temp + 273.15;
    else result = temp;
  } else if (unit === "Fahrenheit") {
    if (targetUnit === "Celsius") result = (temp - 32) * 5/9;
    else if (targetUnit === "Kelvin") result = (temp - 32) * 5/9 + 273.15;
    else result = temp;
  } else if (unit === "Kelvin") {
    if (targetUnit === "Celsius") result = temp - 273.15;
    else if (targetUnit === "Fahrenheit") result = (temp - 273.15) * 9/5 + 32;
    else result = temp;
  }

  document.getElementById("result").innerText = `Converted Temperature: ${result.toFixed(2)} ${targetUnit}`;
}
