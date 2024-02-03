import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  date: String,
  birthplace: String,
  nationality:[String],
  education: String
});

const InfoUserModel = mongoose.model("infoUser", UserSchema);

export { InfoUserModel };