class User {
    constructor( userId, wallet,tokens, name, userName, followers, following, bio, avatarImg, bannerImg, postsId, nfts, badges, questsId) {
        (this.userId = userId),
        (this.wallet = wallet),
        (this.tokens = tokens),
        (this.name = name),
        (this.userName = userName),
        (this.followers = followers),
        (this.following = following),
        (this.bio = bio),
        (this.avatarImg = avatarImg),
        (this.bannerImg = bannerImg),
        (this.postsId = postsId),
        (this.nfts = nfts),
        (this.badges = badges),
        (this.questsId = questsId);
    }
}

export default User;