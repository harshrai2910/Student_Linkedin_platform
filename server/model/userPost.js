const mongoose = require("mongoose");

const userPostSchema = new mongoose.Schema(
  {
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "userProfile" },
    content: { type: String, required: true },
    postImage: { type: String, default: "" },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "userProfile" }],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("userPost", userPostSchema);
