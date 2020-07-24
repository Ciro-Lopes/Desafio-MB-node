const User = require('../../db/models/user');

module.export = {
    async login(request, response) {
        const { email_user, password_user } = request.body

        try {
            const user = await User.findAll({
                where: {
                    email_user: email_user
                }
            });

            if (!user) {
                throw "User not found";
            }
            else {
                if (password_user !== user["password_user"]) {
                    throw "Wrong password";
                }
                else {
                    const data = {
                        idUser: user["id_user"],
                        nameUser: user["name_user"],
                        emailUser: user["email_user"],
                    }

                    return response.json(data);
                }
            }
        }
        catch (err) {
            throw "User not found";
        }
    }
};