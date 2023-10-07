"use strict";

// Define sales data arrays for five regions and four quarters
const regions = [
  [1540, 1130, 1580, 1105],
  [2010, 1168, 2305, 4102],
  [2450, 1847, 2710, 2391],
  [1845, 1491, 1284, 1575],
  [2120, 1767, 1599, 3888],
];

// Calculate and display totals by quarter
const quarterTotals = [0, 0, 0, 0];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    quarterTotals[i] += regions[j][i];
  }
}

// Displays totals by Quarter
document.write("<h2>Sales by Quarter</h2>");
for (let i = 0; i < 4; i++) {
  document.write(`Quarter ${i + 1}: $${quarterTotals[i]}<br>`);
}

// Calculate and display totals by region
const regionTotals = [0, 0, 0, 0, 0];

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4; j++) {
    regionTotals[i] += regions[i][j];
  }
}

// Displays Sales by Region
document.write("<h2>Sales by Region</h2>");
for (let i = 0; i < 5; i++) {
  document.write(`Region ${i + 1}: $${regionTotals[i]}<br>`);
}

// Calculate and display total sales
let totalSales = 0;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4; j++) {
    totalSales += regions[i][j];
  }
}

// Displays Total Sales Made
document.write("<h2>Total Sales</h2>");
document.write(`Total Sales: $${totalSales}`);

