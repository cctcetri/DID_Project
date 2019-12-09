## ERC20 (Ethereum Request for Comment)
* Ethereum 블록체인에서 스마트 계약에 사용되는 표준 기술.
* Ethereum 블록체인의 주요 토큰은 ERC20과 호환됨.

```
// ----------------------------------------------------------------------------
// ERC20 표준을 충족시키기 위해 필요한 기능 및 이벤트가 선언된 인터페이스 계약
// ----------------------------------------------------------------------------
contract ERC20Interface {
    // 토큰의 총 공급량 반환
    function totalSupply() public constant returns (uint);

    // 주소가 tokenOwner인 다른 계정이 보유하는 토큰 잔액 반환
    function balanceOf(address tokenOwner) public constant returns (uint balance);

    // spender가 인출 가능한 tokenOwner로부터 승인된 토큰의 양을 반환
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);

    // 내가 직접 to 주소에 tokens만큼 토큰 전송
    function transfer(address to, uint tokens) public returns (bool success);

    // _spender가 나를 대신하여 _value만큼의 토큰을 여러 번 인출할 수 있도록 허용
    function approve(address spender, uint tokens) public returns (bool success);

    // _from 주소에서 _to 주소에 _value 만큼의 토큰을 전송하고 Transfer 이벤트를 발생시킴
    // 스마트 계약서를 통해 나를 대신하여 토큰 전송 (from 계정이 승인해야 함)
    function transferFrom(address from, address to, uint tokens) public returns (bool success);

    // 0 값 전송을 포함하여 토큰이 전송될 때 반드시 이벤트 발생시킴
    event Transfer(address indexed from, address indexed to, uint tokens);

    // approve가 호출될 때 반드시 이벤트 발생시킴
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}
```

## Dapp(Decentralized Application)에서 토큰 발행량 설정

### white paper에 작성된 issuance model

* BTC 당 1000-2000개의 가격으로 이더를 판매한다. Matercoin이나 NXT와 같은 다른 암호화화폐 플랫폼에서 성공적으로 사용했던 방법으로, 이더리움 조직을 금전적으로 지원하고 개발에 필요한 비용을 댄다. 이 시기에 이더를 구매하는 구매자들은 큰 폭의 할인을 통해 저렴하게 이더를 얻게 된다. 이렇게 모인 자금은 전액, 개발자를 위한 월급과 보상, 그리고 여러가지의 이더리움 관련 영리와 비영리프로젝트를 위한 투자금으로써 사용된다.
* 판매 된 총 이더(60,102,216 ETH)의 0.099배 만큼(5,950,110)의 이더가 신규발행 되어, 이더리움 런칭 전의 초기 기여자들과 ‘이더로 이미 발생 된 비용에 대한 미지급금’을 처리하기 위해 이더리움 조직(Ethereum organization)에게 분배된다.
* 또 다른 0.099배 만큼의 이더는 장기보유금으로 신규 발행하여 적립해둔다.
* 채굴시점 이후부터 영구히 매년, 총 판매수량(60,102,216 ETH)의 0.26배 만큼(15,626,576)씩을 채굴자에게 신규 발행해준다.

### 이더리움 사이트에 작성된 issuance model
* ether의 total supply(총 공급량)와 발행 비율은 2014년 presale에 모인 기부금에 의해 결정됨. 결과는 대략 다음과 같음.
* 6천만의 ether가 사전 판매 기부자들에 의해 만들어짐.
* 1,200만 ether(위의 20%)가 개발기금과 조기기부자 보상으로 조성되었으며, 나머지는 Ethereum Foundation에 기부됨.
* 광부에 의해 블록 하나당 5개의 ether가 생성됨.(대략 15 초)
* 가끔 2-3 ether가 다른 광부에게 전달되지만, 그 블록은 블록체인에 포함되지 않음.(uncle/aunt 보상이라고 부름)

> Uncle은 다른 광부가 이미 블록체인에 있는 해당 장소에 대한 또 다른 블록을 발견했을 때, 광부에 의해 발견되는 블록체인 블록이다. 그것은 "낡은 블록"이라고 불린다. Uncle의 부모는 삽입 블록의 조상이며, 블록 체인의 끝에 위치합니다. Bitcoin 네트워크와는 달리, Ethereum은 네트워크 연결이 불량한 광부를 처벌하지 않기 위해 부실 블록을 보상합니다. Bitcoin 네트워크에서는 Block Time이 Ethereum 네트워크(~ 15초를 목표로 함)보다  훨씬 높기 때문에(~ 10분) 덜 중요함.

## Dapp에서 발행한 토큰을 운영하는 방식

이더리움(Ethereum) 네트워크는 그 안에서 자체적으로 통용되는, ‘이더(Ether)’라는 화폐를 가지고 있다. 이더는 여러가지 가상자산들간의 효율적인 교환을 가능케하는 매개물의 역할을 하며, 또한 트랜잭션 수수료(transaction fee)를 지불하기 위한 방법을 제공한다. 사용자의 편의와 향후 있을 지 모르는 논쟁을 예방하는 차원에서, 이더(Ether)의 각 단위에 대한 명칭은 다음과 같이 미리 정해졌다. (비트코인 명칭과 관련하여 벌어지는 논쟁 참조)

* 1: wei
* 10<sup>12</sup>: szabo
* 10<sup>15</sup>: finney
* 10<sup>18</sup>: ether

“이더(ether)”는 일반 거래(transaction)를 위해, “피니(finney)”는 소액결제를 위해, 그리고 “싸보(szabo)”와 “웨이(wei)”가 수수료나 프로토콜 도입 등과 관련된 기술적논의를 위해 사용될 것으로 기대된다.

## 참고 사이트
* [ERC-20 Token Standard](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md#events)
* [Understanding ERC20](https://coincentral.com/understanding-erc20/)
* [dApp은 토큰인가요? 코인인가요?](http://m.post.naver.com/viewer/postView.nhn?volumeNo=10225115&memberNo=39336576)
* [Create your own crypto-currency](https://www.ethereum.org/token#automatic-selling-and-buying)
* [이더리움 발급 모델](https://blog.ethereum.org/2014/04/10/the-issuance-model-in-ethereum/)
* [이더리움 용어 사전](http://ethdocs.org/en/latest/glossary.html)
* [이더리움 White Paper](https://github.com/ethereum/wiki/wiki/%5BKorean%5D-White-Paper)
* [ether](https://www.ethereum.org/ether)