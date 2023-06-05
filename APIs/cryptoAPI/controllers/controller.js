const helpers = require("helpers");

function encrypt(req, res) {
  let key = req.query.key;
  let key_encrypt = helpers.crypto.encrypt(key);
  return res.json({
    status: 200,
    message: "Encriptando que da miedo.",
    result: key_encrypt,
  });
}

function decrypt(req, res) {
  let key = req.query.key;
  let key_decrypt = helpers.crypto.decrypt(key);
  return res.json({
    status: 200,
    message: "Encriptando que da miedo.",
    result: key_decrypt,
  });
}

function ping(req, res) {
  return res.json({status:200, message:'Estoy vivo'});
}

module.exports = { encrypt, decrypt, ping };
