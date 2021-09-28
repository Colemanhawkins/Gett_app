import Swal from 'sweetalert2'
import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle , faLock} from '@fortawesome/free-solid-svg-icons'
import '../styles/Login.css'


const Login = () => {

    const history = useHistory()

    const verification = () => {
        if(process.env.REACT_APP_CLIENT == input.username 
        &&
         process.env.REACT_APP_PASSWORD == input.password){
            history.push('/todos')
         }
        else{ Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'USER OR PASSWORD INCORRECT!',
          })
        }
    }

    const [input, setInput] = useState({
        username: "",
        password: "",
      });
      const [errors, setErrors] = useState({});
    
      const handleInputChange =  (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
        setErrors(
          validate({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
      };

        const  validate = (input) => {
        let errors = {};
        if (!input.username) {
          errors.username = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(input.username)) {
          errors.username = "Email is invalid";
        }
      
        if (!input.password) {
          errors.password = "Password is required (only numbers)";
        } else if (!/(?=.*[0-9])/.test(input.password)) {
          errors.password = "Password is invalid only numbers";
        }
        return errors;
      }

    return (
        <div className='container'>
            <div className='card'>
                <div className='top-row background-top-row'>
                    <FontAwesomeIcon icon={faUserCircle} className='i' /> 
                </div>
                <div className='content' >
                    <FontAwesomeIcon icon={faLock} className='Lock' />
                    <h1>login</h1>
                    <p>User Email</p>
                    <input type='text' name='username' id='a' className='text' onChange={handleInputChange} placeholder="email" />
                    {errors.username && <p className="danger">{errors.username}</p>}
                    <p>Password</p>
                    <input type='password' name='password' id='b' className='text'  onChange={handleInputChange} placeholder="your key"/>
                    {errors.password && <p className="danger">{errors.password}</p>}
                    <button className='button' onClick={() => verification()}>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default Login

