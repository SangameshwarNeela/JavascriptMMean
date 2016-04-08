# JavascriptMMean

Application with end to end flow stack flow of web application using Angular, Express, Node and MongoDB.

Steps to run Angular code:
-- cmd prompt in application folder--
1. Run "grunt server" command to start application in port mentioned in GruntFile.js.
2. Launch application by url :- http://localhost:[post]/app/index.html

Steps to start Express rest api:-
-- cmd prompt in application folder--
1. npm install
2. node server.js

Steps to connect top Mongo DB
1. D:\data -create data folder and path
-- cmd prompt--
mongod ( start mongodb)
mongod --dbpath "D:/data" (define path mentioned in point 1)

-- cmd prompt (new)--
mongo -- gives version of mongo
show dbs --shows databases
use userData --decide which database we want to use
db.showcollections -- shows all collections
db.users.find().pretty()

