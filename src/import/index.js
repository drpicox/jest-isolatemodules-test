process.stdout.write("- import index.js\n");
import { setCount, getCount } from "./count";

export default function increment() {
  setCount((s) => s + 1);
  return getCount();
}
