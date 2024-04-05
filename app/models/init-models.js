/*! 
* Builded by Impleplus application builder (https://builder.impleplus.com) 
* Version 2.0.0 
* Link https://www.impleplus.com 
* Copyright impleplus.com 
* Licensed under MIT (https://mit-license.org) 
*/ 
var Sequelize = require("sequelize");
var DataTypes = require("sequelize").DataTypes;
var _bill_electricity = require("./bill_electricity");
var _bill_water = require("./bill_water");
var _complaint = require("./complaint");
var _complaint_status = require("./complaint_status");
var _garbage_fee = require("./garbage_fee");
var _import_data = require("./import_data");
var _org_department = require("./org_department");
var _org_location = require("./org_location");
var _org_team = require("./org_team");
var _pay_elderly = require("./pay_elderly");
var _population = require("./population");
var _province_electricity_branch = require("./province_electricity_branch");
var _province_waterwork_branch = require("./province_waterwork_branch");
var _user = require("./user");
var _user_access_base = require("./user_access_base");
var _user_role = require("./user_role");
var _user_role_base = require("./user_role_base");
var _user_role_base_access = require("./user_role_base_access");
var _user_role_base_department = require("./user_role_base_department");
var _user_role_base_location = require("./user_role_base_location");
var _user_role_base_team = require("./user_role_base_team");
var _user_team = require("./user_team");


function db(sequelize) {
	var bill_electricity = _bill_electricity(sequelize, DataTypes);
	var bill_water = _bill_water(sequelize, DataTypes);
	var complaint = _complaint(sequelize, DataTypes);
	var complaint_status = _complaint_status(sequelize, DataTypes);
	var garbage_fee = _garbage_fee(sequelize, DataTypes);
	var import_data = _import_data(sequelize, DataTypes);
	var org_department = _org_department(sequelize, DataTypes);
	var org_location = _org_location(sequelize, DataTypes);
	var org_team = _org_team(sequelize, DataTypes);
	var pay_elderly = _pay_elderly(sequelize, DataTypes);
	var population = _population(sequelize, DataTypes);
	var province_electricity_branch = _province_electricity_branch(sequelize, DataTypes);
	var province_waterwork_branch = _province_waterwork_branch(sequelize, DataTypes);
	var user = _user(sequelize, DataTypes);
	var user_access_base = _user_access_base(sequelize, DataTypes);
	var user_role = _user_role(sequelize, DataTypes);
	var user_role_base = _user_role_base(sequelize, DataTypes);
	var user_role_base_access = _user_role_base_access(sequelize, DataTypes);
	var user_role_base_department = _user_role_base_department(sequelize, DataTypes);
	var user_role_base_location = _user_role_base_location(sequelize, DataTypes);
	var user_role_base_team = _user_role_base_team(sequelize, DataTypes);
	var user_team = _user_team(sequelize, DataTypes);

    return {
        sequelize,bill_electricity,bill_water,complaint,complaint_status,garbage_fee,import_data,org_department,org_location,org_team,pay_elderly,population,province_electricity_branch,province_waterwork_branch,user,user_access_base,user_role,user_role_base,user_role_base_access,user_role_base_department,user_role_base_location,user_role_base_team,user_team
    };
}

module.exports = db;
