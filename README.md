# bitcore-testing

test / example code for working with the bitcore wallet client, server node, and library. 

# usage:

git clone git@github.com:Tectract/bitcore-testing

cd bitcore-testing

npm install

cd node_modules/bitcore-wallet-service

    update config.js with your own mongoDB uri: 

    mongodb://username:password@db.hostname.com:portnum/db

npm start

cd -

# to run the tests
node walletOne.js   # to run the bitcore test script against your locally running bitcore-wallet-service
node newAddrsOne.js # imports the WalletOne.dat file generated by walletOne.js and gets a new addr in it

node walletTwo.js [wallet_join_secret example not working]

node walletThree.js [wallet_join_secret example not working]




    




