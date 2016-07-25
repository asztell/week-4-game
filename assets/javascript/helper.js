var memoizer = function (memo, fundamental) {
  var shell = function (n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fundamental(shell, n);
      memo[n] = result;
    }
    return result;
  };
  return shell;
};

// We can now define fibonacci with the memoizer, 
// providing the initial memo array and
// fundamental function:

var fibonacci = memoizer([0, 1], function (shell, n) {
  return shell(n - 1) + shell(n - 2);
});
