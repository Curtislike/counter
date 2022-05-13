function createCounter(initial = 0) {
  let counter = initial;

  const MAX_VALUE = 15;
  const MIN_VALUE = -15;

  const root = document.querySelector('.root');
  const counterWrap = document.createElement('div');
  const incrementBtn = document.createElement('button');
  const decrementBtn = document.createElement('button');
  const text = document.createElement('div');
  const value = document.createElement('div');
  counterWrap.className = 'counter';
  incrementBtn.innerText = '+';
  decrementBtn.innerText = '-';
  text.innerText = 'Counter:';
  text.className = 'item';
  value.innerText = counter;
  value.className = 'item';
  root.append(counterWrap);
  counterWrap.append(incrementBtn, decrementBtn, text, value);

  function increment() {
    if (counter === MAX_VALUE) {
      incrementBtn.disabled = true;
      return;
    } else {
      decrementBtn.disabled = false;
      counter += 1;
      value.innerHTML = counter;
      return counter;
    }
  }

  function decrement() {
    if (counter === MIN_VALUE) {
      decrementBtn.disabled = true;
      return;
    } else {
      incrementBtn.disabled = false;
      counter -= 1;
      value.innerHTML = counter;
      return counter;
    }
  }

  incrementBtn.addEventListener('click', increment);

  decrementBtn.addEventListener('click', decrement);

  return {
    get counter() {
      return counter;
    },
    increment: () => increment(),
    decrement: () => decrement(),
  };
}

let value = createCounter(5);
let value1 = createCounter(8);
let value3 = createCounter(10);
