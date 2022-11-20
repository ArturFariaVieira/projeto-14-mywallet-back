import signinSchema from "../schemas/signinSchema.js";

export default function signinValidationMiddleware(req, res, next) {
  const validation = signinSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}


