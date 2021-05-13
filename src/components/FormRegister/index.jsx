import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useUser} from '../../Providers/User';

import {Button, TextField} from "@material-ui/core";

const FormRegister = () => {

  const {createUser, newUser} = useUser();
  const history = useHistory();
  
  const [error, setError] = useState(false);
  const [errorMsg, setMsgError] = useState('')

  // validate from with yup 
  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email inválido').required('Campo obrigatório'),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required('Campo obrigatório'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Senhas diferentes!')
      .required('Campo Obrigatório')
  });

  const {register, handleSubmit, formState:{errors}, reset} = useForm({
      resolver: yupResolver(schema),
  });

  const handleForm = (data) =>{
    console.log('handForm Register:',data)
    // pedido de criação de novo usuário
    if(createUser(data)){
      console.log('Usuário criado com sucesso!')
      reset();
      history.push('/');
    }else{
      setError(true);
      setMsgError('Email já cadastrado');
    }
  };

  return (
    <div className='register-container'> 
      <h2>Criar novo usuário</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          margin='normal'
          variant='outlined'
          label='Nome'
          name='name'
          size='small'
          color='primary'
          {...register('name')} />
        <p>{errors.name?.message}</p>
        
        <TextField
          margin='normal'
          variant='outlined'
          label='Email'
          name='email'
          size='small'
          color='primary'
          {...register('email')} />
        <p>{errors.email?.message}</p>

        <TextField
          margin='normal'
          variant='outlined'
          label='senha - 6 digitos'
          name='password'
          size='small'
          color='primary'
          {...register('password')} />
        <p>{errors.password?.message}</p>

        <TextField
          margin='normal'
          variant='outlined'
          label='confirme senha'
          name='confirmPassword'
          size='small'
          color='primary'
          {...register('confirmPassword')} />
        <p>{errors.confirmPassword?.message}</p>         
      </form>    
    </div>
  )


}

export default FormRegister;