import mongoose from "mongoose";

const noteBookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Required!"],
    unique: [true, "Title Already Exists!"],
  },
  desc: {
    type: String,
    required: [true, "Title is Required!"],
  },
});


export default mongoose.models.notebook ||
  mongoose.model("notebook", noteBookSchema);
