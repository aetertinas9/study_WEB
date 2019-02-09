
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {

    uname: {type: DataTypes.STRING(20) },
    upw: {type: DataTypes.STRING(20) }
  },
	  //no : { type : DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true}
	 {
	  timestamps: false,
	  tableName: 'users'

});
  return User;
};
