const fs = require('fs');

const read = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log('Unable to read file');
      console.log(err);

      return;
    }

    callback(data.toString());
  });
};

read(
  __dirname + '/file.txt',
  console.log
);

const write = (path, contents, callback) => {
  fs.writeFile(
    path,
    contents,
    {},
    (err, data) => {
      if (err) {
        console.log('Unable to write file');
        console.log(err);

        return;
      }

      callback(data);
    }
  );
};

write(
  __dirname + '/file-new.txt',
  'I am a new file',
  console.log
);

const remove = (path, callback) => {
  fs.unlink(path, (err) => {
    if (err) {
      console.log('Unable to delete file');
      console.log(err);

      return;
    }

    callback();
  });
};

remove(__dirname + '/file-new.txt', () => {
  console.log('File deleted');
});
