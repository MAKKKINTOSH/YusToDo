import Sequelize from 'sequelize';

const sequelize = new Sequelize(`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}`)

try {
    await sequelize.authenticate();
    console.log('Sequelize authenticated successfully.');
} catch (error){
    console.error(error);
}

export default sequelize