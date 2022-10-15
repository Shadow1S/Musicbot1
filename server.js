const app = require('express')();

app.get('/', (req, res) => res.send('ZyiadX'));

module.exports = () => {
  app.listen(3000);
}