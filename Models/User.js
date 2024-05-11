class User {
    constructor( userId, wallet, name, userName, followers, following, bio, avatarImg, bannerImg, postsId) {
        (this.userId = userId),
        (this.wallet = wallet),
        (this.name = name),
        (this.userName = userName),
        (this.followers = followers),
        (this.following = following),
        (this.bio = bio),
        (this.avatarImg = avatarImg),
        (this.bannerImg = bannerImg),
        (this.postsId = postsId);
    }
}

export default User;