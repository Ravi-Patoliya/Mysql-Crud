var DataTypes = require("sequelize").DataTypes;
var _userdata = require("./userdata");

function initModels(sequelize) {
  var userdata = _userdata(sequelize, DataTypes);


  return {
    userdata,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
