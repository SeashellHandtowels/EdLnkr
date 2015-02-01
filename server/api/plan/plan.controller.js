/**
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Plan = require('./plan.model');
var util = require('util');

// Get list of plans
exports.index = function(req, res) {
  Plan.find(function (err, plans) {
    if(err) {
      return handleError(res, err);
    }
    return res.json(200, plans);
  });
};

// Get a single plan
exports.show = function(req, res) {
  Plan.findById(req.params.id, function (err, plan) {
    if(err) {
      return handleError(res, err);
    }
    if(!plan) {
      return res.send(404);
    }
    return res.json(plan);
  });
};

// Creates a new plan in the DB.
exports.create = function(req, res) {
  Plan.create(req.body, function(err, plan) {
    if(err) {
      return handleError(res, err);
    }
    return res.json(201, plan);
  });
};

// Updates an existing plan in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Plan.findById(req.params.id, function (err, plan) {
    if (err) {
      return handleError(res, err);
    }
    if(!plan) {
      return res.send(404);
    }
    //var temp = req.query.data.split('[')[1];
    var paramLinks = {};
    var tempLinks = req.body.links || paramLinks;
    var updated = _.merge(plan, req.body);
    updated.save(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.json(200, plan);
    });
  });
};

// Deletes a plan from the DB.
exports.destroy = function(req, res) {
  Plan.findById(req.params.id, function (err, plan) {
    if(err) {
      return handleError(res, err);
    }
    if(!plan) {
      return res.send(404);
    }
    plan.remove(function(err) {
      if(err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
