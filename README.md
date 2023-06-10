# Hello-Computing-task

### Requirements
     # Frontend:
        - cypress
        - angular
    # Backend:
        - express
        - cors
        - bodyparser
        - nodemon
        - cypress

To run the application you after to init -y the main folder and  after installing all the required package by using the command npm install in both frontend and backend, you have to install concurrently via npm(npm install concurrently) in the main folder of the app and then configure the package.json of this main folder by adding:<br/>
    - "server":"npm start --prefix backend"<br/>
    - "client":"npm start --prefix frontend"<br/>
    - "dev":"concurrently \"npm run server\" \"npm run client\" "<br/>

inside the "scripts key". And after that you will be able to run the command npm run dev to launch both the frontend and the backend.
