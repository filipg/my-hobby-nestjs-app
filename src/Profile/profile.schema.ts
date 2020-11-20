import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true
  },
  description: String,
  phone: String,
  email: String,
  hobbies: Object,
});
