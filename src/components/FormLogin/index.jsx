import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useUser} from '../../Providers/User';
import {Button, TextField} from "@material-ui/core";
import './formLogin.css'
 

const FormLogin = () =>{

  const {loginUser} = useUser();
  const history = useHistory();
  
  
  const [errorMsg, setMsgError] = useState('')

  // validate from with yup 
  const schema = yup.object().shape({    
    email: yup.string().email('email inválido').required('Campo obrigatório'),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required('Campo obrigatório')    
  });

  const {register, handleSubmit, formState:{errors}, reset} = useForm({
      resolver: yupResolver(schema),
  });

  const handleForm = (data) =>{
    
    const response = loginUser(data);
    console.log(response)
    
    if(response){      
      reset();
      history.push('/home');
    }else{      
      setMsgError('Email não cadastrado');
    }
  };

  return (
    <div className='register-container'> 
      <h2>Entar</h2>
      <div>
        <form onSubmit={handleSubmit(handleForm)}>
          
          <TextField
            margin='normal'
            variant='outlined'
            label='Email'
            name='email'
            size='small'
            color='primary'
            {...register('email')}          
            />
          <p>{errors.email?.message}</p>
          {errorMsg && <p>{errorMsg}</p>}

          <TextField
            margin='normal'
            variant='outlined'
            label='senha - 6 digitos'
            name='password'
            type='password'
            size='small'
            color='primary'
            {...register('password')} />
          <p>{errors.password?.message}</p>        

          <Button 
            className='button'
            type="submit" 
            variant="contained" 
            color="secondary">
                Cadastrar Usuário
          </Button>     

        </form>
      </div>
      <div className='register-to-login'>
        <h6>Cadastrar?</h6>
        <Button onClick={() => {history.push('/register')}}>Registre</Button>
      </div>
      
    </div>
  );
};

export default FormLogin;