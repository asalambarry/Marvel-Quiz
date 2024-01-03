import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase'
const Loggin = () => {

	let navigate = useNavigate();

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [btn, setBtn] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		if (password.length > 5 && email !== '' && password !== '') {
			setBtn(true)
		} else if (btn === true) {
			setBtn(false)
		}
	}, [password, email, btn])

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}
	const handlePassword = (e) => {
		setPassword(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log(email, password);
		signInWithEmailAndPassword(auth, email, password)
			.then(user => {
				setEmail('')
				setPassword('')
				// le replace true permet de ne pas revenir en arriere 
				navigate('/welcome', {replace:true}); 
			})
			.catch(error => {
				setEmail('')
				setPassword('')
				setError(error)

			})

	}
	return (
		<div className='signUpLoginBox'>
			<div className='slContainer'>
				<div className='formBoxLeftLogin'>
				</div>
				<div className='formBoxRight'>
					<div className='formContent'>
						<h2>Connexion</h2>
						{error !== '' && <span>{error.message}</span>}
						<form onSubmit={handleSubmit}>
							<div className='inputBox'>
								<input onChange={handleEmail} value={email} type="email" autoComplete='off' required />
								<label htmlFor="email">Email</label>
							</div>
							<div className='inputBox'>
								<input onChange={handlePassword} value={password} type="password" autoComplete='off' required />
								<label htmlFor="password">Mot de passe </label>
							</div>
							{btn ? <button>Connexion</button> : <button disabled>Connnexion</button>}
							{/* Pour eviter de dupliquer deux fois mon button  */}
							{/* {<button disabled= {btn ? true : false}>Connexion</button>} */}
						</form>
						<div className='linkContainer'>
							<Link className='simpleLink' to="/signup">Nouveau sur Marvel Quiz ? inscrivez-vous maintenant</Link>
							<br />
							<Link className='simpleLink' to="/forgetpassword">Mot de passe oublié ? Récuperer le ici !</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Loggin