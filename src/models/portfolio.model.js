import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    img: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    codeLink: {
      type: String,
      required: [true, 'Code repository link is required'],
    },
    liveLink: {
      type: String,
      required: [true, 'Live project link is required'],
    },
    technologies: {
      type: [String],
      default: [],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;