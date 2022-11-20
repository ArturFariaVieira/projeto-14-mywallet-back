import { ObjectId } from 'mongodb';
import db from '../db.js';
import dayjs from 'dayjs';


export async function getRegistros(req, res) {
    let user = res.locals.user;
    try {
        let registros = await db.collection("balance").find({ userid: ObjectId(user._id) }).toArray();
        res.send(registros);
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}

export async function postRegistro(req, res) {
    let userid = res.locals.user._id;
    let { text, value, type } = req.body;
    const date = dayjs().format("DD/MM");
    try {
        await db.collection("balance").insertOne({ userid, date, text, value, type });
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}

export async function editRegistro(req, res) {
    const { id } = req.params;
    const { text, value } = req.body;
    try {
        await db.collection("balance").updateOne({ _id: new ObjectId(id) }, { $set: { text, value } });
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}

export async function deleteRegistro(req, res) {
    const { id } = req.params;
    try {
        await db.collection("balance").deleteOne({ _id: new ObjectId(id) })
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error)
    }
} 