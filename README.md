# Board app

> This app uses Javascript with nodejs as runtime and express as framework

It was supposed to be an application that simulated a board, which I affectionately called Posts.

Posts should be an array of objects, which would be the posts themselves

each object must have an id, title and description and must be stored in the posts array.


```
const posts = [

{id:'1233-ebe-dfhe0-fheo',
title:'a cool title',
description: 'a cool description'},
...
//other cools object here
]
```

## Usage 

* `npm ci` to install dependencies
* `node index.js` to start a server at port `localhost:3031`
* `npm run test` or `npm t` to run test suite

## Debugging HTTP requests

> I've been used `insomnia`, but you can use `postman` or `curl` in the CLI, it's your decision.

> the base URL to all HTTP methods will be `http://localhost:3031/api`

### GET all posts

> express route: /all

> URL request: `http://localhost:3031/api/all`

> response: status 200 and throw all posts.

### POST a new post

> express route: /new

> URL request: `http://localhost:3031/api/new`

> response: status 201 and throw a new post to the initial array posts.

### DELETE a specific post

> express route: /delete/:id

> URL request: `http://localhost:3031/api/delete/${dinamicId}`

> response: status 200 and delete the post that has the id **dinamicId**

### UPDATE a specific post

> express route: /update/:id/:title-:description

> URL request: `http://localhost:3031/api/update/${dinamicId}/${dinamicTitle}-${dinamicDescription}`

> response: status 200 and update the **title** and **description** of the post that has the id **dinamicId**

## Testing 

* Intend to use mocha, chai sinon, supertest and nyc

> I still writing tests to this application







