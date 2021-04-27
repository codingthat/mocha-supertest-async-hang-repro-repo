import express from 'express';
import * as http from 'http';
const app: express.Application = express();

// without async on the next line, test fails fine with stack trace
app.get('/', async (req: express.Request, res: express.Response) => {
    req.body.idontexist;
    res.status(200).send('Server running');
});
const server: http.Server = http.createServer(app);
export default server.listen(3000, () => {
  console.log('Server ready')
})
