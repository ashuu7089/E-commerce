import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    FirstName : {
        type : String,
        required : true,
        trim : true,
        min : 5,
        max : 20
    },
    LastName : {
        type : String,
        required : true,
        trim : true,
        min : 5,
        max : 20
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    userName : {
        type : String,
        required : true,
        unique : true,
        lowerCase : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    }
})
const user = mongoose.model('user', userSchema)
export default user;
