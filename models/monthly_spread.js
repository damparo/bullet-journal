module.exports = function (sequelize, DataTypes) {
    var Monthly = sequelize.define("Monthly", {
        // The email cannot be null, and must be a proper email before creation
        month: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    Monthly.associate = function (models) {
        Monthly.belongsTo(models.Journal, {
            foreignKey: {
                allowNull: false
            }
        })
        // Monthly.hasMany(models.Daily, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // }) 
}
return Monthly;
}