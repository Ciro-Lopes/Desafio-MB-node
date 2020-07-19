module.exports = {
    dialect: "postgres",
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'cl_events',
    define: {
        timestamps: true,
        underscored: true,
    }
};