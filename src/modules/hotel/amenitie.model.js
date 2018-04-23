/* eslint-disable import/no-mutable-exports */

import mongoose, { Schema } from 'mongoose';

function getImage(image) {
  return 'https://cdn1.iconfinder.com/data/icons/hotel-restaurant/512/8-512.png';
}

const AmenitieSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required!'],
    unique: true
  },
  image: {
    type: String,
    get: getImage
  }
}, { timestamps: true });

const fillable = [ 'name', 'image' ];

AmenitieSchema.statics = {
  createAmenitie(params) {
    const amenitie = this.massAsignamentParams(params);
    return amenitie.save();
  },
  list({ conditions = {}, sort = { createdAt: '-1' }, limit = 30, page = 1 } = {}) {
    return this.find(conditions)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit)
  }
};

AmenitieSchema.methods = {
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
    const amenitie = this.massAsignamentParams(params);
    return amenitie.save();
  },
  toJSON() {
    return {
      _id: this._id,
      name: this.name,
      image: this.image
    };
  },
};

let Amenitie;
try {
  Amenitie = mongoose.model('Amenitie');
} catch (e) {
  Amenitie = mongoose.model('Amenitie', AmenitieSchema);
}

export default Amenitie;
