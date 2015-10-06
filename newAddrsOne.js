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

fs.readFile('WalletOne.dat', function(err,resp) {
  if(err) {
    console.log("UNABLE TO READ Wallet file: WalletNumberOne.dat!");
  } else {
    //console.log("Wallet file: " + JSON.stringify(resp));
    client.import(resp)

//    client.getUtxos("1782n5RXcRQYdxT6cputFpYRDuP2i7EG1h",function(err,resp){
//      if(err){
//        console.log("couldn't get utxos!")
//      } else {
//        console.log("saw resp : " + JSON.stringify(resp));
//      }
//    });

    console.log("copayer_id: " + JSON.stringify(client.credentials.copayerId));

    client.getPeerBalance(client.credentials.copayerId, function(err,resp){
      if(err){
        console.log("couldn't get balance!")
      } else {
        console.log("saw resp : " + JSON.stringify(resp));
      }
    });

//    thisOpts = {includeExtendedInfo : true};
//    client.getStatus(thisOpts,function(err,resp){
//      if(err){
//        console.log(err);
//      } else {
//        console.log("saw wallet status : " + JSON.stringify(resp))
//        client.createAddress(function(err,address){
//          if(err) {
//            console.log(err);
//          } else {
//            if(address){
//              console.log("address generated : " + JSON.stringify(address));
//              var tempObj = { doNotVerify : true };
//              client.getMainAddresses(tempObj,function(err,resp){
//                if(err){
//                  console.log(err);
//                } else {
//                  console.log("saw number of wallet addresses: " + resp.length)
//                  for( var i in resp){
//                    console.log("wallet address " + i + " : " + JSON.stringify(resp[i].address));
//                    client.getUtxos(resp[i].address,function(err,resp){
//                      if(err) {
//                        console.log(" - unable to get utxos for this address!");
//                      } else {
//                        console.log(" - utxos for this address : " + JSON.stringify(resp));
//                      }
//                    });
//                  }
////                  if(!fs.writeFileSync('WalletOne.dat', client.export())) {
////                    console.log("Wallet file: WalletNumberOne.dat saved!");
////                  } else {
////                    console.log("UNABLE TO SAVE Wallet file: WalletNumberOne.dat!");
////                  }
//                }
//              });
//            } else {
//              console.log("unable to generate address! Wallet file not saved.");
//            }
//          }
//        });
//      }
//    });
  }
});


