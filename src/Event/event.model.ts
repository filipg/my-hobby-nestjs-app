import { Document } from 'mongoose';

export interface Event extends Document {
  _id: string;
  name: string;
  description: string;
  userCreator: string;
  date: string;
  time: string;
  location: string;
  hobbyId: string;
  participants: string[];
}
