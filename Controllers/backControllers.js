import firebase from "../firebase.js";
import Post from "../Models/Post.js";
import User from "../Models/User.js";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    serverTimestamp,
} from "firebase/firestore";

const db = getFirestore(firebase);

export const createPost = async (req, res, next) => {
    try {
        const data = req.body;

        // Add server timestamp to the data
        data.createdAt = serverTimestamp();
        
        const docRef = await addDoc(collection(db, "posts"), data);

        // Assign postId to the post
        const postId = docRef.id;
        await updateDoc(doc(db, "posts", postId), { postId });

        // Add postId to the user's postsId array
        const userId = data.userId; // Assuming userId is present in the post data
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            const updatedPostsId = [...userData.postsId, postId]; // Add new postId to the existing postsId array

            // Update the user document with the modified postsId array
            await updateDoc(userRef, { postsId: updatedPostsId });
        } else {
            // throw new Error("User not found");
            console.log("User not found");
        }

        res.status(200).send("post created successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        const docRef = await addDoc(collection(db, "users"), data);

        // assing userId to the user
        const userId = docRef.id;
        await updateDoc(doc(db, "users", userId), { userId });

        res.status(200).send("user created successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getPosts = async (req, res, next) => {
    try {
        const posts = await getDocs(collection(db, "posts"));
        const postArray = [];

        if (posts.empty) {
            res.status(400).send("No Posts found");
        } else {
            posts.forEach((doc) => {
                const post = new Post(
                    // doc.id,
                    doc.data().postId,
                    doc.data().userId,
                    doc.data().userName,
                    doc.data().avatarImg,
                    doc.data().postImg,
                    doc.data().caption,
                    doc.data().likes,
                    doc.data().comments,
                    doc.data().createdAt
                );
                postArray.push(post);
            });

            res.status(200).send(postArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getUsers = async (req, res, next) => {
    try {
        const users = await getDocs(collection(db, "users"));
        const usersArray = [];

        if (users.empty) {
            res.status(400).send("No users found");
        } else {
            users.forEach((doc) => {
                const user = new User(
                    // doc.id,
                    doc.data().userId,
                    doc.data().wallet,
                    doc.data().name,
                    doc.data().userName,
                    doc.data().followers,
                    doc.data().following,
                    doc.data().bio,
                    doc.data().avatarImg,
                    doc.data().bannerImg,
                    doc.data().postsId,
                    doc.data().nfts,
                    doc.data().badges
                );
                usersArray.push(user);
            });

            res.status(200).send(usersArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getPost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const post = doc(db, "posts", id);
        const data = await getDoc(post);
        if (data.exists()) {
            res.status(200).send(data.data());
        } else {
            res.status(404).send("post not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const updatePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const post = doc(db, "posts", id);
        await updateDoc(post, data);
        res.status(200).send("post updated successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const patchPost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const dataToUpdate = req.body;

        const postRef = doc(db, "posts", id);
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
            // Merge existing data with the updated data
            const existingData = postSnap.data();
            const updatedData = { ...existingData, ...dataToUpdate };

            // Update the post document with the updated data
            await updateDoc(postRef, updatedData);

            res.status(200).send("Post partially updated successfully");
        } else {
            res.status(404).send("Post not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getUserPosts = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const posts = await getDocs(collection(db, "posts"));
        const postArray = [];

        if (posts.empty) {
            res.status(400).send("No Posts found");
        } else {
            posts.forEach((doc) => {
                if (doc.data().userId === userId) {
                    const post = new Post(
                        doc.data().postId,
                        doc.data().userId,
                        doc.data().userName,
                        doc.data().avatarImg,
                        doc.data().postImg,
                        doc.data().caption,
                        doc.data().likes,
                        doc.data().comments,
                        doc.data().createdAt
                    );
                    postArray.push(post);
                }
            });

            res.status(200).send(postArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const deletePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        await deleteDoc(doc(db, "posts", id));
        res.status(200).send("post deleted successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};
