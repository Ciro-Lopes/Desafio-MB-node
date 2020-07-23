module.exports = {
    dialect: "postgres",
    host: '172.17.0.2',
    username: 'postgres',
    password: '1234',
    database: 'cl_events',
    define: {
        timestamps: true,
        underscored: true,
    }
};
