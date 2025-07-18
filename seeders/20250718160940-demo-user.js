"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: 1,
          name: "user 1",
          email: "user1@mail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "user 2",
          email: "user2@mail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "user 3",
          email: "user3@mail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: "user 4",
          email: "user4@mail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "channel",
      [
        {
          id: 1,
          name: "channel_1",
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "channel_2",
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "video",
      [
        {
          id: 1,
          title: "VideoByChannel_1",
          subtitle_enabled: false,
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: "VideoByChannel_2",
          subtitle_enabled: false,
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: "VideoByChannel_3",
          subtitle_enabled: false,
          channel_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
