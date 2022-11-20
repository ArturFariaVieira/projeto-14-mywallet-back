import balanceSchema from "../schemas/balanceSchema.js";

export function balanceValidationMiddleware(req, res, next) {
  const validation = balanceSchema.validate(req.body);
  if (validation.error) {
    return res.send(validation.error);
  }

  next();
}


