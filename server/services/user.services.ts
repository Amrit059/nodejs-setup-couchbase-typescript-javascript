import { Request, Response, NextFunction } from "express";
import userProfileRepository from "../repositories/user-profile.repository"
import { UserModel } from "../models/user.model";
import * as bcrypt from "bcrypt";
var atob = require('atob');


class UserService {

    constructor() {
        console.log("User service is created")
    }

    verifyAdhaarNumber(req: Request, callback: any) {
        userProfileRepository.verifyAdhaarNumber(req.params.adharNo, (data: any) => {
            callback(data)
        })
    }

    verifyPanNumber(req: Request, callback: any) {
        userProfileRepository.verifyPanNumber(req.params.panNo, (data: any) => {
            callback(data)
        })
    }

    verifyUserName(req: Request, callback: any) {
        let userName = req.params.userName;
        userProfileRepository.verifyUserName(userName, (data: any) => {
            callback(data)
        })
    }

    verifyPhoneNumber(req: Request, callback: any) {
        userProfileRepository.verifyPhoneNumber(req.params.phoneNo, (data: any) => {
            callback(data)
        })
    }

    verifyEmail(req: Request, callback: any) {
        userProfileRepository.verifyEmail(req.params.email, (data: any) => {
            callback(data)
        })
    }

    loginWithPhoneNo(req: Request, callback: any) {
        let auth = req.headers['authorization'];
        auth = auth.substring(auth.indexOf(" "))
        auth = atob("" + auth)
        let phoneNumber = auth.split(":")[0]
        let pwd = auth.split(":")[1]
        userProfileRepository.loginWithPhoneNo(Number(phoneNumber), pwd, (data: any) => {
            callback(data)
        })
    }

    loginWithUsername(req: Request, callback: any) {
        let auth = req.headers['authorization'];
        auth = auth.substring(auth.indexOf(" "))
        auth = atob("" + auth)
        let userName = auth.split(":")[0]
        let pwd = auth.split(":")[1]
        userProfileRepository.loginWithUsername(userName, pwd, (data: any) => {
            callback(data)
        })

    }

    registerUser(req: Request, callback: any) {
        let pwd = req.headers['authorization'];
        pwd = pwd.substring(pwd.indexOf(" "));
        let tempPwd = atob("" + pwd);
        let userModel: UserModel = req.body;
        bcrypt.genSalt(10, (err: any, salt: any) => {
            bcrypt.hash(tempPwd, salt, (error: any, hash: any) => {
                userModel.pwd = hash
                userProfileRepository.registerUser(userModel, (data: any) => {
                    callback(data)
                })
            });
        });
    }

    getUserProfileById(req: Request, callback: any) {
        let userId = req.app.locals.data.subject.userId;
        userProfileRepository.getUserProfileById(userId, (data: any) => {
            callback(data)
        })
    }

    updateUserProfile(req: Request, callback: any) {
        let userModel: UserModel = req.body;
        let userId = req.app.locals.data.subject.userId;
        console.log('userId before profile', userId);
        console.log("user marital status", userModel.maritalStatus)
        console.log("user marital Date", userModel.DOM)
        userProfileRepository.updateUserProfile(userModel, userId, (data: any) => {
            callback(data)
        })
    }

}

const userService = new UserService();

export default userService;