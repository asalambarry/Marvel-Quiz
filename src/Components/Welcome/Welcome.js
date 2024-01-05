import React, { useState, Fragment, useEffect } from 'react'
import LogOut from '../LogOut/LogOut'
import Quiz from '../Quiz/Quiz'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, user } from '../Firebase/firebase'
import { getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

	const navigate = useNavigate()
	const [userSession, setUserSession] = useState(null)
	const [userData, setMyUserData] = useState({

	})

	useEffect(() => {
		const listener = onAuthStateChanged(auth, user => {

			user ? setUserSession(user) : navigate('/')
		})
		// J'ai fait une condition pour tester si la session du user est different de null pour qu'il recupere les données depuis le firestore et me l'affiche
		if (userSession !== null) {
			const colRef = user(userSession.uid);
			getDoc(colRef)
				.then(snapshot => {
					if (snapshot.exists()) {
						// const myData = doc.data()
						// setMyUserData(myData)
						const docData = snapshot.data()
						setMyUserData(docData)
					}
				})
				.catch(error => {
					console.log(error);
				})
		}
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
				<Quiz userData={userData} />
			</div>

		</div>
	)
}

export default Welcome