const calculateTemp = () => {
  const numberTemp = document.getElementById("temp");
  const tenpSelected = document.getElementById("temp_diff");

  const valueTemp = tenpSelected.options[tenpSelected.selectedIndex].value;

  const celToFah = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const fahToCel = (fahr) => {
    let celcius = Math.round(((fahr - 32) * 5) / 9);
    return celcius;
  };

  let result;

  if (valueTemp === "cel") {
    result = celToFah(numberTemp.value);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `=${result}°Fahrenheit`;
  } else {
    result = fahToCel(numberTemp.value);
    document.getElementById("resultContainer").innerHTML = `=${result}°Celcius`;
  }
};
