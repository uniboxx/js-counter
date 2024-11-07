const dec = document.getElementById('decrement');
const inc = document.getElementById('increment');
const counter = document.getElementById('counter');

let count = 0;

function decrement() {
  count -= 1;
  counter.textContent = count;
}

function increment() {
  count += 1;
  counter.textContent = count;
}

dec.addEventListener('click', decrement);
inc.addEventListener('click', increment);
