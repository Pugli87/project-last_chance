import * as yup from 'yup';
import { emailRegExp, passwordRegExp } from '../../libs/constants';

export const validationsSchemaRegistrationEn = yup.object().shape({
  name: yup.string().min(3).max(60).typeError().required(),

  email: yup
    .string()
    .email()
    .required()
    .matches(emailRegExp, 'email must be like: name@mail.com'),

  password: yup
    .string()
    .min(8)
    .max(32)
    .typeError()
    .required()
    .matches(passwordRegExp, 'min: 8 Latin & number, 1 upper, 1 num'),

  confirmPassword: yup
    .string()
    .required('please confirm your password')
    .oneOf([yup.ref('password'), null], "passwords don't match."),
});

export const validationsSchemaSignInEn = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
    .matches(emailRegExp, 'email must be like: name@mail.com'),

  password: yup.string().required(),
});

export const validationsSchemaRegistrationUA = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Minimum 3 characters')
    .max(60, 'Maximum 60 characters')
    .typeError('Must be a string')
    .required('Required field'),

  email: yup.string().email('Enter a valid email').required('Required field'),

  password: yup
    .string()
    .min(8, 'Minimum 8 characters')
    .max(32, 'Maximum 32 characters')
    .typeError('Must be a string')
    .required('Required field')
    .matches(
      passwordRegExp,
      'Only Latin and numbers (min: 8 characters, 1 uppercase, 1 number)'
    ),

  confirmPassword: yup
    .string()
    .required('Required field')
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
});

export const validationsSchemaSignInUA = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Required field'),

  password: yup.string(),
});
