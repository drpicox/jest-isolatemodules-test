let count = 0;

exports.getCount = () => count;
exports.setCount = (f) => (count = f(count));
