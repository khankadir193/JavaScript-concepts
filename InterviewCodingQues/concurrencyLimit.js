const delay = (ms, value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${value} completed`);
      resolve(value);
    }, ms);
  });
};

const tasks = [
  () => delay(3000, 'Task 1'),
  () => delay(1000, 'Task 2'),
  () => delay(2000, 'Task 3'),
  () => delay(1500, 'Task 4'),
  () => delay(500, 'Task 5'),
  () => delay(2500, 'Task 6'),
  () => delay(800, 'Task 7'),
  () => delay(1200, 'Task 8'),
  () => delay(400, 'Task 9'),
  () => delay(1800, 'Task 10'),
];

const runWithConcurrency = async (tasks, limit) => {
  const results = [];
  let nextIndex = 0;

  const worker = async () => {
    while (nextIndex < tasks.length) {
      const currentIndex = nextIndex;
      nextIndex++;

      const result = await tasks[currentIndex]();

      results[currentIndex] = result;
    }
  };

  const workers = [];

  for (let i = 0; i < limit; i++) {
    workers.push(worker());
  }

  await Promise.all(workers);

  return results;
};

const limit = 3;

runWithConcurrency(tasks, limit).then((result) => {
  console.log('All tasks completed');
  console.log(result);
});