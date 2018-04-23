/* eslint-disable import/no-mutable-exports */

import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import slug from 'slug';
import uploader from '../../services/cloudinary';
import Amenitie from './amenitie.model';

function getImageHotel(image) {
  if (!image) return 'https://www.loottis.com/wp-content/uploads/2014/10/default-img.gif';
  return image;
}

function getPrice(price) {
  return `${price} ${this.currency}`;
}

const HotelSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required!'],
    minlength: [3, 'Name must be longer!'],
    unique: true,
  },
  stars: {
    type: Number,
    default: 1,
    min: [1, 'Min number stars is 1'],
    max: [5, 'Max number stars is 5']
  },
  price: {
    type: Number,
    default: 1,
    get: getPrice,
    min: [1, 'Min price hotel stars is 1']
  },
  image: {
    type: String,
    get: getImageHotel
  },
  currency: {
    type: String,
    default: 'ARG'
  },
  slug: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  amenities: [{
    type: Schema.Types.ObjectId,
    ref: 'Amenitie'
  }]
}, { timestamps: true });

const fillable = [ 'name', 'image', 'price', 'amenities', 'stars', 'currency' ];


/**
 * Slugify the text on validation hook
 */

HotelSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

/**
 * Slugify the text on validation hook
*/

HotelSchema.pre('validate', function(next) {
  this.slugify();

  next();
});

HotelSchema.query.list = function({ sort = { createdAt: '-1' }, limit = 10, page = 1 } = {}) {
  return this.model.list({conditions: this._conditions, sort, limit, page });
}

HotelSchema.statics = {
  createHotel(params) {
    const hotel = this.massAsignamentParams(params);
    return hotel.save();
  },
  list({ conditions = {}, sort = { createdAt: '-1' }, limit = 5, page = 1 } = {}) {
    return this.find(conditions)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit)
      .populate('amenities')
  }
};

HotelSchema.methods = {
  async uploadImage(path) {
    const url = await uploader(path);
    if (url) this.update({ image: url });
  },
  massAsignamentParams(params) {
    const newParams = {};
    fillable.forEach(attr => {
      if (Object.prototype.hasOwnProperty.call(params, attr)) {
        newParams[attr] = params[attr];
      }
    });

    return Object.assign(this, newParams);
  },
  update(params) {
    const hotel = this.massAsignamentParams(params);
    return hotel.save();
  },
  /**
   * Slug the title and add this to the slug prop
   */
  slugify() {
    this.slug = slug(this.name);
  },
  /**
   * Parse the post in format we want to send.
   *
   * @public
   * @returns {Post} Post Object
   */
  toJSON() {
    return {
      _id: this._id,
      name: this.name,
      stars: this.stars,
      price: this.price,
      slug: this.slug,
      image: this.image,
      amenities: this.amenities
    };
  },
};

let Hotel;
try {
  Hotel = mongoose.model('Hotel');
} catch (e) {
  Hotel = mongoose.model('Hotel', HotelSchema);
}

export default Hotel;
