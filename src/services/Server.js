import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "../confing/config.js";
import productoRoute from "../router/productos.routes.js"
import sequelize from "../db/connection.js";




class Server{
    constructor(){
      
        this.app= express();
        this.port= PORT;
        this.dbConnect();
        this.middelwares();
        this.routes();

    }
    //conexion a la base de datos primero 
    async dbConnect(){
      try {
        await sequelize.authenticate();
        console.log("Conexion correcta a la base de datos");

      } catch (error) {
        console.log("error al conectar con la base de datos:",error)
      }
    }
    middelwares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json())
    }
    routes(){
        this.app.use('/api',productoRoute)
    }
    listen(){
        this.app.listen(this.port, ()=>console.log(`Servidor corriendo en http://localhost:${this.port}`))
    }
}
export default Server;