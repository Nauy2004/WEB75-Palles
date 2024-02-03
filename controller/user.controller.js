import express from "express";
import { asyncCatch } from "../utils/trycatch.js";
import { getAllUsers, getMe } from "../service/user.service.js";
import { author } from "../utils/author.utils.js";
import { authen } from "../utils/authen.utils.js";
const userController = express.Router();

userController.get(
    "/user",
    asyncCatch(authen),
    asyncCatch(author),
    asyncCatch(getAllUsers)
);

userController.get("user/:userId", asyncCatch(getMe),asyncCatch(authen));

userController.post("user/", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

userController.put("user/:userId", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

userController.delete("user/:userId", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export { userController };