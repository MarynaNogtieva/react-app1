# react-app1
# this is from Udey ReactJS course

## To set up dev environment



`npm i -g npm`

`npm install -g yarn`

`yarn global add live-server`

`live-server -v. `
- If fails

`npm install -g live-server`

`live-server public`


### INSTALLING BABEL

`yarn global add babel-cli@6.24.1`
`npm -g babel-cli@6.24.1`
`yarn init`
`yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2`

— compile babel to run your file
`babel src/app.js --out-file=public/scripts/app.js --presets=env,react`
`babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`


—— to re-install node module dependencies
  `yarn install`
