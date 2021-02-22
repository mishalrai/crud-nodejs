const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/employeeDB';

const options = {
    useNewUrlParser: true
}

const connectCB = error =>{
    if(error) console.log(`MongoDB Connection failed ${error}`)
    else console.log('MongoDB connected successfully');
}

mongoose.connect( url, options, connectCB );

require ('./employee.modal');