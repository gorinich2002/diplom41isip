const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const path = require('path')
const app = express();

app.use(express.json({extended:true}))

const PORT = process.env.PORT || config.get("port") || 8080;

app.use('/api/', require('./routes/order.routers'))
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname ,"client", "/build" ,"/index.html"));
})
app.use(express.static(path.join(__dirname,"client", 'build')));


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


