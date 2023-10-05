// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// function Practice() {
//   const [count, setCount] = useState(0);
//   const practice = () => {
//     useState(count);
//   }

//   const increment = () => {
//     setCount(count + 1);
//   }

//   const decrement = () => {
//     setCount(count - 1);
//   }

//   const MyComponent = () => {
//   return (
//     <div className="App">
//       <h2>{practice}</h2>
//       <button onClick={increment} className="counter">+</button>
//       <button onClick={decrement} className="counter">-</button>
//     </div>
//   );
//   }

// const myElement = <MyComponent />;

// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     document.createElement('div'),
//     document.createElement('p').textContent =  {Count: {$count}},
//     document.createElement('button').textContent = 'Increment',
//     document.createElement('button').textContent = 'Decrement'
//   );
// }

// Untuk menambahkannya ke dalam DOM, Anda harus mengambil elemen tujuan dan menambahkan komponen Counter ke dalamnya.
// const targetElement = document.getElementById('root');
// const counterComponent = Counter();
// targetElement.appendChild(counterComponent);

const Practice = () => {
  const [count, setCount] = React.useState (0)

  const incrementCount = () => {
    setCount (count + 1);
  }

  const decrementCount = () => {
    setCount (count - 1);
  }

  return (
    <div>
        <h2>{count}</h2>
          <button onClick={incrementCount}>+</button>
          <button onClick={decrementCount}>-</button>
    </div>
  )
}

ReactDOM.render(<Practice />, document.getElementById('root'));