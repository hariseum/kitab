const mongoose = require('mongoose')

const allbookSchema = new mongoose.Schema({
    isbn: { type: Number },
    cover: { type: String },
    title: { type: String },
    author: { type: String },
    publish_date: { type: Date, default: Date.now },
    publisher: { type: String },
    genre: { type: String },
    rating: { type: Number },
    reviews: { type: Number },
    ori_price: { type: Number },
    dis_price: { type: Number }
})

module.exports = mongoose.model('allBook', allbookSchema)