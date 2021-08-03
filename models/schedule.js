'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Schedule.init({
    userName: 
    { type: DataTypes.STRING,
      allowNull: false,
    },
    day: 
    { type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_at: 
    { type: DataTypes.TIME,
      allowNull: false,
    },
    end_at: 
    { type: DataTypes.TIME,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};