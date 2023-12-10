node version:

```
> v14.13.1
```

npm version:

```
> 6.14.8

```

install dependencies:

```
npm i
```

running locally:

```
> npm start
```

in case you prefer docker:

build docker image "computers-api"

```
> docker build . -t computers-api
```

run docker container "computers-api"
-d -> detached - runs on background
-it -> interactive mode
-p -> ports origin:end

```
> docker run -d -p 3001:3001 computers-api
```

## APIs available

### GET /computers

> list of all computers available on /computers/computers-data.json file

````
curl --location --request GET 'http://localhost:3001/computers'
```json

### POST /computers
> create and attach a new computer to the list of computers with a rest call

```
curl --location --request POST 'http://localhost:3001/computers' \
--header 'Content-Type: application/json' \
--data-raw ' {
"name": "This is a new computer",
"introduced": "17 Jan 1986",
"discontinued": "-",
"company": "Apple"
}'

```json

### DELETE /computers
> supposed to delete a computer, at the moment is just returning a 204 with null body, actual delete not yet implemented

```
curl --location --request POST 'http://localhost:3001/computers' \
--header 'Content-Type: application/json' \
--data-raw ' {
"name": "This is a new computer",
"introduced": "17 Jan 1986",
"discontinued": "-",
"company": "Apple"
}'

```json
````
