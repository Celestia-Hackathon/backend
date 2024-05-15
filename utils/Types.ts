export type User = {
    userId: string;
    wallet: string;
    tokens: number;
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
    questsId: string[];
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
    price: number;
    nft: NFT;
}

export type Quest = {
    questId: string;
    questName: string;
    questDescription: string;
    reward: number;
    createdBy: string;
    completedBy: string[];
    createdAt: string;
    dueDate: string;
    applicantsId: string[];
}