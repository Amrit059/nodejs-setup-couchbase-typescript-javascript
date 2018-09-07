import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import * as config from 'config';
import indexRoutes from './routes'
import * as cors from 'cors';
import middleware1 from './middlewares/token-middleware'


const app = express();
const HOST_CONFIG: any = config.get("hostConfig");
const PORT_NO = HOST_CONFIG.port;

app.set('port', PORT_NO);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

console.log("new server")
app.use(middleware1);
app.use(indexRoutes)

app.get("/", (request: Request, response: Response, next: NextFunction) => {
  console.log(" Server is working perfectly");
  response.send("Server is working perfectly")
})


app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
    app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});

module.exports = app;