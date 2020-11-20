import { Document } from 'mongoose';

// export interface Profile extends Document {
//   readonly _id: string;
//   readonly description: string;
//   readonly phone: string;
//   readonly email: string;
// }

export interface Profile extends Document {
  _id: string;
  description: string;
  phone: string;
  email: string;
  hobbies: string[];
}
