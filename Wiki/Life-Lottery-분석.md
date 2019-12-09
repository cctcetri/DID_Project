# [Life Lottery](https://www.stateofthedapps.com/dapps/life-lottery)

[Client for the ETHLottery](https://github.com/re2005/ETHLottery-Client)

[Ethereum TX Hash Lottery](https://github.com/renasboy/ETHLottery)

## 특징
ETHLottery는 Ethereum 블록 체인 기술을 기반으로 하는 100% 공정한 복권이다. 결과는 미래에 생성되는 특정 Ethereum Block Hash를 기반으로 선택되므로 미리 계산할 수 없다. 

ETHLottery는 많은 에테르 가스를 절약할 수 있도록 설계되었으며, 단순한 논리로 최소한의 상호 작용과 깔끔한 ​​계약 코드를 유지한다.

## 작동원리
각 라운드는 이전 라운드가 누적되지 않는 한, 잔액이 없는 Ethereum Smart 계약으로 시작하며, 각 라운드 참가자는 최소 수수료를 보내고 특정 Ethereum의 마지막 바이트만을 정확히 기록한 후에 추측함으로써 내기를 할 수 있다.

Ethereum Block Hash는 16 진수 형식으로 저장되므로 마지막 바이트는 해시의 마지막 두 문자입니다. (예 : 0x00, 0xca, 0xf1, 0x3d). 이것은 0x00에서 0xff까지 가능한 바이트 값으로 256에서 1 기회를 제공합니다.

예열 블록 해시 : 0x5a801d8cf81a8ad942d5fa1b47f25b0b1507b7531b93f13ef9764e287bc51800

위 예제에서 해시가 00으로 끝나면 우승 결과 바이트는 0x00이됩니다.

복권 결과로 사용된 Ethereum Block Hash는 ETHLottery 스마트 계약서에서 소유자 수수료를 지불한 복권 주인의 Ethereum 지갑으로 이루어진 유일한 거래를 포함하는 블록 다음에 10 번째 블록에 속합니다. 이 작업은 단 한 번만 복권이 닫힙니다.

복권은 계약 상품 잔고가 잭팟의 가치에 도달하거나 초과하는 경우 정확하게 종료됩니다.

복권 수수료, 소유자 수수료, 복권 당첨금은 계약이 성립될 때 설정되는 값이며, 100 % 공개이며 블록 체인에서 불변입니다.

정확한 마지막 바이트 추측과 함께 승리 베팅이 없는 경우, 복권 잭팟 상품은 다음 복권 라운드에 누적됩니다.

복권 당첨 잭팟은 모든 우승 참가자들에게 균등하게 분배됩니다.

모든 복권은 당첨금의 백분율에 해당하는 복권 조성 기간 동안의 소유자 부담금이 부과됩니다.

## 실행방법
이더리움 기반의 복권 앱으로 두가지 방식으로 실행 가능.

1. 구글 크롬에서 MetaMask 설치하여 사용.    
계정을 만들고 MetaMask를 잠금 해제하면 바로 사용 가능

2. 나만의 GETH 노드에서 실행.    
./geth --testnet --fast --rpc --rpcapi db,eth,net,web3,personal --unlock 0 --password "your_passrd-txt-file" --rpccorsdomain="*" console

