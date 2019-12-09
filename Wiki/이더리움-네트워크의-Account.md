## Account Abstraction

### [EIP 86: Proposed initial abstraction changes for Metropolis ](https://github.com/ethereum/EIPs/issues/86)

> EIP(Ethereum Improvement Proposals)는 이더리움의 기술적인 부분에 대한 기준과 방향을 기술해 놓은 제안서를 말한다.

### [이더리움 메트로폴리스 3가지 변경사항](https://themerkle.com/top-3-ethereum-metropolis-changes-to-look-forward-to/)

> 메트로폴리스는 이더리움의 로드맵 중 하나. (자세한 설명은 [여기](https://www.tscbgroup.com/single-post/2017/10/20/%EC%9D%B4%EB%8D%94%EB%A6%AC%EC%9B%80-%EB%B9%84%EC%9E%94%ED%8B%B0%EC%9B%80%EC%9D%98-%EC%9D%98%EB%AF%B8%EC%99%80-%EB%B0%A9%ED%96%A5))

기술적 전문 용어로 돌아가지 않고 계정 추상화를 설명하는 것은 어렵습니다. 계정 추상화를 통해 사용자는 smart contract의 형태로 개인 키를 소유한 지갑 주소를 '정의'할 수 있습니다. 이것은 많은 비 개발자들에게 지나치게 흥미로운 것은 아니지만이 새로운 기능을 사용하면 몇 가지 이점이 있습니다. 특히 계정 보안을 매우 중요하게 생각하는 사용자는 이 변경사항을 조사하고 싶을 수 있습니다. 

좀 더 구체적으로 말해서, 이 변경은 외부 계정을 제어하는​​데 사용되는 개인 키가 현재 사용 중인 서명 체계에 비해 양자(quantum) 컴퓨터에서 실행되는 공격에 덜 취약하다는 것을 의미합니다. 사용자는 해시 사다리와 같은 다른 보안 체계의 이점을 누릴 수 있습니다. <u>보안 변경 이외에도 계정 추상화를 사용하면 계약에 따라 가스 요금을 지불할 수 있습니다.</u> 이 개념은 현재 이 개념을 뒷받침할 클라이언트 표준이 없기 때문에이 후반 부분은 네트워크에서 제대로 사용하는 데 시간이 걸릴 것입니다.

### [Understanding Serenity, Part I: Abstraction - Posted by Vitalik Buterin](https://blog.ethereum.org/2015/12/24/understanding-serenity-part-i-abstraction/)

### [What is the ethereum account abstraction?](https://ethereum.stackexchange.com/questions/18977/what-is-the-ethereum-account-abstraction/19456)

Ethereum에는 두 가지 유형의 계정이 있습니다. 첫째, 지갑에 있는 계정과 같은 개인 키로 제어되는 외부 계정(EOA)이 있습니다. 그런 다음 블록 계정에 배포된 코드에 의해 제어되는 계약 계정(Contract Account)이 있습니다. 

계정 추상화는 이러한 두 가지 유형의 계정을 더 유사하게 만들고, 외부 계정을 제어하는 ​​논리를 계약 계정만큼 유연하게 만듭니다.

일단 계정에 대한 시스템이 추상화되면, 키에 의해 제어되는 계정에는 코드가 백업됩니다. 차이점은 코드가 키로 제어되는 트랜잭션을 확인하는 방법을 지정한다는 것입니다. 모든 표준 개인 키 백업 계정은 ECDSA 서명을 확인하기 시작하지만, 서명 검증 알고리즘은 다른 유형의 서명을 지원하기 위해 계정별로 다시 작성될 수 있습니다. 

Account Abstraction은 모든 종류의 다른 거래 권한 관리도 오픈합니다. 예를 들어, 지금 당장은 거래를 하는 사람이 지불해야 합니다. 모든 유스케이스에 이상적인 것은 아닙니다. 추상화되면 계약서가 거래 발송자가 아닌 광부에게 지불 할 수 있는 시스템이 있을 것이라고 제안됩니다.

## Normal Account (Externally Owned Accounts)
* 이더리움의 잔액을 가지고 있다.
* 트랜잭션을 전송 할 수 있다. (거래 또는 스마트 컨트랙트 동작)
* 프라이빗키로 관리 되고 있다. 
* 관련 코드를 가지고 있지 않다. 

> Contracts Accounts 보다 상위 계정
> 새로 생성되는 트랜잭션은 모두 외부 소유 계정에서 시작

## Contract Account 
* 이더리움의 잔액을 가지고 있다.
* 관련 코드를 가지고 있다.

> 트랜잭션을 받을 때 마다 해당 트랜잭션의 일부로서 전송된 입력 파라미터가 지시한대로 코드가 실행
> 새로운 블록을 검증하는 과정에서 이더리움 네트워크에 참여하고 있는 각 노드의 가상머신에 의해서 실행

## Dapp에서는 계정 운영을 어떤 방식으로 해야하나

## 참고 사이트
* [이더리움 계정, 트랜잭션, 가스 그리고 블록 가스 한도](https://medium.com/@yehji205/%EC%9D%B4%EB%8D%94%EB%A6%AC%EC%9B%80-%EA%B3%84%EC%A0%95-%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98-%EA%B0%80%EC%8A%A4-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EB%B8%94%EB%A1%9D-%EA%B0%80%EC%8A%A4-%ED%95%9C%EB%8F%84-89c5428078e6)
* [계정과 트랜잭션](https://steemit.com/kr/@feyee95/5lzztc)
* [Ethereum 이더리움](http://dongsamb.com/ethereum/)