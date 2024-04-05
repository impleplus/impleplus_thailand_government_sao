
/*! 
* Builded by Impleplus application builder (https://builder.impleplus.com) 
* Version 2.0.0 
* Link https://www.impleplus.com 
* Copyright impleplus.com 
* Licensed under MIT (https://mit-license.org) 
*/ 

module.exports = function(sequelize, DataTypes) {
  var garbage_fee = sequelize.define('garbage_fee', {
		id: { type: DataTypes.STRING(36), allowNull: false, primaryKey: true },
		quantity: {type: DataTypes.INTEGER,allowNull: true},
		price: {type: DataTypes.INTEGER,allowNull: true},
		payment_status: {type: DataTypes.SMALLINT,allowNull: true},
		population_id: {type: DataTypes.STRING(36), allowNull: true },
		remark: {type: DataTypes.STRING(500), allowNull: true },
		create_by: {type: DataTypes.STRING(36), allowNull: true },
		create_date: {type: DataTypes.DATE,allowNull: true},
		year: {type: DataTypes.STRING(4), allowNull: true },
		month: {type: DataTypes.STRING(2), allowNull: true },
		owner_id: {type: DataTypes.STRING(36), allowNull: true },
		assign: {type: DataTypes.TEXT('medium'),allowNull: true},
		update_by: {type: DataTypes.STRING(36), allowNull: true },
		update_date: {type: DataTypes.DATE,allowNull: true}
  },{
    sequelize, tableName: 'garbage_fee', timestamps: false, indexes: [{name: "PRIMARY",unique: true,using: "BTREE",fields: [{ name: "id" }]}]
  });
  return garbage_fee;
};