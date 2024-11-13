const first = () => {
  console.log('동기 작업 1');
};

const second = () => {
  setTimeout(() => {
    console.log('비동기 작업 1');
  }, 5000);
};

const third = () => {
  setTimeout(() => {
    console.log('비동기 작업 2');
  }, 7000);
};

const fourth = () => {
  console.log('동기 작업 2');
};

first();
second();
third();
fourth();
