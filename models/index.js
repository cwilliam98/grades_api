import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

const gradesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  lastModified: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

gradesSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject();

  object.id = _id;

  return object;
});

const gradesModel = mongoose.model('grades', gradesSchema, 'grades');

export { db, gradesModel };
