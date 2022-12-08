function createPromise(value, delay, error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      error ? reject(error) : resolve(value);
    }, delay);
  });
}

const p1 = createPromise(1, 250);
const p2 = createPromise(2, 700, 'unknown error');
const p3 = createPromise(3, 500, 'some custom error');

async function start() {
  try {
    const res = await Promise.any([p2, p3]);
    res;
  } catch (e) {
    console.log(e);
    console.log(e.errors);
  }
}

start();
