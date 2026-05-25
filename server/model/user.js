const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    clgName: { type: String, required: true, lowercase: true, trim: true },
    course: { type: String, required: true },
    gradYear: { type: Number, required: true },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isProfileComplete: { type: Boolean, default: false },

    headline: { type: String },
    about: { type: String },
    skills: [{ type: String }],

    links: {
      github: { type: String },
      linkedin: { type: String },
      twitter: { type: String },
    },

    achievements: { type: String },
    profile: { type: String, default: "" },
    language: [{ type: String }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "userProfile" }],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("userProfile", userSchema);
