import test = require('blue-tape');
import ndarray = require('ndarray');

test('module can load properly', null, function(t) {
  var test = ndarray([]);
  t.notEqual(null, test, 'created instance is not null');
  t.notEqual(undefined, test.set, 'has expected method: set ');
  t.end();
});
