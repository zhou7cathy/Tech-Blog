const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userSeedData.json');
const postData = require('./postSeedData.json');
const commentData = require('./commentSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  const posts = [];
  for (const post of postData) {
    posts.push(await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    }, {
      returning: true
    }));
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: posts[Math.floor(Math.random() * posts.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();