import joi from 'joi';

const balanceSchema = joi.object({
  text: joi.string().required().max(30),
  value: joi.number().precision(2).required(),
  type: joi.valid("E", "S")
});

export default balanceSchema;