import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvieder = ({children}) => {
  
  const[isNewUser, setIsNewUser] = useState(false)
  
  const [user,setUser] = useState({
    id:"",
    name:"",
    email:"",
    password:"",
    email_other:""
  });
  
  const [users, SetUsers] = useState([{
    id:"",
    name:"", 
    email:"",
    password:"",
    email_other:""
  }])

  const createUser = (dataUser) =>{
      // verificar se ja' existe email
      // checkUser = users.filter((elm) dataUser.email === user.email)
      // se existe retorna false
      // setIsNewUser(false)      
      // se não cria novo usuário
      // setIsNewUser(true)
      // setUsers(...users, dataUser)

      return true
  };

  const loginUser = (dataUser) => {
    // Verifica se email/ password existe
    // user.data = users.find((elm) => {
      // elm.email === dataUser.email && elm.password === dataUser.password
    // });
    
    // user.data && setUser(user.data);
    // obs. caso não exista user continua sem dados.
  };

  const updateUser = (dataUser) => {
    // let listUser = []
    // pelo id pega a posição do user e atualiza no setUser
    // usando foreach()
    // SetUsers(users, listUser)
  };

  return(
    <UserContext.Provider
      value={{user, loginUser, createUser, updateUser}}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);