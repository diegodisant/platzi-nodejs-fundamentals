const hello = (name, callback) => {
  console.log(`Hello, I am ${name}`);

  setTimeout(() => {
    console.log('Calling hello callback');
    callback(name);
  }, 1000);
};

const talk = (callback) => {
  console.log('Blah, blah, blah....');

  setTimeout(() => {
    console.log('Calling talk callback');
    callback();
  });
};

const bye = (name, callback) => {
  console.log(`Bye ${name}!!!`);

  setTimeout(() => {
    console.log('Calling bye callback');
    callback();
  })
};

console.log('starting process...');

hello('Diego', (name) => {
  talk(() => {
    talk(() => {
      talk(() => {
        bye(name, () => {
          console.log('finishing process');
        });
      });
    });
  });
})

/**
 * Optimize callback hell
 */

function talkPerTimes(
  times,
  callback,
  atTime = 0,
  endCallback<
) {
  if (atTime > times) {
    endCallback();

    return;
  }

  atTime += 1;

  talk(callback);

  return talkPerTimes(times, callback, atTime);
}

hello('Diego', (name) => {
  talkPerTimes(
    3,
  );
});
