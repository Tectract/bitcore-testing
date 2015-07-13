var Mnemonic = require('bitcore-mnemonic');
delete global._bitcore; //workaround for namespace conflict
var Client = require('bitcore-wallet-client');
delete global._bitcore; //workaround for namespace conflict
var Bitcore = require('bitcore');
var fs = require('fs');
var BWS_INSTANCE_URL = 'http://localhost:3232/bws/api'

var client = new Client({
  baseUrl: BWS_INSTANCE_URL,
  verbose: true,
});

var code = new Mnemonic(Mnemonic.Words.ENGLISH);
code.toString();
console.log("code : " + code);

var xpriv0 = code.toHDPrivateKey();

console.log("xpriv0 : " + xpriv0);

var HDPrivKey0 = new Bitcore.HDPrivateKey(xpriv0.toString());
console.log("private key validity : " + Bitcore.HDPrivateKey.isValidSerialized(xpriv0.toString()));

client.seedFromExtendedPrivateKey(xpriv0.toString());

//
//client.createWallet("My Wallet", "RyanWallet", 2, 2, {network: 'livenet'}, function(err, secret) {
//  // Handle err
//  console.log('Wallet Created. Share this secret with your copayers: ' + secret);
//  fs.writeFileSync('RyanWallet.dat', client.export());
//});

