import React, { useState } from 'react'
import InputSelect from '../../UI/InputSelect'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { ISign } from '../../Types/Types'
import { CSSTransition } from 'react-transition-group';
import styles from './Sign.module.scss';

const Auth = () => {
    const [activeSign, setActiveSign] = useState<ISign>({
        activeSignIn: true,
        activeSignUp: false
    })
    

  return (
    <>
        
        <CSSTransition
            in={activeSign.activeSignIn}
            timeout={300}
            classNames={{
                enter: styles['fade-enter'],
                enterActive: styles['fade-enter-active'],
                exit: styles['fade-exit'],
                exitActive: styles['fade-exit-active']
              }}
            unmountOnExit
          ><SignIn activeSign={activeSign} setActiveSign={setActiveSign} />
          </CSSTransition>
        

            <CSSTransition
            in={activeSign.activeSignUp}
            timeout={300}
            classNames={{
                enter: styles['fade-enter'],
                enterActive: styles['fade-enter-active'],
                exit: styles['fade-exit'],
                exitActive: styles['fade-exit-active']
              }}
            unmountOnExit
          ><SignUp activeSign={activeSign} setActiveSign={setActiveSign} />
          </CSSTransition>

    </>

  )
}

export default Auth