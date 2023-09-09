import mongoose from "mongoose";

const CONNECTION_URL = "mongodb://mani147:money714@stack-overflow-clone.whvti7b.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery',true);
const connectDB = async () => {
  mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT,() => {console.log(`server running on port ${PORT}`)}))
  .catch((err) => console.log(err.message))
};
export default connectDB;
