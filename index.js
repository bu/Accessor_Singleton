var Accessor = require("Accessor");

var instance_pool = {};

module.exports = function(table_name) {
	if( typeof instance_pool[table_name] === "undefined") {
		instance_pool[table_name] = Accessor(table_name);
	}

	return instance_pool[table_name];
};
