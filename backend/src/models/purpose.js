import {db} from ".";
import {DataTypes} from "sequelize";
import {User} from "backend/src/models/user.js"

db.sequelize.define("Purpose",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id:{

        }
    },
    {

    }
)