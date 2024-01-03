import React from 'react'
import LogOut from '../LogOut/LogOut'
import Quiz from '../Quiz/Quiz'

const Welcome = () => {
  return (
    <div className='quiz-bg'>
        <div className='container'>
          <LogOut/>
          <Quiz/>
        </div>

    </div>
  )
}

export default Welcome