import mongoose from "mongoose"

interface IUser {
  id: string
  email: string
}

const userSchema = new mongoose.Schema<IUser>({
  id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }
}, {
  timestamps: true,
});

export const User = mongoose.model<IUser>('User', userSchema);
