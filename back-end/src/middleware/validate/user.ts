import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import Joi = require('joi');
import { ParsedQs } from 'qs';
import { errorRegisterUser } from '../constructError';

const validateUser = (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>) => {
  const { error } = Joi.object({
    first_name: Joi.string().min(3).max(50).required(),
    last_name: Joi.string().min(3).max(50).required(),
    phone: Joi.number().min(4).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string()
    .pattern(new RegExp('^([`~!@#$%^&*()\/a-zA-Z0-9 \t]{6,30})$')),
  }).validate(req.body);

  if (error) {
    return errorRegisterUser(error.details[0].message);
  }
  return {isError: false}
};

export { validateUser };