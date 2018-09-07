var ottoman = require('ottoman');

export class UserModel {
    type: String = "default";
    userId: String;
    title: String;
    cBy: String;
    pic: String;
    panNo: String;
    status: String;
    gender: String;
    firstName: String;
    lastName: String;
    userName: String;
    pwd: String;
    confirmPwd: String;
    maritalStatus: String;
    adhaarNo: number;
    cDate: Date;
    DOB: String;
    DOM: Date
    marriageDate: Date;
    emails: string;
    phones: Number;
}
