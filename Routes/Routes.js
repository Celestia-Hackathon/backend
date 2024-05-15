import express from 'express';

import {
  createPost,
  createUser,
  getPost,
  getPosts,
  getUsers,
  getQuests,
  updatePost,
  deletePost,
  getUserPosts,
  patchPost,
  addUserNft,
  createQuest,
} from '../Controllers/backControllers.js';

const router = express.Router();

router.get('/get-posts', getPosts);
router.get('/get-users', getUsers);
router.get('/get-quests', getQuests);
router.post('/create-post', createPost);
router.post('/create-user', createUser);
// router.post('/create-quest', createQuest);
router.get('/get-post/:id', getPost);
router.put('/update/:id', updatePost);
router.patch('/patch-post/:id', patchPost);
router.patch('/add-nft/:userId', addUserNft);
router.get('/get-user-posts/:userId', getUserPosts);
router.delete('/delete/:id', deletePost);

export default router;