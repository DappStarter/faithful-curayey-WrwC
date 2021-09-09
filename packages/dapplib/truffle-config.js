require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain huge include armed flock victory'; 
let testAccounts = [
"0x5c77a19dcc4add1abc48935e40a74741c8e03907e4ad7249cc65a05f1b4f59bc",
"0xfe374aca01cbb7d2cfe97165b9efe551579fdfa9733dba2c4dba6695ad982ad9",
"0x8bd25ec097c8531031f675e4e65c8b999ca140fe5eaae2586c975f2efe345d52",
"0x02c31e7ec8d1802178d10b4d5fecc952be572a53ea2ee95a7b18770b2a24589b",
"0xa490da4d7e6a67278084cfbad70f1982552558d46ffa510d14d7b3c728aaaa23",
"0x0f0a1fbaaca7c7ab8bc75854abd7b05c426d9fa81491a115ffbb141b32562f74",
"0x9f8ed9cdcde261ba2d726af583f1b9cf2daa1a1848d035e3d7d5dc440d614494",
"0x75528371f34fd3b76b9bf9c6aa9dc1ae3071f35ee418808571d61b98480caa45",
"0x3726b33262ead3f484ca3cf40c2fd5dd5019f1c879edd8b0447886fd2dfb1d7d",
"0xb8d34f24c588fb9ef36aa9f90188aaf33d2342f5e0b8544e3235bbb65063691d"
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
            version: '^0.8.0'
        }
    }
};

