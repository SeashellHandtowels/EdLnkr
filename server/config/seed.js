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
Plan.find({}).remove(function(){
  Plan.create({
    title: 'Learn Javascript',
    synopsis: 'join the world of programming',
    user: 'test@test.com',
    rating: '4',
    category: 'Math'
  }, {
    title: 'Learn To Fly',
    synopsis: 'flying is such an amazing expernce.',
    user: 'test@test.com',
    rating: '5',
    category: 'other'
  },{
    title: 'Carl Seigan rules',
    synopsis: 'Need I say more?',
    user: 'test@test.com',
    rating: '5',
    category: 'The Universe'
  },{
    title: 'Learn to Cook',
    synopsis: 'Be the life of the party by cooking.',
    user: 'admin@admin.com',
    rating: '3',
    category: 'Food'
  },{
    title: 'Klingon',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'Languages'
  },{
    title: 'Much Music Making',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'Music'
  },{
    title: 'Mathematics by Socrates',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'Math'
  },{
    title: 'Cooking Emus',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'Food'
  },{
    title: 'How to touch the stars',
    synopsis: 'Test User',
    user: 'test@test.com',
    rating: 'test',
    category: 'The Universe'
  },{
    title: 'Awesome Plan',
    synopsis: 'a plan for world domination',
    user: 'admin@admin.com',
    rating: 'admin',
    category: 'life'
  }, function() {
      console.log('finished populating plans');
    }
  );

});