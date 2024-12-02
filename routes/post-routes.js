const express = require('express');
const router = express.Router();
const Post = require('../models/post-model');
const { createPost, updatePost , deletePost ,getPostById ,getPosts ,getPostBySender , getAllPostComments} = require('../controllers/post-controllers');

// Create a new post
router.post('/create', createPost);

//update post
router.put('/update/:id' , updatePost);

// Get all posts
router.get('/posts', getPosts);

// Get post by id
router.get('/post/:id', getPostById);

// Delete post by id
router.delete('/delete/:id', deletePost);

// Get post by sender
router.get('/sender/:sender', getPostBySender);

// Get all comments of a post
router.get('/comments/:id', getAllPostComments);

module.exports = router;
