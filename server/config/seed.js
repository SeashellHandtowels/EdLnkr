/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Plan = require('../api/plan/plan.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  },
  {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function(err, user) {
      console.log('finished populating users');
      console.log(user.id);
      var plans = [];
      var userID = {};
      userID[user._id] = true;
      plans.push(
        {
          date: new Date(),
          title: 'Learn Javascript',
          synopsis: 'join the world of programming',
          user: user._id,
          rating: {
            id: userID,
            score: 4,
            num: 1
          },
          category: 'Math',
          views: {
            id: userID,
            count: 2
          }
        },
        {
          date: new Date(),
          title: 'Learn To Fly',
          synopsis: 'flying is such an amazing expernce.',
          user: user._id,
          rating: {
            id: userID,
            score: 5,
            num: 1
          },
          category: 'other',
          views: {
            id: userID,
            count: 6
          }
        },
        {
          date: new Date(),
          title: 'Carl Seigan rules',
          synopsis: 'Need I say more?',
          user: user._id,
          rating: {
            id: userID,
            score: 3,
            num: 1
          },
          category: 'The Universe',
          views: {
            id: userID,
            count: 1
          }
        },
        {
          date: new Date(),
          title: 'Learn to Cook',
          synopsis: 'Be the life of the party by cooking.',
          user: user._id,
          rating: {
            id: userID,
            score: 3.5,
            num: 1
          },
          category: 'Food',
          views: {
            id: userID,
            count: 20
          }
        },
        {
          date: new Date(),
          title: 'Klingon',
          synopsis: 'nerds',
          user: user._id,
          rating: {
            id: userID,
            score: 2.76,
            num: 1
          },
          category: 'Languages',
          views: {
            id: userID,
            count: 7
          }
        },
        {
          date: new Date(),
          title: 'Much Music Making',
          synopsis: 'More bass in this place',
          user: user._id,
          rating: {
            id: userID,
            score: 4.75,
            num: 1
          },
          category: 'Music',
          views: {
            id: userID,
            count: 12
          }
        },
        {
          date: new Date(),
          title: 'Mathematics by Socrates',
          synopsis: 'because 1 + 1 =  wisdom',
          user: user._id,
          rating: {
            id: userID,
            score: 3.56,
            num: 1
          },
          category: 'Math',
          views: {
            id: userID,
            count: 6
          }
        },
        {
          date: new Date(),
          title: 'Cooking Emus',
          synopsis: 'Extinction tastes divine',
          user: user._id,
          rating: {
            id: userID,
            score: 3.65,
            num: 1
          },
          category: 'Food',
          views: {
            id: userID,
            count: 1
          }
        },
        {
          date: new Date(),
          title: 'How to touch the stars',
          synopsis: 'Reach for greatness and incinerate yourself',
          user: user._id,
          rating: {
            id: userID,
            score: 3.65,
            num: 1
          },
          category: 'The Universe',
          views: {
            id: userID,
            count: 9
          }
        },
        {
          date: new Date(),
          title: 'Awesome Plan',
          synopsis: 'a plan for world domination',
          user: user._id,
          rating: {
            id: userID,
            score: 4.76,
            num: 1
          },
          category: 'life',
          views: {
            id: userID,
            count: 8
          }
        }
      );

      Plan.find({}).remove(function(){
        Plan.create(plans, function(err, plan) {
            console.log(err);
            console.log('finished populating plans');
          }
        );
      });

    }
  );
});



