const User = require('../../db/models/user');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
        const { name_user, email_user, password_user } = req.body;

        const user = await User.create({ name_user, email_user, password_user });

        return res.json(user)
    },

    async show(req, res) {
        const { idUser } = req.params;

        const user = await User.findByPk(idUser);

        return res.json(user);
    },

    async update(req, res) {
        const { idUser } = req.params;
        const { name_user, email_user } = req.body;

        const user = await User.update({
            name_user,
            email_user
        }, {
            where: { id: idUser }
        })

        return res.json({ idUser, name_user, email_user });
    },

    async delete(req, res) {
        const { idUser } = req.params;

        const user = await User.destroy({
            where: { id: idUser }
        });

        return res.json(idUser);
    }
};