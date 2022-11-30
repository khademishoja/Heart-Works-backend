"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("artworks", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("bids", "artworkId", {
      type: Sequelize.INTEGER,
      references: {
        model: "artworks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn(
      "users",
      "isArtist",
      { type: Sequelize.BOOLEAN },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("artworks", "userId");
    await queryInterface.removeColumn("bids", "artworkId");
    await queryInterface.removeColumn("users", "isArtist");
  },
};