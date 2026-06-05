import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    idea: {
      type: String,
      required: true,
    },

    analysis: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Analysis = mongoose.model(
  "Analysis",
  analysisSchema
);

export default Analysis;