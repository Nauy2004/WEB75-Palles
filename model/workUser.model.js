import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    skills: [String],
    projects: [{
        name:String,
        content:String,
        roles:[String],
        dateStart:Date,
        dateEnd:Date,
    }],
    progress: [{
        timeStart: {type:Date, default:null},
        timeEnd: {type:Date, default:null},
        nameCompany:String,
        roles:[String]
    }]
});

const workUserModel = mongoose.model("workUser", UserSchema);

export { workUserModel };