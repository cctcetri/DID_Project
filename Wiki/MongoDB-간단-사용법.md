## shell 실행
[설치경로]/bin/mongo
/Users/kioku714/Project/community_rewards/mongodb-osx-x86_64-3.6.4/bin/mongo

## 모든 데이터베이스의 리스트 출력
show dbs;

## 현재 데이터베이스를 admin으로 스위칭
use admin;

## 현재 데이터베이스의 모든 collection 리스트 출력
show collections;

## 조회
db.users.find();

## 삽입
db.users.insert( { 
  email: "admin", 
  name: "관리자", 
  status: "active", 
  role: "admin", 
  createdAt: new Date()
});

## 업데이트 
db.users.updateOne(
  { email : "admin" },
  { $set: { "createdAt" : new Date() } }
);

## 삭제
db.issues.remove({ 
    "_id" : ObjectId("5b065636414957648f48df1f")
});

## bulkWrite
https://docs.mongodb.com/manual/core/bulk-write-operations/

## export
[설치경로]/bin/mongoexport --db admin --collection issues --out issues.json

## import
[설치경로]/bin/mongoimport --host 127.0.0.1 --port 27017 --collection issues --db admin --file issues.json

## 백업
[설치경로]/bin/mongodump --out dump_20180524 --host 127.0.0.1 --port 27017 --db admin

## 복구
[설치경로]/bin/mongorestore --host 127.0.0.1 --port 27017 --db admin --drop dump_20180524