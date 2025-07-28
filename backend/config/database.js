import { Sequelize } from "sequelize"; 

// Membuat instance Sequelize untuk koneksi ke database MySQL
const db = new Sequelize('db_wise', 'root', '', {
    host: "localhost", 
    dialect: "mysql"   
});

export default db;