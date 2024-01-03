import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import { useNavigate } from 'react-router-dom';
const StyledSucces = {
    border: '1px solid green',
    background: 'green',
    color: '#ffffff'
}
const ForgetPassword = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [success, setSucces] = useState(null)
    const [error, setError] = useState(null)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        sendPasswordResetEmail(auth,email)
            .then(() => {
                setError(null)
                setSucces(`Consultez votre email ${email} pour changer le mot de passe`)
                setEmail('')

                setTimeout(()=> {
                    navigate('/login')
                },5000)
            })
            .catch(error => {
                setError(error)
                setEmail('')
            })

    }
    // const disabledEmail = email === ""
    return (
        <div className='signUpLoginBox'>
            <div className='slContainer'>
                <div className='formBoxLeftForget'>
                </div>
                <div className='formBoxRight'>
                    <div className='formContent'>
                        {
                            success && <span style={StyledSucces}></span>
                        }
                        {error && <span>{error.message}</span>}
                        <h2>Mot de passe oublié ?</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='inputBox'>
                                <input onChange={handleEmail} value={email} type="email" autoComplete='off' required />
                                <label htmlFor="email">Email</label>
                            </div>
                            {/* <button disabled={disabledEmail}>Récuperer</button> */}
                            {
                                email === "" ? <button disabled>Recuperer</button> : <button>Recuperer</button>
                            }
                        </form>
                        <div className='linkContainer'>
                            <Link className='simpleLink' to="/signup">Déja inscrit? Connectez- vous</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword