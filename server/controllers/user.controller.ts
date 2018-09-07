import { Request, Response, NextFunction } from "express";
import userService from "../services/user.services";
import * as jwt from 'jsonwebtoken';
import { APP_CONSTANTS } from "../constant/app-constant";

export class UserController {

    constructor() {
        console.log("User Constructor called")
    }

    verifyAdhaarNumber(req: Request, res: Response, next: NextFunction) {
        userService.verifyAdhaarNumber(req, (data: any) => {
            res.send({ data: data })
        })
    }

    verifyPanNumber(req: Request, res: Response, next: NextFunction) {
        userService.verifyPanNumber(req, (data: any) => {
            res.send({ data: data })
        })
    }

    verifyUserName(req: Request, res: Response, next: NextFunction) {
        userService.verifyUserName(req, (data: any) => {
            res.send({ data: data })
        })
    }

    verifyPhoneNumber(req: Request, res: Response, next: NextFunction) {
        userService.verifyPhoneNumber(req, (data: any) => {
            res.send({ data: data })
        })
    }

    verifyEmail(req: Request, res: Response, next: NextFunction) {
        userService.verifyEmail(req, (data: any) => {
            res.send({ data: data })
        })
    }

    loginWithPhoneNo(req: Request, res: Response, next: NextFunction) {
        userService.loginWithPhoneNo(req, (data: any) => {
            let payload = { subject: { userId: data.userId, phones: data.phones, userName: data.userName, emails: data.emails } }
            let token = jwt.sign(payload, APP_CONSTANTS.SKEY, { algorithm: APP_CONSTANTS.HS512, expiresIn: APP_CONSTANTS.TOKEN_VALID_FOR })
            res.send({ data: data, token: token })
        })
    }

    loginWithUsername(req: Request, res: Response, next: NextFunction) {
        userService.loginWithUsername(req, (data: any) => {
            let payload = { subject: { userId: data.userId, phones: data.phones, userName: data.userName, emails: data.emails } }
            let token = jwt.sign(payload, APP_CONSTANTS.SKEY, { algorithm: APP_CONSTANTS.HS512, expiresIn: APP_CONSTANTS.TOKEN_VALID_FOR })
            res.send({ data: data, token: token })
        })
    }

    registerUser(req: Request, res: Response, next: NextFunction) {
        userService.registerUser(req, (data: any) => {
            let payload = { subject: { userId: data.userId, phones: data.phones, userName: data.userName, emails: data.emails } }
            let token = jwt.sign(payload, APP_CONSTANTS.SKEY, { algorithm: APP_CONSTANTS.HS512, expiresIn: APP_CONSTANTS.TOKEN_VALID_FOR })
            res.send({ data: data, token: token })
        })
    }

    getUserProfileById(req: Request, res: Response, next: NextFunction) {
        userService.getUserProfileById(req, (data: any) => {
            res.send({ data: data })
        })
    }

    updateUserProfile(req: Request, res: Response, next: NextFunction) {
        console.log("req.app.locals ", req.app.locals)
        userService.updateUserProfile(req, (data: any) => {
            res.send({ data: data })
        })
    }
}