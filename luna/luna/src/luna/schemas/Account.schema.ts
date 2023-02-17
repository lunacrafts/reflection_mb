import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Account = mongoose.model('Account', accountSchema);
