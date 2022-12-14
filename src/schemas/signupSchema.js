import joi from 'joi';

const signupSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  password_confirmation: joi.any().valid(joi.ref('password')).required()

});

export default signupSchema;