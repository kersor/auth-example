import React, { useState } from 'react'
import InputSelect from '../../UI/InputSelect'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { ISign } from '../../Types/Types'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styles from './Sign.module.scss';

const Auth = () => {
  const [activeSign, setActiveSign] = useState<ISign>({
    activeSignIn: true,
    activeSignUp: false,
  });

  return (
    <div className={`relative w-full mx-auto mt-[20px] px-[50px] max-w-[448px] ${styles.sign}`} >
      <SwitchTransition>
        <CSSTransition
          key={activeSign.activeSignIn ? "signIn" : "signUp"}
          timeout={500}
          classNames={{
            enter: styles['fade-enter'],
            enterActive: styles['fade-enter-active'],
            exit: styles['fade-exit'],
            exitActive: styles['fade-exit-active'],
          }}
          unmountOnExit
        >
          {activeSign.activeSignIn ? (
            <SignIn activeSign={activeSign} setActiveSign={setActiveSign} />
          ) : (
            <SignUp activeSign={activeSign} setActiveSign={setActiveSign} />
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};


export default Auth