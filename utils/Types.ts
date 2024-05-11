export type User = {
    userId: string;
    wallet: string;
    name: string;
    userName: string;
    followers: string[];
    following: string[];
    bio: string;
    avatarImg: string;
    bannerImg: string;
    postsId: string[];
}

export type Post = {
    postId: string;
    userId: string;
    userName: string;
    avatarImg: string;
    postImg: string;
    caption: string;
    likes: string[];
    comments: string[];
    createdAt: string;
}