# User Service with Prisma

Prisma ORM을 사용해서 유저 서비스 API 구축

## Dependencies

- Docker
- Docker Compose
- node:18

프로젝트를 실행하기 위해서는 사전에 설치되어 있어야 합니다.

## How to run it

```bash
$ npm install
$ docker-compose up -d
```

1. npm install 명령어로 종속성 패키지를 설치합니다.
2. docker-compose 명령어를 이용해 데이터베이스를 컨테이너 환경에 실행합니다.

<br>
<br>

```bash
$ npx prisma generate
$ npx prisma migrate dev --name "init"
```

순차적으로 명령어를 실행합니다.

<br>
<br>

```bash
$ npm run start:dev
```

서버를 실행합니다.

## Tip

```bash
$ npx prisma studio
```

위 명령어로 웹 브라우저 상에서 저장된 데이터와 모델을 살펴볼 수 있습니다.

<br>
<br>

Swagger 문서는 서버 구동 후 http://localhost:3000/api 로 이동하면 확인할 수 있습니다.
