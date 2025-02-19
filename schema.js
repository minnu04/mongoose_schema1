const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    username: {type: String,
              required:true,
               unique:true},
    email: {type: String,
           required:true,
            unique:true},
    passwrd: {type: String,
            required:true,},
    roles: {type: [String],
           required:true,}
})
const ProfileSchema=new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    firstname:{type:String,
              required:true},
    firstname:{type:String,
              required:true},
    firstname:{type:Number,
               required:true}
})
const TrackingSchema=new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    lastlogin : {type:Date,
              required:true}
})
const UserModel = mongoose.model('User', UserSchema);
const ProfileModel = mongoose.model('Profile', ProfileSchema);
const TrackingModel = mongoose.model('Tracking', TrackingSchema);
module.exports = {UserModel,ProfileModel,TrackingModel};