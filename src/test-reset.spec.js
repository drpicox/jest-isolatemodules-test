for (let repetition = 1; repetition <= 2; repetition++) {
  test("resetModules - " + repetition, () => {
    jest.resetModules();
    let increment;
    increment = require("./import/index.js").default;
    expect(increment()).toBe(1);
    expect(increment()).toBe(2);
  });
}
