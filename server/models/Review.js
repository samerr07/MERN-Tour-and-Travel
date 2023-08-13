const mongoose = require("mongoose")
const { Schema } = mongoose;

const reviewSchema = new Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "Tour",
      },
      username: {
        type: String,
        required: true,
      },
      reviewText: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        default: 0,
      },
    },
    { timestamps: true }
);

exports.Review = mongoose.model('Review', reviewSchema);