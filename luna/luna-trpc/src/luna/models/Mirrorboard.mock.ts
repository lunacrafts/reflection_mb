import mongoose from "mongoose"
import {
  AccessibleModel,
  accessibleFieldsPlugin,
  accessibleRecordsPlugin,
} from '@casl/mongoose';

export interface Mirrorboard {
  id: string
  title: string

  isPublic: boolean
  isPromoted: boolean
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
  },
  isPromoted: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true
});

mirrorboardSchema.plugin(accessibleFieldsPlugin);
mirrorboardSchema.plugin(accessibleRecordsPlugin);

export const Mirrorboard = mongoose.model<
  Mirrorboard, AccessibleModel<Mirrorboard>
>('Mirrorboard', mirrorboardSchema);
