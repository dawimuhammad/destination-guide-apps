'use strict';
module.exports = (sequelize, DataTypes) => {
  var DestinationViewHistory = sequelize.define('DestinationViewHistory', {
    DestinationId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  DestinationViewHistory.associate = function(models) {
    // associations can be defined here
    DestinationViewHistory.belongsTo(models.User)
    DestinationViewHistory.belongsTo(models.Destination)
  };
  return DestinationViewHistory;
};