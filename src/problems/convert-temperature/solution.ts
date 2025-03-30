// [kelvin, farenheit]
const solution = (celsius: number): [number, number] => {
  const convertCelsiusToKelvin = (celsius: number) => {
    return celsius + 273.15;
  };

  const convertCelsiusToFahrenheit = (celsius: number) => {
    return celsius * 1.8 + 32.0;
  };

  const result: [number, number] = [
    convertCelsiusToKelvin(celsius),
    convertCelsiusToFahrenheit(celsius)
  ];

  return result;
};

export default solution;
