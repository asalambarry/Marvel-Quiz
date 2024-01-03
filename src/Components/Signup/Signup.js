import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase'
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {

    //   console.log(props);
    let navigate = useNavigate();
    // const [loginData, setLoginData] = useState({
    //     pseudo:'',
    //     email:'',
    //     password:'',
    //     confirmPassword:''
    // })

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data)
    const [error, setError] = useState('')
    // console.log(loginData);

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value })
    }
    // const { email, password } = loginData;
    const handleSubmit = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            // firebase.signupUser(eamil, password)
            .then(user => {
                // Apres avoir rempli on vide notre formulaire
                setLoginData({ ...data })
                // props.history.push('/welcome')
                navigate('/welcome');
                console.log(navigate);
            })
            .catch(error => {
                setError(error)
                // Apres avoir rempli on vide notre formulaire
                setLoginData({ ...data })
            })
    }

    // Ici j'ai fait le destructuring pour afficher les valeurs dans le input via value 
    const { pseudo, email, password, confirmPassword } = loginData

    // Je fais ici une condition pour afficher mon button d'inscription ssi mon pseudo , email , password et confirmPasswor
    // sont vide sinon il affiche le btn

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword ?
        <button disabled>Inscription</button> : <button>Inscription</button>

    // gestion d'erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>
    return (
        <div className='signUpLoginBox'>
            <div className='slContainer'>
                <div className='formBoxLeftSignup'>
                </div>
                <div className='formBoxRight'>
                    <div className='formContent'>
                        {errorMsg}
                        <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>

                            <div className='inputBox'>
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete='off' required />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>
                            <div className='inputBox'>
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete='off' required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className='inputBox'>
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete='off' required />
                                <label htmlFor="password">Mot de passe </label>
                            </div>
                            <div className='inputBox'>
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete='off' required />
                                <label htmlFor="confirmPassword">Confirmer le mot de passe </label>
                            </div>
                            {btn}
                        </form>
                        <div className='linkContainer'>
                            <Link className='simpleLink' to="/login">Déjà inscrit ? connectez-vous</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
