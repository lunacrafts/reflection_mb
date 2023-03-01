import mongoose from "mongoose"

interface Mirrorboard {
  id: string
  title: string
  isPublic: boolean
}

const mirrorboardSchema = new mongoose.Schema<Mirrorboard>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
    required: true,
  }
});

export const Mirrorboard = mongoose.model<Mirrorboard>('Mirrorboard', mirrorboardSchema);