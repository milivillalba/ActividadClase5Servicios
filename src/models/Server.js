import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "../confing/config";

const express = express();


class Server{
    constructor(){
      
        this.express= express();
        this.port= PORT;

    }
    middelwares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json())
    }
}