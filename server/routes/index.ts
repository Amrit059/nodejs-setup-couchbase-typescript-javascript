import * as express from 'express';
import userRouter from './user-routes'

const Router = express.Router();

Router.use("/rest/api/user", userRouter);

export default Router;



