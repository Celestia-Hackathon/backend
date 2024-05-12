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
    nfts: NFT[];
    badges: Badge[];
}

export type NFT = {
    nftId: string;
    nftImg: string;
    name: string;
    address: string;
    rarity: string;
}

export type Badge = {
    badgeId: string;
    badgeImg: string;
    name: string;
    description: string;
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