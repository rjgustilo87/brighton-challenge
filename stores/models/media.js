const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Media = sequelize.define('Media', {
    media_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    store_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Stores',
        key: 'store_id'
      }
    },
    main_image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alternate_image_url1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alternate_image_url2: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Media',
    timestamps: false
  });

  return Media;
};
