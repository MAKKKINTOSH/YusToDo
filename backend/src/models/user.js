import {DataTypes, Model} from "sequelize";
import {db} from "./index.js";

const User = db.sequelize.define(
    "User",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
       createdAt: "created_at"
    }
)