module.exports = function (module) {
  return function () {
    var args = [module.filename].concat([].slice.call(arguments));
    console.log.apply(console, arguments);
  };
};
