const config = {
    secret: process.env.JWT_SECRET || '9238fSf9fAKckj332Knaksnf9012ADSN',
    env: process.env.ENV,
    port: process.env.PORT || 3000,
    db: {
        dbUrl: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017',
        dbName: process.env.MONGODB_DB || 'diploma',
        dbHost: 'localhost',
        dbPort: 27017,
    },
    userCommentActions: {
        like: 'like',
        dislike: 'dislike',
        violate: 'violate',
    },
    requestTypes: {
        order: 'order',
        consultation: 'consultation',
    }
};

module.exports = config;