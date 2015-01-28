'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlanSchema = new Schema({

  modified: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  synopsis: {
    type: String,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  links: [ {url: String, description: String} ]

});

//Validations
PlanSchema.path('title').validate(function(title) {
  return !!title;
}, 'Title cannot be blank');

/**
 * Statics
 */
PlanSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

module.exports = mongoose.model('Plan', PlanSchema);
