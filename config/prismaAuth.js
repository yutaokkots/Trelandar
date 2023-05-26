require('dotenv').config();
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 8


async function encryptPassword(data) {
    data.password = await bcrypt.hash(data.password, SALT_ROUNDS);
    return data
}

module.exports = {
    encryptPassword
}