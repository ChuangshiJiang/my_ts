function identity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

let output = identity([]);