
import dotenv from 'dotenv';
import path from 'path';

// dotenv.config({path: path.join(__dirname, '..', '.env')});
dotenv.config({path: path.join('.env')});

import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './dbCards.js';


//App config

const app= express();// creating instance
const port=process.env.PORT || 3001;

const connection_url=process.env.key;

//middleware

app.use(express.json());
app.use(Cors());






//db config


mongoose.connect(connection_url, {

    useNewUrlParser: true, 
    
    useUnifiedTopology: true 
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });

//api endpoints
// console.log(process.env.key);
app.get("/",(req,res)=> res.status(400).send("hello world"));

app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});


//Listener
app.listen(port,()=>console.log(`listing on localhost: ${port}`));