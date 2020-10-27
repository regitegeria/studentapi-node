// mongodb connection
const mongoose = require('mongoose');
const url = 'mongodb://localhost/studentsdb';

mongoose.connect(url,
    {
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    }
);

const con = mongoose.connection;

con.on('open', () => {
    console.log('MongoDB Connected ...');
});