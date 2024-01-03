import React, { useState, Fragment, useEffect } from 'react'
import LogOut from '../LogOut/LogOut'
import Quiz from '../Quiz/Quiz'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import { useNavigate } from 'react-router-dom';
const Welcome = () => {
	const navigate = useNavigate()
	const [userSession, setUserSession] = useState(null)

	useEffect(() => {
		const listener = onAuthStateChanged(auth, user => {

			user ? setUserSession(user) : navigate('/')
		})
		return listener
	})
	return userSession === null ? (
		<Fragment>
			<div className='loader'>
			</div>
			<p>Loading ....</p>
		</Fragment>
	) : (
		<div className='quiz-bg'>
			<div className='container'>
				<LogOut />
				<Quiz />
			</div>

		</div>
	)

}

export default Welcome