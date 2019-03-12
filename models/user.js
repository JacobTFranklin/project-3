module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        uid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [1, 50]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [1, 50]
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [1 - 50]
            }
        },
        team: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false
            }
        },
        image: {
            type: DataTypes.TEXT,
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Stat, {
            onDelete: "cascade"
        });
    };

    return User;
};