import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    industry: {
      type: String,
      default: "",
      trim: true,
    },

    stage: {
      type: String,
      enum: [
        "idea",
        "validation",
        "mvp",
        "launch",
        "growth",
      ],
      default: "idea",
    },
  },
  {
    timestamps: true,
  }
);

const Idea = mongoose.model("Idea", ideaSchema);

export default Idea;