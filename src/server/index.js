const createApp = require('./server');

const PORT = process.env.PORT || 5000;

createApp().then((app) => {
  app.listen(PORT, (err) => {
    if (err) {
      return console.log(err);
    }

    return console.log(`server is listening on ${PORT}`);
  });
});
