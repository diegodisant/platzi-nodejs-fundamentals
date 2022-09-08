const iAmAsync = (callback) => {
  console.log('Hello, I am a async function');

  setTimeout(() => {
    console.log('printing');
    callback();
  }, 1000);
}

console.log('starting process...');

iAmAsync(() => {
  console.log('ending process...');
});
