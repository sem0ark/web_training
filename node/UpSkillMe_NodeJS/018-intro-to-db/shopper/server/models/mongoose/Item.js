const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  sku: { type: Number, required: true, index: { unique: true } },
  name: { type: String, required: true },
  price: { type: Number, required: true },
}, {
  timestamps: true,
  // automatically create two additional fields:
  // - the time of creation
  // - the time of the last update
});

module.exports = mongoose.model('Item', ItemSchema);
