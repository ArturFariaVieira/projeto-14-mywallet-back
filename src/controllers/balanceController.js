import { ObjectId } from 'mongodb';
import db from '../db.js';


export async function getRegistros ( req, res ){
    let user = res.locals.user;
    console.log(user);
    let registros = await db.collection("balance").find({userid: ObjectId(user._id)} ).toArray();
    res.send(registros);
}

export async function postRegistro(req, res) {
    let userid = res.locals.user._id;
    let { text , value, type} = req.body;
    await db.collection("balance").insertOne({userid , text, value, type});
    res.sendStatus(201);
}