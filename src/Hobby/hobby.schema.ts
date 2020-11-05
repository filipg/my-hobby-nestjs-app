import * as mongoose from 'mongoose';

export const HobbySchema = new mongoose.Schema({
  name: String,
  description: String,
  icon: String,
  users: Object,
  events: Object,
})
