> Setup

1. install nvm
   Node Version Manager is a good way to have our node version well maintained.

> nvm use

this command pulls the version from nvmrc file and tries to use it.
if not installed, it will tell you and you can simply:

> nvm install <version>

create .env file
copy the .env_example, make necessary changes and add it to your project root
as for the .env now for the interview, just add ENVIRONMENT="production" as example

to run the api tests it is required that the server is running.
please go to example-server and do an `npm install` to install the dependencies and then an npm start so the server
starts running.
with the server running you can also make use of the postman collection added on the useful area and check the tests creation of data.

running cypress UI:

> npx cypress open

or for headless:

> npx cypress run

we do have these commands on our package scripts, so feel free to execute:

> npm run cypress:open

or

> npm run cypress:run

to record run in cypress dashboard

all tests:

> npx cypress run

run api only test:

> npm run cy:api:spec

run ui only test:

> npm run cy:ui:spec
