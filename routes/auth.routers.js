const { Router } = require("express");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('config')
const mongoose = require("mongoose");

const { check, validationResult } = require("express-validator");
const router = Router();

router.post(
  "/register",
  // [
  //   check("login", "Некорректный login").isEmail(),
  //   check("password", "Минимальная длина пароля 5 символов").isLength({
  //     min: 5,
  //   }),
  // ],
  async (req, res) => {
    try {
     
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации",
        });
      }
     

      const { login, password, key } = req.body;

      if (key !=config.get("registerKey")) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации",
        });
      }
      console.log(req.body);
      const candidate = await Admin.findOne({ login });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Данный login уже привязан к другому аккаунту" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new Admin({ login, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: "Пользователь создан" });
    } catch (e) {
      res.status(500).json({ message: "Error, reload your page" });
      console.log(e);
    }
  }
);

router.post(
  "/login",
  [
    check("login", "Некорректный login"),
    check("password", "Некорректный пароль").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при авторизации",
        });
      }

      const { login, password } = req.body;

      const admin = await Admin.findOne({ login });

      if (!admin) {
        return res
          .status(400)
          .json({ message: "Пользователь с данным login не заргестрирован" });
      }

      const isMatch = await bcrypt.compare(password, admin.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Неверный пароль" });
      }

      const token = jwt.sign(
          {userId: admin.id},
        config.get('jwtSecret'),
        {expiresIn: '2h'}
      )
      res.json({token,   userId: admin.id})
      
      // const hashedPassword = await bcrypt.hash(password, 12);
      // const user = new Admin({ login, password: hashedPassword });

      // await user.save();

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
