module.exports = (sequelize, DataTypes) => sequelize.define('Aluno', {
        // id: {
        //     type: DataTypes.INTEGER, 
        //     allowNull: false,
        //     primaryKey: true
        // },
        nome: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        email: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        ano_matricula: { 
            type: DataTypes.INTEGER, 
            allowNull: false
        }
});