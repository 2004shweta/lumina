import mongoose, { Document, Schema } from 'mongoose';

export interface ISetupStep extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  action: string;
  icon: string;
  completed: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const setupStepSchema = new Schema<ISetupStep>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  action: {
    type: String,
    required: true,
    trim: true
  },
  icon: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});

// Index for efficient queries
setupStepSchema.index({ userId: 1, order: 1 });

export const SetupStep = mongoose.model<ISetupStep>('SetupStep', setupStepSchema); 