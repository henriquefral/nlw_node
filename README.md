<h1> This repository will contain a study of Node.js. </h1>

Summary
=======

<!--ts-->
   * [About](#About)
   * [Details](#Details)
   * [Installation](#installation)
   * [How to use](#how-to-use)
<!--te-->



About
=========
   This project aims to create a mini social network that allows users to send compliments to each other. 

   Where new compliments can be created, only by admins.

   For example: User X indicates a compliment to User Y. User Y now has the compliment sent in their profile.



Details
==========
This app is built with TypeScript. Converted to JavaScript with ``` ts-node-dev ``` dependency.

To creating the application, I used these technologies:

- Express;
- MySql;
- TypeOrm;
- Reflect-Metadata
- JWT
- BcryptJs.

Installation
==========
Download or clone this repository. Afterwards, do the following:
- Modify ormconfig.example with your database settings; 
- Go with cmd on the project folder and type:
```
# Install npm packages.
npm install

# Create the database's tables.
yarn typeorm migration:run

#OR

npm run typeorm migration:run

# Inicialize the server
yarn dev 

#OR

npm run dev

``` 

The project will be available depending on the configuration made in ormconfig.json
 
 How to use
 =============
 	🚧 I'm under construction 🚧
                                