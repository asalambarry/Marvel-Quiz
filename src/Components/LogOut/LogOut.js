import React, { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import { useNavigate } from 'react-router-dom';
function LogOut() {

    const navigate = useNavigate()

    const [checked, setChecked] = useState(false)
    console.log(checked);
    useEffect(() => {
        if (checked) {
            // console.log("Deconnexion");
            signOut(auth).then(() => {
                console.log("Vous etes deconnecté");
                setTimeout(()=> {
                    navigate('/')
                }, 1000)
            }).catch((error) => {
                console.log("Oups, nous avons une erreur!");
            })
        }
    }, [checked])
    const handleChange = (e) => {
        // console.log(e.target.checked);
        setChecked(e.target.checked)
    }
    return (
        <div className='logoutContainer'>
            <label className='switch'>
                <input type="checkbox" checked={checked} onChange={handleChange} />
                <span className='slider round'></span>
            </label>

        </div>
    )
}

export default LogOut