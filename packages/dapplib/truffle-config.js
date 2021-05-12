require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space stool decrease place artwork hover civil army gasp'; 
let testAccounts = [
"0xe5add364538026fde55b52e621dc669e8e513151b0c883c6ec179521b8d5b6df",
"0x3cf68d63a72d8bdaa6485107ccb8b3de53cd53c3540d5da162160d14f59d72e1",
"0xe5a279c5fbba8608dd7c8c396cf4501e50f9c9c85754584fe862ac06dd1971fa",
"0xf023a34eaf99bff890b1bc29c37a70f65d10328e6004bddc83313d696ab1f79a",
"0x64ac8f9592091ab63e47ac57a8bff2d49b82c30e64f6e3167e6c0cb704b1fb8a",
"0x349a1711f3293d5d35e54ab607cc82fe8369359874adcbf293e810e7f30a7546",
"0x0851d4c0b16bf0e53119098569cf9d78e0a35f60f502b43170c102342b56fdd6",
"0xaf4e08327139d7d12f70916d59adbc59cc8266d806486894240f75bc27eb72e8",
"0x0cea457ad304f42da7b8936f90526c9291837a8ef9fbe59b2d8919b74878347f",
"0x719b912682f32e3169857f6798e15f890699a5ba71465a6e290b3ec56b5a6866"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
