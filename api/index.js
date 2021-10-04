const app = require('./server');
require('./database');

const port = 3800;

app.listen(port,()=>{
    console.log('server on port: ' + port);
});