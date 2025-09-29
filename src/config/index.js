/* eslint-disable no-undef */
export default {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    db: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/mydatabase',
    },
    logging: {
        level: process.env.LOG_LEVEL || 'info',
    },
};
