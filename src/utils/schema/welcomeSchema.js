import * as yup from 'yup';

export const firstname = yup
    .string('Please enter your first name')
    .required('First name is required');

export const lastname = yup
    .string('Please enter your last name')
    .required('Last name is required');

export const email = yup
    .string('Please enter your email')
    .required('Email is required');
      
export const phone = yup
    .string('Please enter your phone')
    .required('Phone is required');
