import signupSchema from "../schemas/signupSchema.js";

export default function signupValidationMiddleware(req, res, next) {
  const validation = signupSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}


