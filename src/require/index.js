const { setCount, getCount } = require("./count");

module.exports = function increment() {
  setCount((s) => s + 1);
  return getCount();
};
