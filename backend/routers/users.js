const express = require("express");
const userRouter = new express.Router();
const userController = require("../controllers/user.js");

userRouter.get("/user", userController.getSingleUser);

userRouter.get("/users", userController.getAllUsers);

userRouter.put("/user", userController.updateUser);

userRouter.get("/matched", userController.getMatchedUsers);

userRouter.get("/pending", userController.getPendingUsers);

userRouter.put("/match", userController.postMatchUser);

userRouter.put("/reject", userController.rejectUser);

userRouter.put("/unreject", userController.unrejectUser);

module.exports = userRouter;
