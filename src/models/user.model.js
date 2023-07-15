const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
      default: null,
    },
    lastname: {
      type: String,
      required: true,
      default: null,
    },
    email: {
      type: String,
      required: true,
      default: null,
    },
    gender: {
      type: String,
      required: true,
      default: null,
    },
    dateOfBirth: {
      type: String,
      required: true,
      default: null,
    },
    password: {
      type: String,
      required: true,
      default: null,
    },
    isDeleted: {
      type: String,
      default: false,
    },
    roles: {
      type: String,
      default: "owner",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
