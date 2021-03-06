const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: [true, 'You need to specify your fucking bloody name!!! Peaky blinder'] },
  password: { type: String, required: [true, 'Sorry, you have to insert a password'] }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
