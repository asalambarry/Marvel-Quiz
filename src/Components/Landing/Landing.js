import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Link} from 'react-router-dom'

const Landing = () => {
    const refWolverine = useRef(null)
    const [btn, setBtn] = useState(false)
    // console.log(refWolverine);

    useEffect(() => {
        // setTimeout(() => {
        //     refWolverine.current.classList.add('startingImg')
        // }, 1000);
        refWolverine.current.classList.add('startingImg')
        setTimeout(() => {
            refWolverine.current.classList.remove('startingImg')
            setBtn(true)
        }, 1000);

    }, [])
    // Permet d'ajouter les griffes quand je suis à mon button de inscription
    const setLeftImg = () => {
        refWolverine.current.classList.add('leftImg')
    }
     // Permet d'ajouter les griffes quand je suis à mon button de connexion
    const setRightImg = () => {
        refWolverine.current.classList.add('rightImg')
    }
    // Cette fonction permet d'alterer le changement de mon griffe en fonction ou le button il est placer
    const setClearImg = () => {
        if (refWolverine.current.classList.contains('leftImg')) {
            refWolverine.current.classList.remove('leftImg')
        } else if (refWolverine.current.classList.contains('rightImg')) {
            refWolverine.current.classList.remove('rightImg')
        }
    }
    const displayBtn = btn && (
        <Fragment>
            <div onMouseOver={setLeftImg} onMouseOut={setClearImg} className='leftBox'>
                <Link className='btn-welcome' to='/signup' >Inscription</Link>
            </div>
            <div onMouseOver={setRightImg} className='rightBox'>
                <Link className='btn-welcome' to='/login'>Connexion</Link>
            </div>
        </Fragment>
    )
    return (
        <main ref={refWolverine} className='welcomePage'>
            {displayBtn}
        </main>
    )
}

export default Landing