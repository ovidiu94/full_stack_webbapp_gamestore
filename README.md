<h1 align="center">Golden Games</h1>

![GameStore](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653757022/GameStore/GoldenGames_app_uwwbhp.png)

<p>This web application was created with MERN Stack

**MERN Stack**: MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: 
- MongoDB, 
- Express, 
- React and 
- Node.js. <br>
  
MERN Stack is used to make the development process smoother and easier.

Each of these 4 powerful technologies provide an end-to-end framework to work in and each of these technologies play a big part in the development of web applications.

**Getting started**: Ensure that Node.js is installed in the local machine (an earlier version than 18 for example, 12.19.0 (including npm 7.4.3 or later version)) before downloading and launching the full stack web application.
Download the Node.js source code or a pre-built installer for your platform from here
[Nodejs](https://nodejs.org/en/download/).</p>

<br>

**First Step**:<br>
Download ZIP file and extract the folder or clone the project folder to local machine. 

![GitHub](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653760584/GameStore/GitHub_f2boal.png)

<br>

To clone the project from GitHub Repository this command should be used:
```js
git clone https://github.com/ovidiu94/full_stack_webbapp_gamestore.git
```
<br>

**Second Step**:<br>
After having the project file in the local machine preferable to open the project files in [Visual Studio Code](https://code.visualstudio.com/download) the following commands should be use in the terminal to install all packages from (package.json) frontend and and main root folder(which has package.json for backend).

The commands are mentioned bellow
```js
npm install // install all required packages for backend
```
![Terminal](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653764388/GameStore/terminal_ad7wkd.png)

```js
cd frontend // go to the frontend folder
npm install //install all packages for frontend
``` 
![Terminal1](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653764609/GameStore/terminal1_djlw7u.png) 

**Last Step**:<br>
Connecting database and running the web application<br>
Database access:
- User: admin
- Password : admin12345
- Databasename: game-store

```java
var mongoURL='mongodb+srv://admin:admin12345@gamestore.xhnru.mongodb.net/game-store'
```
**To run the web aplication in development mode** 

Running backend: (localhost:8000)

```js
npm run server or
npm run start
```
Running frontend: (localhost:3000)

```js
npm run client
```

Runnig both in the same time frontend and backend
```js
npm run dev
```
Scripts in package.json in the fallowing screenshot
![Scripts](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653819946/GameStore/scripts_pfgcqz.png)

To run the web aplication in production mode 

```js
cd frontend
npm run build // will build the production mode
```
![Production](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653822312/GameStore/production_bwyl3d.png)

The build folder is ready to be deployed.
serve it with a static server:
```js
npm install -g serve
```
![Build](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653822322/GameStore/build_nprksg.png)

```js
serve -s build
```
![Serve](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653822676/GameStore/serve_lrt0yl.png)

If an eror will occur when runnning serve -s build
![Error](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653822335/GameStore/error_rp3zvt.png)

Run the following commands:
```js
 Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
 Get-ExecutionPolicy
 Get-ExecutionPolicy -list 
```
![Error1](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653826293/GameStore/Error1_loj2k6.png)

After running this line of code again
```js
serve -s build
```
This will create a build folder in production mode inside frontend