const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const Post = require('../models/Post');

module.exports = {

  async index(req, res) {
    const post = await Post.find().sort('-createAt');

    return res.json(post);
  },

  async store(req, res) {
    const {
      author, pleace, description, hashtags,
    } = req.body;
    const { filename: image } = req.file;

    const [name] = image.split('.');
    const fileName = `${name}.jpg`;

    // Redimensionar a imagem para o mobile
    await sharp(req.file.path).resize(500).jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, 'resized', fileName));

    // Deleta a imagem original
    fs.unlinkSync(req.file.path);

    const post = await Post.create({
      author, pleace, description, hashtags, image: fileName,
    });

    req.io.emit('post', post);

    return res.json(post);
  },
};
