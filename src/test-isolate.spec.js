for (let repetition = 1; repetition <= 2; repetition++) {
  test("require - " + repetition, () => {
    let increment;
    jest.isolateModules(() => {
      increment = require("./require/index.js");
    });
    expect(increment()).toBe(1);
    expect(increment()).toBe(2);
  });

  test("import - " + repetition, () => {
    let increment;
    jest.isolateModules(() => {
      increment = require("./import/index.js").default;
    });
    expect(increment()).toBe(1);
    expect(increment()).toBe(2);
  });
}
