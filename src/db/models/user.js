const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name_user: DataTypes.STRING,
            email_user: DataTypes.STRING,
            password_user: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = User;