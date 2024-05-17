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
  applyForQuest,
  userCompletedQuest,
  addQuestReward,
  getUserByWallet,
} from '../Controllers/backControllers.js';

const router = express.Router();

router.get('/get-posts', getPosts);
router.get('/get-users', getUsers);
router.get('/get-quests', getQuests);
router.get('/get-user/:wallet', getUserByWallet);
router.post('/create-post', createPost);
router.post('/create-user', createUser);
router.post('/create-quest', createQuest);
router.get('/apply-for-quest/:userId/:questId', applyForQuest);
router.get('/complete-quest/:userId/:questId', userCompletedQuest);
router.get('/add-quest-reward/:userId/:questId/:reward', addQuestReward);
router.get('/get-post/:id', getPost);
router.put('/update/:id', updatePost);
router.patch('/patch-post/:id', patchPost);
router.patch('/add-nft/:userId', addUserNft);
router.get('/get-user-posts/:userId', getUserPosts);
router.delete('/delete/:id', deletePost);

export default router;