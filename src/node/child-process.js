const { exec, spawn } = require('child_process');

exec('ls -la', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    console.error(stderr);

    return false;
  }

  console.log(stdout);

  return true;
});

const process = spawn('ls', ['-la']);

const { pid, suspended, killed } = process;

process.stdout.on('data', (data) => {
  console.log(data);
});

process.on('exit', () => {
  console.log('process finished');
});

console.table([
  {
    pid,
    suspended,
    killed,
  },
]);
