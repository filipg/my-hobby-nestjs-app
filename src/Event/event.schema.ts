import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  name: String,
  description: String,
  userCreator: String,
  date: String,
  time: String,
  location: String,
  hobbyId: String,
  participants: Object
})
