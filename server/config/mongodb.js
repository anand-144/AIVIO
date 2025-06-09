import mongoosse from 'mongoose';
const connectDB =async () => {

    mongoosse.connection.on('connected' , () => {
        console.log('MongoDB connected successfully');
    })

    await mongoosse.connect(`${process.env.MONGODB_URI}/aivio`)
}

export default connectDB;