const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/apı/posts');
app.use('/api/posts', posts);

const kullanici = require('./routes/apı/kullanici');
app.use('/api/kullanici', kullanici);

const kayit = require('./routes/apı/kayit');
app.use('/api/kayit', kayit);


const port = process.env.PORT || 5000; // portu gerekirse 8080 yapablirsin 5000 sorun yaratırsa belki aynı olmaları cözer
app.listen(port, () => console.log('Server started on port ' + port));