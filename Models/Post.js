class Post {
    constructor( postId, userId, userName, avatarImg, postImg, caption, likes, comments, createdAt, price, nft) {
        (this.postId = postId),
        (this.userId = userId),
        (this.userName = userName),
        (this.avatarImg = avatarImg),
        (this.postImg = postImg),
        (this.caption = caption),
        (this.likes = likes),
        (this.comments = comments),
        (this.createdAt = createdAt);
        (this.price = price);
        (this.nft = nft);
    }
}

export default Post;
