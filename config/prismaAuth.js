const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');

class AuthService {
    static async register(data) {
          const { email } = data;
          data.password = bcrypt.hashSync(data.password, 8);
          let user = prisma.user.create({
              data
          })
          data.accessToken = await jwt.signAccessToken(user);
  
          return data;
      }
}