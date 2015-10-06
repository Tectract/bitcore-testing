var Mnemonic = require('bitcore-mnemonic');
delete global._bitcore; //workaround for namespace conflict
var Bitcore = require('bitcore');
delete global._bitcore; //workaround for namespace conflict
var Client = require('bitcore-wallet-client');
var fs = require('fs');
var BWS_INSTANCE_HOST = 'http://localhost:3232'
var BWS_INSTANCE_URL = BWS_INSTANCE_HOST + '/bws/api'

var client = new Client({
  baseUrl: BWS_INSTANCE_URL,
  verbose: false,
});

var code = new Mnemonic(Mnemonic.Words.ENGLISH);
code.toString();
console.log("code : " + code);

var xpriv0 = code.toHDPrivateKey();

console.log("xpriv0 : " + xpriv0);

var HDPrivKey0 = new Bitcore.HDPrivateKey(xpriv0.toString());
console.log("private key validity : " + Bitcore.HDPrivateKey.isValidSerialized(xpriv0.toString()));

client.seedFromExtendedPrivateKey(xpriv0.toString());

client.createWallet("WalletOne", "WalletNumberOne", 1, 1, {network: 'livenet'}, function(err, secret) {
  if(err){
    console.error("saw secret: " + secret + " and err: " + JSON.stringify(err));
  } else {
    console.log('Wallet Created. Share this secret with your copayers: ' + secret);

    client.createAddress(function(err,address){
      if(err) {
        console.log(err);
      } else {
        if(address){
          console.log("address generated : " + JSON.stringify(address));
          var tempObj = { doNotVerify : true };
          client.getMainAddresses(tempObj,function(err,resp){
            if(err){
              console.log(err);
            } else {
              console.log("saw number of wallet addresses: " + resp.length)
              for( var i in resp){
                console.log("wallet address " + i + " : " + JSON.stringify(resp[i]));
              }
              if(!fs.writeFileSync('WalletOne.dat', client.export())) {
                console.log("Wallet file: WalletNumberOne.dat saved!");
              } else {
                console.log("UNABLE TO SAVE Wallet file: WalletNumberOne.dat!");
              }
            }
          });
        } else {
          console.log("unable to generate address! Wallet file not saved.");
        }
      }
    });

//    client.openWallet(function(err,success){
//      if(err) {
//        console.log(err);
//      } else {
//        if(success){
//          console.log("wallet opened!");
//        } else {
//          console.log("unable to open wallet!");
//        }
//      }
//    });

      thisOpts = {includeExtendedInfo : true};
//    client.getStatus(function(err,resp){
//      if(err){
//        console.log(err);
//      } else {
//        console.log("saw wallet status : " + JSON.stringify(resp))
//      }
//    });
  }
});