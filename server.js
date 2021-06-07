const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path:'./config.env'});

// Process Env
const DB = process.env.DATABASE;
const PORT = process.env.PORT;

// Connect to database
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(() => console.log('Database data connected'))
.catch(err => console.log(err));



app.listen(PORT,() => {
    console.log(`App running on port ${PORT}`);
});


