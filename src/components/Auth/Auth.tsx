import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, FieldValue} from 'react-hook-form';
import './Auth.css'

//import types
import { AuthInputs } from '../../types/authInputs.type';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { signIn } from '../../store/auth/auth.slice';
import { useState } from 'react';
import { userSignIn, userSignUp } from './authThunk';


const Auth = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    // if click = false, user looking for sing in
    // else click = true, user looking for sing up
    const [click, setClick] = useState(false)

    const dispatch = useAppDispatch()
    const selector = useAppSelector(state=> state)
    // const onSubmitHandler = () => {
    //   console.log()
    // }

    // const onSubmit: SubmitHandler<AuthInputs> = data => console.log(data)
    const onSubmit: SubmitHandler<AuthInputs> = (data: AuthInputs) => {
      if(!click) {
        dispatch(userSignIn(data)) 
        navigate('/ToDo')
      }

      if(click) {
        dispatch(userSignUp(data))
        
      }
    }

    return (
      //ar vicit ra unda ?????????????????????????????????????????????
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="username-container">
            <label htmlFor="username">Username</label>
            <input 
            id="username" 
            type="text" 
            placeholder='Username'
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
