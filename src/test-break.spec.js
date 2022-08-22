const { getCount: rGetCount, setCount: rSetCount } = require("./require/count");
import { getCount as iGetCount, setCount as iSetCount } from "./import/count";

test("getCount/setCount require", () => {
  rSetCount(() => 9);
  expect(rGetCount()).toBe(9);
});
test("getCount/setCount require", () => {
  iSetCount(() => 9);
  expect(iGetCount()).toBe(9);
});

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
      process.stdout.write("--- start loadPlugin\n");
      increment = require("./import/index.js").default;
      process.stdout.write("--- end loadPlugin\n");
    });
    expect(increment()).toBe(1);
    expect(increment()).toBe(2);
  });
}
