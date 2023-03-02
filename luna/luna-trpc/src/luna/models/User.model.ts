import { AccessibleRecordModel, accessibleRecordsPlugin } from "@casl/mongoose";
import mongoose from "mongoose"

export interface User {
  id: string

  isSuperAdmin: boolean
}

const userSchema = new mongoose.Schema<User>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  isSuperAdmin: Boolean,
}, {
  timestamps: true,
});

userSchema.plugin(accessibleRecordsPlugin);

export const User = mongoose.model<
  User, AccessibleRecordModel<User>
>('User', userSchema);
