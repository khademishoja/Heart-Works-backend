"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "users",
      "isArtist",
      { type: Sequelize.BOOLEAN },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "isArtist");
  },
};
