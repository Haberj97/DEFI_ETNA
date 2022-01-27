# ETNA-Project-CodeCamp

First of all,
You need to have mysql installed on your device, and you also need to have npm installed as well. 
To do that, you have to execute this command : "sudo apt-get insall npm nodejs"
Then, you have to do the following command in the folder nammed ETNA-Scope : "npm install" 
To install sequelize, you need to type : "sudo npm install sequelize"
And : "sudo npm install -g sequelize-cli"
To install mysql2, type : "npm install mysql2"
And to create your database and migrations : sequelize db:create && sequelize db:migrate (for tests, you can add : "sequelize db:seed:all")
To start your server, you just have to type : "npm start"