import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, FieldValue} from 'react-hook-form';
import './Auth.css'

//import types
import { AuthInputs } from '../../types/authInputs.type';


const Auth = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    // const onSubmitHandler = () => {
    //   console.log()
    // }

    // const onSubmit: SubmitHandler<AuthInputs> = data => console.log(data)
    const onSubmit: SubmitHandler<AuthInputs> = (data: AuthInputs) => {
      console.log(data)
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
            {...register('username', {required: true})}
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

        <input type='submit'/>
      </form>  
    )
}

export default Auth;
