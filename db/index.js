var phrases;
exports.connect = function () {
  phrases = require('./ru');
};

exports.getPhrase = function (name) {
  if (!phrases[name]) {
    throw new Error(`Your phrase doesn't exists ${name}`);
  }

  return phrases[name];
};
