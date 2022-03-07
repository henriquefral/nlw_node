<h1> This repository will contain a study of Node.js from RocketSeat. </h1>

Summary
=======

<!--ts-->
   * [About](#About)
   * [Details](#Details)
   * [Installation](#installation)
   * [Usage](#Usage)
   * [Rules](#Rules)
   * [Authentication](#Authentication)
<!--te-->

<BR/>

About
=========
   This project aims to create a mini social network that allows users to send compliments to each other, the name is "Valoriza". 

   The compliments are accompanied by tags like "Cool" or "Wise", tags are an adjective.

   New tags can be created only by admins.

   Compliments are sent between users, with an additional message and a tag.

   For example: User X indicates a compliment to User Y, with the tag: "Intelligent" and with the message: "Thank you for help me.". 
   
   User Y now has the compliment sent in their profile, with the tag and the message.

<BR/>

Details
==========
This app is built with TypeScript. Converted to JavaScript with ``` ts-node-dev ``` dependency.

To creating the application, I used these technologies:

- Express;
- MySql;
- TypeOrm;
- Reflect-Metadata;
- JWT;
- BcryptJs
- Class-Transformer.

<BR/>

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

<BR/>

Rules
=============

Registering a user

- [ ]  The e-mail is unique, the email cannot be on two users.

- [ ] The e-mail and password are necessary to create an user.

<BR/>

Registering a TAG

- [ ] The TAG name is unique, two or more tags cannot have the same name. 

- [ ] The name is necessary to create an TAG.

- [ ] Only admin users can create a new TAG.

<BR/>

Registering a compliment

- [ ] Cannot make a compliment to yourself.

- [ ] Cannot make a compliment for invalid users, it need to exists.

- [ ] The user need to be authorized to create a compliment. 

<BR/>

Authentication
=============

This API implements JWT authentication, so to consume esources protected by authentication, after logging in with your previously registered user the API will return a token, add Bearer authentication with the token to your header/authorization.

<BR/>

Usage
=============
| Method | URI                              | Authentication | Payload                                      |
|:------:|----------------------------------|:--------------:|----------------------------------------------|
| POST | /users | No | "name":String, "email":String, "password":String, "admin":Boolean. |
| POST | /login | No |"email":String, "password":String | 
| POST | /tags | Yes | "name":String |
| POST | /compliments | Yes |"tag_id":String(uuid), "user_receiver":String(uuid), "message":String |
| GET | /users | Yes |
| GET | /tags | Yes |
| GET | users/compliments/send | Yes  |
| GET | users/compliments/receive | Yes |


