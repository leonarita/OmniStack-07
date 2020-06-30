const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

  author: String,
  place: String,
  description: String,
  hashtags: String,
  image: String,

  likes: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  },
});

PostSchema.virtual('url').get(function() {
  return `http://192.168.15.12:3333/files/${encodeURIComponent(this.image)}`
})

module.exports = mongoose.model('Post', PostSchema);
