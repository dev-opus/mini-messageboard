const crypto = require('crypto');

module.exports.genPassword = password => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 32, 'sha512')
    .toString('hex');
  return {
    salt,
    hash,
  };
};
