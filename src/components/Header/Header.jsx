import React,{useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import './style.scss';

import Logo from '../../assets/svg/logo.svg';
import Panel from '../Panel';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser  } from '../../redux/actions/userActions';

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [menuActive, setMenuActive] = useState(false);
  const store = useSelector(state => state); 

  const logout = () => {
    localStorage.removeItem('userData');
    dispatch(deleteUser());
    history.go(0);
  }

  return (
    <React.Fragment>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <NavLink to="/" className="link-home">
              <img src={Logo} alt="CryptoJusto Logo" /> CryptoJusto
            </NavLink>
          </div>
          <div className="menu-container">
            {store.session.user?
            <div className='user-panel'>
              <div className='user-container' onClick={()=>{setMenuActive(!menuActive)}}>
                Hello! {store.session.user.firstname}!
              </div>
              <div className='current-mxn'>
                Current MXN: $ {store.mxn.value}
              </div>
              {menuActive?
              <div className='user-menu'>
                <Panel className="user-menu-panel">
                  <ul>
                    <li><span>Name:</span>{store.session.user.firstname} {store.session.user.lastname}</li>
                    <li><span>Phone:</span>{store.session.user.phone}</li>
                    <li><span>Email:</span>{store.session.user.email}</li>
                    <li className='logout'><button onClick={logout}>Logout</button></li>
                  </ul>
                </Panel>
              </div>  
              :null}
            </div>
            :null}
          </div>
        </div>
      </header>
    </React.Fragment>  
  )
}

export default Header