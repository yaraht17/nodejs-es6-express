import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  id: Schema.Types.ObjectId,
  fbId: String,
  fbAccessToken: String,
  name: String,
  avatar: String,
  email: String,
  acessToken: {
    type: String,
    unique: true,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('user', userSchema);
