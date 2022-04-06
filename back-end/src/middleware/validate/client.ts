import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import Joi = require('joi');
import { ParsedQs } from 'qs';
import { errorRegisterClient } from '../constructError';

const validateClient = (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>) => {
  const { error } = Joi.object({
    cnpj: Joi.string().min(14).max(14).required(),
    fantasy_name: Joi.string().min(3).max(50).required(),
    social_reason: Joi.string().min(3).max(50).required(),
    cep: Joi.number().required(),
    address: Joi.string().min(3).max(50).required(),
    number: Joi.string().min(1).max(50).required(),
    complement: Joi.string().min(3).max(50).required(),
    district: Joi.string().min(3).max(50).required(),
    city: Joi.string().min(3).max(50).required(),
    uf: Joi.string().min(2).max(50).required()
  }).validate(req.body);

  if (error) {
    return errorRegisterClient(error.details[0].message);
  }
  return {isError: false}
};

export { validateClient };