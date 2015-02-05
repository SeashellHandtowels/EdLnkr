/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

var Plan = require('../api/plan/plan.model');
PLan.find({}).remove(function(){
  Plan.create({
    title: 'local',
    synopsis: 'Learn Javascript',
    user: 'test@test.com',
    rating: '4',
    category: 'test'
  }, {
    title: 'local',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'test'
  },{
    title: 'local',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'test'
  },{
    title: 'local',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'test'
  },{
    title: 'local',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'test'
  },{
    title: 'local',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'test'
  },{
    title: 'local',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'test'
  },{
    title: 'local',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'test'
  },{
    title: 'local',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'test'
  },{
    title: 'Awesome Plan',
    synopsis: 'a plan for world domination',
    user: 'admin@admin.com',
    rating: 'admin',
    category: 'life'
  },
  }, function() {
      console.log('finished populating plans');
    }
  );

});