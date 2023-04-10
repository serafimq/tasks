// 1 task
function firstTask() {
  console.log('start');

  const promise1 = new Promise((resolve, reject) => {
    console.log(1) // будет выведено вторым, потому что всё что внутри промиса, работает синхронно, кроме resolve and reject
  })

  console.log('end');
  // log: start - 1 - end 
};
// firstTask();

// 2 task
function secondTask() {
  console.log('start');

  const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
  })

  promise1.then(res => {
    console.log(res)
  })

  console.log('end');
  // result: start - 1 - end - 2 
}
// secondTask();

// task 3
function thirdTask() {
  console.log('start');

  const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
    console.log(3)
  })

  promise1.then(res => {
    console.log(res)
  })

  console.log('end');
  // start - 1 - 3 - end - 2 
}
// thirdTask();

function fourthTask() {
  console.log('start');

  const promise1 = new Promise((resolve, reject) => {
    console.log(1)
  })

  promise1.then(res => {
    console.log(2)
  })

  console.log('end');
  // start - 1 - end 
}
// fourthTask();

function fifthTask() {
  console.log('start')

  const fn = () => (new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
  }))

  console.log('middle')

  fn().then(res => {
    console.log(res)
  })

  console.log('end')
  // start - middle - 1 - end - success
}
// fifthTask();

function sixthTask() {
  console.log('start')

  Promise.resolve(1).then((res) => {
    console.log(res)
  })

  Promise.resolve(2).then((res) => {
    console.log(res)
  })

  console.log('end')
  // start - end - 1 - 2 
}
// sixthTask();

function seventhTask() {
  console.log('start')

  setTimeout(() => {
    console.log('setTimeout')
  })

  Promise.resolve().then(() => {
    console.log('resolve')
  })

  console.log('end')
  // start - end - resolve - setTimeout
}
// seventhTask();

function ninthTask() {
  const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
  });

  promise.then((res) => {
    console.log(res);
  });

  console.log(4);
  // 1 - 2 - 4 - timerStart - timerEnd - success
}
// ninthTask();

function tenthTask() {
  const timer1 = setTimeout(() => {
    console.log('timer1');

    const promise1 = Promise.resolve().then(() => {
      console.log('promise1')
    })
  }, 0)

  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
  // timer1 - promise1 - timer2
}
// tenthTask();

function eleventhTask() {
  console.log('start');

  const promise1 = Promise.resolve()
    .then(() => {
      console.log('promise1');

      const timer2 = setTimeout(() => {
        console.log('timer2')
      }, 0)
    });

  const timer1 = setTimeout(() => {
    console.log('timer1')
    const promise2 = Promise.resolve()
      .then(() => {
        console.log('promise2')
      })
  }, 0)

  console.log('end');
  // start - end - promise1 - timer1 - promise2 - timer2
}
// eleventhTask();
