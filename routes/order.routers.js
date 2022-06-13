const { Router } = require("express");
const Order = require("../models/Order");
const mailSend = require('../mailer')
const router = Router();
router.post(
  "/order",
  async (req, res) => {
    try {
      const {clientData} = req.body;
      console.log(req.body);
      const order = new Order( req.body);
      await order.save();
      mailSend(clientData.mail, req.body)
      res.status(201).json({ message: "Заказ добавлен" });
    } catch (e) {
      res.status(500).json({ message: "Error, reload your page" });
      console.log(e);
    }
  }
);
module.exports = router;
