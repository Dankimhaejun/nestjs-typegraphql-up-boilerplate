<p align="center">
    <a href="https://typegraphql.com/" target="blank"><img src="https://typegraphql.com/img/logo.png" width="120" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="300" alt="Nest Logo" /></a>
      <a href="https://apex.sh/docs/up/" target="blank"><img src="https://apex-software.imgix.net/apex/site/favicons/light/32.png" width="120" alt="Nest Logo" /></a>
</p>

# You can deploy serverless GraphQL API server in 5 minutes

## Description

**[NestJS](https://nestjs.com/) + [TypeGraphQL](https://typegraphql.com/)  + [Apex Up](https://apex.sh/docs/up/)**

- Simple serverless architecture with 3 frameworks.
- OOP + GraphQL + serverless
  - [Nest](https://github.com/nestjs/nest) is a framework for building efficient, scalable Node.js server-side applications.
  - [TypeGraphQL](https://typegraphql.com/) is a library that makes this process enjoyable by defining the schema using only classes and a bit of decorator magic.
  - [Up](https://apex.sh/docs/up/) deploys infinitely scalable serverless apps, APIs, and static websites in seconds, so you can get back to working on what makes your product unique.

### Before start

```bash
# install up framework
curl -sf https://up.apex.sh/install | sh
```

### 1. Installation

```bash
yarn install
```

### 2. Running the app in development mode

```bash
# build and watch mode
$ yarn build:dev

# development mode
$ yarn start:dev
```

### 3. Set profile in up.json

- [Apex/up](https://apex.sh/docs/up/credentials/)
- Before using Up you need to first provide your AWS account credentials so that Up is allowed to create resources on your behalf.

```js
// up.json
{
  "name": "nestjs-typegraphql-up-boilerplate",
  "profile": "put your aws profile", // here
  //
  //
  //
}
```

### 4. Deploy in AWS lambda

```bash
# deploy in lambda
up staging
```

## Test

### Mutation request

```bash
# set deploy url
curl 'https://9yqw26jx73.execute-api.ap-northeast-2.amazonaws.com/staging/graphql' \
       -H "Content-Type: application/json" \
       -d '{
         "query" : "mutation { addRecipe ( input : { title : \"hello\" }) { title }}"
       }'
```

### Mutation response

```bash
{"data":{"addRecipe":{"title":"hello"}}}
```

---

### Query request

```bash
# set deploy url
curl 'https://9yqw26jx73.execute-api.ap-northeast-2.amazonaws.com/staging/graphql' \ 
       -H "Content-Type: application/json" \
       -d '{
         "query": "query { recipes { title } }"
       }'
```

### Query response

```bash
{"data":{"recipes":[{"title":"hello"}]}}
```
