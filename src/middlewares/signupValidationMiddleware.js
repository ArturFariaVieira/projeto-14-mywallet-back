import signupSchema from "../schemas/signupSchema.js";
import db from "../db.js"

export default async function signupValidationMiddleware(req, res, next) {
  const validation = signupSchema.validate(req.body);
  const {email} = req.body;
  if (validation.error) {
    return res.sendStatus(422);
  }
  try{
    const jaexiste = await db.collection("users").findOne({email});
    if(jaexiste){
      return res.sendStatus(409)
    } 
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }

  next();
}


