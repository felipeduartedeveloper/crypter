const crypto = require('crypto');
const alg = 'aes-256-ctr';
const pwd = '-N@dnm6d#H-*ReQgA_vwREC#5^';

function crypt(text){
 
  const cipher = crypto.createCipher(alg, pwd)
  const crypted = cipher.update(text, 'utf8', 'hex')
  return crypted
}
  

function decrypt(text) {
  const decrypt = crypto.createDecipher(alg, pwd)
  const plain = decrypt.update(text, 'hex', 'utf8');
  return plain
}

console.log(crypt('SENHA'))
//console.log(decrypt('HASH'))