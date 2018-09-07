/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(1);
const bodyParser = __webpack_require__(2);
const config = __webpack_require__(3);
const routes_1 = __webpack_require__(4);
const cors = __webpack_require__(48);
const token_middleware_1 = __webpack_require__(49);
const app = express();
const HOST_CONFIG = config.get("hostConfig");
const PORT_NO = HOST_CONFIG.port;
app.set('port', PORT_NO);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
console.log("new server");
app.use(token_middleware_1.default);
app.use(routes_1.default);
app.get("/", (request, response, next) => {
    console.log(" Server is working perfectly");
    response.send("Server is working perfectly");
});
app.listen(app.get('port'), () => {
    console.log(('App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop\n');
});
module.exports = app;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(1);
const user_routes_1 = __webpack_require__(5);
const business_routes_1 = __webpack_require__(18);
const access_setting_routes_1 = __webpack_require__(31);
const loan_routes_1 = __webpack_require__(32);
const coupon_routes_1 = __webpack_require__(38);
const price_routes_1 = __webpack_require__(43);
const Router = express.Router();
Router.use("/rest/api/user", user_routes_1.default);
Router.use("/rest/api/business", business_routes_1.default);
Router.use("/rest/api/access/setting", access_setting_routes_1.default);
Router.use("/rest/api/loan", loan_routes_1.default);
Router.use("/rest/api/coupon", coupon_routes_1.default);
Router.use("/rest/api/price", price_routes_1.default);
exports.default = Router;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(1);
const user_controller_1 = __webpack_require__(6);
const Router = express.Router();
const userController = new user_controller_1.UserController();
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
Router.put("/update/user/role", userController.updateUserRole);
Router.get("/fetch/user/profile/all/address", userController.getAllAddressByUserId);
Router.put("/update/user/profile/address", userController.updateAddressByAddressId);
Router.post("/create/user/profile/address", userController.createNewAddressByUserId);
Router.delete("/delete/user/profile/address/by/:addressId", userController.deleteAddressByAddressId);
Router.get("/fetch/user/profile/all/driving/License", userController.getAllDrivingLicenseByUserId);
Router.put("/update/user/profile/driving/License", userController.updateDrivingLicenseByLicenseId);
Router.post("/create/user/profile/driving/License", userController.createDrivingLicenseByUserId);
Router.delete("/delete/user/profile/driving/License/by/:licenseId", userController.deleteDrivingLicenseByLicenseId);
Router.get("/fetch/user/profile/all/bank/detail", userController.getAllBankDetailByUserId);
Router.put("/update/user/profile/bank/detail", userController.updatebankDetailByBankId);
Router.post("/create/user/profile/bank/detail", userController.createbankDetailByUserId);
Router.delete("/delete/user/profile/bank/detail/by/:bankId", userController.deleteBankDetailByBankId);
exports.default = Router;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = __webpack_require__(7);
const jwt = __webpack_require__(16);
const app_constant_1 = __webpack_require__(17);
class UserController {
    constructor() {
        console.log("User Constructor called");
    }
    verifyAdhaarNumber(req, res, next) {
        user_services_1.default.verifyAdhaarNumber(req, (data) => {
            res.send({ data: data });
        });
    }
    verifyPanNumber(req, res, next) {
        user_services_1.default.verifyPanNumber(req, (data) => {
            res.send({ data: data });
        });
    }
    verifyUserName(req, res, next) {
        user_services_1.default.verifyUserName(req, (data) => {
            res.send({ data: data });
        });
    }
    verifyPhoneNumber(req, res, next) {
        user_services_1.default.verifyPhoneNumber(req, (data) => {
            res.send({ data: data });
        });
    }
    verifyEmail(req, res, next) {
        user_services_1.default.verifyEmail(req, (data) => {
            res.send({ data: data });
        });
    }
    loginWithPhoneNo(req, res, next) {
        user_services_1.default.loginWithPhoneNo(req, (data) => {
            let payload = { subject: { userId: data.userId, phones: data.phones, userName: data.userName, emails: data.emails } };
            let token = jwt.sign(payload, app_constant_1.APP_CONSTANTS.SKEY, { algorithm: app_constant_1.APP_CONSTANTS.HS512, expiresIn: app_constant_1.APP_CONSTANTS.TOKEN_VALID_FOR });
            res.send({ data: data, token: token });
        });
    }
    loginWithUsername(req, res, next) {
        user_services_1.default.loginWithUsername(req, (data) => {
            let payload = { subject: { userId: data.userId, phones: data.phones, userName: data.userName, emails: data.emails } };
            let token = jwt.sign(payload, app_constant_1.APP_CONSTANTS.SKEY, { algorithm: app_constant_1.APP_CONSTANTS.HS512, expiresIn: app_constant_1.APP_CONSTANTS.TOKEN_VALID_FOR });
            res.send({ data: data, token: token });
        });
    }
    registerUser(req, res, next) {
        user_services_1.default.registerUser(req, (data) => {
            let payload = { subject: { userId: data.userId, phones: data.phones, userName: data.userName, emails: data.emails } };
            let token = jwt.sign(payload, app_constant_1.APP_CONSTANTS.SKEY, { algorithm: app_constant_1.APP_CONSTANTS.HS512, expiresIn: app_constant_1.APP_CONSTANTS.TOKEN_VALID_FOR });
            res.send({ data: data, token: token });
        });
    }
    getUserProfileById(req, res, next) {
        user_services_1.default.getUserProfileById(req, (data) => {
            res.send({ data: data });
        });
    }
    updateUserProfile(req, res, next) {
        console.log("req.app.locals ", req.app.locals);
        user_services_1.default.updateUserProfile(req, (data) => {
            res.send({ data: data });
        });
    }
    updateUserRole(req, res, next) {
        user_services_1.default.updateUserRole(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllAddressByUserId(req, res, next) {
        user_services_1.default.getAllAddressByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
    updateAddressByAddressId(req, res, next) {
        user_services_1.default.updateAddressByAddressId(req, (data) => {
            res.send({ data: data });
        });
    }
    createNewAddressByUserId(req, res, next) {
        user_services_1.default.createNewAddressByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
    deleteAddressByAddressId(req, res, next) {
        user_services_1.default.deleteAddressByAddressId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllDrivingLicenseByUserId(req, res, next) {
        user_services_1.default.getAllDrivingLicenseByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
    updateDrivingLicenseByLicenseId(req, res, next) {
        user_services_1.default.updateDrivingLicenseByLicenseId(req, (data) => {
            res.send({ data: data });
        });
    }
    createDrivingLicenseByUserId(req, res, next) {
        user_services_1.default.createDrivingLicenseByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
    deleteDrivingLicenseByLicenseId(req, res, next) {
        user_services_1.default.deleteDrivingLicenseByLicenseId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllBankDetailByUserId(req, res, next) {
        user_services_1.default.getAllBankDetailByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
    updatebankDetailByBankId(req, res, next) {
        user_services_1.default.updatebankDetailByBankId(req, (data) => {
            res.send({ data: data });
        });
    }
    createbankDetailByUserId(req, res, next) {
        user_services_1.default.createbankDetailByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
    deleteBankDetailByBankId(req, res, next) {
        user_services_1.default.deleteBankDetailByBankId(req, (data) => {
            res.send({ data: data });
        });
    }
}
exports.UserController = UserController;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const user_profile_repository_1 = __webpack_require__(8);
const bcrypt = __webpack_require__(13);
var atob = __webpack_require__(15);
class UserService {
    constructor() {
        console.log("User service is created");
    }
    verifyAdhaarNumber(req, callback) {
        user_profile_repository_1.default.verifyAdhaarNumber(req.params.adharNo, (data) => {
            callback(data);
        });
    }
    verifyPanNumber(req, callback) {
        user_profile_repository_1.default.verifyPanNumber(req.params.panNo, (data) => {
            callback(data);
        });
    }
    verifyUserName(req, callback) {
        let userName = req.params.userName;
        user_profile_repository_1.default.verifyUserName(userName, (data) => {
            callback(data);
        });
    }
    verifyPhoneNumber(req, callback) {
        user_profile_repository_1.default.verifyPhoneNumber(req.params.phoneNo, (data) => {
            callback(data);
        });
    }
    verifyEmail(req, callback) {
        user_profile_repository_1.default.verifyEmail(req.params.email, (data) => {
            callback(data);
        });
    }
    loginWithPhoneNo(req, callback) {
        let auth = req.headers['authorization'];
        auth = auth.substring(auth.indexOf(" "));
        auth = atob("" + auth);
        let phoneNumber = auth.split(":")[0];
        let pwd = auth.split(":")[1];
        user_profile_repository_1.default.loginWithPhoneNo(Number(phoneNumber), pwd, (data) => {
            callback(data);
        });
    }
    loginWithUsername(req, callback) {
        let auth = req.headers['authorization'];
        auth = auth.substring(auth.indexOf(" "));
        auth = atob("" + auth);
        let userName = auth.split(":")[0];
        let pwd = auth.split(":")[1];
        user_profile_repository_1.default.loginWithUsername(userName, pwd, (data) => {
            callback(data);
        });
    }
    registerUser(req, callback) {
        let pwd = req.headers['authorization'];
        pwd = pwd.substring(pwd.indexOf(" "));
        let tempPwd = atob("" + pwd);
        let userModel = req.body;
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(tempPwd, salt, (error, hash) => {
                userModel.pwd = hash;
                user_profile_repository_1.default.registerUser(userModel, (data) => {
                    callback(data);
                });
            });
        });
    }
    getUserProfileById(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        user_profile_repository_1.default.getUserProfileById(userId, (data) => {
            callback(data);
        });
    }
    updateUserProfile(req, callback) {
        let userModel = req.body;
        let userId = req.app.locals.data.subject.userId;
        console.log('userId before profile', userId);
        console.log("user marital status", userModel.maritalStatus);
        console.log("user marital Date", userModel.DOM);
        user_profile_repository_1.default.updateUserProfile(userModel, userId, (data) => {
            callback(data);
        });
    }
    updateUserRole(req, callback) {
    }
    getAllAddressByUserId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        user_profile_repository_1.default.getAllAddressByUserId(userId, (data) => {
            callback(data);
        });
    }
    updateAddressByAddressId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let addressModel = req.body;
        user_profile_repository_1.default.updateAddressByAddressId(userId, addressModel, (data) => {
            callback(data);
        });
    }
    createNewAddressByUserId(req, callback) {
        let addressModel = req.body;
        let userId = req.app.locals.data.subject.userId;
        user_profile_repository_1.default.createNewAddressByUserId(userId, addressModel, (data) => {
            callback(data);
        });
    }
    deleteAddressByAddressId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let addressId = req.params.addressId;
        user_profile_repository_1.default.deleteAddressByAddressId(userId, addressId, (data) => {
            callback(data);
        });
    }
    getAllDrivingLicenseByUserId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        user_profile_repository_1.default.getAllDrivingLicenseByUserId(userId, (data) => {
            callback(data);
        });
    }
    updateDrivingLicenseByLicenseId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let DrivingLicenseModel = req.body;
        user_profile_repository_1.default.updateDrivingLicenseByLicenseId(userId, DrivingLicenseModel, (data) => {
            callback(data);
        });
    }
    createDrivingLicenseByUserId(req, callback) {
        let DrivingLicenseModel = req.body;
        let userId = req.app.locals.data.subject.userId;
        user_profile_repository_1.default.createDrivingLicenseByUserId(userId, DrivingLicenseModel, (data) => {
            callback(data);
        });
    }
    deleteDrivingLicenseByLicenseId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let drivingLicenseId = req.params.addressId;
        user_profile_repository_1.default.deleteDrivingLicenseByLicenseId(userId, drivingLicenseId, (data) => {
            callback(data);
        });
    }
    getAllBankDetailByUserId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        user_profile_repository_1.default.getAllBankDetailByUserId(userId, (data) => {
            callback(data);
        });
    }
    updatebankDetailByBankId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let BankDetailModel = req.body;
        user_profile_repository_1.default.updatebankDetailByBankId(userId, BankDetailModel, (data) => {
            callback(data);
        });
    }
    createbankDetailByUserId(req, callback) {
        let BankDetailModel = req.body;
        let userId = req.app.locals.data.subject.userId;
        user_profile_repository_1.default.createbankDetailByUserId(userId, BankDetailModel, (data) => {
            callback(data);
        });
    }
    deleteBankDetailByBankId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bankId = req.params.addressId;
        user_profile_repository_1.default.deleteBankDetailByBankId(userId, bankId, (data) => {
            callback(data);
        });
    }
}
const userService = new UserService();
exports.default = userService;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __webpack_require__(9);
const couchbase = __webpack_require__(11);
const couchbasedb_1 = __webpack_require__(12);
const config = __webpack_require__(3);
const bcrypt = __webpack_require__(13);
let dbConfig = config.get('dbConfig');
var uniqid = __webpack_require__(14);
class UserProfileRepository {
    constructor() {
    }
    registerUser(userData, callback) {
        console.log("newbucket inside save user profile is ", couchbasedb_1.couchbaseRef.bucket);
        let user = new user_model_1.UserModel();
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
        couchbasedb_1.couchbaseRef.bucket.insert(user.userId, user, (err, result) => {
            if (err) {
                throw err;
            }
            else {
                couchbasedb_1.couchbaseRef.bucket.get(user.userId, (error, response) => {
                    if (error) {
                        if (error.code == couchbase.errors.keyNotFound) {
                        }
                        else {
                        }
                    }
                    else {
                        callback(response.value);
                    }
                });
            }
        });
    }
    verifyAdhaarNumber(adhaarNo, callback) {
        let statement = `SELECT adhaarNo FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.adhaarNo = '${adhaarNo}'`;
        this.executeVerifyQuery(statement, (data) => {
            callback(data);
        });
    }
    verifyPanNumber(panNo, callback) {
        let statement = `SELECT panNo FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.panNo = '${panNo}'`;
        this.executeVerifyQuery(statement, (data) => {
            callback(data);
        });
    }
    verifyUserName(userName, callback) {
        let statement = `SELECT userName FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userName = '${userName}'`;
        console.log("username", statement);
        this.executeVerifyQuery(statement, (data) => {
            callback(data);
        });
    }
    verifyPhoneNumber(phoneNo, callback) {
        let statement = `SELECT phones FROM ${dbConfig.bucketName} as t WHERE ANY child IN t.phones SATISFIES child.mNumber='${phoneNo}'END`;
        this.executeVerifyQuery(statement, (data) => {
            callback(data);
        });
    }
    verifyEmail(email, callback) {
        let statement = `SELECT emails FROM ${dbConfig.bucketName} as t WHERE ANY child IN t.emails SATISFIES child.eId='${email}'END`;
        this.executeVerifyQuery(statement, (data) => {
            callback(data);
        });
    }
    loginWithPhoneNo(phoneNo, password, callback) {
        let statement = `SELECT userName, pwd FROM ${dbConfig.bucketName} as t WHERE ANY child IN t.phones SATISFIES child.mNumber='${phoneNo}'END`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                throw error;
            }
            else {
                if (result.length > 0) {
                    let userModel = result[0];
                    bcrypt.compare(password, userModel.pwd, (err, res) => {
                        if (res == true) {
                            let statement1 = `SELECT userName, firstName, lastName, userId, emails, phones FROM ${dbConfig.bucketName} as t WHERE ANY child IN t.phones SATISFIES child.mNumber='${phoneNo}'END`;
                            var query1 = couchbase.N1qlQuery.fromString(statement1);
                            couchbasedb_1.couchbaseRef.bucket.query(query1, (error, response) => {
                                if (error) {
                                    throw error;
                                }
                                else {
                                    if (response.length > 0) {
                                        callback(response[0]);
                                    }
                                }
                            });
                        }
                        else {
                            throw new Error("Invalid User");
                        }
                    });
                }
                else {
                    throw new Error("Invalid User");
                }
            }
        });
    }
    loginWithUsername(userName, password, callback) {
        let statement = `SELECT userName,pwd FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userName = '${userName}'`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                throw error;
            }
            else {
                if (result.length > 0) {
                    let userModel = result[0];
                    bcrypt.compare(password, userModel.pwd, (err, res) => {
                        if (res == true) {
                            let statement1 = `SELECT userName, firstName, lastName, userId, emails, phones  FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userName = '${userName}'`;
                            var query1 = couchbase.N1qlQuery.fromString(statement1);
                            couchbasedb_1.couchbaseRef.bucket.query(query1, (error, response) => {
                                if (error) {
                                    throw error;
                                }
                                else {
                                    if (response.length > 0) {
                                        callback(response[0]);
                                    }
                                }
                            });
                        }
                        else {
                            throw new Error("Invalid User");
                        }
                    });
                }
                else {
                    throw new Error("Invalid User");
                }
            }
        });
    }
    getUserProfileById(userId, callback) {
        let statement = `SELECT userName, firstName, lastName, userId, gender, maritalStatus, emails, DOB, DOM, adhaarNo, panNo, phones FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userId = "${userId}"`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            }
            else {
                if (result.length > 0) {
                    let userModel = result[0];
                    callback(userModel);
                }
                else {
                    console.log("invalid user id");
                }
            }
        });
    }
    updateUserProfile(userModel, userId, callback) {
        let getUserDetailStatement = `SELECT cBy, type, pic, panNo, userId, gender, firstName, lastName, userName, pwd,
        confirmPwd, maritalStatus, adhaarNo, cDate, DOB, DOM, phones, emails FROM ${dbConfig.bucketName} 
        WHERE ${dbConfig.bucketName}.type = 'user' AND ${dbConfig.bucketName}.userId = '${userId}'
        `;
        console.log("getUserDetailStatement", getUserDetailStatement);
        var query = couchbase.N1qlQuery.fromString(getUserDetailStatement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            console.log("User Data is:", result);
            if (error) {
                throw error;
            }
            else {
                if (result.length > 0) {
                    let userData = result[0];
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
                    console.log("after update user data is", userData);
                    couchbasedb_1.couchbaseRef.bucket.upsert(userId, userData, (err, response) => {
                        if (err) {
                            console.log("err is :", err);
                        }
                        else {
                            callback(response);
                        }
                    });
                }
                else {
                    console.log("invalid user id");
                }
            }
        });
    }
    updateUserRole(user, callback) {
    }
    getAllAddressByUserId(userId, callback) {
        let statement = `SELECT address FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userId = "${userId}"`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            }
            else {
                if (result.length > 0) {
                    if (result[0].address) {
                        callback(result[0]['address']);
                    }
                    else {
                        callback([]);
                    }
                }
                else {
                    callback([]);
                    console.log("invalid user id");
                }
            }
        });
    }
    updateAddressByAddressId(userId, addressModel, callback) {
        let statement = `SELECT * FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userId = "${userId}"`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            }
            else {
                if (result.length > 0) {
                    let userModel = result[0][dbConfig.bucketName];
                    if (!userModel.address) {
                        userModel.address = [];
                    }
                    for (let add of userModel.address) {
                        if (add.addressId == addressModel.addressId) {
                            add.type = addressModel.type;
                            add.adLine1 = addressModel.adLine1;
                            add.adLine2 = addressModel.adLine2;
                            add.city = addressModel.city;
                            add.state = addressModel.state;
                            add.country = addressModel.country;
                            add.zipCode = addressModel.zipCode;
                            add.poBox = addressModel.poBox;
                            add.geoLoc = addressModel.geoLoc;
                        }
                    }
                    console.log("user address object ", userModel.address);
                    couchbasedb_1.couchbaseRef.bucket.upsert(userId, userModel, (err, response) => {
                        if (err) {
                            console.log("err is :", err);
                        }
                        else {
                            callback(response);
                        }
                    });
                }
                else {
                    console.log("invalid user id");
                }
            }
        });
    }
    createNewAddressByUserId(userId, addressModel, callback) {
        let statement = `SELECT * FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userId = "${userId}"`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            }
            else {
                if (result.length > 0) {
                    let userModel = result[0][dbConfig.bucketName];
                    if (!userModel.address) {
                        userModel.address = [];
                    }
                    addressModel.addressId = "address_" + uniqid();
                    userModel.address.push(addressModel);
                    couchbasedb_1.couchbaseRef.bucket.upsert(userId, userModel, (err, response) => {
                        if (err) {
                            console.log("err is :", err);
                        }
                        else {
                            callback(response);
                        }
                    });
                }
                else {
                    console.log("invalid user id");
                }
            }
        });
    }
    deleteAddressByAddressId(userId, addressId, callback) {
    }
    getAllDrivingLicenseByUserId(userId, callback) {
        let statement = `SELECT drivingLicense FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userId = "${userId}"`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            }
            else {
                if (result.length > 0) {
                    if (result[0].drivingLicense) {
                        callback(result[0]['drivingLicense']);
                    }
                    else {
                        callback([]);
                    }
                }
                else {
                    callback([]);
                    console.log("invalid user id");
                }
            }
        });
    }
    createDrivingLicenseByUserId(userId, drivingLicenseModel, callback) {
        let statement = `SELECT * FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userId = "${userId}"`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            }
            else {
                if (result.length > 0) {
                    let userModel = result[0][dbConfig.bucketName];
                    if (!userModel.drivingLicense) {
                        userModel.drivingLicense = [];
                    }
                    drivingLicenseModel.drivingLicenseId = "address_" + uniqid();
                    userModel.drivingLicense.push(drivingLicenseModel);
                    couchbasedb_1.couchbaseRef.bucket.upsert(userId, userModel, (err, response) => {
                        if (err) {
                            console.log("err is :", err);
                        }
                        else {
                            callback(response);
                        }
                    });
                }
                else {
                    console.log("invalid user id");
                }
            }
        });
    }
    updateDrivingLicenseByLicenseId(userId, drivingLicenseModel, callback) {
        let statement = `SELECT * FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userId = "${userId}"`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            }
            else {
                if (result.length > 0) {
                    let userModel = result[0][dbConfig.bucketName];
                    if (!userModel.drivingLicense) {
                        userModel.drivingLicense = [];
                    }
                    for (let dLicense of userModel.drivingLicense) {
                        if (dLicense.drivingLicenseId == drivingLicenseModel.drivingLicenseId) {
                            dLicense.number = drivingLicenseModel.number;
                            dLicense.expiry = drivingLicenseModel.expiry;
                            dLicense.attachment = drivingLicenseModel.attachment;
                            dLicense.vehicleType = drivingLicenseModel.vehicleType;
                        }
                    }
                    couchbasedb_1.couchbaseRef.bucket.upsert(userId, userModel, (err, response) => {
                        if (err) {
                            console.log("err is :", err);
                        }
                        else {
                            callback(response);
                        }
                    });
                }
                else {
                    console.log("invalid user id");
                }
            }
        });
    }
    deleteDrivingLicenseByLicenseId(userId, drivingLicenseId, callback) {
    }
    getAllBankDetailByUserId(userId, callback) {
        let statement = `SELECT bankDetail FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userId = "${userId}"`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            }
            else {
                if (result.length > 0) {
                    if (result[0].bankDetail) {
                        callback(result[0]['bankDetail']);
                    }
                    else {
                        callback([]);
                    }
                }
                else {
                    callback([]);
                    console.log("invalid user id");
                }
            }
        });
    }
    createbankDetailByUserId(userId, bankDetailModel, callback) {
        let statement = `SELECT * FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userId = "${userId}"`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            }
            else {
                if (result.length > 0) {
                    let userModel = result[0][dbConfig.bucketName];
                    if (!userModel.bankDetail) {
                        userModel.bankDetail = [];
                    }
                    bankDetailModel.bankId = "bank_" + uniqid();
                    userModel.bankDetail.push(bankDetailModel);
                    couchbasedb_1.couchbaseRef.bucket.upsert(userId, userModel, (err, response) => {
                        if (err) {
                            console.log("err is :", err);
                        }
                        else {
                            callback(response);
                        }
                    });
                }
                else {
                    console.log("invalid user id");
                }
            }
        });
    }
    updatebankDetailByBankId(userId, bankDetailModel, callback) {
        let statement = `SELECT * FROM ${dbConfig.bucketName} where ${dbConfig.bucketName}.userId = "${userId}"`;
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            }
            else {
                if (result.length > 0) {
                    let userModel = result[0][dbConfig.bucketName];
                    if (!userModel.bankDetail) {
                        userModel.bankDetail = [];
                    }
                    for (let bankDetail of userModel.bankDetail) {
                        if (bankDetail.bankId == bankDetailModel.bankId) {
                            bankDetail.accountName = bankDetailModel.accountName;
                            bankDetail.sName = bankDetailModel.sName;
                            bankDetail.accountNO = bankDetailModel.accountNO;
                            bankDetail.accountType = bankDetailModel.accountType;
                            bankDetail.bankName = bankDetailModel.bankName;
                            bankDetail.ifsc = bankDetailModel.ifsc;
                            bankDetail.routingNo = bankDetailModel.routingNo;
                        }
                    }
                    couchbasedb_1.couchbaseRef.bucket.upsert(userId, userModel, (err, response) => {
                        if (err) {
                            console.log("err is :", err);
                        }
                        else {
                            callback(response);
                        }
                    });
                }
                else {
                    console.log("invalid user id");
                }
            }
        });
    }
    deleteBankDetailByBankId(userId, bankDetailId, callback) {
    }
    executeVerifyQuery(statement, callback) {
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, function (error, result) {
            if (error) {
                console.log('error');
                throw error;
            }
            else {
                if (result.length > 0) {
                    callback({ isAvailable: true });
                }
                else {
                    callback({ isAvailable: false });
                }
            }
        });
    }
}
const userProfileRepository = new UserProfileRepository();
exports.default = userProfileRepository;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ottoman = __webpack_require__(10);
class UserModel {
    constructor() {
        this.type = "default";
    }
}
exports.UserModel = UserModel;
class DrivingLicenseModel {
}
exports.DrivingLicenseModel = DrivingLicenseModel;
class EmpHistoryModel {
}
exports.EmpHistoryModel = EmpHistoryModel;
class OccupationModel {
}
exports.OccupationModel = OccupationModel;
class EmailModel {
}
exports.EmailModel = EmailModel;
class MobileModel {
}
exports.MobileModel = MobileModel;
class AddressModel {
}
exports.AddressModel = AddressModel;
class GeoLocationModel {
}
exports.GeoLocationModel = GeoLocationModel;
class BankDetailsModel {
    constructor() {
        this.country = "I";
    }
}
exports.BankDetailsModel = BankDetailsModel;
class UserLoanModel {
}
exports.UserLoanModel = UserLoanModel;
class NewLoanRequestModel {
}
exports.NewLoanRequestModel = NewLoanRequestModel;
class ResponseModel {
}
exports.ResponseModel = ResponseModel;
class CallHistoryModel {
    constructor() {
        this.number = [new NumberModel()];
    }
}
exports.CallHistoryModel = CallHistoryModel;
class NumberModel {
}
exports.NumberModel = NumberModel;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("ottoman");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("couchbase");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = __webpack_require__(3);
const couchbase = __webpack_require__(11);
let dbConfig = config.get('dbConfig');
let cluster;
let bucket;
let N1qlQuery;
cluster = new couchbase.Cluster(dbConfig.url);
bucket = cluster.openBucket(dbConfig.bucketName, dbConfig.sslPassword);
bucket.operationTimeout = 12000000 * 1000;
N1qlQuery = couchbase.N1qlQuery;
console.log("connection is created");
bucket.upsert('testdoc', { name: 'Frank' }, (err, result) => {
    if (err)
        throw err;
    bucket.get('testdoc', function (err, result) {
        if (err)
            throw err;
        console.log(result.value);
    });
});
exports.couchbaseRef = { bucket, N1qlQuery };
console.log("new bucket is created ", exports.couchbaseRef);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("atob");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_CONSTANTS = {
    SKEY: "this is a jwt token key",
    HS512: "HS512",
    TOKEN_VALID_FOR: "365 days",
    EMP_ACCESS: "empAccess"
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(1);
const business_controller_1 = __webpack_require__(19);
const access_setting_controller_1 = __webpack_require__(27);
const Router = express.Router();
const accessController = new access_setting_controller_1.AccessSettingController();
const businessController = new business_controller_1.BusinessController();
Router.post("/create/business", businessController.createBusiness);
Router.put("/update/business", businessController.editBusiness);
Router.delete("/delete/:bizId", businessController.deleteBusiness);
Router.get("/fetch/all/business/by/userId", businessController.getAllBusinessByUserId);
Router.get("/fetch/business/by/bizId/:bizId", businessController.getBusinessDetailByBizId);
Router.post("/create/branch/by/user/Id", businessController.createBranch);
Router.put("/update/branch/by/biz/Id", businessController.editBranch);
Router.delete("/delete/branch/by/:bizId", businessController.deleteBranch);
Router.get("/fetch/all/branch/by/bizId/:bizId", businessController.getBranchDetailByBizId);
Router.get("/fetch/branch/by/branchId/:brcId", businessController.getAllBranchDetailByBizIdAndBrcId);
Router.post("/create/line/by/user/Id", businessController.createNewLineByUserId);
Router.put("/update/line/by/biz/Id", businessController.updateLineByBusinessAndUserId);
Router.get("/fetch/line/by/bizId/:bizId/branch/Id/:brcId", businessController.getAllLineByBusinessIdAndBranchId);
Router.post("/create/expenses/by/user/Id", businessController.createNewExpensesByUserId);
Router.get("/fetch/all/expenses/by/bizId/:bizId", businessController.getAllExpensesByBusinessId);
Router.get("/fetch/all/expenses/by/businessId/:bizId/branchId/:brcId", businessController.getAllExpensesByBusinessIdAndBranchId);
Router.get("/fetch/all/expenses/by/businessId/:bizId/branchId/:brcId/lineId/:lnId", businessController.getAllExpensesByBusinessIdAndBranchIdAndLineId);
Router.post("/create/bank/by/user/Id", businessController.createNewBusinessBankByUserId);
Router.get("/fetch/business/bank/detail/by/businessId/:bizId", businessController.getAllBankByBusinessId);
Router.get("/fetch/branch/bank/detail/by/businessId/:bizId/and/branchId/:brcId", businessController.getAllBankByBusinessIdAndBranchId);
Router.get("/fetch/line/bank/detail/by/businessId/:bizId/branchId/:brcId/lineId/:lnId", businessController.getAllBankByBusinessIdAndBranchIdAndLineId);
Router.put("/update/bank/by/user/Id", businessController.updateBankDetailByUserId);
exports.default = Router;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const business_services_1 = __webpack_require__(20);
class BusinessController {
    constructor() {
        console.log("Business Constructor called");
    }
    createBusiness(req, res, next) {
        business_services_1.default.createBusiness(req, (data) => {
            res.send({ data: data });
        });
    }
    editBusiness(req, res, next) {
        business_services_1.default.editBusiness(req, (data) => {
            res.send({ data: data });
        });
    }
    deleteBusiness(req, res, next) {
        business_services_1.default.deleteBusiness(req, (data) => {
            res.send({ data: data });
        });
    }
    getBusinessDetailByBizId(req, res, next) {
        business_services_1.default.getBusinessDetailByBizId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllBusinessByUserId(req, res, next) {
        business_services_1.default.getAllBusinessByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
    createBranch(req, res, next) {
        business_services_1.default.createBranchByBusinessId(req, (data) => {
            res.send({ data: data });
        });
    }
    editBranch(req, res, next) {
        business_services_1.default.updateBranchByBusinessId(req, (data) => {
            res.send({ data: data });
        });
    }
    deleteBranch(req, res, next) {
        business_services_1.default.deleteBranchByBusinessId(req, (data) => {
            res.send({ data: data });
        });
    }
    getBranchDetailByBizId(req, res, next) {
        business_services_1.default.getAllBranchDetailByBusinessId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllBranchDetailByBizIdAndBrcId(req, res, next) {
        business_services_1.default.getAllBranchDetailByBizIdAndBrcId(req, (data) => {
            res.send({ data: data });
        });
    }
    createNewLineByUserId(req, res, next) {
        business_services_1.default.createNewLineByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllLineByBusinessIdAndBranchId(req, res, next) {
        business_services_1.default.getAllLineByBusinessIdAndBranchId(req, (data) => {
            res.send({ data: data });
        });
    }
    updateLineByBusinessAndUserId(req, res, next) {
        business_services_1.default.updateLineByBusinessAndUserId(req, (data) => {
            res.send({ data: data });
        });
    }
    createNewExpensesByUserId(req, res, next) {
        business_services_1.default.createNewExpensesByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllExpensesByBusinessId(req, res, next) {
        business_services_1.default.getAllExpensesByBusinessId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllExpensesByBusinessIdAndBranchId(req, res, next) {
        business_services_1.default.getAllExpensesByBusinessIdAndBranchId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllExpensesByBusinessIdAndBranchIdAndLineId(req, res, next) {
        business_services_1.default.getAllExpensesByBusinessIdAndBranchIdAndLineId(req, (data) => {
            res.send({ data: data });
        });
    }
    createNewBusinessBankByUserId(req, res, next) {
        business_services_1.default.createNewBusinessBankByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllBankByBusinessId(req, res, next) {
        business_services_1.default.getAllBankDetailByBusinessId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllBankByBusinessIdAndBranchId(req, res, next) {
        business_services_1.default.getAllBankByBusinessIdAndBranchId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllBankByBusinessIdAndBranchIdAndLineId(req, res, next) {
        business_services_1.default.getAllBankByBusinessIdAndBranchIdAndLineId(req, (data) => {
            res.send({ data: data });
        });
    }
    updateBankDetailByUserId(req, res, next) {
        business_services_1.default.updateBankDetailByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
}
exports.BusinessController = BusinessController;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const business_repository_1 = __webpack_require__(21);
class BusinessService {
    constructor() {
        console.log("Business service is created");
    }
    createBusiness(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        business_repository_1.default.createBusiness(req.body, userId, (data) => {
            callback(data);
        });
    }
    editBusiness(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        business_repository_1.default.editBusiness(req.body, userId, (data) => {
            callback(data);
        });
    }
    deleteBusiness(req, callback) {
        let bizId = req.params.bizId;
        business_repository_1.default.deleteBusiness(bizId, (data) => {
            callback(data);
        });
    }
    getBusinessDetailByBizId(req, callback) {
        let bizId = req.params.bizId;
        business_repository_1.default.getBusinessDetailByBizId(bizId, (data) => {
            callback(data);
        });
    }
    getAllBusinessByUserId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        business_repository_1.default.getAllBusinessByUserId(userId, (data) => {
            callback(data);
        });
    }
    createBranchByBusinessId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        business_repository_1.default.createBranchByUserId(req.body, userId, (data) => {
            callback(data);
        });
    }
    updateBranchByBusinessId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        business_repository_1.default.updateBranchByUserId(req.body, userId, (data) => {
            callback(data);
        });
    }
    deleteBranchByBusinessId(req, callback) {
        let bizId = req.params.bizId;
        let brcId = req.params.brcId;
        business_repository_1.default.deleteBranchByBusinessId(bizId, brcId, (data) => {
            callback(data);
        });
    }
    getAllBranchDetailByBusinessId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        business_repository_1.default.getAllBranchByUserIdAndEmpId(userId, bizId, (data) => {
            callback(data);
        });
    }
    getAllBranchDetailByBizIdAndBrcId(req, callback) {
        let bizId = req.params.bizId;
        let brcId = req.params.brcId;
        business_repository_1.default.getAllBranchDetailByBizIdAndBrcId(bizId, brcId, (data) => {
            callback(data);
        });
    }
    createNewLineByUserId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        business_repository_1.default.createNewLineByUserId(req.body, userId, (data) => {
            callback(data);
        });
    }
    getAllLineByBusinessIdAndBranchId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        let brcId = req.params.brcId;
        business_repository_1.default.getAllLineByBusinessIdAndBranchId(userId, bizId, brcId, (data) => {
            callback(data);
        });
    }
    updateLineByBusinessAndUserId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        business_repository_1.default.updateLineByBusinessAndUserId(req.body, userId, (data) => {
            callback(data);
        });
    }
    createNewExpensesByUserId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let expensesModel = req.body;
        let levelNo = this.getLevelNumber(expensesModel);
        business_repository_1.default.createNewExpensesByUserId(expensesModel, userId, levelNo, (data) => {
            callback(data);
        });
    }
    getAllExpensesByBusinessId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        business_repository_1.default.getAllExpensesByBusinessId(userId, bizId, (data) => {
            callback(data);
        });
    }
    getAllExpensesByBusinessIdAndBranchId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        let brcId = req.params.brcId;
        business_repository_1.default.getAllExpensesByBizIdAndBranchId(userId, bizId, brcId, (data) => {
            callback(data);
        });
    }
    getAllExpensesByBusinessIdAndBranchIdAndLineId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        let brcId = req.params.brcId;
        let lnId = req.params.lnId;
        business_repository_1.default.getAllExpensesByBizIdAndBranchIdAndLineId(userId, bizId, brcId, lnId, (data) => {
            callback(data);
        });
    }
    createNewBusinessBankByUserId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let businessBankModel = req.body;
        let levelNo = this.getLevelNumber(businessBankModel);
        business_repository_1.default.createNewBusinessBankByUserId(businessBankModel, userId, levelNo, (data) => {
            callback(data);
        });
    }
    getAllBankDetailByBusinessId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        business_repository_1.default.getAllBankDetailByBusinessId(userId, bizId, (data) => {
            callback(data);
        });
    }
    getAllBankByBusinessIdAndBranchId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        let brcId = req.params.brcId;
        business_repository_1.default.getAllBankByBusinessIdAndBranchId(userId, bizId, brcId, (data) => {
            callback(data);
        });
    }
    getAllBankByBusinessIdAndBranchIdAndLineId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        let brcId = req.params.brcId;
        let lnId = req.params.lnId;
        business_repository_1.default.getAllBankByBusinessIdAndBranchIdAndLineId(userId, bizId, brcId, lnId, (data) => {
            callback(data);
        });
    }
    updateBankDetailByUserId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let businessBankModel = req.body;
        let levelNo = this.getLevelNumber(businessBankModel);
        business_repository_1.default.updateBankDetailByUserId(businessBankModel, userId, levelNo, (data) => {
            callback(data);
        });
    }
    getLevelNumber(data) {
        let levelNo;
        if (data.bizId) {
            levelNo = 1;
        }
        else if (data.bizId && data.brcId) {
            levelNo = 2;
        }
        else if (data.bizId && data.brcId && data.lnId) {
            levelNo = 3;
        }
        return levelNo;
    }
}
const businessService = new BusinessService();
exports.default = businessService;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = __webpack_require__(3);
const database_handlers_repository_1 = __webpack_require__(22);
const business_util_service_1 = __webpack_require__(23);
const access_repository_1 = __webpack_require__(25);
let dbConfig = config.get('dbConfig');
class BusinessRepository {
    constructor() {
    }
    createBusiness(businessModel, userId, callback) {
        let business = business_util_service_1.default.createBusinessModel(businessModel, userId);
        business.contacts[0] = business_util_service_1.default.createBusinessContactModel(business.contacts[0], business.bizId, userId);
        database_handlers_repository_1.default.inserData(business.bizId, business, (newBusiness) => {
            access_repository_1.default.createAccessData(userId, newBusiness.bizId, 1, 1, 3, (accessModel) => {
                callback(newBusiness);
            });
        });
    }
    editBusiness(businessModel, userId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdmin(businessModel.bizId, [1], [3], userId, (verifiedEmpAccess) => {
            this.getBusinessDetailRawDetailByBizId(verifiedEmpAccess.lvlInId, (businessData) => {
                let dbBusinessData = business_util_service_1.default.createEditBusinessModel(businessData, businessModel);
                database_handlers_repository_1.default.updateData(dbBusinessData.bizId, dbBusinessData, (newBusinessData) => {
                    callback(newBusinessData);
                });
            });
        });
    }
    getBusinessDetailByBizId(bizId, callback) {
        let businessStatement = `SELECT bizId, cBy, cDate, eDate, gstNo,address, logo, poBox, regNo, sDate, name, panNo, sName, title, website, contacts FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.title = 'business' AND ${dbConfig.bucketName}.bizId = '${bizId}'`;
        database_handlers_repository_1.default.getAllData(businessStatement, (businessData) => {
            callback(businessData[0]);
        });
    }
    getAllBusinessByUserId(userId, callback) {
        access_repository_1.default.getAllEmpAccessByUserId(userId, (accessDataList) => {
            let businessIdList = [];
            if (!accessDataList || accessDataList.length == 0) {
                callback([]);
                return;
            }
            else {
                for (let accessData of accessDataList) {
                    for (let empAccess of accessData.empAccess) {
                        businessIdList.push(empAccess.lvlInId);
                    }
                }
            }
            this.getAllBussinessByBizIdList(businessIdList, (businessList) => {
                callback(businessList);
            });
        });
    }
    createBranchByUserId(businessModel, userId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdmin(businessModel.bizId, [1], [2, 3], userId, (verifiedEmpAccess) => {
            this.getBusinessDetailRawDetailByBizId(businessModel.bizId, (businessData) => {
                let branch = business_util_service_1.default.createNewBranchModel(businessModel, userId);
                businessData.branch = (businessData.branch && businessData.branch.length >= 0) ? businessData.branch : [];
                businessData.branch.push(branch);
                businessData.contacts.push(business_util_service_1.default.createBranchContactModel(businessModel.contacts[0], businessModel.bizId, branch.brcId, userId));
                database_handlers_repository_1.default.updateData(businessData.bizId, businessData, (newBusinessData) => {
                    callback(newBusinessData);
                });
            });
        });
    }
    updateBranchByUserId(businessModel, userId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdmin(businessModel.bizId, [2, 1], [2, 3], userId, (verifiedEmpAccess) => {
            this.getBusinessDetailRawDetailByBizId(businessModel.bizId, (businessData) => {
                businessData = business_util_service_1.default.updateBusinessBranchDataForModifiedBranch(businessData, businessModel);
                businessData = business_util_service_1.default.updateBusinessContactDataForModifiedBranch(businessData, businessModel);
                database_handlers_repository_1.default.updateData(businessData.bizId, businessData, (newBusinessData) => {
                    callback(newBusinessData);
                });
            });
        });
    }
    getAllBranchByUserIdAndEmpId(userId, bizId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndEmpIdAndLvlInNo(bizId, userId, [2, 1], [2, 3], (accessDataList) => {
            console.log("accessDataLst", accessDataList);
            if (!accessDataList || accessDataList.length == 0) {
                callback([]);
                return;
            }
            this.getBusinessDetailRawDetailByBizId(bizId, (businessData) => {
                let branchIdList = [];
                if (!businessData.branch || businessData.branch.length === 0) {
                    callback([]);
                    return;
                }
                for (let branchEmpAccessList of businessData.branch) {
                    branchIdList.push(branchEmpAccessList.brcId);
                    console.log("branchIdList", branchIdList);
                }
                this.getAllBranchesByBusinessIdAndBranchIDs(branchIdList, bizId, (businessData) => {
                    console.log("businessData", businessData);
                    callback(businessData);
                });
            });
        });
    }
    createNewLineByUserId(lineModel, userId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdmin(lineModel.bizId, [3, 2, 1], [2, 3], userId, (verifyEmpAccess) => {
            this.getBusinessDetailRawDetailByBizId(lineModel.bizId, (businessModelData) => {
                let line = business_util_service_1.default.createNewLineModel(lineModel, userId);
                businessModelData.line = (businessModelData.line && businessModelData.line.length >= 0) ? businessModelData.line : [];
                businessModelData.line.push(line);
                database_handlers_repository_1.default.updateData(businessModelData.bizId, businessModelData, (newBusinessData) => {
                    callback(newBusinessData);
                });
            });
        });
    }
    getAllLineByBusinessIdAndBranchId(userId, bizId, brcId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndEmpIdAndLvlInNo(bizId, userId, [1, 2, 3], [2, 3], (accessDataList) => {
            if (!accessDataList || accessDataList.length == 0) {
                callback([]);
                return;
            }
            this.getBusinessDetailRawDetailByBizId(bizId, (businessData) => {
                let lineList = [];
                if (!businessData.line || businessData.line.length == 0) {
                    callback([]);
                    return;
                }
                console.log("from front end branch Id is is", brcId);
                for (let lineEmpAccesslist of businessData.line) {
                    lineList.push(lineEmpAccesslist.lnId);
                }
                this.getAllLinesByBusinessIdAndLineIDs(brcId, bizId, (businessData) => {
                    console.log("businessData for line", businessData);
                    callback(businessData);
                });
            });
        });
    }
    updateLineByBusinessAndUserId(lineModel, userId, callback) {
        console.log("business id is :", lineModel.bizId);
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdmin(lineModel.bizId, [1, 2, 3], [2, 3], userId, (verifiedEmpAccess) => {
            this.getBusinessDetailRawDetailByBizId(lineModel.bizId, (businessData) => {
                businessData = business_util_service_1.default.updateBusinessLineDataForModifiedLine(businessData, lineModel);
                database_handlers_repository_1.default.updateData(businessData.bizId, businessData, (newBusinessData) => {
                    callback(newBusinessData);
                });
            });
        });
    }
    createNewExpensesByUserId(expensesModel, userId, levelNo, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndAnyRoleType(expensesModel.bizId, userId, levelNo, (verifyEmpAccess) => {
            this.getBusinessDetailRawDetailByBizId(expensesModel.bizId, (businessModelData) => {
                let expenses = business_util_service_1.default.createNewExpensesModel(expensesModel, userId);
                businessModelData.expenses = (businessModelData.expenses && businessModelData.expenses.length >= 0) ? businessModelData.expenses : [];
                businessModelData.expenses.push(expenses);
                console.log("businessModelData is ", JSON.stringify(businessModelData));
                database_handlers_repository_1.default.updateData(businessModelData.bizId, businessModelData, (newBusinessData) => {
                    console.log("afte created expenses data is:", newBusinessData);
                    callback(newBusinessData);
                });
            });
        });
    }
    getAllExpensesByBusinessId(userId, bizId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndAnyRoleType(bizId, userId, 1, (verifiedEmpAccess) => {
            if (!verifiedEmpAccess) {
                callback([]);
                return;
            }
            this.getExpensesByBusinessId(bizId, (businessData) => {
                console.log("getAllExpensesByBusinessIdAndExpensesIDs business data", businessData);
                callback(businessData);
            });
        });
    }
    getAllExpensesByBizIdAndBranchId(userId, bizId, brcId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndAnyRoleType(brcId, userId, 2, (verifiedEmpAccess) => {
            if (!verifiedEmpAccess) {
                callback([]);
                return;
            }
            this.getAllExpensesByBusinessIdAndBranchId(bizId, brcId, (businessData) => {
                console.log("getAllExpensesByBusinessIdAndBranchId business data", businessData);
                callback(businessData);
            });
        });
    }
    getAllExpensesByBizIdAndBranchIdAndLineId(userId, bizId, brcId, lnId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndAnyRoleType(lnId, userId, 3, (verifiedEmpAccess) => {
            if (!verifiedEmpAccess) {
                callback([]);
                return;
            }
            this.getAllExpensesByBusinessIdAndBranchIdAndLineId(bizId, brcId, lnId, (businessData) => {
                console.log("getAllExpensesByBusinessIdAndBranchIdAndLineId business data", businessData);
                callback(businessData);
            });
        });
    }
    createNewBusinessBankByUserId(businessBankModel, userId, levelNo, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndAnyRoleType(businessBankModel.bizId, userId, levelNo, (verifyEmpAccess) => {
            this.getBusinessDetailRawDetailByBizId(businessBankModel.bizId, (businessModelData) => {
                let bank = business_util_service_1.default.createNewBankModel(businessBankModel, userId);
                businessModelData.bank = (businessModelData.bank && businessModelData.bank.length >= 0) ? businessModelData.bank : [];
                businessModelData.bank.push(bank);
                database_handlers_repository_1.default.updateData(businessModelData.bizId, businessModelData, (newBusinessData) => {
                    callback(newBusinessData);
                });
            });
        });
    }
    getAllBankDetailByBusinessId(userId, bizId, callback) {
        console.log("businessId", bizId);
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndAnyRoleType(bizId, userId, 1, (verifiedEmpAccess) => {
            if (!verifiedEmpAccess) {
                callback([]);
                return;
            }
            this.getBankByBusinessId(bizId, (businessData) => {
                console.log("getAllExpensesByBusinessIdAndExpensesIDs business data", businessData);
                callback(businessData);
            });
        });
    }
    getAllBankByBusinessIdAndBranchId(userId, bizId, brcId, callback) {
        console.log("businessId", bizId);
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndAnyRoleType(brcId, userId, 2, (verifiedEmpAccess) => {
            if (!verifiedEmpAccess) {
                callback([]);
                return;
            }
            this.getBankByBizIdAndbranchId(bizId, brcId, (businessData) => {
                console.log("getAllExpensesByBusinessIdAndExpensesIDs business data", businessData);
                callback(businessData);
            });
        });
    }
    getAllBankByBusinessIdAndBranchIdAndLineId(userId, bizId, brcId, lnId, callback) {
        console.log("businessId", bizId);
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndAnyRoleType(lnId, userId, 3, (verifiedEmpAccess) => {
            if (!verifiedEmpAccess) {
                callback([]);
                return;
            }
            this.getBankByBizIdAndBranchIdAndLineId(bizId, brcId, lnId, (businessData) => {
                console.log("getAllExpensesByBusinessIdAndExpensesIDs business data", businessData);
                callback(businessData);
            });
        });
    }
    updateBankDetailByUserId(businessBankModel, userId, levelNo, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndAnyRoleType(businessBankModel.bizId, userId, levelNo, (verifyEmpAccess) => {
            this.getBusinessDetailRawDetailByBizId(businessBankModel.bizId, (businessModelData) => {
                businessModelData = business_util_service_1.default.updateBankModel(businessBankModel, businessModelData);
                database_handlers_repository_1.default.updateData(businessModelData.bankId, businessModelData, (newBusinessData) => {
                    callback(newBusinessData);
                });
            });
        });
    }
    deleteBusiness(bizId, callback) {
    }
    getAllBranchDetailByBizIdAndBrcId(bizId, brcId, callback) {
    }
    deleteBranchByBusinessId(userId, bizId, callback) {
    }
    getAllLinesByBusinessIdAndLineIDs(brcId, bizId, callback) {
        let statement = `SELECT ARRAY child FOR child IN line
        WHEN child.brcId='${brcId}' END AS line
        FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.bizId='${bizId}' AND ANY child in ${dbConfig.bucketName}.line 
        SATISFIES child.brcId='${brcId}' END`;
        database_handlers_repository_1.default.getAllData(statement, (businessList) => {
            callback(businessList[0]);
        });
    }
    getAllBranchesByBusinessIdAndBranchIDs(brcIds, bizId, callback) {
        let statement = `SELECT branch, contacts FROM ${dbConfig.bucketName} 
            WHERE ${dbConfig.bucketName}.title = 'business' 
            AND ${dbConfig.bucketName}.bizId = '${bizId}' 
            AND ANY child IN ${dbConfig.bucketName}.branch 
            SATISFIES child.brcId In ${this.createStringFromArray(brcIds)} END 
            AND ANY child IN ${dbConfig.bucketName}.contacts SATISFIES child.brcId In ${this.createStringFromArray(brcIds)} END
        `;
        database_handlers_repository_1.default.getAllData(statement, (businessList) => {
            callback(businessList[0]);
        });
    }
    getAllBussinessByBizIdList(bizIds, callback) {
        let statement = `SELECT bizId, cBy, cDate, eDate, gstNo,address, logo, poBox, 
            regNo, sDate, name, panNo, sName, title, website, contacts 
            FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.title = 'business' 
            AND ${dbConfig.bucketName}.bizId IN ${this.createStringFromArray(bizIds)}
        `;
        database_handlers_repository_1.default.getAllData(statement, (data) => {
            callback(data);
        });
    }
    getBusinessDetailRawDetailByBizId(bizId, callback) {
        let businessStatement = `SELECT bizId, cBy, cDate, gstNo,address, logo, regNo, bank, 
            line, overAllRating, sDate, name, panNo, sName, title, website, contacts, branch, expenses, 
            depositor, licenses FROM ${dbConfig.bucketName} 
            WHERE ${dbConfig.bucketName}.title = 'business'
            AND ${dbConfig.bucketName}.bizId = '${bizId}'
        `;
        database_handlers_repository_1.default.getAllData(businessStatement, (businessData) => {
            callback(businessData[0]);
        });
    }
    getExpensesByBusinessId(bizId, callback) {
        let statement = `
            SELECT 
            ARRAY child FOR child IN expenses
            WHEN child.bizId='${bizId}' END AS expenses
            FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.title = 'business' AND 
            ${dbConfig.bucketName}.bizId = '${bizId}' and 
            ANY child IN ${dbConfig.bucketName}.expenses SATISFIES child.bizId = '${bizId}' END
        `;
        database_handlers_repository_1.default.getAllData(statement, (businessList) => {
            callback(businessList.length > 0 ? businessList[0] : []);
        });
    }
    getAllExpensesByBusinessIdAndBranchId(bizId, brcId, callback) {
        let statement = `
            SELECT 
            ARRAY child FOR child IN expenses
            WHEN child.bizId='${bizId}' AND  child.brcId = '${brcId}' END AS expenses
            FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.title = 'business' AND 
            ${dbConfig.bucketName}.bizId = '${bizId}' and 
            ANY child IN ${dbConfig.bucketName}.expenses SATISFIES child.bizId = '${bizId}' AND child.brcId = '${brcId}' END
        `;
        database_handlers_repository_1.default.getAllData(statement, (businessList) => {
            callback(businessList.length > 0 ? businessList[0] : []);
        });
    }
    getAllExpensesByBusinessIdAndBranchIdAndLineId(bizId, brcId, lnId, callback) {
        let statement = `
            SELECT 
            ARRAY child FOR child IN expenses
            WHEN child.bizId='${bizId}' AND  child.brcId = '${brcId}' AND child.lnId = '${lnId}' END AS expenses
            FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.title = 'business' AND 
            ${dbConfig.bucketName}.bizId = '${bizId}' and 
            ANY child IN ${dbConfig.bucketName}.expenses SATISFIES child.bizId = '${bizId}' 
            AND child.brcId = '${brcId}' AND child.lnId = '${lnId}' END
        `;
        database_handlers_repository_1.default.getAllData(statement, (businessList) => {
            callback(businessList.length > 0 ? businessList[0] : []);
        });
    }
    getBankByBusinessId(bizId, callback) {
        let statement = `
            SELECT 
            ARRAY child FOR child IN bank
            WHEN child.bizId='${bizId}' END AS bank
            FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.title = 'business' AND 
            ${dbConfig.bucketName}.bizId = '${bizId}' and 
            ANY child IN ${dbConfig.bucketName}.bank SATISFIES child.bizId = '${bizId}' END
        `;
        database_handlers_repository_1.default.getAllData(statement, (businessList) => {
            callback(businessList.length > 0 ? businessList[0] : []);
        });
    }
    getBankByBizIdAndbranchId(bizId, brcId, callback) {
        let statement = `
            SELECT 
            ARRAY child FOR child IN bank
            WHEN child.bizId='${bizId}' AND  child.brcId = '${brcId}' END AS bank
            FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.title = 'business' AND 
            ${dbConfig.bucketName}.bizId = '${bizId}' and 
            ANY child IN ${dbConfig.bucketName}.bank SATISFIES child.bizId = '${bizId}'
            AND child.brcId = '${brcId}' END
        `;
        database_handlers_repository_1.default.getAllData(statement, (businessList) => {
            callback(businessList.length > 0 ? businessList[0] : []);
        });
    }
    getBankByBizIdAndBranchIdAndLineId(bizId, brcId, lnId, callback) {
        let statement = `
        SELECT 
        ARRAY child FOR child IN bank
        WHEN child.bizId='${bizId}' AND  child.brcId = '${brcId}' AND child.lnId = '${lnId}' END AS bank
        FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.title = 'business' AND 
        ${dbConfig.bucketName}.bizId = '${bizId}' and 
        ANY child IN ${dbConfig.bucketName}.bank SATISFIES child.bizId = '${bizId}' 
        AND child.brcId = '${brcId}' AND child.lnId = '${lnId}' END
    `;
        database_handlers_repository_1.default.getAllData(statement, (businessList) => {
            callback(businessList.length > 0 ? businessList[0] : []);
        });
    }
    createStringFromArray(items) {
        let finalString = "[";
        for (let item of items) {
            finalString = finalString + "'" + item + "',";
        }
        finalString = finalString.replace(/,(\s+)?$/, '');
        finalString = finalString + "]";
        return finalString;
    }
}
const businessRepository = new BusinessRepository();
exports.default = businessRepository;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const couchbase = __webpack_require__(11);
const couchbasedb_1 = __webpack_require__(12);
class DatabaseHandlerRepository {
    constructor() {
    }
    getAllData(statement, callback) {
        console.log("get all data statement is ", statement);
        var query = couchbase.N1qlQuery.fromString(statement);
        couchbasedb_1.couchbaseRef.bucket.query(query, (error, result) => {
            if (error) {
                console.log('error', error);
                throw error;
            }
            else {
                if (result.length > 0) {
                    callback(result);
                }
                else {
                    callback([]);
                }
            }
        });
    }
    updateData(id, data, callback) {
        couchbasedb_1.couchbaseRef.bucket.upsert(id, data, (err, result) => {
            if (err) {
                throw err;
            }
            else {
                couchbasedb_1.couchbaseRef.bucket.get(id, (error, response) => {
                    if (error) {
                        if (error.code == couchbase.errors.keyNotFound) {
                        }
                        else {
                        }
                    }
                    else {
                        callback(response.value);
                    }
                });
            }
        });
    }
    inserData(id, data, callback) {
        couchbasedb_1.couchbaseRef.bucket.insert(id, data, (err, result) => {
            if (err) {
                throw err;
            }
            else {
                couchbasedb_1.couchbaseRef.bucket.get(id, (error, response) => {
                    if (error) {
                        if (error.code == couchbase.errors.keyNotFound) {
                        }
                        else {
                        }
                    }
                    else {
                        callback(response.value);
                    }
                });
            }
        });
    }
}
const databaseHandlerRepository = new DatabaseHandlerRepository();
exports.default = databaseHandlerRepository;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const business_model_1 = __webpack_require__(24);
var uniqid = __webpack_require__(14);
class BusinessUtilService {
    constructor() {
        console.log("Business Utill service is created");
    }
    createBusinessModel(businessModel, userId) {
        let business = new business_model_1.BusinessModel();
        business.bizId = "bizId_" + uniqid();
        business.name = businessModel.name;
        business.contacts = businessModel.contacts;
        business.sName = businessModel.sName;
        business.title = "business";
        business.panNo = businessModel.panNo;
        business.gstNo = businessModel.gstNo;
        business.website = businessModel.website;
        business.regNo = businessModel.regNo;
        business.sDate = new Date();
        business.overAllRating = businessModel.overAllRating;
        business.logo = businessModel.logo;
        business.cDate = new Date();
        business.cBy = userId;
        return business;
    }
    createEditBusinessModel(dbBusinessData, businessModel) {
        dbBusinessData.name = businessModel.name;
        dbBusinessData.sName = businessModel.sName;
        dbBusinessData.panNo = businessModel.panNo;
        dbBusinessData.gstNo = businessModel.gstNo;
        dbBusinessData.website = businessModel.website;
        dbBusinessData.regNo = businessModel.regNo;
        dbBusinessData.overAllRating = businessModel.overAllRating;
        dbBusinessData.logo = businessModel.logo;
        dbBusinessData.contacts[0].addresses = businessModel.contacts[0].addresses;
        dbBusinessData.contacts[0].phones = businessModel.contacts[0].phones;
        dbBusinessData.contacts[0].emails = businessModel.contacts[0].emails;
        return dbBusinessData;
    }
    createBusinessContactModel(contact, bizId, userId) {
        contact.title = "contacts";
        contact.contactId = "contacts_" + uniqid();
        contact.bizId = bizId;
        contact.brcId = null;
        contact.lnId = null;
        contact.contactFor = "B";
        contact.cBy = userId;
        contact.cDate = new Date();
        return contact;
    }
    createBranchContactModel(contact, bizId, brcId, userId) {
        contact.title = "contacts";
        contact.contactId = "contacts_" + uniqid();
        contact.bizId = bizId;
        contact.brcId = brcId;
        contact.lnId = null;
        contact.contactFor = "R";
        contact.cBy = userId;
        contact.cDate = new Date();
        return contact;
    }
    createNewBranchModel(businessModel, userId) {
        let branch = businessModel.branch[0];
        branch.brcId = "brcId_" + uniqid();
        branch.title = "branch";
        branch.bizId = businessModel.bizId;
        branch.name = branch.name;
        branch.sName = branch.sName;
        branch.cDate = new Date();
        branch.cBy = userId;
        return branch;
    }
    createNewLineModel(lineModel, userId) {
        let line = lineModel;
        line.title = "line";
        line.lnId = "lnId_" + uniqid();
        line.name = lineModel.name;
        line.sName = lineModel.sName;
        line.cBy = userId;
        line.cDate = new Date();
        return line;
    }
    createNewExpensesModel(expensesModel, userId) {
        let expenses = expensesModel;
        expenses.expId = "expId_" + uniqid();
        expenses.title = "expenses";
        expenses.cDate = new Date();
        expenses.cBy = userId;
        return expenses;
    }
    createNewBankModel(businessBankModel, userId) {
        let bank = businessBankModel;
        bank.bankId = "bankId_" + uniqid();
        bank.title = "bank";
        bank.cBy = userId;
        bank.cDate = new Date();
        bank.notfId = businessBankModel.notfId;
        bank.notfStatus = businessBankModel.notfStatus;
        return bank;
    }
    updateBankModel(dbBusinessBank, updatedBusinessBank) {
        dbBusinessBank.bankName = updatedBusinessBank.bankName;
        dbBusinessBank.branchName = updatedBusinessBank.branchName;
        dbBusinessBank.ifsc = updatedBusinessBank.ifsc;
        dbBusinessBank.accountType = updatedBusinessBank.accountType;
        dbBusinessBank.accountNO = updatedBusinessBank.accountNO;
        return dbBusinessBank;
    }
    updateBusinessBranchDataForModifiedBranch(dbBusiness, updatedBusiness) {
        for (let item of dbBusiness.branch) {
            if (item.brcId == updatedBusiness.branch[0].brcId) {
                item.name = updatedBusiness.branch[0].name;
                item.sName = updatedBusiness.branch[0].sName;
            }
        }
        return dbBusiness;
    }
    updateBusinessContactDataForModifiedBranch(dbBusiness, updatedBusiness) {
        for (let item of dbBusiness.contacts) {
            if (item.contactId == updatedBusiness.contacts[0].contactId) {
                item.addresses = updatedBusiness.contacts[0].addresses;
                item.phones = updatedBusiness.contacts[0].phones;
                item.emails = updatedBusiness.contacts[0].emails;
            }
        }
        return dbBusiness;
    }
    updateBusinessLineDataForModifiedLine(dbBusiness, lineModel) {
        for (let item of dbBusiness.line) {
            if (item.brcId == lineModel.brcId) {
                if (item.lnId == lineModel.lnId) {
                    item.name = lineModel.name;
                    item.sName = lineModel.sName;
                }
            }
        }
        return dbBusiness;
    }
}
const businessUtilService = new BusinessUtilService();
exports.default = businessUtilService;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __webpack_require__(9);
class BusinessModel {
    constructor() {
        this.title = "business";
    }
}
exports.BusinessModel = BusinessModel;
class BranchModel {
}
exports.BranchModel = BranchModel;
class BusinessBankModel extends user_model_1.BankDetailsModel {
}
exports.BusinessBankModel = BusinessBankModel;
class LineModel {
}
exports.LineModel = LineModel;
class ContactsModel {
    constructor() {
        this.title = "contacts";
        this.emails = [new EmailModel()];
        this.phones = [new MobileModel()];
        this.addresses = [new AddressModel()];
    }
}
exports.ContactsModel = ContactsModel;
class EmailModel {
}
exports.EmailModel = EmailModel;
class MobileModel {
}
exports.MobileModel = MobileModel;
class AddressModel {
}
exports.AddressModel = AddressModel;
class GeoLocationModel {
}
exports.GeoLocationModel = GeoLocationModel;
class ExpensesModel {
}
exports.ExpensesModel = ExpensesModel;
class DepositorModel {
}
exports.DepositorModel = DepositorModel;
class depositModel {
}
exports.depositModel = depositModel;
class RemainderModel {
}
exports.RemainderModel = RemainderModel;
class RepaymentModel {
}
exports.RepaymentModel = RepaymentModel;
class MethordModel {
}
exports.MethordModel = MethordModel;
class LicenseModel {
}
exports.LicenseModel = LicenseModel;
class RecStatusModel {
}
exports.RecStatusModel = RecStatusModel;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = __webpack_require__(3);
const access_model_1 = __webpack_require__(26);
const database_handlers_repository_1 = __webpack_require__(22);
let dbConfig = config.get('dbConfig');
var uniqid = __webpack_require__(14);
const LEVEL_NUMBERS = [1, 2, 3];
const ROLE_TYPES = [1, 2, 3];
class AccessRepository {
    constructor() {
        console.log("Access repository call");
    }
    createAccessData(userId, lvlInId, recStatus, lvlInNo, roleType, callback) {
        let accessModel = this.createAcccessDataModel(userId, lvlInId, lvlInId, userId, "", 0, 100, recStatus, lvlInNo, roleType, null);
        console.log('create acess is working');
        this.userFirstNameAndLastName(userId, (userinfoModel) => {
            console.log(" before firstname", userinfoModel[0].firstName, "before lastname", userinfoModel[0].lastName);
            for (let empinfo of accessModel.empRecord) {
                if (empinfo.empId == userId) {
                    console.log("empinfo.empId", empinfo.empId, "::", userId);
                    empinfo.firstName = userinfoModel[0].firstName;
                    empinfo.lastName = userinfoModel[0].lastName;
                    console.log("after firstname", empinfo.firstName, ":: after lastname", empinfo.lastName);
                }
            }
            database_handlers_repository_1.default.inserData(accessModel.accessId, accessModel, (newAccessModel) => {
                console.log("updated emp access", newAccessModel);
                callback(newAccessModel);
            });
        });
    }
    updateEmpRecordAccessData(userId, bizId, empId, comment, empStatus, eDate, callback) {
        let accessModel = new access_model_1.AccessModel();
        let updatedEmpRecord = this.createEmpAccessRecordData(userId, comment, empId, eDate, empStatus, accessModel);
        console.log("businessId is", bizId);
        this.getRawAccessDataByBizId(bizId, (accessData) => {
            let count = 0;
            for (let empR of accessData.empRecord) {
                if (empR.empId === updatedEmpRecord.empId) {
                    empR = updatedEmpRecord;
                    accessData.empRecord[count] = updatedEmpRecord;
                }
                count++;
            }
            database_handlers_repository_1.default.updateData(accessData.accessId, accessData, (newAccessModel) => {
                console.log("update the new emp record in access data", newAccessModel);
                callback(newAccessModel);
            });
        });
    }
    createAgentAccessByBizId(userId, bizId, lvlInId, empId, recStatus, lvlInNo, roleType, endDate, cDate, callback) {
        console.log("business id in access repository page", bizId);
        let accessModel = new access_model_1.AccessModel();
        let updatedEmpAccess = this.createEmpAccess(userId, lvlInId, empId, recStatus, lvlInNo, roleType, cDate, endDate, accessModel);
        console.log("businessId is", bizId);
        this.getRawAccessDataByBizId(bizId, (accessData) => {
            let count = 0;
            for (let empAcc of accessData.empAccess) {
                if (empAcc.empId === updatedEmpAccess.empId) {
                    empAcc = updatedEmpAccess;
                    accessData.empAccess[count] = updatedEmpAccess;
                }
                count++;
            }
            database_handlers_repository_1.default.updateData(accessData.accessId, accessData, (newAccessModel) => {
                console.log("update the new emp access data", newAccessModel);
                callback(newAccessModel);
            });
        });
    }
    updateAccessSystemActivityData(bizId, userId, lvlInId, empId, lvlOutId, comment, lvlOutNo, actType, actValue, recStatus, lvlInNo, eDate, effDate, callback) {
        let accessModel = new access_model_1.AccessModel();
        console.log("before statement of raw data get bizId is", bizId);
        let createNewempSystemActivity = this.createSystemActivityAccessData(userId, lvlInId, empId, lvlOutId, comment, lvlOutNo, recStatus, actType, actValue, lvlInNo, eDate, effDate, accessModel);
        this.getRawAccessDataByBizId(bizId, (accessData) => {
            for (let sysActivityModel of accessData.sysActivity) {
                if (sysActivityModel.lvlInId == lvlInId && sysActivityModel.empId == empId) {
                    if (sysActivityModel.actType == actType) {
                        sysActivityModel.recStatus = 2;
                        sysActivityModel = createNewempSystemActivity;
                    }
                }
            }
            console.log("createNewempSystemActivity", createNewempSystemActivity);
            accessData.sysActivity.push(createNewempSystemActivity);
            database_handlers_repository_1.default.updateData(accessData.accessId, accessData, (newAccessModel) => {
                callback(newAccessModel);
            });
        });
    }
    getRawAccessDataByBizId(bizId, callback) {
        console.log("before statement get business accessdata bizId is", bizId);
        let statement = `SELECT accessId, bizId, empAccess, empRecord, sysActivity, 
        title FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.bizId='${bizId}'`;
        console.log("after statement get business accessdata bizId is", bizId);
        database_handlers_repository_1.default.getAllData(statement, (accessData) => {
            if (accessData && accessData[0] && accessData[0].accessId) {
                let newAccessData = accessData[0];
                callback(newAccessData);
            }
            else {
            }
        });
    }
    getAllEmpAccessByUserId(userId, callback) {
        let statement = `
        SELECT
        ARRAY child FOR child IN empAccess 
        WHEN child.empId='${userId}' END AS empAccess
        FROM ${dbConfig.bucketName}
        WHERE ANY child IN ${dbConfig.bucketName}.empAccess SATISFIES child.empId='${userId}'END
        `;
        database_handlers_repository_1.default.getAllData(statement, (accessDataList) => {
            callback(accessDataList);
        });
    }
    getAllEmpAccessByBizIdAndUserIdAndSuperAdmin(bizId, lvlNo, roleType, userId, callback) {
        let statement = `
        SELECT
        ARRAY child FOR child IN empAccess
        WHEN child.empId='${userId}' AND child.roleType in [${roleType}] AND child.lvlInNo in [${lvlNo}] END AS empAccess
        FROM ${dbConfig.bucketName}
        WHERE ${dbConfig.bucketName}.bizId='${bizId}' AND ANY child IN ${dbConfig.bucketName}.empAccess SATISFIES 
        child.empId='${userId}'
        AND child.roleType in [${roleType}] AND child.lvlInNo in [${lvlNo}]
        END
        `;
        console.log("super admin statement", statement);
        database_handlers_repository_1.default.getAllData(statement, (accessDataList) => {
            let accessData = accessDataList[0];
            let verifiedEmpAccess;
            for (let item of accessData.empAccess) {
                if (!item || !item.lvlInNo) {
                    continue;
                }
                verifiedEmpAccess = item;
            }
            if (verifiedEmpAccess) {
                callback(verifiedEmpAccess);
            }
            else {
                callback(null);
            }
        });
    }
    getAllEmpAccessByBizIdAndUserIdAndSuperAdminAllLevel(userId, callback) {
        let statement = `
            SELECT
            ARRAY child FOR child IN empAccess 
            WHEN child.empId='${userId}' AND child.roleType IN [2,3] END AS empAccess
            FROM ${dbConfig.bucketName}
            WHERE ANY child IN ${dbConfig.bucketName}.empAccess SATISFIES child.empId='${userId}'
            AND child.roleType IN [2,3]
            END
        `;
        database_handlers_repository_1.default.getAllData(statement, (accessDataList) => {
            let accessData = accessDataList[0];
            if (accessDataList && accessDataList.length > 0)
                callback(accessDataList[0]);
            else
                callback(null);
        });
    }
    getAllEmpAccessByBizIdAndUserIdAndAnyRoleType(lvlInId, userId, levelNo, callback) {
        let statement = `
            SELECT
            ARRAY child FOR child IN empAccess 
            WHEN child.empId='${userId}' AND child.lvlInId='${lvlInId}' END AS empAccess
            FROM ${dbConfig.bucketName}
            WHERE ANY child IN ${dbConfig.bucketName}.empAccess SATISFIES child.empId='${userId}'
            AND child.lvlInId='${lvlInId}'
            END
        `;
        database_handlers_repository_1.default.getAllData(statement, (accessDataList) => {
            let accessData = accessDataList[0];
            let verifiedEmpAccess;
            for (let item of accessData.empAccess) {
                if (!item || !item.lvlInNo) {
                    continue;
                }
                if (item.roleType == 3) {
                    verifiedEmpAccess = item;
                }
                else if (levelNo == item.lvlInNo && ROLE_TYPES.indexOf(item.roleType) > -1) {
                    verifiedEmpAccess = item;
                }
            }
            if (verifiedEmpAccess) {
                callback(verifiedEmpAccess);
            }
            else {
                throw new Error("User is not authorized in getBusinessEmployeeAccessByUserId");
            }
        });
    }
    getAllEmpAccessByBizIdAndEmpIdAndLvlInNo(bizId, userId, lvlInNo, roleType, callback) {
        let statement = `SELECT
            ARRAY child FOR child IN empAccess
            WHEN child.empId='${userId}'AND child.lvlInNo in [${lvlInNo}] AND child.roleType in [${roleType}] END AS empAccess
            FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.bizId='${bizId}' AND ANY child in ${dbConfig.bucketName}.empAccess 
            SATISFIES child.empId='${userId}' AND child.lvlInNo in [${lvlInNo}] AND child.roleType in [${roleType}] END
        `;
        console.log("access data list statement", statement);
        database_handlers_repository_1.default.getAllData(statement, (accessDataList) => {
            console.log("accessDataList is ", JSON.stringify(accessDataList));
            callback(accessDataList);
        });
    }
    createAcccessDataModel(userId, bizId, lvlInId, empId, comment, empStatus, actValue, recStatus, lvlInNo, roleType, eDate) {
        let accessModel = new access_model_1.AccessModel();
        accessModel.accessId = "access_" + uniqid();
        accessModel.bizId = bizId;
        accessModel.title = "access";
        this.createSystemActivityAccessData(userId, lvlInId, empId, null, comment, null, recStatus, 1, actValue, lvlInNo, null, null, accessModel);
        this.createEmpAccessRecordData(userId, comment, empId, eDate, empStatus, accessModel);
        this.createEmpAccess(userId, lvlInId, userId, recStatus, lvlInNo, roleType, new Date, null, accessModel);
        return accessModel;
    }
    createEmpAccessRecordData(userId, comment, empId, eDate, empStatus, accessModel) {
        let empRecord = new access_model_1.EmpRecordModel();
        empRecord.empId = empId;
        empRecord.empStatus = empStatus;
        empRecord.comment = comment;
        empRecord.cBy = userId;
        empRecord.sDate = new Date();
        empRecord.eDate = eDate;
        empRecord.cDate = new Date();
        accessModel.empRecord.push(empRecord);
        return empRecord;
    }
    createEmpAccess(userId, lvlInId, empId, recStatus, lvlInNo, roleType, cDate, endDate, accessModel) {
        let empAccess = new access_model_1.EmpAccessModel();
        empAccess.empId = empId;
        empAccess.lvlInId = lvlInId;
        empAccess.cBy = userId;
        empAccess.recStatus = recStatus;
        empAccess.lvlInNo = lvlInNo;
        empAccess.roleType = roleType;
        empAccess.effDate = new Date();
        empAccess.endDate = endDate;
        empAccess.cDate = cDate;
        accessModel.empAccess.push(empAccess);
        return empAccess;
    }
    createSystemActivityAccessData(userId, lvlInId, empId, lvlOutId, comment, lvlOutNo, recStatus, actType, actValue, lvlInNo, eDate, effDate, accessModel) {
        let businessSysActivity = new access_model_1.SysActivityModel();
        businessSysActivity.actType = actType;
        businessSysActivity.actValue = actValue;
        businessSysActivity.cBy = userId;
        businessSysActivity.cDate = new Date();
        businessSysActivity.eDate = eDate;
        businessSysActivity.changeId = 'changeId_' + uniqid();
        businessSysActivity.lvlInId = lvlInId;
        businessSysActivity.lvlInNo = lvlInNo;
        businessSysActivity.lvlOutId = lvlOutId;
        businessSysActivity.lvlOutNo = lvlOutNo;
        businessSysActivity.recStatus = recStatus;
        businessSysActivity.comment = comment;
        businessSysActivity.effDate = effDate;
        businessSysActivity.empId = empId;
        accessModel.sysActivity.push(businessSysActivity);
        return businessSysActivity;
    }
    userFirstNameAndLastName(userId, callback) {
        let statement = `
        SELECT firstName,lastName FROM  ${dbConfig.bucketName}
        WHERE  ${dbConfig.bucketName}.type = 'user'
        AND  ${dbConfig.bucketName}.userId = '${userId}'
        `;
        database_handlers_repository_1.default.getAllData(statement, (userModel) => {
            console.log("firstname", userModel[0].firstName, "lastname", userModel[0].lastName);
            callback(userModel);
        });
        return;
    }
}
const accessRepository = new AccessRepository();
exports.default = accessRepository;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AccessModel {
    constructor() {
        this.title = "access";
        this.empRecord = [];
        this.empAccess = [];
        this.sysActivity = [];
    }
}
exports.AccessModel = AccessModel;
class EmpRecordModel {
}
exports.EmpRecordModel = EmpRecordModel;
class EmpAccessModel {
}
exports.EmpAccessModel = EmpAccessModel;
class SysActivityModel {
}
exports.SysActivityModel = SysActivityModel;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const access_setting_services_1 = __webpack_require__(28);
class AccessSettingController {
    constructor() {
        console.log("Access Controller called");
    }
    getUserByUserName(req, res, next) {
        access_setting_services_1.default.getUserByUserName(req, (data) => {
            res.send({ data: data });
        });
    }
    getSystemActivityDataByEmpId(req, res, next) {
        access_setting_services_1.default.getSystemActivityDataByEmpId(req, (data) => {
            res.send({ data: data });
        });
    }
    createUserAccessPermision(req, res, next) {
        access_setting_services_1.default.createUserAccessPermision(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllBusinessDataByBusinessId(req, res, next) {
        access_setting_services_1.default.getAllBusinessDataByBusinessId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllAccessDataBybizIdAndBrcId(req, res, next) {
        access_setting_services_1.default.getAllAccessDataBybizIdAndBrcId(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllAccessDataBybizIdAndBrcIdAndLineId(req, res, next) {
        access_setting_services_1.default.getAllAccessDataBybizIdAndBrcIdAndLineId(req, (data) => {
            res.send({ data: data });
        });
    }
    updateEmployeeRecordStatus(req, res, next) {
        access_setting_services_1.default.updateEmployeeRecordStatus(req, (data) => {
            res.send({ data: data });
        });
    }
    updateAccessSystemActivityData(req, res, next) {
        access_setting_services_1.default.updateAccessSystemActivityData(req, (data) => {
            res.send({ data: data });
        });
    }
    updateEmpSystemActivityForCapital(req, res, next) {
        access_setting_services_1.default.updateEmpSystemActivityForCapital(req, (data) => {
            res.send({ data: data });
        });
    }
    createAgentAccessByBizId(req, res, next) {
        access_setting_services_1.default.createAgentAccessByBizId(req, (data) => {
            res.send({ data: data });
        });
    }
}
exports.AccessSettingController = AccessSettingController;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const access_setting_repository_1 = __webpack_require__(29);
class AccessSettingServices {
    constructor() {
        console.log("Access Services called");
    }
    getUserByUserName(req, callback) {
        let userName = req.params.userName;
        access_setting_repository_1.default.getUserByUserName(userName, (data) => {
            callback(data);
        });
    }
    createUserAccessPermision(req, callback) {
        let accessUserModel = req.body;
        let lvlInId = accessUserModel.lvlInId;
        let userId = accessUserModel.empId;
        let bizId = accessUserModel.bizId;
        let lvlInNo = accessUserModel.lvlInNo;
        let roleType = accessUserModel.roleType;
        let recStatus = accessUserModel.recStatus;
        access_setting_repository_1.default.createUserAccessPermision(accessUserModel, bizId, userId, lvlInNo, roleType, lvlInId, recStatus, (data) => {
            callback(data);
        });
    }
    getAllBusinessDataByBusinessId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        access_setting_repository_1.default.getAllBusinessDataByBusinessId(bizId, userId, (data) => {
            callback(data);
        });
    }
    getAllAccessDataBybizIdAndBrcId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        let brcId = req.params.brcId;
        access_setting_repository_1.default.getAllAccessDataBybizIdAndBrcId(bizId, brcId, userId, (data) => {
            callback(data);
        });
    }
    getAllAccessDataBybizIdAndBrcIdAndLineId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        let brcId = req.params.brcId;
        let lnId = req.params.lnId;
        access_setting_repository_1.default.getAllAccessDataBybizIdAndBrcIdAndLineId(bizId, brcId, lnId, userId, (data) => {
            callback(data);
        });
    }
    updateEmployeeRecordStatus(req, callback) {
        let accessUserModel = req.body;
        let userId = req.app.locals.data.subject.userId;
        let bizId = accessUserModel.bizId;
        let comment = accessUserModel.comment;
        let empStatus = accessUserModel.empStatus;
        let empId = accessUserModel.empId;
        let eDate = accessUserModel.eDate;
        access_setting_repository_1.default.updateEmployeeRecordStatus(userId, bizId, empId, comment, empStatus, eDate, (data) => {
            callback(data);
        });
    }
    updateAccessSystemActivityData(req, callback) {
        let accessUserModel = req.body;
        let userId = req.app.locals.data.subject.userId;
        let bizId = accessUserModel.bizId;
        let lvlOutId = null;
        let lvlOutNo = null;
        let lvlInId = accessUserModel.lvlInId;
        let lvlInNo = accessUserModel.lvlInNo;
        let comment = "";
        let recStatus = 1;
        let empId = accessUserModel.empId;
        let actType = accessUserModel.actType;
        let actValue = accessUserModel.actValue;
        let effDate = accessUserModel.effDate;
        let eDate = accessUserModel.eDate;
        access_setting_repository_1.default.updateAccessSystemActivityData(userId, bizId, empId, lvlOutId, lvlInId, comment, lvlOutNo, actType, actValue, recStatus, lvlInNo, eDate, effDate, (data) => {
            callback(data);
        });
    }
    updateEmpSystemActivityForCapital(req, callback) {
        let accessUserModel = req.body;
        let userId = req.app.locals.data.subject.userId;
        let bizId = accessUserModel.bizId;
        let lvlOutId = accessUserModel.lvlOutId;
        let lvlOutNo = accessUserModel.lvlOutNo;
        let lvlInNo = this.getLevelNumber(accessUserModel);
        let comment = accessUserModel.comment;
        let recStatus = 1;
        let lvlInId = accessUserModel.lvlInId;
        let empId = accessUserModel.empId;
        let actType = accessUserModel.actType;
        let actValue = accessUserModel.actValue;
        let effDate = new Date();
        let eDate = null;
        access_setting_repository_1.default.updateAccessSystemActivityData(userId, bizId, empId, lvlOutId, lvlInId, comment, lvlOutNo, actType, actValue, recStatus, lvlInNo, eDate, effDate, (data) => {
            callback(data);
        });
    }
    getSystemActivityDataByEmpId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        let empId = req.params.empId;
        let actType = req.params.actType;
        access_setting_repository_1.default.getSystemActivityPercentageDataByEmpId(bizId, empId, userId, actType, (data) => {
            callback(data);
        });
    }
    createAgentAccessByBizId(req, callback) {
        let accessUserModel = req.body;
        let userId = req.app.locals.data.subject.userId;
        let bizId = accessUserModel.bizId;
        let lvlInId = accessUserModel.lvlInId;
        let lvlInNo = accessUserModel.lvlInNo;
        let empId = accessUserModel.empId;
        let recStatus = accessUserModel.lvlInNo;
        let roleType = accessUserModel.roleType;
        let endDate = accessUserModel.eDate;
        let cDate = accessUserModel.cDate;
        access_setting_repository_1.default.createAgentAccessByBizId(userId, bizId, lvlInId, empId, recStatus, lvlInNo, roleType, endDate, cDate, (data) => {
            callback(data);
        });
    }
    getLevelNumber(data) {
        let levelNo;
        if (data.bizId) {
            levelNo = 1;
        }
        else if (data.bizId && data.brcId) {
            levelNo = 2;
        }
        else if (data.bizId && data.brcId && data.lnId) {
            levelNo = 3;
        }
        return levelNo;
    }
}
let accessSettingService = new AccessSettingServices();
exports.default = accessSettingService;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = __webpack_require__(3);
const access_repository_1 = __webpack_require__(25);
const database_handlers_repository_1 = __webpack_require__(22);
const access_business_model_1 = __webpack_require__(30);
let dbConfig = config.get('dbConfig');
class AccessSettingRepository {
    constructor() {
        console.log("Access Repository called");
    }
    getUserByUserName(userName, callback) {
        let statement = `
        SELECT userId, userName FROM ${dbConfig.bucketName} WHERE type='user' 
        AND TOSTRING(userName) LIKE '${userName}%'
        `;
        console.log('statement', statement);
        database_handlers_repository_1.default.getAllData(statement, (accessUserData) => {
            console.log("accessUserData", accessUserData);
            callback(accessUserData);
        });
    }
    getAllBusinessDataByBusinessId(bizId, userId, callback) {
        console.log("business id ", bizId);
        this.checkSuperAdminOfBusness(userId, bizId, (accessModelData) => {
            if (!accessModelData) {
                console.log("business id ", bizId);
                callback(null);
                return;
            }
            let levelNo;
            let selectedEmpAccess;
            for (let empAccess of accessModelData.empAccess) {
                let tempLevelNo = empAccess.lvlInNo;
                if (!levelNo) {
                    levelNo = tempLevelNo;
                    selectedEmpAccess = empAccess;
                }
                if (tempLevelNo < levelNo) {
                    levelNo = tempLevelNo;
                    selectedEmpAccess = empAccess;
                }
            }
            if (levelNo == 1) {
                console.log("level1");
                console.log("business id ", bizId);
                this.getAllUsersForBusinessOrBranchOrLineData(bizId, [1, 2, 3], (accessData) => {
                    this.getBusinessDetailRawDataByBizId(bizId, (dbBusinessData) => {
                        let branchId = new access_business_model_1.AccessBranchModel();
                        let lineId = new access_business_model_1.AccessLineModel();
                        let accessBusinessModel = this.createAccessBusinessModelForBusiness(dbBusinessData, branchId.brcId, lineId.lnId, accessData);
                        console.log("final output", accessBusinessModel);
                        callback(accessBusinessModel);
                    });
                });
            }
            else if (levelNo == 2) {
                console.log("level 2");
                callback(null);
            }
            else if (levelNo == 3) {
                console.log("level 3");
                callback(null);
            }
        });
    }
    getAllAccessDataBybizIdAndBrcId(bizId, brcId, userId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdminAllLevel(userId, (accessModelData) => {
            if (!accessModelData) {
                callback(null);
                return;
            }
            let levelNo;
            let selectedEmpAccess;
            for (let empAccess of accessModelData.empAccess) {
                let tempLevelNo = empAccess.lvlInNo;
                if (!levelNo) {
                    levelNo = tempLevelNo;
                    selectedEmpAccess = empAccess;
                }
                if (tempLevelNo < levelNo) {
                    levelNo = tempLevelNo;
                    selectedEmpAccess = empAccess;
                }
            }
            let lineId = new access_business_model_1.AccessLineModel();
            if (levelNo == 1) {
                this.getAllUsersForBusinessOrBranchOrLineData(bizId, [2, 3], (accessData) => {
                    this.getBusinessDetailRawDataByBizId(bizId, (dbBusinessData) => {
                        let accessBusinessModel = this.createAccessBusinessModelForBusiness(dbBusinessData, brcId, lineId.lnId, accessData);
                        accessBusinessModel.businessUserModel = [];
                        callback(accessBusinessModel);
                    });
                });
            }
            else if (levelNo == 2) {
                this.getAllUsersForBusinessOrBranchOrLineData(bizId, [2, 3], (accessData) => {
                    this.getBusinessDetailRawDataByBizId(bizId, (dbBusinessData) => {
                        let accessBusinessModel = this.createAccessBusinessModelForBusiness(dbBusinessData, brcId, lineId.lnId, accessData);
                        accessBusinessModel.businessUserModel = [];
                        callback(accessBusinessModel);
                    });
                });
            }
            else if (levelNo == 3) {
                callback(null);
            }
        });
    }
    getAllAccessDataBybizIdAndBrcIdAndLineId(bizId, brcId, lnId, userId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdminAllLevel(userId, (accessModelData) => {
            console.log("verifiedEmpAccessList is ", JSON.stringify(accessModelData));
            if (!accessModelData) {
                callback(null);
                return;
            }
            let levelNo;
            let selectedEmpAccess;
            for (let empAccess of accessModelData.empAccess) {
                let tempLevelNo = empAccess.lvlInNo;
                if (!levelNo) {
                    levelNo = tempLevelNo;
                    selectedEmpAccess = empAccess;
                }
                if (tempLevelNo < levelNo) {
                    levelNo = tempLevelNo;
                    selectedEmpAccess = empAccess;
                }
            }
            if (levelNo == 1) {
                this.getAllUsersForBusinessOrBranchOrLineData(bizId, [2, 3], (accessData) => {
                    this.getBusinessDetailRawDataByBizId(bizId, (dbBusinessData) => {
                        let accessBusinessModel = this.createAccessBusinessModelForBusiness(dbBusinessData, brcId, lnId, accessData);
                        accessBusinessModel.businessUserModel = [];
                        accessBusinessModel.businessBranch[0].branchUserModel = [];
                        console.log("line level 1 access business model", accessBusinessModel);
                        callback(accessBusinessModel);
                    });
                });
            }
            else if (levelNo == 2) {
                this.getAllUsersForBusinessOrBranchOrLineData(bizId, [2, 3], (accessData) => {
                    this.getBusinessDetailRawDataByBizId(bizId, (dbBusinessData) => {
                        let accessBusinessModel = this.createAccessBusinessModelForBusiness(dbBusinessData, brcId, lnId, accessData);
                        accessBusinessModel.businessUserModel = [];
                        accessBusinessModel.businessBranch[0].branchUserModel = [];
                        callback(accessBusinessModel);
                    });
                });
            }
            else if (levelNo == 3) {
                this.getAllUsersForBusinessOrBranchOrLineData(bizId, [2, 3], (accessData) => {
                    this.getBusinessDetailRawDataByBizId(bizId, (dbBusinessData) => {
                        let accessBusinessModel = this.createAccessBusinessModelForBusiness(dbBusinessData, brcId, lnId, accessData);
                        accessBusinessModel.businessUserModel = [];
                        accessBusinessModel.businessBranch[0].branchUserModel = [];
                        callback(accessBusinessModel);
                    });
                });
            }
        });
    }
    getAllUsersForBusinessOrBranchOrLineData(bizId, lvlNo, callback) {
        this.superAdminEmpAccess(bizId, lvlNo, (accessData) => {
            if (accessData) {
                console.log("access data ", accessData);
                callback(accessData);
            }
            else {
                console.log("access data is null ", accessData);
                callback(null);
            }
        });
    }
    createAccessBusinessModelForBusiness(dbBusinessData, brcId, lnId, accessData) {
        let accessBusinessModel = new access_business_model_1.AccessBusinessModel();
        accessBusinessModel.bizId = dbBusinessData.bizId;
        accessBusinessModel.businessName = dbBusinessData.name;
        accessBusinessModel.businessUserModel = this.createBusinessUserData(accessData, dbBusinessData.bizId);
        accessBusinessModel.businessBranch = this.createBusinessBranchListData(dbBusinessData, brcId, lnId, accessData);
        return accessBusinessModel;
    }
    createBusinessBranchListData(dbBusinessData, brcId, lnId, accessData) {
        if (!dbBusinessData.branch || dbBusinessData.branch.length == 0) {
            return [];
        }
        let accessBranchModelList = [];
        for (let branchModel of dbBusinessData.branch) {
            let accessBranchModel = new access_business_model_1.AccessBranchModel();
            if (branchModel.brcId == brcId || !brcId) {
                accessBranchModel.bizId = dbBusinessData.bizId;
                accessBranchModel.brcId = branchModel.brcId;
                accessBranchModel.lvlInNo = 2;
                accessBranchModel.branchName = branchModel.name;
                accessBranchModel.branchUserModel = this.createUserDataForBranch(branchModel.brcId, accessData);
                accessBranchModel.accessLineModel = this.createBusinessLineListData(branchModel, dbBusinessData, lnId, accessData);
                accessBranchModelList.push(accessBranchModel);
            }
        }
        return accessBranchModelList;
    }
    createBusinessLineListData(branchModel, dbBusinessData, lnId, accessData) {
        if (!dbBusinessData.line || dbBusinessData.line.length == 0) {
            return [];
        }
        let accessLineModelList = [];
        for (let lineModel of dbBusinessData.line) {
            if (lineModel.brcId != branchModel.brcId) {
                continue;
            }
            let accessLineModel = new access_business_model_1.AccessLineModel();
            if (lineModel.lnId == lnId || !lnId) {
                accessLineModel.bizId = dbBusinessData.bizId;
                accessLineModel.brcId = branchModel.brcId;
                accessLineModel.lvlInNo = 3;
                accessLineModel.lnId = lineModel.lnId;
                accessLineModel.lineName = lineModel.name;
                accessLineModel.lineUserModel = this.createUserDataForLine(lineModel.lnId, accessData);
                accessLineModelList.push(accessLineModel);
            }
        }
        return accessLineModelList;
    }
    createBusinessUserData(accessData, bizId) {
        let accessUserModelList = [];
        for (let empAccessData of accessData.empAccess) {
            if (empAccessData.lvlInId != bizId && empAccessData.lvlInNo != 1) {
                continue;
            }
            let accessUserModel = new access_business_model_1.AccessUserModel();
            accessUserModel.roleType = empAccessData.roleType;
            accessUserModel.eDate = empAccessData.endDate;
            accessUserModel.sDate = empAccessData.effDate;
            accessUserModel.empId = empAccessData.empId;
            for (let empRecordData of accessData.empRecord) {
                if (accessUserModel.empId === empRecordData.empId) {
                    accessUserModel.firstName = empRecordData.firstName;
                    accessUserModel.lastName = empRecordData.lastName;
                }
            }
            for (let empSystemActivityData of accessData.sysActivity) {
                if (accessUserModel.empId == empSystemActivityData.empId && empSystemActivityData.lvlInId == bizId && empSystemActivityData.lvlInNo == 1) {
                    accessUserModel.changeId = empSystemActivityData.changeId;
                    accessUserModel.actValue = empSystemActivityData.actValue;
                    accessUserModel.lvlInNo = empSystemActivityData.lvlInNo;
                    accessUserModel.lvlInId = empSystemActivityData.lvlInId;
                    accessUserModel.actType = empSystemActivityData.actType;
                }
            }
            console.log('final output', accessUserModel);
            accessUserModelList.push(accessUserModel);
        }
        return accessUserModelList;
    }
    createUserDataForBranch(brcId, accessData) {
        let accessUserModelList = [];
        for (let empAccessData of accessData.empAccess) {
            if (empAccessData.lvlInId != brcId && empAccessData.lvlInNo != 2) {
                continue;
            }
            let accessUserModel = new access_business_model_1.AccessUserModel();
            if (!brcId || empAccessData.lvlInId == brcId) {
                accessUserModel.roleType = empAccessData.roleType;
                accessUserModel.empId = empAccessData.empId;
                accessUserModel.eDate = empAccessData.endDate;
                accessUserModel.sDate = empAccessData.effDate;
                for (let empRecordData of accessData.empRecord) {
                    if (accessUserModel.empId === empRecordData.empId) {
                        accessUserModel.firstName = empRecordData.firstName;
                        accessUserModel.lastName = empRecordData.lastName;
                    }
                }
                for (let empSystemActivityData of accessData.sysActivity) {
                    if (accessUserModel.empId == empSystemActivityData.empId && empSystemActivityData.lvlInId == brcId && empSystemActivityData.lvlInNo == 2) {
                        accessUserModel.changeId = empSystemActivityData.changeId;
                        accessUserModel.actValue = empSystemActivityData.actValue;
                        accessUserModel.lvlInNo = empSystemActivityData.lvlInNo;
                        accessUserModel.lvlInId = empSystemActivityData.lvlInId;
                        accessUserModel.actType = empSystemActivityData.actType;
                    }
                }
                accessUserModelList.push(accessUserModel);
            }
        }
        return accessUserModelList;
    }
    createUserDataForLine(lnId, accessData) {
        let accessUserModelList = [];
        for (let empAccessData of accessData.empAccess) {
            if (!lnId || empAccessData.lvlInId == lnId) {
                if (empAccessData.lvlInId != lnId && empAccessData.lvlInNo != 3) {
                    continue;
                }
                let accessUserModel = new access_business_model_1.AccessUserModel();
                accessUserModel.roleType = empAccessData.roleType;
                accessUserModel.empId = empAccessData.empId;
                accessUserModel.eDate = empAccessData.endDate;
                accessUserModel.sDate = empAccessData.effDate;
                for (let empRecordData of accessData.empRecord) {
                    if (accessUserModel.empId === empRecordData.empId) {
                        accessUserModel.firstName = empRecordData.firstName;
                        accessUserModel.lastName = empRecordData.lastName;
                    }
                }
                for (let empSystemActivityData of accessData.sysActivity) {
                    if (accessUserModel.empId == empSystemActivityData.empId && empSystemActivityData.lvlInId == lnId && empSystemActivityData.lvlInNo == 3) {
                        accessUserModel.changeId = empSystemActivityData.changeId;
                        accessUserModel.actValue = empSystemActivityData.actValue;
                        accessUserModel.lvlInNo = empSystemActivityData.lvlInNo;
                        accessUserModel.lvlInId = empSystemActivityData.lvlInId;
                        accessUserModel.actType = empSystemActivityData.actType;
                    }
                }
                accessUserModelList.push(accessUserModel);
            }
        }
        return accessUserModelList;
    }
    createUserAccessPermision(userAccessPermission, bizId, userId, lvlInNo, roleType, lvlInId, recStatus, callback) {
        let accessModel = access_repository_1.default.createAcccessDataModel(userId, bizId, lvlInId, userId, "", 0, 0, recStatus, lvlInNo, roleType, null);
        access_repository_1.default.getRawAccessDataByBizId(bizId, (accessData) => {
            access_repository_1.default.userFirstNameAndLastName(userId, (userinfoModel) => {
                console.log(" before firstname", userinfoModel[0].firstName, "before lastname", userinfoModel[0].lastName);
                for (let empinfo of accessModel.empRecord) {
                    if (empinfo.empId == userId) {
                        console.log("empinfo.empId", empinfo.empId, "::", userId);
                        empinfo.firstName = userinfoModel[0].firstName;
                        empinfo.lastName = userinfoModel[0].lastName;
                        console.log("after firstname", empinfo.firstName, ":: after lastname", empinfo.lastName);
                    }
                }
                accessData.empAccess.push(accessModel.empAccess[0]);
                accessData.empRecord.push(accessModel.empRecord[0]);
                accessData.sysActivity.push(accessModel.sysActivity[0]);
                database_handlers_repository_1.default.updateData(accessData.accessId, accessData, (newAccessModel) => {
                    callback([]);
                });
            });
        });
    }
    updateEmployeeRecordStatus(userId, bizId, empId, comment, empStatus, eDate, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdminAllLevel(userId, (accessModelData) => {
            console.log("access date of user", accessModelData);
            if (!accessModelData) {
                callback(null);
                return;
            }
            let levelNo;
            let selectedEmpAccess;
            for (let empAccess of accessModelData.empAccess) {
                let tempLevelNo = empAccess.lvlInNo;
                if (!levelNo) {
                    levelNo = tempLevelNo;
                    selectedEmpAccess = empAccess;
                }
                if (tempLevelNo < levelNo) {
                    levelNo = tempLevelNo;
                    selectedEmpAccess = empAccess;
                }
            }
            if (levelNo == 1) {
                access_repository_1.default.updateEmpRecordAccessData(userId, bizId, empId, comment, empStatus, eDate, (accessModel) => {
                    console.log("updated access Model level 1", accessModel);
                    callback(accessModel);
                });
            }
            else if (levelNo == 2) {
                console.log("updated access Model level 2");
                callback(null);
            }
            else if (levelNo == 3) {
                console.log("updated access Model level 3");
                callback(null);
            }
        });
    }
    createAgentAccessByBizId(userId, bizId, lvlInId, empId, recStatus, lvlInNo, roleType, endDate, cDate, callback) {
        console.log("business id in access setting page", bizId);
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdminAllLevel(userId, (accessModelData) => {
            access_repository_1.default.createAgentAccessByBizId(userId, bizId, lvlInId, empId, recStatus, lvlInNo, roleType, endDate, cDate, (accessModel) => {
                console.log("emp access Model ", accessModel);
                callback(accessModel);
            });
        });
    }
    updateAccessSystemActivityData(userId, bizId, empId, lvlOutId, lvlInId, comment, lvlOutNo, actType, actValue, recStatus, lvlInNo, eDate, effDate, callback) {
        console.log("at the start updateAccessSystemActivityData accessdata bizId is", bizId);
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdminAllLevel(userId, (accessModelData) => {
            console.log("employee Access", accessModelData);
            if (!accessModelData) {
                callback(null);
                return;
            }
            let levelNo;
            let selectedEmpAccess;
            for (let empAccess of accessModelData.empAccess) {
                let tempLevelNo = empAccess.lvlInNo;
                if (!levelNo) {
                    levelNo = tempLevelNo;
                    selectedEmpAccess = empAccess;
                }
                if (tempLevelNo < levelNo) {
                    levelNo = tempLevelNo;
                    selectedEmpAccess = empAccess;
                }
            }
            if (levelNo == 1) {
                console.log("updateAccessSystemActivityData accessdata bizId is", bizId);
                access_repository_1.default.updateAccessSystemActivityData(bizId, userId, lvlInId, empId, lvlOutId, comment, lvlOutNo, actType, actValue, recStatus, lvlInNo, eDate, effDate, (accessModel) => {
                    console.log("updated access Model level 1", accessModel);
                    callback(accessModel);
                });
            }
            else if (levelNo == 2) {
                console.log("updated access Model level 2");
                console.log("updateAccessSystemActivityData accessdata bizId is", bizId);
                access_repository_1.default.updateAccessSystemActivityData(bizId, userId, lvlInId, empId, lvlOutId, comment, lvlOutNo, actType, actValue, recStatus, lvlInNo, eDate, effDate, (accessModel) => {
                    console.log("updated access Model level 1", accessModel);
                    callback(accessModel);
                });
            }
            else if (levelNo == 3) {
                console.log("updated access Model level 3");
                console.log("updateAccessSystemActivityData accessdata bizId is", bizId);
                access_repository_1.default.updateAccessSystemActivityData(bizId, userId, lvlInId, empId, lvlOutId, comment, lvlOutNo, actType, actValue, recStatus, lvlInNo, eDate, effDate, (accessModel) => {
                    console.log("updated access Model level 1", accessModel);
                    callback(accessModel);
                });
            }
        });
    }
    getSystemActivityPercentageDataByEmpId(bizId, empId, userId, actType, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdminAllLevel(userId, (accessModelData) => {
            if (!accessModelData) {
                callback(null);
            }
            this.getSystemPercentageByBizIdAndEmpId(bizId, empId, actType, (accessUserModel) => {
                callback(accessUserModel);
            });
        });
    }
    createNewAgent(bizId, userId, callback) {
    }
    getSystemPercentageByBizIdAndEmpId(bizId, empId, actType, callback) {
        let systemAccessUserModelList = [];
        let customAccessUserModel;
        this.getSystemActivityRawData(bizId, empId, actType, (accessData) => {
            for (let sysActivityData of accessData.sysActivity) {
                customAccessUserModel = new access_business_model_1.AccessUserModel();
                if (sysActivityData.actType == 1) {
                    console.log("percentages");
                    customAccessUserModel.sDate = sysActivityData.cDate;
                    customAccessUserModel.eDate = sysActivityData.eDate;
                    customAccessUserModel.effDate = sysActivityData.effDate;
                    customAccessUserModel.comment = sysActivityData.comment;
                    customAccessUserModel.lvlInId = sysActivityData.lvlInId;
                    customAccessUserModel.lvlInNo = sysActivityData.lvlInNo;
                    customAccessUserModel.lvlOutId = sysActivityData.lvlOutId;
                    customAccessUserModel.actValue = sysActivityData.actValue;
                    customAccessUserModel.recStatus = sysActivityData.recStatus;
                }
                else {
                    customAccessUserModel.sDate = sysActivityData.cDate;
                    customAccessUserModel.eDate = sysActivityData.eDate;
                    customAccessUserModel.effDate = sysActivityData.effDate;
                    customAccessUserModel.comment = sysActivityData.comment;
                    customAccessUserModel.lvlInId = sysActivityData.lvlInId;
                    customAccessUserModel.lvlInNo = sysActivityData.lvlInNo;
                    customAccessUserModel.lvlOutId = sysActivityData.lvlOutId;
                    customAccessUserModel.actValue = sysActivityData.actValue;
                    customAccessUserModel.recStatus = sysActivityData.recStatus;
                }
                systemAccessUserModelList.push(customAccessUserModel);
            }
            callback(systemAccessUserModelList);
        });
        return;
    }
    superAdminEmpAccess(bizId, lvlInNo, callback) {
        let statement = `
        SELECT
        ARRAY child FOR child IN sysActivity
        WHEN child.lvlInNo in [${lvlInNo}] AND child.recStatus = 1 AND child.actType = 1 END AS sysActivity,
        ARRAY child1 FOR child1 IN empAccess
        WHEN child1.lvlInNo in [${lvlInNo}] AND child1.recStatus = 1 END AS empAccess,
        ARRAY child2 FOR child2 IN empRecord WHEN child2.empStatus = 0 END AS empRecord
        FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.bizId='${bizId}' AND
        ANY child in ${dbConfig.bucketName}.sysActivity SATISFIES child.lvlInNo in [${lvlInNo}] AND child.recStatus = 1 
        AND child.actType = 1 END AND ANY child1 in ${dbConfig.bucketName}.empAccess 
        SATISFIES child1.lvlInNo in [${lvlInNo}] AND child1.recStatus = 1  END AND ANY child2 in ${dbConfig.bucketName}.empRecord 
        SATISFIES child2.empStatus = 0 END
            `;
        database_handlers_repository_1.default.getAllData(statement, (accessDataList) => {
            if (accessDataList && accessDataList[0]) {
                let newaccessDataList = accessDataList[0];
                console.log("accessDataList", newaccessDataList);
                callback(newaccessDataList);
            }
            else {
            }
        });
    }
    getSystemActivityRawData(bizId, empId, actType, callback) {
        let statement = ` 
        SELECT ARRAY child FOR child IN sysActivity
        WHEN child.empId = '${empId}'and child.actType in [${actType}] END AS sysActivity
        FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.bizId='${bizId}' AND ANY child in ${dbConfig.bucketName}.sysActivity 
        SATISFIES child.empId = '${empId}' AND child.actType in [${actType}] END
        `;
        console.log("Statement of getSystemActivityRawData", statement);
        database_handlers_repository_1.default.getAllData(statement, (accessModel) => {
            if (accessModel && accessModel[0]) {
                let newaccessDataList = accessModel[0];
                console.log("system accessDataList", newaccessDataList);
                callback(newaccessDataList);
            }
        });
    }
    getBusinessDetailRawDataByBizId(bizId, callback) {
        console.log("business id", bizId);
        let businessStatement = `
        SELECT bizId, name, branch, line FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.title = 'business'
        AND ${dbConfig.bucketName}.bizId = '${bizId}'
        `;
        database_handlers_repository_1.default.getAllData(businessStatement, (businessData) => {
            callback(businessData[0]);
        });
    }
    checkSuperAdminOfBusness(userId, bizId, callback) {
        let statement = `
        SELECT
        ARRAY child FOR child IN empAccess
        WHEN child.empId='${userId}' AND child.recStatus=1 AND child.roleType IN [2,3]
        END AS empAccess FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.bizId='${bizId}' AND 
        ANY child in ${dbConfig.bucketName}.empAccess SATISFIES child.empId='${userId}' 
        AND child.recStatus=1 AND child.roleType IN [2,3]  END
    `;
        database_handlers_repository_1.default.getAllData(statement, (accessDataList) => {
            let accessData = accessDataList[0];
            if (accessDataList && accessDataList.length > 0)
                callback(accessDataList[0]);
            else
                callback(null);
        });
        return;
    }
}
let accessSettingRepository = new AccessSettingRepository();
exports.default = accessSettingRepository;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AccessBusinessModel {
}
exports.AccessBusinessModel = AccessBusinessModel;
class AccessUserModel {
}
exports.AccessUserModel = AccessUserModel;
class AccessBranchModel {
    constructor() {
        this.accessLineModel = [];
        this.branchUserModel = [];
    }
}
exports.AccessBranchModel = AccessBranchModel;
class AccessLineModel {
    constructor() {
        this.lineUserModel = [];
    }
}
exports.AccessLineModel = AccessLineModel;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(1);
const access_setting_controller_1 = __webpack_require__(27);
const Router = express.Router();
const accessController = new access_setting_controller_1.AccessSettingController();
Router.get("/fetch/business/object/by/businessId/:bizId", accessController.getAllBusinessDataByBusinessId);
Router.get("/fetch/business/object/by/businessId/:bizId/branchId/:brcId", accessController.getAllAccessDataBybizIdAndBrcId);
Router.get("/fetch/business/object/by/businessId/:bizId/branchId/:brcId/lineId/:lnId", accessController.getAllAccessDataBybizIdAndBrcIdAndLineId);
Router.get('/fetch/user/detail/by/user/name/:userName', accessController.getUserByUserName);
Router.get('/fetch/users/system/activity/by/busiessId/:bizId/and/actType/:actType/and/empId/:empId', accessController.getSystemActivityDataByEmpId);
Router.post('/create/user/permisssion/by/user/name', accessController.createUserAccessPermision);
Router.post('/update/exist/emp/record/status/by/businessId', accessController.updateEmployeeRecordStatus);
Router.post('/create/new/system/activity/by/businessId', accessController.updateAccessSystemActivityData);
Router.post('/create/new/system/activity/capital/by/businessId', accessController.updateEmpSystemActivityForCapital);
Router.post('/create/new/agent/by/businessId', accessController.createAgentAccessByBizId);
exports.default = Router;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(1);
const loan_controller_1 = __webpack_require__(33);
const Router = express.Router();
const loanController = new loan_controller_1.LoanController();
Router.get("/fetch/daily/loan/by/agentId", loanController.getAllDailyLoanByAgentId);
Router.get("/fetch/weekly/loan/by/agentId", loanController.getAllWeeklyLoanByAgentId);
Router.get("/fetch/monthly/loan/by/agentId", loanController.getAllMonthlyLoanByAgentId);
Router.get("/fetch/gold/loan/by/agentId", loanController.getAllGoldLoanByAgentId);
Router.get("/fetch/agent/list/by/bizId/:bizId/lineId/:lnId", loanController.getAllAgentsByLineId);
Router.post("/create/new/daily/loan/by/userId", loanController.createNewDailyloan);
Router.post("/create/new/weekly/loan/by/userId", loanController.createNewWeeklyloan);
Router.post("/create/new/monthly/loan/by/userId", loanController.createNewMonthlyloan);
Router.post("/create/new/gold/loan/by/userId", loanController.createNewGoldloan);
exports.default = Router;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const loan_service_1 = __webpack_require__(34);
class LoanController {
    constructor() {
        console.log("Loan  Controller");
    }
    getAllDailyLoanByAgentId(req, res, next) {
        loan_service_1.default.getAllDailyLoanByAgentId(req, (data) => {
            res.send({ data: data });
        });
    }
    createNewDailyloan(req, res, next) {
        loan_service_1.default.createNewDailyloan(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllWeeklyLoanByAgentId(req, res, next) {
        loan_service_1.default.getAllWeeklyLoanByAgentId(req, (data) => {
            res.send({ data: data });
        });
    }
    createNewWeeklyloan(req, res, next) {
        loan_service_1.default.createNewWeeklyloan(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllMonthlyLoanByAgentId(req, res, next) {
        loan_service_1.default.getAllMonthlyLoanByAgentId(req, (data) => {
            res.send({ data: data });
        });
    }
    createNewMonthlyloan(req, res, next) {
        loan_service_1.default.createNewMonthlyloan(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllGoldLoanByAgentId(req, res, next) {
        loan_service_1.default.getAllGoldLoanByAgentId(req, (data) => {
            res.send({ data: data });
        });
    }
    createNewGoldloan(req, res, next) {
        loan_service_1.default.createNewGoldloan(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllAgentsByLineId(req, res, next) {
        loan_service_1.default.getAllAgentsByLineId(req, (data) => {
            res.send({ data: data });
        });
    }
}
exports.LoanController = LoanController;
const loanController = new LoanController();
exports.default = loanController;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const loan_repository_1 = __webpack_require__(35);
class LoanService {
    constructor() {
        console.log("Loan service is created");
    }
    getAllDailyLoanByAgentId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let loType = 'D';
        loan_repository_1.default.getAllDailyLoanByAgentId(userId, loType, (data) => {
            callback(data);
        });
    }
    createNewDailyloan(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        loan_repository_1.default.createNewDailyloan(req.body, userId, (data) => {
            callback(data);
        });
    }
    getAllWeeklyLoanByAgentId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let title = 'W';
        loan_repository_1.default.getAllWeeklyLoanByAgentId(userId, title, (data) => {
            callback(data);
        });
    }
    createNewWeeklyloan(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        loan_repository_1.default.createNewWeeklyloan(req.body, userId, (data) => {
            callback(data);
        });
    }
    getAllMonthlyLoanByAgentId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let loType = 'M';
        loan_repository_1.default.getAllMonthlyLoanByAgentId(userId, loType, (data) => {
            callback(data);
        });
    }
    createNewMonthlyloan(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        loan_repository_1.default.createNewMonthlyloan(req.body, userId, (data) => {
            callback(data);
        });
    }
    getAllGoldLoanByAgentId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let loType = 'G';
        loan_repository_1.default.getAllGoldLoanByAgentId(userId, loType, (data) => {
            callback(data);
        });
    }
    createNewGoldloan(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        loan_repository_1.default.createNewGoldloan(userId, req.body, (data) => {
            callback(data);
        });
    }
    getAllAgentsByLineId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        let bizId = req.params.bizId;
        let lnId = req.params.lnId;
        loan_repository_1.default.getAgentDetails(bizId, lnId, userId, (data) => {
            callback(data);
        });
    }
}
exports.LoanService = LoanService;
const loanService = new LoanService();
exports.default = loanService;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = __webpack_require__(3);
const database_handlers_repository_1 = __webpack_require__(22);
const loan_utill_service_1 = __webpack_require__(36);
const access_repository_1 = __webpack_require__(25);
let dbConfig = config.get('dbConfig');
class LoanRepository {
    constructor() {
        console.log("Loan Repository is created");
        let test = loan_utill_service_1.default.loanCalculationsByFormulas(10, 10000, null, 2, 9000, 1000, "monthlyLoan");
        console.log("testloan formula is :", test);
    }
    createNewDailyloan(loanModel, userId, callback) {
        let dailyLoan = loan_utill_service_1.default.createDailyLoanModel(userId, loanModel);
        dailyLoan.suretyUsers[0] = loan_utill_service_1.default.createUserSurityModel(dailyLoan.suretyUsers[0]);
        dailyLoan.attachments[0] = loan_utill_service_1.default.createUserAttachmentsModel(dailyLoan.attachments[0]);
        dailyLoan.borrowers[0] = loan_utill_service_1.default.createBorrowerUserModel(dailyLoan.borrowers[0]);
        database_handlers_repository_1.default.inserData(dailyLoan.loId, dailyLoan, (newDailyLoan) => {
            console.log('newDailyLoan', newDailyLoan);
            callback(newDailyLoan);
        });
    }
    getAllDailyLoanByAgentId(userId, loType, callback) {
        this.getLoanDataByAgentId(userId, loType, (loanModel) => {
            callback(loanModel);
        });
    }
    createNewWeeklyloan(userId, loanModel, callback) {
        console.log("weeklyLoan model before assign is", loanModel);
        let weeklyLoan = loan_utill_service_1.default.createWeeklyLoanModel(userId, loanModel);
        weeklyLoan.suretyUsers[0] = loan_utill_service_1.default.createUserSurityModel(weeklyLoan.suretyUsers[0]);
        weeklyLoan.attachments[0] = loan_utill_service_1.default.createUserAttachmentsModel(weeklyLoan.attachments[0]);
        weeklyLoan.borrowers[0] = loan_utill_service_1.default.createBorrowerUserModel(weeklyLoan.borrowers[0]);
        console.log("weeklyLoan is", weeklyLoan);
        database_handlers_repository_1.default.inserData(weeklyLoan.loId, weeklyLoan, (newWeeklyLoan) => {
            console.log('weeklyLoan', newWeeklyLoan);
            callback(newWeeklyLoan);
        });
    }
    getAllWeeklyLoanByAgentId(userId, loType, callback) {
        this.getLoanDataByAgentId(userId, loType, (loanModel) => {
            callback(loanModel);
        });
    }
    createNewMonthlyloan(userId, loanModel, callback) {
        let monthlyLoan = loan_utill_service_1.default.createMonthlyLoanModel(userId, loanModel);
        monthlyLoan.suretyUsers[0] = loan_utill_service_1.default.createUserSurityModel(monthlyLoan.suretyUsers[0]);
        monthlyLoan.attachments[0] = loan_utill_service_1.default.createUserAttachmentsModel(monthlyLoan.attachments[0]);
        monthlyLoan.borrowers[0] = loan_utill_service_1.default.createBorrowerUserModel(monthlyLoan.borrowers[0]);
        console.log("monthlyLoan is", monthlyLoan);
        database_handlers_repository_1.default.inserData(monthlyLoan.loId, monthlyLoan, (newMonthlyLoan) => {
            console.log('newMonthlyLoan', newMonthlyLoan);
            callback(newMonthlyLoan);
        });
    }
    getAllMonthlyLoanByAgentId(userId, loType, callback) {
        this.getLoanDataByAgentId(userId, loType, (loanModel) => {
            callback(loanModel);
        });
    }
    createNewGoldloan(userId, loanModel, callback) {
        console.log("gold Loan before is", loanModel);
        let goldLoan = loan_utill_service_1.default.createGoldLoanModel(userId, loanModel);
        goldLoan.suretyUsers[0] = loan_utill_service_1.default.createUserSurityModel(goldLoan.suretyUsers[0]);
        goldLoan.attachments[0] = loan_utill_service_1.default.createUserAttachmentsModel(goldLoan.attachments[0]);
        goldLoan.borrowers[0] = loan_utill_service_1.default.createBorrowerUserModel(goldLoan.borrowers[0]);
        console.log("goldLoan is", goldLoan);
        database_handlers_repository_1.default.inserData(goldLoan.loId, goldLoan, (newGoldLoan) => {
            console.log('newGoldLoan', newGoldLoan);
            callback(newGoldLoan);
        });
    }
    getAllGoldLoanByAgentId(userId, loType, callback) {
        this.getLoanDataByAgentId(userId, loType, (loanModel) => {
            callback(loanModel);
        });
    }
    getAllAgentsByLineId(bizId, lnId, userId, callback) {
        let statement = `SELECT
            ARRAY child FOR child IN empAccess WHEN child.lvlInId='${lnId}' AND child.lvlInNo=4 END
            AS empAccess FROM ${dbConfig.bucketName} WHERE ${dbConfig.bucketName}.bizId='${bizId}' AND 
            ANY child IN ${dbConfig.bucketName}.empAccess SATISFIES child.lvlInId='${lnId}' 
            AND child.lvlInNo=4 END
            `;
        database_handlers_repository_1.default.getAllData(statement, (accessModel) => {
            if (accessModel && accessModel[0]) {
                let newaccessDataList = accessModel[0];
                console.log("system accessDataList", newaccessDataList);
                callback(newaccessDataList);
            }
        });
    }
    getAgentDetails(bizId, lnId, userId, callback) {
        access_repository_1.default.getAllEmpAccessByBizIdAndUserIdAndSuperAdminAllLevel(userId, (accessModelData) => {
            this.getAllAgentsByLineId(bizId, lnId, userId, (accessModel) => {
                for (let items of accessModel.empAccess) {
                    let userIds = items.empId;
                    this.getuserDetail(userIds, (userModel) => {
                        console.log("userinformation is:", userModel);
                        callback(userModel);
                    });
                }
            });
        });
    }
    getuserDetail(userId, callback) {
        let statement = `SELECT pic, panNo, userId, gender, firstName, lastName, userName,
        maritalStatus, adhaarNo, DOB, DOM, phones, emails FROM ${dbConfig.bucketName} 
        WHERE ${dbConfig.bucketName}.type = 'user' AND ${dbConfig.bucketName}.userId = '${userId}'
        `;
        database_handlers_repository_1.default.getAllData(statement, (userModel) => {
            callback(userModel);
        });
    }
    getLoanDataByAgentId(userId, loType, callback) {
        let statement = `
        SELECT bizId,brcId,lnId,agentId,loId,notfId,loFwdId,loPrevId,loReqI,loType,loStatus,loInterest,notfStatus,
        loIssueBy,loIssCmt,loIssApvBy,loIssApvCmt,loIssDenyBy,loIssDenyCmt,loCloseApvBy,loCloseCmt,loCloseBy,
        loProcessFee,loFwdAmt,loPrevAmt,loDownPayment,loPaymentAmt,loInstAmt,loDueAmt,loAmount,loIssueDate,
        loIssApvDate,loDueDate,loDisDate,loIssDenyDate,loCloseApvDate,loCloseDate,noOfGrams,ratePerGram,loNoOfDays,
        loDaysPaid,loDaysLeft,loNoOfWeeks,loWeeksPaid,loWeeksLeft,loNoOfMonths,loMonthsPaid,loMonthsLeft,
        loCustRatin,loBizRatin,cDate,cBy,borrowers,suretyUsers,payHistory,attachments,settlement FROM ${dbConfig.bucketName} 
        WHERE ${dbConfig.bucketName}.loType = '${loType}' AND ${dbConfig.bucketName}.agentId = '${userId}'
        `;
        database_handlers_repository_1.default.getAllData(statement, (loanModel) => {
            callback(loanModel);
        });
    }
}
exports.LoanRepository = LoanRepository;
const loanRepository = new LoanRepository();
exports.default = loanRepository;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const loan_model_1 = __webpack_require__(37);
var uniqid = __webpack_require__(14);
class LoanUtillServices {
    constructor() {
        console.log("Loan Utill service is created");
    }
    createDailyLoanModel(userId, loanModel) {
        let dailyLoan = new loan_model_1.LoanModel();
        dailyLoan = this.createLoansForAllTypesByUserId(userId, loanModel);
        dailyLoan.loNoOfDays = loanModel.loNoOfDays;
        dailyLoan.loDaysPaid = loanModel.loDaysPaid;
        dailyLoan.loDaysLeft = loanModel.loDaysLeft;
        return dailyLoan;
    }
    createWeeklyLoanModel(userId, loanModel) {
        let weeklyLoan = new loan_model_1.LoanModel();
        weeklyLoan = this.createLoansForAllTypesByUserId(userId, loanModel);
        weeklyLoan.loNoOfWeeks = loanModel.loNoOfWeeks;
        weeklyLoan.loWeeksPaid = loanModel.loWeeksPaid;
        weeklyLoan.loWeeksLeft = loanModel.loWeeksLeft;
        return weeklyLoan;
    }
    createMonthlyLoanModel(userId, loanModel) {
        let monthlyLoan = new loan_model_1.LoanModel();
        monthlyLoan = this.createLoansForAllTypesByUserId(userId, loanModel);
        monthlyLoan.loNoOfMonths = loanModel.loNoOfMonths;
        monthlyLoan.loMonthsPaid = loanModel.loMonthsPaid;
        monthlyLoan.loMonthsLeft = loanModel.loMonthsLeft;
        return monthlyLoan;
    }
    createGoldLoanModel(userId, loanModel) {
        let goldLoan = new loan_model_1.LoanModel();
        goldLoan = this.createLoansForAllTypesByUserId(userId, loanModel);
        goldLoan.noOfGrams = loanModel.noOfGrams;
        goldLoan.loNoOfMonths = loanModel.loNoOfMonths;
        goldLoan.ratePerGram = loanModel.ratePerGram;
        return goldLoan;
    }
    createUserSurityModel(userSurety) {
        let newUserSurety = new loan_model_1.SuretyUsersModel();
        newUserSurety.userId = userSurety.userId;
        newUserSurety.relation = userSurety.relation;
        return newUserSurety;
    }
    createBorrowerUserModel(borrowersUser) {
        let newBorrowerModel = new loan_model_1.BorrowersModel();
        newBorrowerModel.userId = borrowersUser.userId;
        newBorrowerModel.uType = borrowersUser.uType;
        return newBorrowerModel;
    }
    createUserAttachmentsModel(userAttachments) {
        let newUserAttachments = new loan_model_1.AttachmentsModel();
        newUserAttachments.src = null;
        newUserAttachments.proof = userAttachments.proof;
        return newUserAttachments;
    }
    createLoansForAllTypesByUserId(userId, loanModel) {
        let newLoanModel = new loan_model_1.LoanModel();
        newLoanModel.title = "loan";
        newLoanModel.loId = "loId_" + uniqid();
        newLoanModel.bizId = loanModel.bizId;
        newLoanModel.brcId = loanModel.brcId;
        newLoanModel.lnId = loanModel.lnId;
        newLoanModel.agentId = userId;
        newLoanModel.loInterest = loanModel.loInterest;
        newLoanModel.loDownPayment = loanModel.loDownPayment;
        newLoanModel.loInstAmt = loanModel.loInstAmt;
        newLoanModel.notfId = loanModel.notfId;
        newLoanModel.notfStatus = "P";
        newLoanModel.loType = loanModel.loType;
        newLoanModel.loAmount = loanModel.loAmount;
        newLoanModel.loPaymentAmt = loanModel.loPaymentAmt;
        newLoanModel.loFwdAmt = loanModel.loFwdAmt;
        newLoanModel.loPrevAmt = loanModel.loPrevAmt;
        newLoanModel.loStatus = 3;
        newLoanModel.loIssueBy = loanModel.loIssueBy;
        newLoanModel.loIssCmt = loanModel.loIssCmt;
        newLoanModel.loIssueDate = loanModel.loIssueDate;
        newLoanModel.loIssApvBy = loanModel.loIssApvBy;
        newLoanModel.loIssApvCmt = loanModel.loIssApvCmt;
        newLoanModel.loIssApvDate = loanModel.loIssApvDate;
        newLoanModel.loIssDenyBy = loanModel.loIssDenyBy;
        newLoanModel.loIssDenyCmt = loanModel.loIssDenyCmt;
        newLoanModel.loIssDenyDate = loanModel.loIssDenyDate;
        newLoanModel.loCloseBy = loanModel.loCloseBy;
        newLoanModel.loCloseApvBy = loanModel.loCloseApvBy;
        newLoanModel.loCloseCmt = loanModel.loCloseCmt;
        newLoanModel.loCloseApvDate = loanModel.loCloseApvDate;
        newLoanModel.loCloseDate = loanModel.loCloseDate;
        newLoanModel.loDueAmt = loanModel.loDueAmt;
        newLoanModel.loDueDate = loanModel.loDueDate;
        newLoanModel.loDisDate = loanModel.loDisDate;
        newLoanModel.suretyUsers = loanModel.suretyUsers;
        newLoanModel.attachments = loanModel.attachments;
        newLoanModel.borrowers = loanModel.borrowers;
        newLoanModel.cDate = new Date();
        newLoanModel.cBy = userId;
        return newLoanModel;
    }
    loanCalculationsByFormulas(loInterest, loAmount, loInstAmt, requestedTime, loPaymentAmt, loDownPayment, loType) {
        if (loType === "dailyLoan" || loType === "weeklyLoan" || loType === "monthlyLoan") {
            if (requestedTime == null) {
                let noRequestedTime = ((loAmount * (1 + loInterest * 0.01)) - loDownPayment) / loInstAmt;
                console.log("loan requested time null 9.5 ");
                return noRequestedTime;
            }
            else if (loPaymentAmt == null) {
                let loanPaymentAmt = (loAmount - ((loInstAmt * requestedTime) * loInterest) / 100);
                console.log("loan payment amount null  4900 ");
                return loanPaymentAmt;
            }
            else if (loInstAmt == null) {
                let loanInstAmt = ((loAmount * (1 + loInterest * 0.01)) - loDownPayment) / requestedTime;
                console.log("loan installment amount null 95 ");
                return loanInstAmt;
            }
        }
        else if (loType === "goldLoan") {
            let loanInstAmt = (loAmount * loInterest) / 100;
            console.log("loan gold amount null 500");
            return loanInstAmt;
        }
        else {
            console.log("loan calculation is not possible please enter right amounts");
            return null;
        }
    }
}
exports.LoanUtillServices = LoanUtillServices;
let loanUtillService = new LoanUtillServices();
exports.default = loanUtillService;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LoanModel {
}
exports.LoanModel = LoanModel;
class BorrowersModel {
}
exports.BorrowersModel = BorrowersModel;
class SuretyUsersModel {
}
exports.SuretyUsersModel = SuretyUsersModel;
class PayHistoryModel {
}
exports.PayHistoryModel = PayHistoryModel;
class AttachmentsModel {
}
exports.AttachmentsModel = AttachmentsModel;
class SettlementModel {
}
exports.SettlementModel = SettlementModel;
class PaidHistoryModel {
}
exports.PaidHistoryModel = PaidHistoryModel;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(1);
const coupon_controller_1 = __webpack_require__(39);
const Router = express.Router();
let newCouponController = new coupon_controller_1.CouponController();
Router.post("/create/coupon/by/userId", newCouponController.createNewCoupon);
Router.get("/fetch/all/coupon/by/userId", newCouponController.getAllCouponByUserId);
exports.default = Router;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const coupon_services_1 = __webpack_require__(40);
class CouponController {
    constructor() {
        console.log("Coupon Controller called");
    }
    createNewCoupon(req, res, next) {
        console.log("create coupon controller");
        coupon_services_1.default.createNewCoupon(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllCouponByUserId(req, res, next) {
        coupon_services_1.default.getAllCouponByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
}
exports.CouponController = CouponController;
let couponControler = new CouponController();
exports.default = couponControler;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const coupon_repository_1 = __webpack_require__(41);
class CouponServices {
    constructor() {
        console.log("Coupon Services called");
    }
    createNewCoupon(req, callback) {
        console.log("create coupon service");
        let userId = req.app.locals.data.subject.userId;
        console.log("create coupon userId", userId);
        console.log("create coupon req body", req.body);
        coupon_repository_1.default.createNewCoupon(userId, req.body, (data) => {
            callback(data);
        });
    }
    getAllCouponByUserId(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        coupon_repository_1.default.getAllCouponDataByUserId(userId, (data) => {
            callback(data);
        });
    }
}
let couponService = new CouponServices();
exports.default = couponService;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = __webpack_require__(3);
const coupan_model_1 = __webpack_require__(42);
const database_handlers_repository_1 = __webpack_require__(22);
var uniqid = __webpack_require__(14);
let dbConfig = config.get('dbConfig');
class CouponRepository {
    constructor() {
        console.log("Coupon Repository is created");
    }
    createNewCoupon(userId, couponModel, callback) {
        console.log("create coupon repo");
        let newCoupon = this.creatNewCouponByUserId(userId, couponModel);
        newCoupon.amount[0] = this.creatNewCouponAmountAndPercentage(newCoupon.amount[0]);
        database_handlers_repository_1.default.inserData(newCoupon.cpId, newCoupon, (newCouponModel) => {
            console.log('newCouponModel', newCouponModel);
            callback(newCouponModel);
        });
    }
    getAllCouponDataByUserId(userId, callback) {
        let statement = `
        SELECT amount,name,cType,description,discType,expDate,status,cBy,cDate FROM ${dbConfig.bucketName} 
        WHERE ${dbConfig.bucketName}.title = 'coupon'
        `;
        database_handlers_repository_1.default.getAllData(statement, (couponModel) => {
            callback(couponModel);
        });
    }
    creatNewCouponByUserId(userId, couponModel) {
        console.log("creation methord coupon repo");
        let couponModelNew = new coupan_model_1.CouponModel();
        couponModelNew.cpId = "cpId_" + uniqid();
        couponModelNew.title = "coupon";
        couponModelNew.name = couponModel.name;
        couponModelNew.cType = couponModel.cType;
        couponModelNew.description = couponModel.description;
        couponModelNew.discType = couponModel.discType;
        couponModelNew.status = true;
        couponModelNew.amount = couponModel.amount;
        couponModelNew.expDate = couponModel.expDate;
        couponModelNew.cDate = new Date();
        couponModelNew.cBy = userId;
        return couponModelNew;
    }
    creatNewCouponAmountAndPercentage(amountModel) {
        console.log("create coupon amount repo");
        let newCouponAmountModel = new coupan_model_1.AmountModel();
        newCouponAmountModel.amtType = amountModel.amtType;
        newCouponAmountModel.amtValue = amountModel.amtValue;
        return amountModel;
    }
}
exports.CouponRepository = CouponRepository;
const couponRepository = new CouponRepository();
exports.default = couponRepository;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CouponModel {
    constructor() {
        this.amount = [new AmountModel()];
    }
}
exports.CouponModel = CouponModel;
class AmountModel {
}
exports.AmountModel = AmountModel;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(1);
const price_controller_1 = __webpack_require__(44);
const Router = express.Router();
let newPriceController = new price_controller_1.PriceController();
Router.post("/create/price/by/userId", newPriceController.createNewPrice);
Router.get("/fetch/all/price/by/userId", newPriceController.getAllPriceByUserId);
exports.default = Router;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const price_service_1 = __webpack_require__(45);
class PriceController {
    constructor() {
        console.log("price Controller called");
    }
    createNewPrice(req, res, next) {
        console.log("create price controller");
        price_service_1.default.createNewPriceModel(req, (data) => {
            res.send({ data: data });
        });
    }
    getAllPriceByUserId(req, res, next) {
        price_service_1.default.getAllPriceByUserId(req, (data) => {
            res.send({ data: data });
        });
    }
}
exports.PriceController = PriceController;
let priceControler = new PriceController();
exports.default = priceControler;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const price_repository_1 = __webpack_require__(46);
class PriceServices {
    constructor() {
        console.log("price Services called");
    }
    createNewPriceModel(req, callback) {
        let userId = req.app.locals.data.subject.userId;
        price_repository_1.default.createNewPriceModel(userId, req.body, (data) => {
            callback(data);
        });
    }
    getAllPriceByUserId(req, callback) {
    }
}
let priceService = new PriceServices();
exports.default = priceService;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = __webpack_require__(3);
const price_model_1 = __webpack_require__(47);
const database_handlers_repository_1 = __webpack_require__(22);
var uniqid = __webpack_require__(14);
let dbConfig = config.get('dbConfig');
class PriceRepository {
    constructor() {
        console.log("Coupon Repository is created");
    }
    createNewPriceModel(userId, priceModel, callback) {
        let newPrice = this.creatnewPriceByUserId(userId, priceModel);
        newPrice.lcType[0] = this.creatNewLicensedPrice(newPrice.lcType[0]);
        database_handlers_repository_1.default.inserData(newPrice.priceId, newPrice, (newPriceModel) => {
            console.log('newPriceModel', newPriceModel);
            callback(newPriceModel);
        });
    }
    getAllPriceByUserId(userId, callback) {
        let statement = `
        SELECT priceId,bizPrice,brcPrice,lnPrice,fromDate,toDate,status,cDate,cBy,lcType 
        FROM ${dbConfig.bucketName}WHERE ${dbConfig.bucketName}.title = 'price'
        `;
        database_handlers_repository_1.default.getAllData(statement, (priceModel) => {
            callback(priceModel);
        });
    }
    creatnewPriceByUserId(userId, priceModel) {
        let licensedPriceModel = new price_model_1.PriceModel();
        licensedPriceModel.title = "price";
        licensedPriceModel.priceId = "priceId_" + uniqid();
        licensedPriceModel.bizPrice = priceModel.bizPrice;
        licensedPriceModel.brcPrice = priceModel.brcPrice;
        licensedPriceModel.lnPrice = priceModel.lnPrice;
        licensedPriceModel.status = priceModel.status;
        licensedPriceModel.toDate = priceModel.toDate;
        licensedPriceModel.fromDate = priceModel.fromDate;
        licensedPriceModel.cDate = priceModel.cDate;
        licensedPriceModel.cBy = priceModel.cBy;
        licensedPriceModel.lcType = priceModel.lcType;
        return licensedPriceModel;
    }
    creatNewLicensedPrice(lcType) {
        let licensedTypeModel = new price_model_1.LcTypeModel();
        licensedTypeModel.lcOpt = lcType.lcOpt;
        licensedTypeModel.maxbrcCnt = lcType.maxbrcCnt;
        licensedTypeModel.maxbreCnt = lcType.maxbreCnt;
        licensedTypeModel.maxlnCnt = lcType.maxlnCnt;
        licensedTypeModel.maxlneCnt = lcType.maxlneCnt;
        licensedTypeModel.maxNoOfMonths = lcType.maxNoOfMonths;
        licensedTypeModel.refPct = lcType.refPct;
        licensedTypeModel.vPct = lcType.vPct;
        return licensedTypeModel;
    }
}
exports.PriceRepository = PriceRepository;
const priceRepository = new PriceRepository();
exports.default = priceRepository;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PriceModel {
}
exports.PriceModel = PriceModel;
class LcTypeModel {
}
exports.LcTypeModel = LcTypeModel;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __webpack_require__(16);
const app_constant_1 = __webpack_require__(17);
const loginWithUserName = "/rest/api/user/login/with/username";
const registerUser = "/rest/api/user/register/user";
const loginWithPhoneNo = "/rest/api/user/login/with/phone/number";
exports.middlewareVerifyURL = (req, res, next) => {
    if (req.url === loginWithUserName || req.url === loginWithPhoneNo || req.url === registerUser) {
        return next();
    }
    else if (req.url.indexOf("/verify/") > -1) {
        return next();
    }
    else {
        let token = req.headers['authorization'];
        jwt.verify(token, app_constant_1.APP_CONSTANTS.SKEY, (error, decode) => {
            if (error) {
                throw error;
            }
            else {
                req.app.locals.data = decode;
                next();
            }
        });
    }
};
exports.default = exports.middlewareVerifyURL;


/***/ })
/******/ ]);