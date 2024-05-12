const post = {
	postId: "post3_id",
    userId: "555555555",
    userName: "alicej",
    avatarImg: "https://example.com/alice_avatar.jpg",
    postImg: "https://example.com/post3.jpg",
    caption: "Feeling happy today!",
    likes: ["user2_id", "user4_id"],
    comments: ["comment4_id", "comment5_id"],
    createdAt: "2024-05-09T10:45:15Z"
}

const user = {
    name: "John Doe",
    avatarImg: "https://randomuser.me/api/portraits/men/10.jpg",
    userId: "2",
    userName: "johndoe",
    followers: ["2", "3"],
    following: ["2", "3"],
    bio: "violets are purple, roses are blue, I'm a poet and I know it",
    wallet: "0xa9760110671d7a5a37A72F684D7D1d92F2dE84dA",
    postsId: [],
    bannerImg: "https://random.imagecdn.app/500/150",
    nfts: [
        {
            nftId: "1",
            nftImg: "https://random.imagecdn.app/150/150",
            name: "NFT",
            address: "0x1234567890abcdef",
            rarity: "Rare"
        },
        {
            nftId: "2",
            nftImg: "https://random.imagecdn.app/250/250",
            name: "NFT",
            address: "0x1234567890abcdef",
            rarity: "Legendary"
        },
        {
            nftId: "3",
            nftImg: "https://random.imagecdn.app/200/200",
            name: "NFT",
            address: "0x1234567890abcdef",
            rarity: "Epic"
        },
    ],
    badges: [
        {
            badgeId: "1",
            badgeImg: "https://random.imagecdn.app/100/100",
            name: "Mint three",
            description: "Badge earned for minting three NFTs"
        }
    ]
}