import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    interest: [String],
    goal: [String]
});

const ortherInfoModel = mongoose.model("ortherInfo", UserSchema);

export { ortherInfoModel };