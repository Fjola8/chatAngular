#  Chat program in AngularJS

## How to install and run the application

First make sure that you have NodeJS installed on your computer.

Than open your terminal and go to /client folder:

* To get all node dependencies from package.json, run this command -> **npm install**
* Now you have to run the command -> **gulp js**  
  This will concatinate and minify all the .js files and run jshint as well

Open another terminal window and go to /chatServer folder:

* To run the server you have to run the chatserver.js file with following command -> **node chatserver.js**

Go back to your first terminal window (in /client folder) and run:

* **python -m SimpleHTTPServer 8001**

Now you can open your a browser and go to http://localhost:8001 and login as a new user.

ENJOY


