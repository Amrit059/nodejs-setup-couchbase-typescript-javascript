import * as express from 'express';
import { UserController } from '../controllers/user.controller'

const Router = express.Router();
const userController = new UserController();

Router.get("/verify/adhaar/number/:adharNo", userController.verifyAdhaarNumber);
Router.get("/verify/pan/number/:panNo", userController.verifyPanNumber);
Router.get("/verify/user/name/:username", userController.verifyUserName);
Router.get("/verify/phone/number/:phoneNo", userController.verifyPhoneNumber);
Router.get("/verify/email/:email", userController.verifyEmail);

Router.post("/login/with/phone/number", userController.loginWithPhoneNo);
Router.post("/login/with/userName", userController.loginWithUsername);
Router.post("/register/user", userController.registerUser);
Router.get("/fetch/user/profile/by/id/:userId", userController.getUserProfileById);
Router.put("/update/user/profile", userController.updateUserProfile);


export default Router;