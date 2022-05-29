<h1 align="center">Golden Games</h1>

![GameStore](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653757022/GameStore/GoldenGames_app_uwwbhp.png)

<p>This web application was created with MERN Stack

**MERN Stack**: MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: 
- **MongoDB**, 
- **Express**, 
- **React** and 
- **Node.js**. <br>
  
MERN Stack is used to make the development process smoother and easier.

Each of these 4 powerful technologies provide an end-to-end framework to work in and each of these technologies play a big part in the development of web applications.

**Getting started**: Ensure that Node.js is installed in the local machine (an earlier version than 18 for example, 12.19.0 (including npm 7.4.3 or later version)) before downloading and launching the full stack web application.
Download the Node.js source code or a pre-built installer for your platform from here
**[Nodejs](https://nodejs.org/en/download/)**.</p>

<br>

## First Step: <br>
Download ZIP file and extract the folder or clone the project folder to local machine. 

![GitHub](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653760584/GameStore/GitHub_f2boal.png)

<br>

To clone the project from GitHub Repository this command should be used:
```js
>git clone https://github.com/ovidiu94/full_stack_webbapp_gamestore.git
```
<br>

## Second Step:<br>
After having the project file in the local machine preferable to open the project files in **[Visual Studio Code](https://code.visualstudio.com/download)** the following commands should be use in the terminal to install all packages from **package.json** frontend and and main root folder(which has **package.json** for backend).

<br>

The commands are mentioned bellow:
```js
>npm install // install all required packages for backend
```
![Terminal](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653764388/GameStore/terminal_ad7wkd.png)

```js
>cd frontend // go to the frontend folder
>npm install //install all packages for frontend
``` 
![Terminal1](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653764609/GameStore/terminal1_djlw7u.png) 

<br>

## Last Step:<br>
Connecting database and running the web application<br>
Database access:
- User: admin
- Password : admin12345
- Databasename: game-store

<br>

Full MongoDB database url below:

```java
var mongoURL='mongodb+srv://admin:admin12345@gamestore.xhnru.mongodb.net/game-store'
```
![Mongodatabase](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653830830/GameStore/mongodb_yqi3yh.png)

<br><br>

## To run the web aplication in development mode 

<br>

Running backend: (localhost:8000)

```js
>npm run server or
>npm run start
```
Running frontend: (localhost:3000)

```js
>npm run client
```

Runnig both in the same time frontend and backend
```js
>npm run dev
```
<br>

Scripts in package.json for main root are in the fallowing screenshot:<br><br>
![Scripts](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653819946/GameStore/scripts_pfgcqz.png)

<br><br>

## To run the web aplication in production mode 

<br>

The following code should be used to run the web application in production mode by creating build folder.

<br>

```js
>cd frontend
>npm run build // will build the production mode folder
```
![Production](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653822312/GameStore/production_bwyl3d.png)

<br>

The build folder is ready to be deployed.
Serve it with a static server:
```js
>npm install -g serve
```
<br>

![Build](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653822322/GameStore/build_nprksg.png)

```js
>serve -s build //creating build folder 
```
![Serve](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653822676/GameStore/serve_lrt0yl.png)

<br>

If an eror will occur when runnning **serve -s build**

<br>

![Error](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653822335/GameStore/error_rp3zvt.png)

<br>

Run the following commands:

```js
>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
>Get-ExecutionPolicy
>Get-ExecutionPolicy -list 
```
![Error1](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653826293/GameStore/Error1_loj2k6.png)

<br>

After run this line of code again:
```js
>serve -s build
```
This will create a build folder in production mode inside frontend succesfuly and ready to deploy.

<br>

The scripts from frontend package.json looks like this:

![Frontend](https://res.cloudinary.com/dv2idmnj5/image/upload/v1653832005/GameStore/frontend_p8umaj.png)

<br>

## For more informations access the links below:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
