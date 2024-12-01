const express = require('express');
const router = express.Router();
const Post = require('../models/post-model');
const { createPost, updatePost , deletePost ,getPostById ,getPosts } = require('../controllers/post-controllers');

// Create a new post
router.post('/create', createPost);

//update post
router.post('/update/:id' , updatePost);

// Get all posts
router.get('/posts', getPosts);

// Get post by id
router.get('/post/:id', getPostById);

// Delete post by id
router.delete('/delete/:id', deletePost);

module.exports = router;
