# Login-MongoDB

1. dev.js file을 config 폴더 안에 생성한다.
2. MongoDB 정보를 dev.js file에 작성하여 MongoDB와 연결한다.
  👉🏼 dev.js 파일에 module.exports = { mongoURI: <<주소>> } 
3. root directory에서 "npm install" 을 입력한다. (백엔드 종속성(dependencies) 다운로드)
4. client directory에서 "npm install" 을 입력한다. (프론트엔드 종속성(dependencies) 다운로드)
5. "npm run dev" 를 입력하여 백엔드, 프론트엔드 동시에 실행 가능하다.
