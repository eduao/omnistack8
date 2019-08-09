const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
    async store(req, res) {
        const { username } = req.body
        const url = `https://api.github.com/users/${username}`;
        const responseGitApi = await axios.get(url);
        const { name, bio, avatar_url : avatar } = responseGitApi.data;

        const hasCreated = await Dev.findOne({
            user: username
        });

        if (hasCreated) {
            return res.json( hasCreated );
        }

        const dev = await Dev.create({
            name, 
            user: username, 
            bio, 
            avatar
        });

        return res.json(dev);
    }
};