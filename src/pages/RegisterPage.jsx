import React, { useState } from 'react';

import { Link } from 'react-router-dom'; 

import '../styles/RegisterPage.scss'

const passRegex = new RegExp("^(?=.*?[0-9])(?=.*?[#?!@$%^&*-])")
const checkIcon = <i className="fas fa-check"></i>;
const timesIcon = <i className="fas fa-times"></i>;

const RegisterPage = () => {

  const [login, setLogin] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sex, setSex] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
  const [isPasswordLongEnough, setIsPasswordLongEnough] = useState(false);
  const [isMarkPassword, setIsMarkPassword] = useState(false);

  const handleLoginInput = (e) => {
    setLogin(e.target.value);
  }

  const handlePhoneNumberInput = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleSexSelect = (e) => {
    setSex(e.target.value)
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);

    if(e.target.value.length >= 8 && e.target.value.length <= 32){
      setIsPasswordLongEnough(true);
    }else{
      setIsPasswordLongEnough(false);      
    }

    if(passRegex.test(e.target.value)){
      setIsMarkPassword(true);
    }else{
      setIsMarkPassword(false);
    }
  }

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const handleRepeatPasswordInput = (e) => {
    setRepeatPassword(e.target.value);
  }

  const handleRepeatPasswordVisibility = () => {
    setIsRepeatPasswordVisible(!isRepeatPasswordVisible);
  }

  return ( 
    <div className='wrapper'>
      <div className="registerPanel">
        <h3 className="registerPanel-header">Rejestracja użytkownika</h3>
        <input type="text" placeholder='Login' className='registerPanel-input' value={login} onChange={handleLoginInput}/>
        <input type="tel" placeholder='Numer telefonu' value={phoneNumber} onChange={handlePhoneNumberInput} className='registerPanel-input'/>
        <select name="sex" defaultValue={0} onChange={handleSexSelect} className='registerPanel-sexSelect'>
            <option value="0" disabled hidden>Płeć</option>
            <option value="1">Mężczyzna</option>
            <option value="2">Kobieta</option>
        </select>
        <div className="registerPanel__password">
          <input type={isPasswordVisible ? 'text' : 'password'} placeholder='Hasło' className='registerPanel-input registerPanel-password' value={password} onChange={handlePasswordInput}/>
          <button className="registerPanel__password-btn" onClick={handlePasswordVisibility}><i className="fas fa-eye"></i></button>
          <div className="registerPanel__password-requirements">
            <span className="registerPanel__password-requirements-item">{isPasswordLongEnough ? checkIcon : timesIcon}8-32 znaków</span>
            <span className="registerPanel__password-requirements-item">{isMarkPassword ? checkIcon : timesIcon}liczba lub znak specjalny</span>            
          </div>
        </div>

        <div className="registerPanel__password">
          <input type={isRepeatPasswordVisible ? 'text' : 'password'} placeholder='Powtórz hasło' className='registerPanel-input registerPanel-password' value={repeatPassword} onChange={handleRepeatPasswordInput}/>
          <button className="registerPanel__password-btn" onClick={handleRepeatPasswordVisibility}><i className="fas fa-eye"></i></button>
        </div>

        <p className="registerPanel-approval">Rejestrując się jednocześnie akceptujesz <Link to="/rules">Regulamin</Link></p>
      </div>
      {/* <div className="loginPanel">
        <h3 className='loginPanel-header'>Rejestracja</h3>
        <input type="text" placeholder='Login' className='loginPanel-input' value={login} onChange={handleLoginInput}/>
        <div className="loginPanel__password">
          <input type={isPasswordVisible ? 'text' : 'password'} placeholder='Hasło' className='loginPanel-input loginPanel-password' value={password} onChange={handlePasswordInput}/>
          <button className="loginPanel__password-btn" onClick={handlePasswordVisibility}><i className="fas fa-eye"></i></button>
        </div>
        <button className='loginPanel-btn'>Zaloguj się</button>
        <p className="loginPanel-text">Nie masz jeszcze konta?</p>
        <Link to="/register" className='loginPanel-registerBtn'>Zarejestruj się</Link>
      </div> */}
    </div>
   );
}
 
export default RegisterPage;