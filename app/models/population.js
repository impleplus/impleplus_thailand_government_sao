
/*! 
* Builded by Impleplus application builder (https://builder.impleplus.com) 
* Version 2.0.0 
* Link https://www.impleplus.com 
* Copyright impleplus.com 
* Licensed under MIT (https://mit-license.org) 
*/ 

module.exports = function(sequelize, DataTypes) {
  var population = sequelize.define('population', {
		id: { type: DataTypes.STRING(36), allowNull: false, primaryKey: true },
		electricity_user_number: {type: DataTypes.STRING(30), allowNull: true },
		user_name: {type: DataTypes.STRING(50), allowNull: true },
		address: {type: DataTypes.STRING(100), allowNull: true },
		phone: {type: DataTypes.STRING(30), allowNull: true },
		social: {type: DataTypes.STRING(100), allowNull: true },
		water_user_number: {type: DataTypes.STRING(50), allowNull: true },
		elderly_user_number: {type: DataTypes.STRING(50), allowNull: true },
		garbage_user_number: {type: DataTypes.STRING(50), allowNull: true },
		owner_id: {type: DataTypes.STRING(36), allowNull: true },
		assign: {type: DataTypes.TEXT('medium'),allowNull: true},
		create_by: {type: DataTypes.STRING(36), allowNull: true },
		create_date: {type: DataTypes.DATE,allowNull: true},
		update_by: {type: DataTypes.STRING(36), allowNull: true },
		update_date: {type: DataTypes.DATE,allowNull: true}
  },{
    sequelize, tableName: 'population', timestamps: false, indexes: [{name: "PRIMARY",unique: true,using: "BTREE",fields: [{ name: "id" }]}]
  });
  return population;
};