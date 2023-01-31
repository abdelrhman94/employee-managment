import mongoose from 'mongoose';

const MONGO_URI =
  'mongodb+srv://test:test@nextjs-crud.jsqcfhs.mongodb.net/?retryWrites=true&w=majority';

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log('Database Connected');
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;