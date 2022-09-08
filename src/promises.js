const hello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hello, I am ${name}`);

      console.log('Calling hello resolve promise callback');

      resolve(name);
    }, 1500);
  });
};

const talk = (name) => {
  return new Promise((resolve, reject) => {
    console.log(`${name} talking...`)
    console.log('Blah, blah, blah....');

    setTimeout(() => {
      console.log('Calling talk resolve promise callback');

      resolve(name);
    }, 1000);
  });
};

const bye = (name) => {
  return new Promise((resolve, reject) => {
    console.log(`Bye ${name}!!!`);

    reject('Bye error, you didnt say goodbye');

    setTimeout(() => {
      console.log('Calling bye resolve promise callback');

      resolve(name);
    }, 1000);
  });
};

console.log('starting the process');

hello('Diego')
  .then(talk)
  .then(talk)
  .then(talk)
  .then((name) => {
    bye(name)
      .then((byeName) => {
        console.log(`All conversation finished for ${byeName}`);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('terminating process');
  })
