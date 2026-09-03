const mongoose = require("mongoose");

const userConnectionSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userProfile",
      required: true,
    },

    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userProfile",
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "accepted"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

userConnectionSchema.index(
  {
    sender: 1,
    receiver: 1,
  },
  {
    unique: true,
  },
);

module.exports = mongoose.model("UserConnection", userConnectionSchema);
