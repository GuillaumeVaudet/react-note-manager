# React notes manager

## Getting Started

### Install dependencies
```bash
yarn install
```
### Launch application
```bash
yarn dev
```
### Lint your project
```bash
yarn lint
```

## JSON-SERVER

https://www.npmjs.com/package/json-server

#### You need to have json-server on your computer 

```bash
yarn global add json-server
```

For the database we mocked it with JSON-SERVER dependencies. 
In .src/ directory - "db.json" file you can found data. 

#### For start database do: 

```bash
json-server --watch db.json -p 3090
```
