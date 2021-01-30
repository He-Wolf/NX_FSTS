# NestAPP - Full-stack typescript web app to manage todo items
## Table of Content
1. [Introduction](#introduction)
2. [Used versions](#used-versions)
3. [Used tools](#used-tools)
4. [Used packages](#used-packages)
5. [How to run the APP](#how-to-run-the-app)\
	5.1. [Build and run with Docker](#build-and-run-with-docker)\
	5.2. [Build and run with SDK](#build-and-run-with-sdk)\
	5.3. [Test and stop](#test-and-stop)
6. [Limitations](#limitations)\
    6.1. [Exception/error handling](#exception-error-handling)
7. [Some further development possibilities](#some-further-development-possibilities)
8. [Resources](#resources)

## 1. Introduction <a name="introduction"></a>
This is a basic web application with NestJS RESTful API and Angular frontend written in TypeScript. You can manage your todo items with CRUD operations. The plan is to implement a simple user login/account management functionality with JWT authentication. You you will be able to register a new user account with your email address, username and password. After successful registration, you will be able to log in and add, edit, remove and track TODO items. You will also be able to edit your account data and delete your account. This app was created for learning purpose, but is might be useful as a starting-point for other projects.
The backend uses:
- SQLite database + TypeORM
- node.js (NestJS) RESTful API
- Typescript
- JWT for authentication (not implemented yet)

The fronend uses:
- Angular
- Bootstrap

The fronend, the backend and the interfaces are connected and managed with Nx (by Nrwl) monorepo management tool.

If any question, please do not hesitate to contact me.
## 2. Used versions <a name="used-versions"></a>
**1. Framework:**
- Nest.js: v7.0.0
- Angular: v10.0.0

**2. Runtime:**
- node.js runtime: v12.18.4

**3. Database:**
- SQLite: v3
## 3. Used tools <a name="used-tools"></a>
- Postman for API testing
- Git Extensions as git gui
- VSC as text editor
- Google Chrome
- Docker for containerization
- Windows 10 as OS
## 4. Used packages <a name="used-packages"></a>
- nestjs: 7.0.0,
- class-transformer: 0.3.1,
- class-validator: 0.12.2,
- helmet: 4.1.0,
- reflect-metadata: 0.1.13,
- rxjs: 6.5.5,
- sqlite3: 5.0.0,
- typeorm: 0.2.25
- bootstrap: 4.5.2,
- popperjs: 2.4.4,
- angular: 10.0.0
## 5. How to run the APP <a name="how-to-run-the-app"></a>
### 5.1. Build and run with Docker <a name="build-and-run-with-docker"></a>
- download and install Docker
- clone or download the content of the repository
- open a terminal and navigate to the containing folder
- write "docker build -t nestapp ." and press Enter
- write "docker run  -it --rm -p 3000:3000 nestapp" and press Enter
### 5.2. Build and run with SDK <a name="build-and-run-with-sdk"></a>
- download and install node.js
- clone or download the content of the repository
- open a terminal and navigate to the containing folder
- write "npm install" and press Enter
- after package installation is finished, write "npm run build api" in the terminal and press Enter
- after api is built, write "npm run build todo" in the terminal and press Enter
- after todo is built, navigate to dist\apps\api subfolder and write "node main.js" in the terminal
### 5.3. Test and stop <a name="test-and-stop"></a>
- if no error message in the terminal, open your browser (recommended: latest Chrome, Firefox, Safari, Edge Chromium or Chromium) and open: http://localhost:3000
- add, delete and modify todo items
- after testing go back to the terminals and press "Ctrl+C" to stop the web server
## 6. Limitations <a name="limitations"></a>
### 6.1. Exception/error handling <a name="exception-error-handling"></a>
This application needs to be extended with exception handling. There are some already known issues which may cause error when it is not used correctly. I only tested the app with correct input values.
## 7. Some further development possibilities <a name="some-further-development-possibilities"></a>
- authentication with JWT and user management
- automated unit and integration tests
## 8. Resources <a name="resources"></a>
There are several online source which I used to create this web app.\
Including but not limited to:
- https://docs.nestjs.com/
- https://typeorm.io/
- https://www.codemag.com/Article/1907081/Nest.js-Step-by-Step
- https://medium.com/@kaushiksamanta23/nest-js-tutorial-series-part-1-introduction-setup-c87ba810ea9e
- https://www.techiediaries.com/nestjs-tutorial-rest-api-crud/
- https://codersera.com/blog/typeorm-with-nest-js-tutorial/
- https://dev.to/abbasogaji/how-to-dockerize-your-nestjs-app-for-production-2lmf
- https://angular.io/docs
- https://getbootstrap.com/docs/4.6/getting-started/introduction/

Thank to every hero on Stackoverflow and Github who helped me with their comments! (Not all heroes wear capes.)