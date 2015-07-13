# bitcore-testing

test / example code for working with the bitcore wallet client, server node, and library. 

usage:

git clone git@github.com:Tectract/bitcore-testing
cd bitcore-testing
sudo npm i -g bitcore
sudo npm i -g bitcore-mnemonic
sudo npm i -g bitcore-wallet-client
sudo npm i -g bitcore-wallet-service

cd node_modules/bitcore-wallet-service
update config file with this mongoDB uri: 
mongodb://username:password@db.hostname.com:portnum/db
npm start

cd -
node walletTest.js   # to run the bitcore test script against your locally running bitcore-wallet-service






    




