import { Sequelize } from "sequelize";

import { URI } from "../confing/config.js";

const sequelize= new Sequelize(URI, 'root','',{
    host:'localhost',
    dialect:'mysql',
    logging:false //lo que hace es que desactiva el loggin de sql en la consola
})

export default sequelize