# authority-assignment-nodejs

## Setting up 

- installing nodejs in ec2
  ```
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
  . ~/.nvm/nvm.sh
  . ~/.nvm/nvm.sh
  node -e "console.log('Running Node.js ' + process.version)"
  ```
  
  - cd and install
  ```
  cd authority-assignment-nodejs/
  npm install
  touch .env
  nano .env
  ```
  - in env 
  ```
  API_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IkpOVEpTV04ya0tkRVZkMElFbEZhIiwiY29tcGFueV9pZCI6ImJmb1Q3MkNWcm9oMlg4ZWZPUmdRIiwidmVyc2lvbiI6MSwiaWF0IjoxNjYxNDE2NzQzNTcxLCJzdWIiOiJQcVJEWDZqMjdXempXRUNsQm92eCJ9.u6WPtyudfB9R4nLnLbBZ6i9KquDeK6WnIOZxKAeE9Hg'
  
APP_PORT=8000
```
-run project
`npm start`

