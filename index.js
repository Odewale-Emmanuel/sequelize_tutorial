const { Op } = require("sequelize");
const db = require("./models");

// async function create() {
//   return await db.User.create({
//     id: 5,
//     name: "user 5",
//     email: "user5@mail.com",
//     created_at: new Date(),
//     updated_at: new Date(),
//   });
// }
// console.log(create());

async function printAllUsers() {
  try {
    const users = await db.User.findAll({
      where: {
        id: {
          [Op.gte]: 2,
        },
      },
    });
    console.log(
      "users:",
      users.map((u) => u.toJSON())
    );
  } catch (err) {
    console.error("Error fetching users:", err);
  } finally {
    await db.sequelize.close();
  }
}

printAllUsers();
