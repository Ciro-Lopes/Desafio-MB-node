const User = require('../../db/models/user');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        if (JSON.stringify(users) == "[]") {
            return res.json({ message: "Users not found!" });
        } else {
            return res.json(users);
        }
    },

    async store(req, res) {
        const { name_user, email_user, password_user } = req.body;

        if (name_user == "" || email_user == "" || password_user == "") {
            return res.json({ message: "the data was not filled in correctly" });
        }
        else {
            const user = await User.create({ name_user, email_user, password_user });

            return res.json(user)
        }
    },

    async show(req, res) {
        const { idUser } = req.params;

        if (idUser == "") {
            return res.json({ message: "Not have idUser!" });
        } else {
            const user = await User.findByPk(idUser);

            if (user == null) {
                return res.json({ message: "User not found!" });
            } else {
                return res.json(user);
            }
        }
    },

    async update(req, res) {
        const { idUser } = req.params;
        const { name_user, email_user } = req.body;

        if (idUser == "") {
            return res.json({ message: "Not have idUser!" });

        } else if (name_user == "" || email_user == "") {
            return res.json({ message: "the data was not filled in correctly" });

        } else if (await User.findByPk(idUser) == null) {
            return res.json({ message: "User not found!" });

        } else {
            const user = await User.update({
                name_user,
                email_user
            }, {
                where: { id: idUser }
            });

            return res.json({ idUser, name_user, email_user });
        }
    },

    async delete(req, res) {
        const { idUser } = req.params;

        if (idUser == "") {
            return res.json({ message: "Not have idUser!" });

        } else if (await User.findByPk(idUser) == null) {
            return res.json({ message: "User not found!" });

        } else {
            const user = await User.destroy({
                where: { id: idUser }
            });

            return res.json(idUser);
        }
    }
};