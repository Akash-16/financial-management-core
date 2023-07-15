const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      default: null,
    },
    lastName: {
      type: String,
      required: true,
      default: null,
    },
    email: {
      type: String,
      required: true,
      unique: true,
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
    profilePic: {
      type: String,
      default: null,
    },
    salary: {
      type: String,
      default: null,
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

module.exports = mongoose.model("User", User);
