import express from 'express';

import {
  createPost,
  createUser,
  getPost,
  getPosts,
  getUsers,
  updatePost,
  deletePost,
  getUserPosts,
  patchPost
} from '../Controllers/backControllers.js';

const router = express.Router();

router.get('/get-posts', getPosts);
router.get('/get-users', getUsers);
router.post('/create-post', createPost);
router.post('/create-user', createUser);
router.get('/get-post/:id', getPost);
router.put('/update/:id', updatePost);
router.patch('/patch-post/:id', patchPost);
router.get('/get-user-posts/:userId', getUserPosts);
router.delete('/delete/:id', deletePost);

export default router;