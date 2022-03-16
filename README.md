## ExpressJS boilerplate with graphql

#### 1. Description

It is skeleton for the Express.js application with Typescript, typeorm, graphql and basic authentication. Just pull this project, setup and make your awesome application.

#### 2. Installation

1. Update .env.development.local config
2. Execute `npm i`
3. Execute `npm run dev`

#### 3. Migrations

##### 3.1 Create migration

```
npm run migrate:create migration-name
```

##### 3.2 Run migrations

```
npm run migrate:up
```
  
##### 3.3 Revert migration

```
npm run migrate:down
```

#### 4. Project structure

##### Folders
**config** - config for the application. Using `dotenv` package depends on `process.env`.

**database** - typeorm connection config

**dtos** - graphql input types

**entities** - typeorm models

**exceptions** - description for error

**interfaces** - common interfaces folder

**logs** -- application logs, but right now not so informative

**middlewares** - express.js middlewares

**migrations** - typeorm migrations

**repositories** - main `controllers` layer, that has been using from resolvers and using entitites.

**resolvers** - graphql resolvers

**tests** - jest tests folder

**typedefs** - graphql output types

**utils** - common helpers folder
