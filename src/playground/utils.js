  console.log('utils.js is runnning');

  const square = (x) => x * x;
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;

  export { square, add, subtract as default };

// we can use
// export const square = (x) => x * x;

//export - default export - named exports