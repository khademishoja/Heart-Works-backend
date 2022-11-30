"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "artworks",
      [
        {
          title: "Deliberation Art Print",
          imageUrl:
            "https://render.fineartamerica.com/images/rendered/default/print/8/8/break/images/artworkimages/medium/3/deliberation-mario-sanchez-nevado.jpg",
          hearts: 0,
          minimumBid: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "fire breathing",
          imageUrl: "https://www.gstatic.com/webp/gallery/5.jpg@apple.com",
          hearts: 1,
          minimumBid: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "A wild cherry",
          imageUrl: "https://www.gstatic.com/webp/gallery/4.jpg",
          hearts: 2,
          minimumBid: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("artworks", null, {});
  },
};
