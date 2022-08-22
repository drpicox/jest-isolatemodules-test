process.stdout.write("- import count.js\n");
let count = 0;

export const getCount = () => count;
export const setCount = (f) => (count = f(count));
