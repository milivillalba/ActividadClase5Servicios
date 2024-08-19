import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "../confing/config.js";
import router from "../router/rutas.js";
import sequelize from "../db/connection.js";
import Carrito from "../models/Carrito.js";
import User from "../models/User.js";
import Product from "../models/Product.js";
import CompVent from "../models/CompVent.js";
//logica y configuracion para inicializar y ejecutar el servidor.

class Server{
    constructor(){
      
        this.app= express();//inicializa la aplicacion de express
        this.port= PORT;//establec el puerto en el que el servidor escuchara
        this.dbConnect();//conecta a la base de datos
        this.middelwares();//configura los middelwares
        this.routes();//configura las rutas

    }
    //conexion a la base de datos primero 
    async dbConnect(){
      try {
        await sequelize.authenticate();
        console.log("Conexion correcta a la base de datos");
         //sincroni los modelos con la base de datos
         await sequelize.sync({force: false});
         console.log("Tablas creadas exitosamente")
      } catch (error) {
        console.log("error al conectar con la base de datos:",error)
      }
    }
    //configuracion de middelware para que las rutas puedan manejar las solicitudes.
    middelwares(){
        this.app.use(cors());//habilita cors para permitir solicitudes de otros dominios
        this.app.use(morgan('dev'));//usa morgan para registrar las solisitudes http en la consola.
        this.app.use(express.json())//utiliza expres para acceder al cuerpo de las solisitudes en formato json.
    }
    //funcion para acceder a las rutas.
    routes(){
        this.app.use('/api',router)//defino las ruta base /api y asocio todas las rutas de productoRoutes.
    }
    //iniciar el servidor.
    listen(){
        this.app.listen(this.port, ()=>console.log(`Servidor corriendo en http://localhost:${this.port}`))
    }
}
export default Server;