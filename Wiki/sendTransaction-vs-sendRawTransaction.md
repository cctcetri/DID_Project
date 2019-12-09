# sendTransaction vs sendRawTransaction
* Ethereum 전송, ERC20 Token 전송, Smart Contract 함수 실행을 하기 위한 Web3js 함수
* Transaction 함수는 sendTransaction과 sendRawTransaction으로 나누어 진다. 
  * sendTransaction과 sendRawTransaction의 private key를 어디서 관리 하고 있는지에 따라 나누어서 사용된다. 

## sendTransaction 사용 방법
* 지갑나 Metamask와 같은 외부에서 private key를 관리 하고 있는 상황에서 사용 할 수 있다. 
```js
// compiled solidity source code using https://chriseth.github.io/cpp-ethereum/
var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";

web3.eth.sendTransaction({data: code}, function(err, transactionHash) {
  if (!err)
    console.log(transactionHash); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
});
```

## sendRawTransaction
* privateKey를 DApp에서 관리 하고 있는 경우 사용 할 수 있다.
* ethereumjs-tx 를 사용해 privateKey, transaction 을 서명해서 전송한다.
```js
var Tx = require('ethereumjs-tx');
var privateKey = new Buffer('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex')

var rawTx = {
  nonce: '0x00',
  gasPrice: '0x09184e72a000', 
  gasLimit: '0x2710',
  to: '0x0000000000000000000000000000000000000000', 
  value: '0x00', 
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
}

var tx = new Tx(rawTx);
tx.sign(privateKey);

var serializedTx = tx.serialize();

web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
  if (!err)
    console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
});
```

## 참고 및 출처 
* [ethereum/wiki](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethsendtransaction)
* [web3js 사용법 간단 요약](http://muyu.tistory.com/entry/Ethereum-web3js-%EC%82%AC%EC%9A%A9%EB%B2%95-%EA%B0%84%EB%8B%A8-%EC%9A%94%EC%95%BD)