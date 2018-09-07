import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import { APP_CONSTANTS } from "../constant/app-constant";

const loginWithUserName = "/rest/api/user/login/with/username";
const registerUser = "/rest/api/user/register/user";
const loginWithPhoneNo = "/rest/api/user/login/with/phone/number";

export const middlewareVerifyURL = (req: Request, res: Response, next: NextFunction) => {
    if (req.url === loginWithUserName || req.url === loginWithPhoneNo || req.url === registerUser) {
        return next()
    } else if (req.url.indexOf("/verify/") > -1) {
        return next()
    } else {
        let token = req.headers['authorization'];
        jwt.verify(token, APP_CONSTANTS.SKEY, (error, decode) => {
            if (error) {
                throw error;
            }
            else {
                req.app.locals.data = decode;
                next();
            }
        })

    }
};

export default middlewareVerifyURL;