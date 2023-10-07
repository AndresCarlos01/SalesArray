"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];
// Calculate totals by quarter, define a constant and use a for loop
const quarterTotals = [0, 0, 0, 0];
for (let i = 0; i < 4; i++) {
  quarterTotals[i] =
    region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
}

// Display totals by quarter using document.write and a for loop
document.write("<h2>Sales by Quarter</h2>");
for (let i = 0; i < 4; i++) {
  document.write(`Quarter ${i + 1}: $${quarterTotals[i]}<br>`);
}

// Calculate totals by region, define a constant and use a for loop
const regionTotals = [0, 0, 0, 0, 0];
for (let i = 0; i < 5; i++) {
  regionTotals[i] =
    region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
}

// Display totals by region using document.write and a for loop
document.write("<h2>Sales by Region</h2>");
for (let i = 0; i < 5; i++) {
  document.write(`Region ${i + 1}: $${regionTotals[i]}<br>`);
}

// Calculate total sales, use a for loop to add all the quarter totals together
let totalSales = 0;
for (let i = 0; i < 4; i++) {
  totalSales += quarterTotals[i];
}

// Display total sales using document.write
document.write("<h2>Total Sales</h2>");
document.write(`Total Sales: $${totalSales}`);
