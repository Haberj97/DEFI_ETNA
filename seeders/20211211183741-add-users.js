'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      login : 'deborah.cristiani',
      isAdmin: true,
      createdAt : new Date(),
      updatedAt : new Date(),

    },{
      login : 'daime_a',
      isAdmin: true,
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
      login : 'John',
    }])
  }
};
