import React from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './style.scss';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { firstname, lastname, phone, email } from '../../utils/schema/welcomeSchema';
import InputShowErrors from './InputShowErrors';
import Panel from '../Panel';

import { setUser,  } from '../../redux/actions/userActions';

function WelcomeForm() {
  const dispatch = useDispatch();  
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      phone: '',
      email: ''
    },
    validationSchema: yup.object().shape({
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email
    }),
    onSubmit: values => {
      saveUserData(values);
    }
  });
  
  const saveUserData = (userData) => {
    dispatch(setUser(userData));
    localStorage.setItem('userData', JSON.stringify(userData));
    history.push('/');
  }


  return (
  <React.Fragment>
    <Panel className="welcome-panel">
      <div className='welcome-form'>
        <h2>Welcome to CryptoJusto</h2> 
        <form className='loginForm' onSubmit={formik.handleSubmit}>
          <div className='form-row'>
            <div className='form-group'>
                <label htmlFor='firstname'>Name</label>
                <input 
                  type='text' 
                  className='form-input' 
                  id='firstname' 
                  placeholder='Enter your first name' 
                  name='firstname'
                  onChange={formik.handleChange}
                  error={formik.errors.firstname}
                  helpertext={formik.errors.firstname}
                  autoComplete="off"
                />
                <InputShowErrors errors={formik.errors.firstname}/>
              </div>
              <div className='form-group'>
                <label htmlFor='lastname'>Lastname</label>  
                <input 
                  type='text' 
                  className='form-input' 
                  id='lastname' 
                  placeholder='Enter your lastname' 
                  name='lastname'
                  onChange={formik.handleChange}
                  error={formik.errors.lastname}
                  helpertext={formik.errors.lastname}
                  autoComplete="off"
                />
                <InputShowErrors errors={formik.errors.lastname}/>
              </div>  
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input 
                  type='email' 
                  className='form-input' 
                  id='email' 
                  placeholder='Enter your email' 
                  name='email'
                  onChange={formik.handleChange}
                  error={formik.errors.email}
                  helpertext={formik.errors.email}
                  autoComplete="off"
                />
                <InputShowErrors errors={formik.errors.email}/>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='phone'>Phone Number</label>  
                <input 
                  type='text' 
                  className='form-input'
                  id='phone' 
                  placeholder='Enter your phone number' 
                  name='phone'
                  onChange={formik.handleChange}
                  error={formik.errors.phone}
                  helpertext={formik.errors.phone}
                  autoComplete="off"
                />
                <InputShowErrors errors={formik.errors.phone}/>
              </div>
            </div>
            <hr/>
            <div className='form-row'>
              <div className='form-group form-action'>
                <button type='submit' className='btn-submit'>Enter</button>
              </div>
            </div>
        </form>  
      </div>
    </Panel>
  </React.Fragment> 
  )
}

export default WelcomeForm;