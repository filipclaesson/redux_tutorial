'use strict';
module.exports = function(sequelize, DataTypes) {
  var Books = sequelize.define('Books', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    images: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Books;
};