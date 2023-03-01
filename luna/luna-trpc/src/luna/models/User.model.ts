import mongoose from "mongoose"

export interface User {
  id: string
}

const userSchema = new mongoose.Schema<User>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true,
});

export const User = mongoose.model<User>('User', userSchema);
