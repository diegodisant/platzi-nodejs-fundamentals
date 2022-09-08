console.log('data');

console.info('info');
console.warn('warning');
console.error('error');

const dataTable = [
  {
    a: 1,
    b: 'z',
  },
  {
    a: 2,
    b: 'other',
  },
];

console.table(dataTable);

console.group('cgroups');
console.log('dev');
console.group('data');
console.log('data/stream0');
console.groupEnd('data');
console.log('etc/fs');
console.groupEnd('cgroups');

console.count('data0');
console.count('data0');
console.count('data0');
console.count('data0');
console.count('data0');
