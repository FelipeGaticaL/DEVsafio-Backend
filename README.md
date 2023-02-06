# Devsafio Program:

Project for DLAB program - Desafio Latam.
The project consists of an online platform oriented to the use of job search and recruitment in the IT industry. Based on the profile of each user, technical tests, surveys, code exhibits and support material. The website aims to connect thousands of applicants and companies

## 🤖 Team

### Technical Leader:

TL: [José Campos](https://github.com/josecamposhz)


### Others


### Frontend

FE: [Francisco D. Molina](https://github.com/TheFranciscoMolina)  
FE: [Eliecer Calderon](https://github.com/eliecergonzalez2021)  
FS: [Veronica Caro](https://github.com/vecarope)  
FS: [Felipe Gatica L](https://github.com/FelipeGaticaL)

### Backend

FS: [Rodrigo Quezada Candia](https://github.com/DarkKapo)  
FS: [Felipe Gatica L](https://github.com/FelipeGaticaL)

### Fullstack
FS: [Felipe Gatica L](https://github.com/FelipeGaticaL)

## My Complete Tasks
### Frontend

- Connect Nodemailer with user registration section - "Welcome Register".
- Test - Api - Cards
- Axios Connection and Functionality in Devlenguage- Tool - Database - Admin
- CSS Refactoring Admin Views (Flex instead of Grid)
- "Applicant" connection functionality in Admin view, table creation and Export Buttons
- "Companies" connection functionality in Admin view, table creation and Export Buttons
- Add Function to Firebase and connected with Backend
- Forgot - And - Restore Password Connections
- Implementation of Formik and YUP in Contact Company section
- Implementation functionality to Contaqct Company Section, and connected to Backend
- Implementation in "applicant" view, in the "jobprofile" section multi tool, frameworks, database and languages selector and their respective levels.
- Refactoring and creating functionalities to the tests in the "test" section of the applicants' test section
- Design UI Devlengugee, Tool, Database in Admin View

### Backend

For the backend, a three-tier architecture was chosen, i.e. Controller, Service and Model. The latter refers to Sequelize ORM models and migrations. Therefore, for each route or endpoint, it should be considered that a controller, service and model were built. 

- Implementation of the "static/public" configuration to access static resources from the front end or back end.
- Implementation roles config
- Implementation login user
- Implementation admin controllers, "GET all" companies and applicants whit all their atributes
- Implementation middleware JWT - User
- Creation of "Contact Company" endpoint and data validation with "express-validate".
- Pgadmin Configuration in Docker Compose
- Endpoint, implementation of "xlsx" library, and creation of SQL query with "Subquery" and data "transposition" in Workprofile
- Endpoint, implementation of "xlsx" library, and creation of SQL query with "Subquery" and data "transposition" in Company
- Configuration app, docker and DB for deploy fly.io
- Implementation of "Endpoint" to forgotten password and send an email with "Nodemailer" with the preconfigured token in JWT (forgot password functions)
- Implementation of "Endpoint" to reset password and receive "Query param" from the URL previously sent with "Nodemailer" with the preconfigured token in JWT (forgot password functions). Save new password encrypteded with "bcrypt"
- Implementation "Endpoint" and CRUD of Tools
- Implementation "Endpoint" and CRUD of Database & Frameworks
- Implementation "Endpoint" and CRUD of Language
- Creation "Seeders" (Sequelize ORM) for users demo (applicant and admin), companies demo, tables and tests
- Creation endpoint and functions of Firebase
- Implementation models and migrations (Sequelize ORM) of "test"
- Add middeware "error handler"

### Others 

- Creation of the database structure, respecting the "Third Normal Form" (standardization)
## 🧰 Dependencies    

This project was built mainly whith the following technologies: 
          
### Backend 

- Javascript   
- Node.js   
- Express     
- [Docker](https://www.docker.com/)   
- [Sequelize](https://sequelize.org/)   
- PostgreSQL 

### Frontend

- Javascript    
- React.js  
- Tailwind CSS
- Formik & Yup       

## 🎯 Running Proyect 

### Frontend 

```
npm install 
npm run serve
```

 ### Backend

 - Check the package.json file for `npm` commands 
  ```
  npm install
 ```

To run this project you previously need to install:

- `docker` & `docker-compose`

### Running the App with Docker

#### Create the container's network

```
make network
```

#### Starting the containers

```
make run
```

#### Access the container through SSH

```
make enter
```

## ⚙ Features 

- Definine database diagrams and business rules
- Define Frontend & Backend architecture
- Encryption of passwords with Bcrypt
- User authentication with JWT.
- Create API
- Design propose using Figma
- Protected routes both in backend and frontend
- React Context and Hooks Implementation
- User registration and profile management
- User sessions expiring in a short period of time
- Use of interceptors with Axios
- Implement WEB and Mobiles views
- Backend and frontend deployment

## ♻ Flow of users according to their status:

- When the user registers => his status is "active".
- If a user with active status logs in => we redirect him/her to the application form.
- If the user completes the application form => the status changes to "job ready".
- If the user with job ready status logs in => we redirect to the user's welcome view
- If the user logging in is admin => redirect to admin welcome view

## 🔑 Types of roles and actions:

- User and Administrator.
- The user can register
- The user can create his profile as a candidate
- The user can modify/update the profile.
- The user can demonstrate the level of his knowledge by means of tests.
- The admin can see the list of all registered users.
- The admin can export user data in an excel file.