module.exports = (sequelize, DataTypes) => {
    const Noticia = sequelize.define('Noticia', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
  
    return Noticia;
  };
  