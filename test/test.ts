import test = require('blue-tape');
import ndarray = require('ndarray');

test('module can load properly', null, function(t) {
  let test = ndarray([]);
  t.notEqual(null, test, 'created instance is not null');
  t.notEqual(undefined, test.set, 'has expected method: set ');
  t.end();
});

test('can get a value that was set', null, function(t) {
  let test = ndarray([], [1,1]);
  const value = 34;

  test.set(0,0, value);

  t.equal(test.get(0,0), value);
  t.end();
});
