
let count = 0;
const addOne = () => {
  count++;
  console.log('addOne');
  renderCounterApp();
};

const minusOne = () => {
  count--;
  console.log('minusOne');
  renderCounterApp();
};

const reset = () => {
  count = 0;
  console.log('reset');
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
// const user = {
//   name: 'Marina',
//   age: 26,
//   location: 'Toronto'
// };

// function getLocation(location) {
//   if (location) {
//     return location;
//   }
//   return 'Unknown';
// }

// function getLocationTwo(location) {
//   if (location) {
//     return <p>Location: location </p>;
//   }
// }

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
//     <p>Location: {getLocation(user.location)}</p>
//   </div>
// );
