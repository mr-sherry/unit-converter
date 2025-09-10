// src/lib/conversions.js

// ------------------ Length ------------------
export function convertLength(value, from, to) {
  const factors = {
    m: 1,
    cm: 100,
    km: 0.001,
    in: 39.3701,
    ft: 3.28084,
    mi: 0.000621371,
  };
  return (value * factors[to]) / factors[from];
}

// ------------------ Weight ------------------
export function convertWeight(value, from, to) {
  const factors = {
    kg: 1,
    g: 1000,
    lb: 2.20462,
    oz: 35.274,
    st: 0.157473, // stone
  };
  return (value * factors[to]) / factors[from];
}

// ------------------ Power ------------------
export function convertPower(value, from, to) {
  const factors = {
    W: 1,
    kW: 0.001,
    MW: 0.000001,
    hp: 0.00134102,
  };
  return (value * factors[to]) / factors[from];
}

// ------------------ Temperature ------------------
export function convertTemperature(value, from, to) {
  if (from === to) return value;

  let celsius;
  switch (from) {
    case "C":
      celsius = value;
      break;
    case "F":
      celsius = (value - 32) * (5 / 9);
      break;
    case "K":
      celsius = value - 273.15;
      break;
    default:
      throw new Error("Unsupported unit");
  }

  switch (to) {
    case "C":
      return celsius;
    case "F":
      return (celsius * 9) / 5 + 32;
    case "K":
      return celsius + 273.15;
    default:
      throw new Error("Unsupported unit");
  }
}

// ------------------ Volume ------------------
export function convertVolume(value, from, to) {
  const factors = {
    L: 1,
    mL: 1000,
    gal: 0.264172,
    qt: 1.05669,
    pt: 2.11338,
    cup: 4.22675,
  };
  return (value * factors[to]) / factors[from];
}

// ------------------ Area ------------------
export function convertArea(value, from, to) {
  const factors = {
    "m²": 1,
    "cm²": 10000,
    "km²": 0.000001,
    "ft²": 10.7639,
    "in²": 1550,
    acre: 0.000247105,
    hectare: 0.0001,
  };
  return (value * factors[to]) / factors[from];
}

// ------------------ Speed ------------------
export function convertSpeed(value, from, to) {
  const factors = {
    "m/s": 1,
    "km/h": 3.6,
    mph: 2.23694,
    knot: 1.94384,
  };
  return (value * factors[to]) / factors[from];
}

// ------------------ Time ------------------
export function convertTime(value, from, to) {
  const factors = {
    s: 1,
    min: 1 / 60,
    h: 1 / 3600,
    day: 1 / 86400,
    week: 1 / 604800,
    year: 1 / 31536000,
  };
  return (value * factors[to]) / factors[from];
}

// ------------------ Data Storage ------------------
export function convertData(value, from, to) {
  const factors = {
    B: 1,
    KB: 1 / 1024,
    MB: 1 / 1024 ** 2,
    GB: 1 / 1024 ** 3,
    TB: 1 / 1024 ** 4,
  };
  return value * (1 / factors[from]) * factors[to];
}

// ------------------ Currency (Dummy Example) ------------------
// You'd replace with live API calls for real rates
export function convertCurrency(value, from, to) {
  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.0,
  };
  return (value / rates[from]) * rates[to];
}

// ------------------ Master Map ------------------
export const converters = {
  length: { fn: convertLength },
  weight: { fn: convertWeight },
  power: { fn: convertPower },
  temperature: { fn: convertTemperature },
  volume: { fn: convertVolume },
  area: { fn: convertArea },
  speed: { fn: convertSpeed },
  time: { fn: convertTime },
  storage: { fn: convertData },
  currency: { fn: convertCurrency },
};
