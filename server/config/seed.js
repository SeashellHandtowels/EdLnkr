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
    date: new Date(),
    title: 'Learn Javascript',
    synopsis: 'join the world of programming',
    user: 'test@test.com',
    rating: '4',
    category: 'Math'
  }, {
    date: new Date(),
    title: 'Learn To Fly',
    synopsis: 'flying is such an amazing expernce.',
    user: 'test@test.com',
    rating: '5',
    category: 'other'
  },{
    date: new Date(),
    title: 'Carl Seigan rules',
    synopsis: 'Need I say more?',
    user: 'test@test.com',
    rating: '5',
    category: 'The Universe'
  },{
    date: new Date(),
    title: 'Learn to Cook',
    synopsis: 'Be the life of the party by cooking.',
    user: 'admin@admin.com',
    rating: '3',
    category: 'Food'
  },{
    date: new Date(),
    title: 'Klingon',
    synopsis: 'nerds',
    user: 'test@test.com',
    rating: '2',
    category: 'Languages'
  },{
    date: new Date(),
    title: 'Much Music Making',
    synopsis: 'More bass in this place',
    user: 'test@test.com',
    rating: '4',
    category: 'Music'
  },{
    date: new Date(),
    title: 'Mathematics by Socrates',
    synopsis: 'because 1 + 1 =  wisdom',
    user: 'test@test.com',
    rating: '1',
    category: 'Math'
  },{
    date: new Date(),
    title: 'Cooking Emus',
    synopsis: 'Extinction tastes divine',
    user: 'test@test.com',
    rating: '4',
    category: 'Food'
  },{
    date: new Date(),
    title: 'How to touch the stars',
    synopsis: 'Reach for greatness and incinerate yourself',
    user: 'test@test.com',
    rating: '3',
    category: 'The Universe'
  },{
    date: new Date(),
    title: 'Awesome Plan',
    synopsis: 'a plan for world domination',
    user: 'admin@admin.com',
    rating: '2',
    category: 'life'
  }, function() {
      console.log('finished populating plans');
    }
  );
});