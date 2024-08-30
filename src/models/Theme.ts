import mongoose from 'mongoose';

const ThemeSchema = new mongoose.Schema({
  clientId: { type: String, required: true },
  theme: { type: Object, required: true },
});

export default mongoose.models.Theme || mongoose.model('Theme', ThemeSchema);
