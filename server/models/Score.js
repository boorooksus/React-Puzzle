const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    // score 등록한 사람
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    level: {
      type: String,
    },
    score: {
      type: Number,
    },
    // timestamps: true면 자동으로 등록시간 업데이트
  },
  { timestamps: true }
);

const Score = mongoose.model("Score", productSchema);

module.exports = { Score };
