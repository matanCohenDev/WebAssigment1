const express = require('express');
const Post = require('../models/post-model');

// Create a new post
const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.create();
        res.status(201).json("post created");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
// Update a post
const updatePost = async (req, res) => {
    try {
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatePost) {
            return res.status(404).json({error: 'Post not found'});
        }
        res.status(200).json(updatePost);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

//delete a post
const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if(!post) {
            return res.status(404).json({error: 'Post not found'});
        }
        res.status(200).json({message: 'Post deleted'});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

// Get a post by id
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            return res.status(404).json({error: 'Post not found'});
        }
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

module.exports = {createPost, updatePost , deletePost, getPosts, getPostById};