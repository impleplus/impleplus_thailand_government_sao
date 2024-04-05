
/*! 
* Builded by Impleplus application builder (https://builder.impleplus.com) 
* Version 2.0.0 
* Link https://www.impleplus.com 
* Copyright impleplus.com 
* Licensed under MIT (https://mit-license.org) 
*/ 

module.exports = function(sequelize, DataTypes) {
  var complaint = sequelize.define('complaint', {
		id: { type: DataTypes.STRING(36), allowNull: false, primaryKey: true },
		topic: {type: DataTypes.STRING(200), allowNull: true },
		detail: {type: DataTypes.STRING(500), allowNull: true },
		remark: {type: DataTypes.STRING(500), allowNull: true },
		population_id: {type: DataTypes.STRING(36), allowNull: true },
		complaint_status_id: {type: DataTypes.INTEGER,allowNull: true},
		create_by: {type: DataTypes.STRING(36), allowNull: true },
		create_date: {type: DataTypes.DATE,allowNull: true},
		owner_id: {type: DataTypes.STRING(36), allowNull: true },
		assign: {type: DataTypes.TEXT('medium'),allowNull: true},
		update_by: {type: DataTypes.STRING(36), allowNull: true },
		update_date: {type: DataTypes.DATE,allowNull: true}
  },{
    sequelize, tableName: 'complaint', timestamps: false, indexes: [{name: "PRIMARY",unique: true,using: "BTREE",fields: [{ name: "id" }]}]
  });
  return complaint;
};