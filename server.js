const db = require('./db');
db.connect();

const User = require('./user');

function run() {
  const vasya = new User('vasia');
  const petya = new User('petya');

  vasya.hello(petya);
  console.log(db.getPhrase('Run successful'));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
