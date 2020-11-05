import { Document } from 'mongoose';

export interface Hobby extends Document {
  _id: string;
  name: string;
  description: string;
  icon?: string;
  users: string[];
  events: any;
}
