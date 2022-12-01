"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "bids",
      [
        {
          email: "morteza@apple.com",
          amount: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 1,
        },
        {
          email: "swen@apple.com",
          amount: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 1,
        },
        {
          email: "karla@apple.com",
          amount: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 2,
        },
        {
          email: "maria@apple.com",
          amount: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 2,
        },
        {
          email: "victoriaa@apple.com",
          amount: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 3,
        },
        {
          email: "alex@apple.com",
          amount: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 2,
        },
        {
          email: "ali@apple.com",
          amount: 84,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 2,
        },
        {
          email: "niloofar@apple.com",
          amount: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("bids", null, {});
  },
};
