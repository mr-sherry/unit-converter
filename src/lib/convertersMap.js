// src/lib/convertersMap.js

export const CONVERTERS = {
  length: {
    title: "Length Converter",
    description:
      "Convert between meters, centimeters, kilometers, inches, feet, and miles easily.",
    units: ["m", "cm", "km", "in", "ft", "mi"],
    realWorldExamples: [
      "A standard door is about 2 meters (≈ 6.5 feet) tall.",
      "A marathon race covers 42.195 kilometers (≈ 26.2 miles).",
      "A credit card is about 8.5 cm (≈ 3.3 inches) wide.",
    ],
  },
  weight: {
    title: "Weight Converter",
    description:
      "Convert between kilograms, grams, pounds, ounces, and stones quickly.",
    units: ["kg", "g", "lb", "oz", "st"],
    realWorldExamples: [
      "A newborn baby usually weighs about 3.5 kilograms (≈ 7.7 pounds).",
      "A bag of flour at the store is typically 1 kilogram (≈ 2.2 pounds).",
      "An average laptop weighs around 2 kilograms (≈ 4.4 pounds).",
    ],
  },
  power: {
    title: "Power Converter",
    description:
      "Convert between watts, kilowatts, megawatts, and horsepower easily.",
    units: ["W", "kW", "MW", "hp"],
    realWorldExamples: [
      "A typical LED light bulb uses about 10 watts (0.01 kilowatts).",
      "An electric kettle often consumes 1500 watts (1.5 kilowatts).",
      "A car engine might produce 150 horsepower (≈ 111,855 watts).",
    ],
  },
  temperature: {
    title: "Temperature Converter",
    description:
      "Convert between Celsius, Fahrenheit, and Kelvin effortlessly.",
    units: ["C", "F", "K"],
    realWorldExamples: [
      "Normal human body temperature is about 37°C (≈ 98.6°F).",
      "Water freezes at 0°C (32°F) and boils at 100°C (212°F).",
      "Absolute zero is 0 Kelvin (−273.15°C).",
    ],
  },
  volume: {
    title: "Volume Converter",
    description:
      "Convert between liters, milliliters, gallons, quarts, and cups easily.",
    units: ["L", "mL", "gal", "qt", "pt", "cup"],
    realWorldExamples: [
      "A standard water bottle holds about 500 milliliters (0.5 liters).",
      "One gallon of milk is about 3.8 liters.",
      "A typical coffee cup holds around 240 milliliters (≈ 8 ounces).",
    ],
  },
  area: {
    title: "Area Converter",
    description:
      "Convert between square meters, square feet, acres, and hectares.",
    units: ["m²", "cm²", "km²", "ft²", "in²", "acre", "hectare"],
    realWorldExamples: [
      "A football field is about 0.7 hectares (≈ 1.7 acres).",
      "A small apartment might be 50 square meters (≈ 538 square feet).",
      "One hectare equals 10,000 square meters (≈ 2.47 acres).",
    ],
  },
  speed: {
    title: "Speed Converter",
    description:
      "Convert between meters per second, kilometers per hour, miles per hour, and knots.",
    units: ["m/s", "km/h", "mph", "knot"],
    realWorldExamples: [
      "A car on the highway typically drives at 100 km/h (≈ 62 mph).",
      "The speed of sound at sea level is about 343 m/s (≈ 1235 km/h).",
      "Ships often measure speed in knots (1 knot ≈ 1.85 km/h).",
    ],
  },
  time: {
    title: "Time Converter",
    description:
      "Convert between seconds, minutes, hours, days, weeks, and years.",
    units: ["s", "min", "h", "day", "week", "year"],
    realWorldExamples: [
      "There are 60 seconds in a minute and 3600 seconds in an hour.",
      "A week has 7 days (≈ 168 hours).",
      "A leap year has 366 days instead of 365.",
    ],
  },
  storage: {
    title: "Data Storage Converter",
    description:
      "Convert between bytes, kilobytes, megabytes, gigabytes, and terabytes.",
    units: ["B", "KB", "MB", "GB", "TB"],
    realWorldExamples: [
      "A text email might be about 10 KB in size.",
      "An HD movie can take up around 4 GB of storage.",
      "A modern smartphone may have 256 GB of storage capacity.",
    ],
  },
  currency: {
    title: "Currency Converter",
    description:
      "Easily convert between major world currencies like USD, EUR, GBP, INR, JPY, AUD, and more. Exchange rates are approximate and change daily.",
    units: [
      "USD", // US Dollar
      "EUR", // Euro
      "GBP", // British Pound
      "INR", // Indian Rupee
      "JPY", // Japanese Yen
      "AUD", // Australian Dollar
      "CAD", // Canadian Dollar
      "CNY", // Chinese Yuan
      "AED", // UAE Dirham
    ],
    realWorldExamples: [
      "1 USD ≈ 0.92 EUR (exchange rates vary daily).",
      "1 GBP ≈ 1.27 USD (subject to change).",
      "A coffee in India may cost about 150 INR (≈ 1.8 USD).",
      "A sushi meal in Japan may cost around 2,000 JPY (≈ 13.6 USD).",
      "An iPhone priced at 1,299 AUD is about 837 USD.",
      "A Dubai metro ticket may cost 5 AED (≈ 1.36 USD).",
    ],
  },
};

export const CONVERTER_SLUGS = Object.keys(CONVERTERS);
