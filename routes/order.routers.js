const { Router } = require("express");
const Order = require("../models/Order");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");
const auth = require("../middleware/auth.middleware")


const { check, validationResult } = require("express-validator");
const router = Router();

router.post(
  "/order",

  async (req, res) => {
    try {
    //   const errors = validationResult(req);

    //   if (!errors.isEmpty()) {
    //     return res.status(400).json({
    //       errors: errors.array(),
    //       message: "Некорректные данные при регистрации",
    //     });
    //   }

      const {
        isSended,
        products,
        clientData,
      } = req.body;

     
      console.log(req.body);
      const order = new Order( req.body);

      await order.save();

      res.status(201).json({ message: "Заказ добавлен" });
    } catch (e) {
      res.status(500).json({ message: "Error, reload your page" });
      console.log(e);
    }
  }
);

router.post(
  "/orders",
  auth,
  async (req, res) => {
    try {
      

       

      

      const orders = await Order.find({isSended: false});

      
   
      res.json(orders);

      // const hashedPassword = await bcrypt.hash(password, 12);
      // const order = new Order({ login, password: hashedPassword });

      // await order.save();

      // res.status(201).json({ message: "Пользователь создан" });
    } catch (e) {
      res.status(500).json({ message: "Error, reload your page" });
      console.log(e);
    }
  }
);

// router.get(
//   "/login",

//   async (req, res) => {
//     try {
//      return 'asd'
//     } catch (e) {
//       res.status(500).json({ message: "Error, reload your page" });
//       console.log(e);
//     }
//   }
// );

module.exports = router;
