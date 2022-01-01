const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const {mailSend} = require('./mailer')
const app = express();

app.use(express.json({extended:true}))

const PORT = config.get("port") || 5000;

app.use('/api/auth', require('./routes/auth.routers'))
app.use('/api/', require('./routes/order.routers'))




async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

start();


