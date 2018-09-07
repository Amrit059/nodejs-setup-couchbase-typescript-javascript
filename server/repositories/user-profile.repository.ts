import { UserModel } from "../models/user.model"
import * as couchbase from 'couchbase';
import { couchbaseRef } from '../couchbasedb'
import * as config from 'config';
import * as bcrypt from "bcrypt";

let dbConfig: any = config.get('dbConfig');
var uniqid = require('uniqid');

class UserProfileRepository {

    constructor() {
    }

    registerUser(userData: UserModel, callback: any) {
        console.log("newbucket inside save user profile is ", couchbaseRef.bucket)
        let user = new UserModel();
        user.type = "user";
        user.userId = "user_" + uniqid();
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        user.userName = userData.userName;
        user.pwd = userData.pwd;
        user.confirmPwd = userData.confirmPwd;
        user.adhaarNo = userData.adhaarNo;
        user.panNo = userData.panNo;
        user.gender = userData.gender;
        user.DOB = userData.DOB;
        user.maritalStatus = userData.maritalStatus;
        user.DOM = userData.DOM;
        user.pic = userData.pic;
        user.phones = userData.phones;
        user.emails = userData.emails;
        couchbaseRef.bucket.insert(user.userId, user, (err, result) => {
            if (err) {
                throw err;
            } else {
                couchbaseRef.bucket.get(user.userId, (error: any, response) => {
                    if (error) {
                        if (error.code == couchbase.errors.keyNotFound) {
                        } else {
                        }
                    } else {
                        callback(response.value);
                    }
                })
            }
        })
    }

    verifyAdhaarNumber(adhaarNo: Number, callback: any) {
        let statement = `SELECT adhaarNo FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.adhaarNo = '${adhaarNo}'`;
        this.executeVerifyQuery(statement, (data: any) => {
            callback(data);
        })
    }

    verifyPanNumber(panNo: String, callback: any) {
        let statement = `SELECT panNo FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.panNo = '${panNo}'`;
        this.executeVerifyQuery(statement, (data: any) => {
            callback(data);
        })

    }

    verifyUserName(userName: String, callback: any) {
        let statement = `SELECT userName FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userName = '${userName}'`;
        console.log("username", statement)
        this.executeVerifyQuery(statement, (data: any) => {
            callback(data);
        })

    }

    verifyPhoneNumber(phoneNo: Number, callback: any) {
        let statement = `SELECT phones FROM ${dbConfig.bucketName} as t WHERE ANY child IN t.phones SATISFIES child.mNumber='${phoneNo}'END`
        this.executeVerifyQuery(statement, (data: any) => {
            callback(data)
        })
    }

    verifyEmail(email: String, callback: any) {
        let statement = `SELECT emails FROM ${dbConfig.bucketName} as t WHERE ANY child IN t.emails SATISFIES child.eId='${email}'END`
        this.executeVerifyQuery(statement, (data: any) => {
            callback(data)
        })
    }

    loginWithPhoneNo(phoneNo: Number, password: String, callback: any) {
        let statement = `SELECT userName, pwd FROM ${dbConfig.bucketName} as t WHERE ANY child IN t.phones SATISFIES child.mNumber='${phoneNo}'END`
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                throw error;
            } else {
                if (result.length > 0) {
                    let userModel = result[0];
                    bcrypt.compare(password, userModel.pwd, (err: any, res: any) => {
                        if (res == true) {
                            let statement1 = `SELECT userName, firstName, lastName, userId, emails, phones FROM ${dbConfig.bucketName} as t WHERE ANY child IN t.phones SATISFIES child.mNumber='${phoneNo}'END`
                            var query1 = couchbase.N1qlQuery.fromString(statement1);
                            couchbaseRef.bucket.query(query1, (error, response) => {
                                if (error) {
                                    throw error;
                                } else {
                                    if (response.length > 0) {
                                        callback(response[0]);
                                    }

                                }
                            })
                        } else {
                            throw new Error("Invalid User")
                        }
                    });
                } else {
                    throw new Error("Invalid User")
                }
            }
        });

    }

    loginWithUsername(userName: String, password: String, callback: any) {
        let statement = `SELECT userName,pwd FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userName = '${userName}'`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                throw error;
            } else {
                if (result.length > 0) {
                    let userModel = result[0];
                    bcrypt.compare(password, userModel.pwd, (err: any, res: any) => {
                        if (res == true) {
                            let statement1 = `SELECT userName, firstName, lastName, userId, emails, phones  FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userName = '${userName}'`;
                            var query1 = couchbase.N1qlQuery.fromString(statement1);
                            couchbaseRef.bucket.query(query1, (error, response) => {
                                if (error) {
                                    throw error;
                                } else {
                                    if (response.length > 0) {
                                        callback(response[0]);
                                    }

                                }
                            })
                        } else {
                            throw new Error("Invalid User")
                        }
                    });
                } else {
                    throw new Error("Invalid User")
                }
            }
        });

    }

    getUserProfileById(userId: String, callback: any, ) {
        let statement = `SELECT userName, firstName, lastName, userId, gender, maritalStatus, emails, DOB, DOM, adhaarNo, panNo, phones FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userId = "${userId}"`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            } else {
                if (result.length > 0) {
                    let userModel = result[0];
                    callback(userModel)
                }
                else {
                    console.log("invalid user id")
                }
            }
        });
    }

    updateUserProfile(userModel: UserModel, userId: String, callback: any) {
        let getUserDetailStatement = `SELECT cBy, type, pic, panNo, userId, gender, firstName, lastName, userName, pwd,
        confirmPwd, maritalStatus, adhaarNo, cDate, DOB, DOM, phones, emails FROM ${dbConfig.bucketName} 
        WHERE ${dbConfig.bucketName}.type = 'user' AND ${dbConfig.bucketName}.userId = '${userId}'
        `;
        console.log("getUserDetailStatement", getUserDetailStatement)
        var query = couchbase.N1qlQuery.fromString(getUserDetailStatement);
        couchbaseRef.bucket.query(query, (error, result) => {
            console.log("User Data is:", result)
            if (error) {
                throw error;
            } else {
                if (result.length > 0) {
                    //   console.log("result[0]", result[0])
                    let userData = result[0]

                    userData.type = result[0].type;
                    userData.userId = userId;
                    userData.firstName = userModel.firstName;
                    userData.lastName = userModel.lastName;
                    userData.userName = result[0].userName;
                    userData.pwd = result[0].pwd;
                    userData.confirmPwd = result[0].confirmPwd;
                    userData.adhaarNo = result[0].adhaarNo;
                    userData.panNo = result[0].panNo;
                    userData.gender = userModel.gender;
                    userData.DOB = userModel.DOB;
                    userData.maritalStatus = userModel.maritalStatus;
                    userData.DOM = userModel.DOM;
                    userData.pic = userModel.pic;
                    userData.phones = userModel.phones;
                    userData.emails = userModel.emails;
                    console.log("after update user data is", userData)
                    couchbaseRef.bucket.upsert(userId, userData, (err, response) => {
                        if (err) {
                            console.log("err is :", err);
                        } else {
                            callback(response);
                        }
                    });
                }
                else {
                    console.log("invalid user id")
                }
            }
        });

    }



    private executeVerifyQuery(statement: any, callback: any) {
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbaseRef.bucket.query(query, function (error, result) {
            if (error) {
                console.log('error');
                throw error;
            } else {
                if (result.length > 0) {
                    callback({ isAvailable: true });
                } else {
                    callback({ isAvailable: false });
                }
            }
        });
    }

}

const userProfileRepository = new UserProfileRepository();

export default userProfileRepository;