# 이더리움 KeyStore 파일 암호화/복호화 원리

## KeyStore 파일이란?
이더리움 KeyStore 파일은 이더리움 **Private Key를 암호화한 내용**을 가지고 있습니다.
이 파일의 내용을 복호화하면 트랜잭션에 서명하기 위해 필요한 Private Key를 얻게 되는 것입니다.

## KeyStore 파일을 사용하는 이유?

Private Key를 탈취당하는 경우 지갑에 보관중인 모든 암호화폐를 탈취당할 수 있다.

반면에, keyStore가 해킹으로 노출된다고 하여도 **사용자 비밀번호를 이용해야지만 복호화가 가능**하기 때문에 안정성이 높습니다.

## KeyStore 구조
```
$ cat ~/.ethereum/keystore/UTC--<created_date_time>--7cef57fd7faa78c4132e7c748115528e187042a4  
{
	"address": "7cef57fd7faa78c4132e7c748115528e187042a4",
	"crypto": {
		"cipher": "aes-128-ctr",
		"ciphertext": "4d22f75ebcf79a0d30f4aa470a83fa13d1071fd80ed87c937dba894697963c27",
		"cipherparams": {
			"iv": "60d4902492dab3a514da5d92e3b16bff"
		},
		"kdf": "scrypt",
		"kdfparams": {
			"dklen": 32,
			"n": 262144,
			"p": 1,
			"r": 8,
			"salt": "847825e6ebcea8e0f9a38d1c06e01470cc74153d8ae7a599cd68466f209d6391"
		},
		"mac": "819da9b375c62413c59d6c15804bc5b3fa249a852f968560939f7646e2ca82f1"
	},
	"id": "bc933aa4-7772-423b-aa49-368126d673f3",
	"version": 3
}
```
**crypto** 객체가 KeyStore 파일 암호화에 대한 정보를 가지고 있습니다.
 - **cipher** : Private Key 암호화에 사용한 알고리즘의 이름
 - **cipherparams** : 위 알고리즘에 필요한 변수
 - **ciphertext** : 위 알고리즘으로 Private Key를 암호화한 결과값
 - **kdf** (Key Derivation Function): 패스워드 암호화에 사용한 알고리즘의 이름
 - **kdfparams** : 위 알고리즘에 필요한 변수
 - **mac** : KeyStore 파일 사용 시, 패스워드 입력값 검증을 위해 사용됨

### 입력 받은 패스워드 암호화
패스워드는 복호화를 진행 할 수 없게끔, 단방향 암호화 알고리즘 중 하나인 Scrypt를 사용하여 패스워드를 암호화합니다. 이 결과 값을 **Derived Key**라고 합니다.

 - **kdf(Key Derivation Function)** : 암호화 알고리즘의 이름입니다. Scrypt를 사용합니다.
 - **kdfparams** : kdf에서 필요한 요소들을 기재합니다. kdf를 Scrypt로 선택했으므로, 하위 항목들은 Scrypt에 필요한 인자들이 들어가게 됩니다.
   - **salt** : 암호화에 필요한 salt 값입니다. 32byte의 랜덤값이 사용되고, 32byte이므로 64자리의 hex 문자열이 들어갑니다.
   - **dklen** : Derived Key Length의 약자입니다. 결과값의 길이(byte)가 됩니다.
   - **n** : CPU/Memory 비용입니다. 값이 클수록 암호화 파워가 증가합니다.
   - **r** : Block Size 입니다. 일반적으로 8이 사용됩니다.
   - **p** : 병렬화 수준입니다. 값이 클수록 암호화 파워가 증가합니다.

### Private Key 암호화
Private Key는 복호화하여 트랜잭션 서명에 사용해야 합니다.따라서, 여기서는 양방향 알고리즘인 AES를 사용하여 Private Key를 암호화합니다. 이때 암호화 하는데 사용하는 인자값으로 패스워드를 암호화한 **Derived Key**도 사용하게 됩니다.

- **cipher** : 암호화 알고리즘의 이름입니다. aes-128-ctr을 사용합니다.
- **cipherparams** : 알고리즘에서 필요한 요소들을 기재합니다. 하위 항목들은 AES에 필요한 인자들이 들어가게 됩니다.
  - **iv**(Initialization Vector) : 암호화에 필요한 초기값입니다. 16byte의 랜덤값이 사용되고, 16byte이므로 32자리의 hex 문자열이 들어갑니다.
- **ciphertext** : 위 암호화의 **결과값**입니다.

### mac 생성
KeyStore 파일을 사용할 때, 사용자가 입력한 패스워드의 일치 여부를 확인하는 용도로 사용됩니다.
이 값은 **Derived Key**(32byte)의 뒷부분 16byte와 **Cipher Text**(32byte)를 이어붙인 값을 SHA3–256 해시함수로 암호화합니다.


## 패스워드 검증 방법
사용자가 입력한 패스워드 이용해 위와 같은 방법으로 암호화하면 최종적으로 mac 값을 얻을 수 있습니다. 이 mac값을 KeyStore 내용에 저장된 mac값과 비교하여 동일할 경우 올바른 패스워드를 입력 한 것으로 볼 수 있습니다.

> 참조: https://medium.com/hexlant/%EC%9D%B4%EB%8D%94%EB%A6%AC%EC%9B%80-keystore-%ED%8C%8C%EC%9D%BC-utc-%EC%83%9D%EC%84%B1-%EB%B0%8F-%EC%95%94%ED%98%B8%ED%99%94-%EB%B3%B5%ED%98%B8%ED%99%94-%EC%9B%90%EB%A6%AC-1-2-d417cb605bf