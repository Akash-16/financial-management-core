const mongoose = require("mongoose");

const { SpendingType } = require("../utilities/enums/TransactionType.enum");
const { StatusType } = require("../utilities/enums/TransactionStatus.enum");

const Spendings = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reason: {
      type: String,
      required: true,
      default: null,
    },
    date: {
      type: String,
      required: true,
      default: null,
    },
    type: {
      type: String,
      required: true,
      enum: Object.values(SpendingType),
      default: SpendingType.Spent,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(StatusType),
      default: null,
    },
    amount: {
      type: String,
      required: true,
      default: null,
    },
    isDeleted: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Spendings", Spendings);
