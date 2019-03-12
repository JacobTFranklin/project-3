module.exports = function (sequelize, DataTypes) {
  var Stat = sequelize.define("Stat", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,

    },
    minutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  Stat.associate = function (models) {
    Stat.belongsTo(models.User, {
      foreignKey: 'email',
      targetKey: 'email',
      allowNull: false
    })
  };

  return Stat;
};
