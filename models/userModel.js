import mongoose from 'mongoose'; // Importing mongoose using ES module syntax

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    photo: { type: String },
});

// Export the model as the default export
export default mongoose.model('User', userSchema);
