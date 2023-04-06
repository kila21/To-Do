import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler} from 'react-hook-form';
// import './Auth.css'
import './auth.css'

//import types
import { AuthInputs } from '../../types/authInputs.type';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { error, signIn } from '../../store/auth/auth.slice';
import { useState } from 'react';
import { userSignIn, userSignUp } from './authThunk';


const Auth = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<AuthInputs>()

    // if click = false, user looking for sing in
    // else click = true, user looking for sing up
    const [click, setClick] = useState(false)

    const dispatch = useAppDispatch()
    // const selector = useAppSelector(state=> state)


    const onSubmit: SubmitHandler<AuthInputs> = (data: AuthInputs) => {
      if(!click) {
        dispatch(userSignIn(data))
        .then(res => {
          navigate('/ToDo')
        })
        .catch(err => {
          alert(err)
        })
        
      }

      if(click) {
        dispatch(userSignUp(data))
        .then()
        .catch(err => {
          alert(err)
        }) 
        
      }
    }

    return (
      //ar vicit ra unda ?????????????????????????????????????????????
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="username-container">
            <label htmlFor="email">Username</label>
            <input 
            id="email" 
            type="email" 
            placeholder='email'
            {...register('email', {required: true})}
            />
        </div>

        <div className="password-container">
            <label htmlFor="password">Password</label>
            <input 
            id="password" 
            type="password" 
            placeholder='Password'
            {...register('password', {required: true})}
            />
        </div>
        <div className='change'>Dont u Have Acc?<a onClick={() => setClick(!click)}>click here</a></div>

        <button>{click ? 'Sign Up' : 'Sing In'}</button>
      </form>  
    )
}

export default Auth;
