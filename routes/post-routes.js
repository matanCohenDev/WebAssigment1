const express = require('express');
const router = express.Router();
const Post = require('../models/post-model');
const { createPost, updatePost } = require('../controllers/post-controllers');

// Create a new post
router.post('/create', createPost);

//update post
router.post('/update/:id' , updatePost);

module.exports = router;
