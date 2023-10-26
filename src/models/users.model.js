import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

const Users = sequelize.define("Users",{
    name: {
        type: DataTypes.CHAR(20),
        allowNull: false,
    },
    email: {
        type: DataTypes.CHAR(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.CHAR(70),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: "users"
});
export default Users;
