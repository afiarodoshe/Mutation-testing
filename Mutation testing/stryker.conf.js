/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information",
  packageManager: "npm",
  mutate : [
    "./src/1-BMI.js",
    "./src/2-converter.js",
    "./src/3-sorting.js"
  ],
  reporters: ["html", "clear-text", "progress"],
  testRunner: "command",
  coverageAnalysis: "off",
};
