const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function initializeTaskCategory(user) {
    const userId = await prisma.user.findUnique({
        where: {
            user: user
        }
    })
    const taskCategory = await prisma.TaskCategory.create({
        data: {
            user: userId,
            userId: user.id,
        }    
    })

}

module.exports = {
    initializeTaskCategory
}