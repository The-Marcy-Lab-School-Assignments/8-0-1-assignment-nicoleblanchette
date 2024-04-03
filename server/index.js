const express = require('express')
const path = require('path')

const pathToDistFolder = path.join(__dirname, '..', 'language-app', 'dist')

const app = express()

const logRoutes = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

const serveStatic = express.static(pathToDistFolder);

app.use(logRoutes)
app.use(serveStatic)

const port = 3939 // the # "39" is frequently associated w/ hatsune miku
// idk why her specifically but 3 in japanese is "san" and 9 is "kyu"
// san + kyu kinda sounds like thank u so 39 is like
// a super casual way to say thanks
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});
