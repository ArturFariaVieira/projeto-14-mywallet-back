import bcrypt from 'bcrypt';
import db from '../db.js';
import { v4 as uuid } from 'uuid';


export async function signUp(req, res) {
  const user = req.body;
  const passwordHash = bcrypt.hashSync(user.password, 10);
  delete user.password_confirmation;
  try {
    await db.collection('users').insertOne({ ...user, password: passwordHash })
    res.sendStatus(201);
  }
  catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;
  const user = await db.collection('users').findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = uuid();
    try {
      await db.collection('sessions').insertOne({ token, userId: user._id });
      res.send(token);
    }
    catch (err) {
      console.log(err);
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(401);
  }
}