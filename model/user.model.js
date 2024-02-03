import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  roles: [String],
  idProfile:{
    info: String,
    work:String,
    ortherInfo:String
  } 
});

const UserModel = mongoose.model("user", UserSchema);

export { UserModel };